import React from 'react';
import DataFlowDiagram from '../components/DataFlowDiagram';

export default function PlatformScreen({ setActiveTab }) {
  return (
    <div style={{ padding: '60px 100px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>

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

      {/* Navigation Footer */}
      <div className="animate-slide-up delay-700" style={{
        height: '100px',
        borderTop: '1px solid rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <button
          onClick={() => setActiveTab(0)}
          className="sans"
          style={{ padding: '12px 28px', border: '1px solid var(--color-ink)', borderRadius: '30px', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          ← 回首頁
        </button>
        <button
          onClick={() => setActiveTab(31)}
          className="sans"
          style={{ padding: '12px 40px', background: 'var(--color-ink)', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(26,24,20,0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-ink)'}
        >
          OEM 真正得到什麼 →
        </button>
      </div>

    </div>
  );
}
