import React from 'react';
import DataFlowDiagram from '../components/DataFlowDiagram';

export default function PlatformScreen({ setActiveTab }) {
  return (
    <div style={{ padding: '60px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <div className="animate-slide-up delay-100" style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', marginBottom: '32px' }}>
        <div className="mono text-accent" style={{ fontSize: '100px', lineHeight: 0.8, fontWeight: 300 }}>03</div>
        <div style={{ paddingTop: '8px' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '12px' }}>智慧電動車平台怎麼運作與創造價值</h2>
          <div className="mono text-accent" style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>HOW IT WORKS & VALUE</div>
        </div>
      </div>

      {/* 3-line summary */}
      <div className="animate-slide-up delay-300" style={{
        borderLeft: '4px solid var(--color-accent)',
        paddingLeft: '28px',
        marginBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {[
          '車輛持續回傳數據，智慧平台進行 AI 訓練與模型迭代。',
          '訓練完成後，透過 OTA 線上更新，讓每台車越來越聰明。',
          '每一次 AI 互動，皆轉化為平台可計量的 Token 收益。',
        ].map((line, i) => (
          <p key={i} style={{ fontSize: '20px', color: 'var(--color-secondary)', lineHeight: 1.6, margin: 0 }}>
            {line}
          </p>
        ))}
      </div>

      {/* Animated Data Flow Diagram */}
      <div className="animate-slide-up delay-500" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <DataFlowDiagram />
      </div>

      {/* Return to Home */}
      <div className="animate-slide-up delay-700" style={{ display: 'flex', justifyContent: 'center', paddingTop: '24px', paddingBottom: '24px' }}>
        <button
          onClick={() => setActiveTab(0)}
          className="sans"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: 'var(--color-ink)', border: 'none', borderRadius: '40px',
            color: '#fff', cursor: 'pointer', fontSize: '18px',
            padding: '14px 40px', transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <span style={{ fontSize: '22px' }}>←</span> 回首頁
        </button>
      </div>

    </div>
  );
}
