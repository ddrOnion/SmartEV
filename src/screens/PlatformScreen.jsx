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

      {/* Navigation Controls - Custom Positioning */}
      <div className="animate-slide-up delay-700" style={{ 
        marginTop: 'auto',
        padding: '24px 0',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Primary Action: Center Bottom */}
        <button
          onClick={() => setActiveTab(31)}
          className="sans"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: 'var(--color-accent)', border: 'none', borderRadius: '40px',
            color: 'var(--color-ink)', cursor: 'pointer', fontSize: '20px',
            fontWeight: 600,
            padding: '16px 60px', transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(184, 158, 128, 0.2)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(184, 158, 128, 0.3)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(184, 158, 128, 0.2)'; }}
        >
          查看價值主張：OEM 真正得到什麼 <span style={{ fontSize: '24px' }}>→</span>
        </button>

        {/* Secondary Action: Right Bottom (Absolute Position) */}
        <button
          onClick={() => setActiveTab(0)}
          className="sans"
          style={{
            position: 'absolute',
            right: '20px',
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: 'transparent', border: '1px solid var(--color-ink)', borderRadius: '40px',
            color: 'var(--color-ink)', cursor: 'pointer', fontSize: '16px',
            padding: '12px 32px', opacity: 0.6, transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.6; e.currentTarget.style.background = 'transparent'; }}
        >
          <span style={{ fontSize: '20px' }}>←</span> 回首頁
        </button>
      </div>

    </div>
  );
}
