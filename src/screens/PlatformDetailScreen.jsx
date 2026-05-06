import React from 'react';

export default function PlatformDetailScreen({ setActiveTab }) {
  return (
    <div style={{ padding: '80px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '80px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02.3</div>
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>智慧電動車平台</h2>
          <div className="mono text-accent" style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>SMART EV PLATFORM</div>
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        <h3 style={{ fontSize: '32px', marginBottom: '32px' }}>開放、主權、持續進化</h3>
        <p style={{ fontSize: '22px', lineHeight: 1.8, color: 'var(--color-secondary)' }}>
          對 OEM 開放的平台，專門為客戶進行智駕模型訓練與 Agent 部署。
          我們確保客戶在享有頂級 AI 技術能力的同時，能完全保有技術核心與 Data 主權，
          並在量產後透過數據閉環持續進化智駕功能。
        </p>
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
