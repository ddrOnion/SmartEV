import React from 'react';

export default function AgentDetailScreen({ setActiveTab }) {
  const features = [
    {
      icon: '🔍',
      title: '極端場景挖掘',
      detail: 'AI Agent 自動從海量數據中發掘長尾邊緣案例，無需人工標記'
    },
    {
      icon: '🎮',
      title: '高擬真模擬生成',
      detail: '以生成式 AI 重建真實場景，大幅降低實車測試成本與週期'
    },
    {
      icon: '⚡',
      title: '邊緣算力優化',
      detail: '結合大模型精準除錯，持續提升車載推理效率與響應速度'
    }
  ];

  return (
    <div style={{ padding: '60px 100px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Section (Unified with 02.1) */}
      <div className="animate-slide-up" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02.2</div>
        <div>
          <h2 style={{ fontSize: '56px', fontWeight: 300, color: 'var(--color-accent)', marginBottom: '8px' }}>
            Agentic AI 加速量產迭代
          </h2>
          <div className="mono" style={{ fontSize: '18px', letterSpacing: '4px', color: 'var(--color-secondary)' }}>
            ACCELERATING PRODUCTION ITERATION
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', gap: '80px', alignItems: 'center' }}>
        
        {/* Left Visual Section */}
        <div className="animate-slide-up" style={{ flex: 1, height: '600px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
          <img 
            src="agent_iteration_viz.png" 
            alt="Agentic AI Iteration" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right Content Section */}
        <div style={{ flex: 1.2 }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {features.map((f, i) => (
              <div 
                key={i} 
                className="animate-slide-up" 
                style={{ 
                  background: 'var(--color-ink)',
                  padding: '32px', 
                  borderRadius: '12px',
                  gridColumn: i === 2 ? '1 / span 2' : 'auto',
                  borderLeft: '4px solid var(--color-accent)',
                  animationDelay: `${0.2 + i * 0.1}s`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '24px' }}>{f.icon}</span>
                  <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 600 }}>{f.title}</h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.6 }}>
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{ height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
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
          onClick={() => setActiveTab(23)}
          className="sans"
          style={{ padding: '12px 40px', background: 'var(--color-ink)', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(26,24,20,0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-ink)'}
        >
          智慧電動車平台 →
        </button>
      </div>

    </div>
  );
}
