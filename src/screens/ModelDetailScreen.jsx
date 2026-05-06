import React from 'react';

export default function ModelDetailScreen({ setActiveTab }) {
  const models = [
    {
      name: 'AI 智慧駕駛',
      image: 'ai_driving_viz.png',
      detail: '融合感知、決策與控制的端到端智駕模型，持續從真實場景數據中學習進化。'
    },
    {
      name: 'AI 智慧座艙',
      image: 'ai_cockpit_viz.png',
      detail: '以大模型驅動的沉浸式車內體驗，實現個性化情境感知與人機協作。'
    },
    {
      name: 'AI 智慧助理',
      image: 'ai_assistant_viz.png',
      detail: '理解意圖、跨域協調的 AI Agent，讓駕駛與車輛形成真正的智慧夥伴。'
    }
  ];

  return (
    <div style={{ padding: '60px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>

      {/* Header Section */}
      <div className="animate-slide-up" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02.1</div>
        <div>
          <h2 style={{ fontSize: '56px', fontWeight: 300, color: 'var(--color-accent)', marginBottom: '8px' }}>三大智慧應用</h2>
          <div className="mono" style={{ fontSize: '18px', letterSpacing: '4px', color: 'var(--color-secondary)' }}>
            THREE CORE SMART APPLICATIONS
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '48px',
        maxWidth: '1500px',
        margin: '0 auto',
        width: '100%'
      }}>
        {models.map((m, i) => (
          <div key={i} className="animate-slide-up" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            {/* Image Container */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '12px',
              overflow: 'hidden',
              marginBottom: '32px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              background: 'var(--color-paper-cool)'
            }}>
              <img
                src={m.image}
                alt={m.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Text Content */}
            <h3 style={{ fontSize: '28px', marginBottom: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>
              {m.name}
            </h3>
            <p style={{
              fontSize: '18px',
              color: 'var(--color-secondary)',
              lineHeight: 1.8,
              letterSpacing: '0.5px'
            }}>
              {m.detail}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation Footer */}
      <div className="animate-slide-up" style={{ marginTop: 'auto', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', animationDelay: '0.6s' }}>
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
          onClick={() => setActiveTab(22)}
          className="sans"
          style={{ padding: '12px 40px', background: 'var(--color-ink)', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(26,24,20,0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-ink)'}
        >
          Agentic AI →
        </button>
      </div>

    </div>
  );
}
