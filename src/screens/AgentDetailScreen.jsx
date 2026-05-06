import React from 'react';

export default function AgentDetailScreen({ setActiveTab }) {
  return (
    <div style={{ padding: '80px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '80px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02.2</div>
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Agentic AI 應用</h2>
          <div className="mono text-accent" style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>AGENTIC AI APPLICATIONS</div>
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '24px', lineHeight: 1.8, color: 'var(--color-secondary)', marginBottom: '40px' }}>
          OEM 應用 AI Agent，加速智慧應用的量產迭代任務，如自動適應複雜端側並且生成完整測試案例，結合大模型精準修復與優化邊緣算力等。
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={{ padding: '30px', border: '1px solid var(--color-accent)', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>自主開發鏈</h4>
            <p>Agent 自動生成程式碼與測試案例，減少人工投入 70%。</p>
          </div>
          <div style={{ padding: '30px', border: '1px solid var(--color-accent)', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>邊緣智慧優化</h4>
            <p>動態調整算力分配，確保極端場景下的系統響應速度。</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab(2)}
          className="sans"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--color-ink)',
            border: 'none',
            borderRadius: '40px',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '18px',
            padding: '16px 40px',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ fontSize: '24px' }}>←</span> 返回
        </button>
      </div>
    </div>
  );
}
