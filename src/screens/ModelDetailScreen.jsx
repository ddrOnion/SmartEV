import React from 'react';

export default function ModelDetailScreen({ setActiveTab }) {
  const models = [
    { name: 'AI 智駕駕駛', detail: '基於 Transformer 架構的端到端智駕系統，實現城市 NOA 與高速領航。' },
    { name: 'AI 智駕座艙', detail: '多模態交互大模型，整合視覺、語音與生理信號，提供擬人化的座艙助手。' },
    { name: 'AI 智駕底盤', detail: '物理世界模型驅動的底盤控制，預測路面狀態並優化行駛質感。' }
  ];

  return (
    <div style={{ padding: '80px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '80px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02.1</div>
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>核心模型體系</h2>
          <div className="mono text-accent" style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>CORE MODEL SYSTEM</div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {models.map((m, i) => (
          <div key={i} style={{ 
            background: 'rgba(140,115,90,0.05)', 
            padding: '40px', 
            borderRadius: '24px',
            border: '1px solid rgba(140,115,90,0.1)'
          }}>
            <h3 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: 600 }}>{m.name}</h3>
            <p style={{ fontSize: '18px', color: 'var(--color-secondary)', lineHeight: 1.6 }}>{m.detail}</p>
          </div>
        ))}
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
