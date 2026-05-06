import React from 'react';

export default function ConclusionScreen({ setActiveTab }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'stretch' }}>
        
        {/* Left Text Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 100px', textAlign: 'center' }}>
          <div className="animate-slide-up">
            <h1 style={{ 
              fontSize: '84px', 
              fontWeight: 300, 
              color: 'var(--color-accent)', 
              marginBottom: '24px',
              letterSpacing: '8px'
            }}>
              越開越聰明
            </h1>
            <p style={{ 
              fontSize: '24px', 
              color: 'var(--color-secondary)', 
              letterSpacing: '2px',
              lineHeight: 1.8
            }}>
              每一台 <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Foxconn inside</span> 的車輛，<br/>
              都將越開越聰明。
            </p>
          </div>
        </div>

        {/* Right Visual Image */}
        <div className="animate-fade-in" style={{ flex: 1.2, overflow: 'hidden' }}>
          <img 
            src="closing_vision_viz.png" 
            alt="Future Vision" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Navigation Footer (Consistent with 03.1 Pattern) */}
      <div style={{ height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', padding: '0 100px' }}>
        <button
          onClick={() => setActiveTab(0)}
          className="sans"
          style={{ padding: '12px 28px', border: '1px solid var(--color-ink)', borderRadius: '30px', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          ← 返回首頁
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className="sans"
          style={{ padding: '12px 40px', background: 'var(--color-ink)', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(26,24,20,0.8)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-ink)'}
        >
          重新體驗智慧旅程 →
        </button>
      </div>

    </div>
  );
}
