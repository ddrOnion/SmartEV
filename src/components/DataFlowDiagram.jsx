import React, { useState, useEffect, useRef, useCallback } from 'react';

// ── Timing config ──────────────────────────────────────────────
const STEP_DURATION = [0, 1000, 700, 900, 700, 1100, 1400]; // ms per step
const PAUSE_AFTER   = 5000; // ms to show complete diagram before reset
const TOKEN_ADD     = [0, 120000, 45000, 380000, 95000, 1850000, 35000];

// ── SVG Layout constants ───────────────────────────────────────
// viewBox: 0 0 950 380
const C = {
  // AI調度 (top center)
  ai: { x: 310, y: 15, w: 370, h: 102 },
  // 車輛應用 (left)
  car: { x: 5, y: 45, w: 155, h: 270 },
  // 車用資料平台 (center)
  plat: { x: 250, y: 140, w: 490, h: 190 },
  // 資料管理 (inner left)
  dm: { x: 270, y: 185, w: 185, h: 130 },
  // AI訓練 (inner right)
  ai_t: { x: 535, y: 185, w: 185, h: 130 },
  // 合法合規 (right)
  comp: { x: 790, y: 45, w: 155, h: 270 },
};

// ── Helper: rect center ────────────────────────────────────────
const cx = (r) => r.x + r.w / 2;
const cy = (r) => r.y + r.h / 2;
const right = (r) => r.x + r.w;
const bottom = (r) => r.y + r.h;

// ── Path definitions for each animation step ───────────────────
// Each path: { d, length (approx), label, labelPos }
const PATHS = {
  // Static always-visible connectors
  token:   `M ${right(C.car)},66 L ${C.ai.x},66`,
  regQ:    `M ${right(C.ai)},66 L ${C.comp.x},66`,
  regA:    `M ${C.comp.x},${cy(C.comp)} L ${right(C.plat)},${cy(C.comp)}`,
  // Animated
  step1:   `M ${right(C.car)},${cy(C.car)} L ${C.plat.x},${cy(C.car)}`,   // len~90
  step3:   `M ${right(C.dm)},${cy(C.dm)} L ${C.ai_t.x},${cy(C.ai_t)}`,    // len~80
  step5up: `M ${cx(C.plat) - 10},${C.plat.y} L ${cx(C.plat) - 10},${bottom(C.ai)}`, // len~23
  step5dn: `M ${cx(C.ai) + 10},${bottom(C.ai)} L ${cx(C.ai) + 10},${C.plat.y}`,
  step6:   `M ${cx(C.ai_t)},${bottom(C.plat)} L ${cx(C.ai_t)},365 L 80,365 L 80,${bottom(C.car)}`, // len~...
};

const PATH_LEN = { step1: 90, step3: 80, step5up: 30, step5dn: 30, step6: 620 };

// ── Format token number ────────────────────────────────────────
function fmtToken(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(2) + ' M';
  if (n >= 1e3) return (n / 1e3).toFixed(0) + ' K';
  return n.toString();
}

// ── Animated SVG Path (draw effect) ───────────────────────────
function DrawPath({ d, length, active, dur = 1, color = 'var(--color-accent)', width = 2, reverse = false, marker }) {
  const instant = !active;
  const offset = active ? 0 : (reverse ? -length : length);
  return (
    <path
      d={d} fill="none" stroke={color} strokeWidth={width}
      markerEnd={marker ? `url(#${marker})` : undefined}
      style={{
        strokeDasharray: length,
        strokeDashoffset: offset,
        opacity: active ? 1 : 0,
        transition: instant
          ? 'stroke-dashoffset 0s, opacity 0s'
          : `stroke-dashoffset ${dur}s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease`,
      }}
    />
  );
}

// ── Block component ────────────────────────────────────────────
function Block({ r, label, active, children, style = {} }) {
  return (
    <g>
      <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={4} ry={4}
        fill={active ? 'rgba(140,115,90,0.08)' : 'rgba(245,241,234,0.6)'}
        stroke={active ? 'var(--color-accent)' : 'rgba(140,115,90,0.35)'}
        strokeWidth={active ? 2 : 1}
        style={{ transition: 'fill 0.5s, stroke 0.5s, stroke-width 0.4s', filter: active ? 'drop-shadow(0 0 6px rgba(140,115,90,0.4))' : 'none' }}
      />
      {label && (
        <text x={cx(r)} y={r.y + 22} textAnchor="middle"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '16px', fill: 'var(--color-ink)', fontWeight: 600 }}>
          {label}
        </text>
      )}
      {children}
    </g>
  );
}

