# SmartEV 每日深度研究報告 — 產出流程說明（instructions.md）

> 適用對象：Claude Code（或任何接手此工作流的人）。
> 目標：在本站以固定模板產出「深度研究報告」，掛上對應系列索引，驗證後推送部署。
> 最後更新：2026-08-19

---

## 0. 站台結構總覽

本專案是 Vite + React SPA，但報告系統是**純靜態 HTML**，放在 `public/` 下、建置時原樣複製到 `dist/`，由靜態主機（Render，`render.yaml`）服務。

目前有三個報告系列，各自獨立入口與索引頁：

| 入口 | 目錄 | 主題 | 索引主色 |
|------|------|------|---------|
| `/report` | `public/report/` | 自駕計程車 Robotaxi | teal |
| `/reportAI` | `public/reportAI/` | AI 產業 | violet |
| `/physicalAI` | `public/physicalAI/` | Physical AI／機器人／智慧製造 | orange |

- 每個系列都有 `index.html`（深色索引首頁）＋ 多篇日期戳報告。
- 報告檔名格式：`YYYYMMDD-<topic-slug>.html`（例：`20260818-global-robotaxi-progress.html`）。
- 索引頁之間互設「姊妹系列」連結。
- 站內連結一律用**絕對路徑**（`/report/...`、`/reportAI/...`）。

## 1. 研究階段（內容從哪來）

### 1a. 深度研究型（預設）
用 `deep-research` workflow（對抗式驗證管線）取得可信內容：

- 以繁體中文撰寫研究問題，列明 6–8 個子題、要求「可驗證數據與可點擊來源連結」、標明時間節點（「以 YYYY 年 M 月為節點」「聚焦 X 月後的新變化」）。
- 管線：拆解搜尋角度 → 並行搜尋 → 抓取來源 → 抽取主張 → **3 票對抗式驗證**（需 2/3 反駁才淘汰）→ 綜合。
- 產出：`findings`（已驗證主張＋來源）、`caveats`、`refuted`（被反駁清單）、`openQuestions`、`sources`。

**內容紀律（最重要）：**
1. 被 `refuted` 的數字**一律不用**，並在報告中註明「查證中遭反駁，不予引用」。
2. 未通過驗證的子題要寫**「研究缺口聲明」**（amber 警示框），只列方向、不引數字。
3. 廠商自報數字標「自報」；市調/預測標「估計/預測」；媒體報導標「報導」。
4. 摘要區底部固定放一段 ⚠️ caveats 小字（快照日期、口徑限制）。

### 1b. 資料採集型（physicalAI 系列常用）
直接爬取一手資料源（如展會官方名單）：
- `curl` 抓所有分頁到 scratchpad → Python 解析（regex 抽欄位、以唯一 ID 去重）→ 存 JSON。
- 報告中附「資料來源與方法」節（頁數、去重方式、採集日期、快照聲明）。
- 大量名錄用**可搜尋表格**內嵌（模板放 `<!--EXHIBITOR_ROWS-->` 佔位、Python 注入資料列）。

## 2. 報告頁製作（主模板）

模板＝「全球 Robotaxi 報告」樣式，單檔自足 HTML：

- **技術棧**：Tailwind CDN ＋ Chart.js CDN ＋ Google Fonts（Inter、Noto Serif TC）。`lang="zh-TW"`。
- **版面**：深色 slate-900 頁首（主題色 badge＋標題＋副標＋「數據更新時間」）→ 左側黏性 ScrollSpy 側欄（含「← 返回索引」連結）→ 主欄 8–9 個 `<section>` 白色圓角卡片 → 深色參考來源區 → 深色頁尾（免責聲明）。
- **章節慣例**：執行摘要（深色漸層卡＋4 格 KPI＋⚠️ caveats）→ 主體章節（表格、時間軸、雙欄卡片、警示框）→ 挑戰與展望（①②③④＋漸層結論卡）→ 參考來源（一手標「（一手）」、彙整站/未驗證標註性質）。
- **圖表**：2–3 張 Chart.js（長條/橫條/圓環；量級差異大用對數尺度並註明）。圖說固定格式「圖N：…。來源/口徑註記。」
- **每篇報告一個主色**，已用：teal（全球#1）、red（Tesla）、indigo（ADAS）、sky（Waymo）、amber（Apollo Go）、emerald（全球 2026-08）、violet（AI）、orange（physicalAI）。新報告選未撞色的 Tailwind 色系，`.nav-link.active`、章節編號、KPI、結論卡漸層同色系。

## 3. 索引頁更新

對應系列的 `public/<dir>/index.html`：

1. 新報告卡片插到列表**最上方**，badge 用 `LATEST · 最新`（主題色、帶呼吸燈 dot）。
2. 原 LATEST 卡片**降級**：badge 改為主題標籤（如「Waymo 專題」「數據生態」），移除 dot 與 LATEST 字樣、透明度調淡（`/15`→`/10`、`text-*-300`→`text-*-300/90`、border `/30`→`/20`）。
3. Hero meta 更新：`索引更新` 日期、`報告數` +1。
4. 卡片內容：標題、日期、2–3 句摘要（含關鍵數字）、4 個標籤 pill。

## 4. 建置與驗證

```bash
npm run build
```

確認 `dist/<dir>/` 出現新檔。然後用 launch.json 的 `dev` 設定開 preview（**不要**用 Bash 起 dev server）驗證：

- 索引頁：報告數、日期、所有報告連結 fetch 皆 200。
- 新報告：section 數、nav-link 數、每個 canvas `width>0 && height>0`（Chart.js 有實際繪製）。
- 有互動功能（如搜尋表格）要實測一次。
- console 無 error。
- 注意：本機 vite dev 的 SPA fallback 會攔截裸目錄路徑（`/report/`），驗證時用完整路徑 `/report/index.html`；正式部署（靜態主機）不受影響。

## 5. Commit & Push

```bash
git add public/<dir>/
git commit -m "feat(<series>): add <topic> report, set as LATEST

Co-Authored-By: Claude <model> <noreply@anthropic.com>"
```

**Push 憑證注意**：Windows 憑證管理員可能持有 `chris-ch-yang`（無 ddrOnion/SmartEV 推送權，會 403）。解法：

```bash
gh auth switch -u ddrOnion
git -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin main
gh auth switch -u chris-ch-yang
```

推送到 `main` 後 Render 自動 build 部署。

## 6. 完成回報格式

回報使用者時固定包含：commit hash、新報告連結與章節摘要、內容把關說明（驗證統計、排除了哪些被反駁數字、標註了哪些缺口）、驗證結果、索引現況。

## 附：常用檢查清單

- [ ] refuted 數字已排除且註明
- [ ] 缺口聲明已寫（未驗證子題）
- [ ] 自報/估計/報導歸屬措辭正確
- [ ] 主色未與既有報告重複
- [ ] 索引 LATEST 降級、報告數與日期更新
- [ ] build 後 dist 檔案齊、連結全 200、圖表繪製、console 乾淨
- [ ] push 成功（必要時走 ddrOnion 憑證流程）