// ── Main Component ─────────────────────────────────────────────
export default function DataFlowDiagram() {
  const [phase, setPhase]       = useState(0);   // 0=reset, 1-6=steps, 7=pause
  const [totalToken, setTotal]  = useState(0);
  const [dispToken, setDisp]    = useState(0);
  const [glowing, setGlowing]   = useState(false);
  const timerRef   = useRef(null);
  const tokenTimer = useRef(null);

  // ── State machine ──────────────────────────────────────────
  const advance = useCallback((from) => {
    clearTimeout(timerRef.current);
    if (from === 0) {
      timerRef.current = setTimeout(() => setPhase(1), 400);
    } else if (from >= 1 && from <= 6) {
      setTotal(t => t + TOKEN_ADD[from]);
      setGlowing(true);
      setTimeout(() => setGlowing(false), 600);
      const next = from < 6 ? from + 1 : 7;
      timerRef.current = setTimeout(() => setPhase(next), STEP_DURATION[from]);
    } else if (from === 7) {
      timerRef.current = setTimeout(() => setPhase(0), PAUSE_AFTER);
    }
  }, []);

  useEffect(() => { advance(phase); return () => clearTimeout(timerRef.current); }, [phase, advance]);

  // ── Smooth token display ───────────────────────────────────
  useEffect(() => {
    clearInterval(tokenTimer.current);
    if (dispToken === totalToken) return;
    const diff  = totalToken - dispToken;
    const step  = Math.ceil(diff / 30);
    tokenTimer.current = setInterval(() => {
      setDisp(d => {
        const next = d + step;
        if (next >= totalToken) { clearInterval(tokenTimer.current); return totalToken; }
        return next;
      });
    }, 30);
    return () => clearInterval(tokenTimer.current);
  }, [totalToken]);

  const s  = phase; // shorthand
  const gt = (n) => s !== 0 && s >= n; // is phase >= n (and not in reset)

  const accentColor = 'hsl(30, 20%, 50%)';
  const dimColor    = 'rgba(140,115,90,0.25)';

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>

      {/* ── Top row: Token Counter moved UP further ──────────── */}
      <div style={{ position: 'absolute', top: '-160px', right: '0', zIndex: 10, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{
          width: '240px',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '8px', pointerEvents: 'none',
        }}>
          <div style={{
            padding: '24px 20px', border: `1px solid ${glowing ? 'var(--color-accent)' : dimColor}`,
            background: glowing ? 'rgba(140,115,90,0.08)' : 'rgba(245,241,234,0.5)',
            textAlign: 'center', width: '100%',
            transition: 'all 0.4s ease',
            boxShadow: glowing ? '0 0 20px rgba(140,115,90,0.3)' : 'none',
            borderRadius: '4px'
          }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', letterSpacing: '1.5px', color: 'var(--color-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>
              Token Consumed
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '26px', fontWeight: 600, color: glowing ? 'var(--color-accent)' : 'var(--color-ink)', transition: 'color 0.4s', lineHeight: 1.2 }}>
              {fmtToken(dispToken)}
            </div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '10px', color: 'var(--color-secondary)', marginTop: '8px', letterSpacing: '1px' }}>
              CUMULATIVE
            </div>
            <div style={{ marginTop: '14px', display: 'flex', gap: '4px', alignItems: 'flex-end', height: '32px', justifyContent: 'center' }}>
              {[0.2, 0.4, 0.55, 0.7, 0.85, 1].map((h, i) => (
                <div key={i} style={{
                  width: '16px',
                  height: `${h * 32}px`,
                  background: i < (s === 0 ? 0 : Math.min(s, 6)) ? 'var(--color-accent)' : dimColor,
                  transition: 'background 0.5s ease',
                }} />
              ))}
            </div>
          </div>
          <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '11px', color: 'var(--color-secondary)', letterSpacing: '1px', textAlign: 'center' }}>
            每次 AI 互動皆轉化為收益
          </div>
        </div>
      </div>

      {/* ── Main SVG Diagram ──────────────────────────────── */}
      <svg viewBox="0 0 950 380" width="100%" style={{ display: 'block', overflow: 'visible' }}>
        <style>
          {`
            @keyframes flow-fwd {
              from { stroke-dashoffset: 10; }
              to { stroke-dashoffset: 0; }
            }
          `}
        </style>
        <defs>
          {/* Arrowhead markers */}
          <marker id="arr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={accentColor} />
          </marker>
        </defs>

        {/* ── Static always-visible connectors ───────────── */}
        {/* Token 對話 (car right → AI調度 left) */}
        <path d={PATHS.token} fill="none" stroke={gt(5) ? 'var(--color-accent)' : dimColor} strokeWidth={1.5}
          strokeDasharray="5 5" style={{ animation: gt(5) ? 'flow-fwd 0.5s linear infinite' : 'none', transition: 'stroke 0.5s' }} />
        <text x={(right(C.car) + C.ai.x) / 2} y={58} textAnchor="middle"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', fill: gt(5) ? 'var(--color-accent)' : 'var(--color-secondary)', transition: 'fill 0.5s' }}>
          Token對話
        </text>

        {/* 車規查詢 (AI調度 right → 合法合規 left) */}
        <path d={PATHS.regQ} fill="none" stroke={gt(5) ? 'var(--color-accent)' : dimColor} strokeWidth={1.5}
          strokeDasharray="5 5" style={{ animation: gt(5) ? 'flow-fwd 0.5s linear infinite' : 'none', transition: 'stroke 0.5s' }} />
        <text x={(right(C.ai) + C.comp.x) / 2} y={58} textAnchor="middle"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', fill: gt(5) ? 'var(--color-accent)' : 'var(--color-secondary)', transition: 'fill 0.5s' }}>
          車規查詢
        </text>

        {/* 車規稽核 (合法合規 left → platform right) */}
        <path d={PATHS.regA} fill="none" stroke={gt(4) ? 'var(--color-accent)' : dimColor} strokeWidth={1.5}
          strokeDasharray="5 5" style={{ animation: gt(4) ? 'flow-fwd 0.5s linear infinite' : 'none', transition: 'stroke 0.5s' }} />
        <text x={(C.comp.x + right(C.plat)) / 2} y={cy(C.comp) - 10} textAnchor="middle"
          style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', fill: gt(4) ? 'var(--color-accent)' : 'var(--color-secondary)', transition: 'fill 0.5s' }}>
          車規稽核
        </text>

        {/* ── Static Blocks ──────────────────────────────── */}
        {/* AI調度 */}
        <Block r={C.ai} label="AI 調度" active={gt(5)}>
          <rect x={C.ai.x + 15} y={C.ai.y + 40} width={155} height={45} rx={3}
            fill="rgba(140,115,90,0.08)" stroke="rgba(140,115,90,0.3)" strokeWidth={1} />
          <text x={C.ai.x + 92} y={C.ai.y + 68} textAnchor="middle"
            style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '15px', fill: 'var(--color-ink)' }}>
            大模型
          </text>
          <rect x={C.ai.x + 200} y={C.ai.y + 40} width={155} height={45} rx={3}
            fill="rgba(140,115,90,0.08)" stroke="rgba(140,115,90,0.3)" strokeWidth={1} />
          <text x={C.ai.x + 277} y={C.ai.y + 68} textAnchor="middle"
            style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '15px', fill: 'var(--color-ink)' }}>
            Agent 代理
          </text>
        </Block>

        {/* 車輛應用 (left) */}
        <Block r={C.car} label="車輛應用" active={gt(1) || gt(6)}>
          {['智慧座艙', '智慧助理', '智慧駕駛'].map((t, i) => (
            <text key={i} x={cx(C.car)} y={C.car.y + 60 + i * 28} textAnchor="middle"
              style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '14px', fill: 'var(--color-secondary)' }}>
              {t}
            </text>
          ))}
          {/* Car icon placeholder */}
          <rect x={C.car.x + 12} y={C.car.y + 170} width={131} height={70} rx={4}
            fill="rgba(140,115,90,0.06)" stroke={dimColor} strokeWidth={1} />
          <text x={cx(C.car)} y={C.car.y + 215} textAnchor="middle"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fill: 'var(--color-secondary)' }}>
            🚗 Vehicle
          </text>
        </Block>

        {/* 車用資料平台 outer */}
        <Block r={C.plat} label="車用資料平台">
          {/* 資料管理 inner */}
          <Block r={C.dm} label="資料管理" active={gt(2)} />
          {/* AI訓練 inner */}
          <Block r={C.ai_t} label="AI 訓練" active={gt(4)} />
        </Block>

        {/* 合法合規 (right) */}
        <Block r={C.comp} label="合法合規" active={false}>
          {['各國法規', '資訊安全', '功能安全'].map((t, i) => (
            <text key={i} x={cx(C.comp)} y={C.comp.y + 80 + i * 40} textAnchor="middle"
              style={{ fontFamily: 'Noto Serif TC, serif', fontSize: '14px', fill: 'var(--color-secondary)' }}>
              {t}
            </text>
          ))}
        </Block>

        {/* ── Animated Paths ─────────────────────────────── */}

        {/* 資料採集: car → platform */}
        <DrawPath d={PATHS.step1} length={PATH_LEN.step1}
          active={gt(1)} dur={STEP_DURATION[1] / 1000} marker="arr" />
        {gt(1) && (
          <text x={(right(C.car) + C.plat.x) / 2} y={cy(C.car) - 16} textAnchor="middle"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fill: accentColor, opacity: gt(1) ? 1 : 0, transition: 'opacity 0.5s' }}>
            資料採集
          </text>
        )}

        {/* 資料流: 資料管理 → AI訓練 */}
        <DrawPath d={PATHS.step3} length={PATH_LEN.step3}
          active={gt(3)} dur={STEP_DURATION[3] / 1000} marker="arr" />
        {gt(3) && (
          <text x={(right(C.dm) + C.ai_t.x) / 2} y={cy(C.dm) - 16} textAnchor="middle"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fill: accentColor, opacity: gt(3) ? 1 : 0, transition: 'opacity 0.5s' }}>
            資料流
          </text>
        )}

        {/* 模型迭代: platform ↔ AI調度 (two arrows) */}
        <DrawPath d={PATHS.step5up} length={PATH_LEN.step5up}
          active={gt(5)} dur={STEP_DURATION[5] / 2000} marker="arr" color={accentColor} width={2} />
        <DrawPath d={PATHS.step5dn} length={PATH_LEN.step5dn}
          active={gt(5)} dur={STEP_DURATION[5] / 2000} marker="arr" color={accentColor} width={2} />
        {gt(5) && (
          <text x={cx(C.plat) + 40} y={(C.plat.y + bottom(C.ai)) / 2 + 5}
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fill: accentColor, opacity: gt(5) ? 1 : 0, transition: 'opacity 0.5s' }}>
            模型迭代
          </text>
        )}

        {/* 線上更新 OTA: platform → car */}
        <DrawPath d={PATHS.step6} length={PATH_LEN.step6}
          active={gt(6)} dur={STEP_DURATION[6] / 1000} marker="arr" />
        {gt(6) && (
          <text x={cx(C.plat) / 2 + 80} y={355}
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '13px', fill: accentColor, opacity: gt(6) ? 1 : 0, transition: 'opacity 0.5s' }}>
            線上更新
          </text>
        )}

        {/* Step number badges on blocks */}
        {gt(2) && (
          <text x={cx(C.dm)} y={bottom(C.dm) - 14} textAnchor="middle"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', fill: accentColor }}>
            ✓ 資料管理啟動
          </text>
        )}
        {gt(4) && (
          <text x={cx(C.ai_t)} y={bottom(C.ai_t) - 14} textAnchor="middle"
            style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '12px', fill: accentColor }}>
            ✓ AI 訓練中
          </text>
        )}

      </svg>

      {/* ── Phase indicator dots (bottom) ─────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
        {[1,2,3,4,5,6].map(n => (
          <div key={n} style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: gt(n) ? 'var(--color-accent)' : 'rgba(140,115,90,0.25)',
            transition: 'background 0.4s ease',
            boxShadow: (s === n) ? '0 0 8px var(--color-accent)' : 'none',
          }} />
        ))}
      </div>
    </div>
  );
}
