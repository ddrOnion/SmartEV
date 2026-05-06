import React from 'react';

export default function ValuePropScreen({ setActiveTab }) {
  const points = [
    { t: 'Data 主權', d: '掌控核心數據與模型，確保技術資產安全。' },
    { t: '持續演進', d: '量產後透過 OTA 實現功能進階與性能優化。' },
    { t: '快速迭代', d: '利用 Agentic AI 大幅縮短從研發到上車的週期。' },
    { t: '技術獨立', d: '建立自主研發鏈，擺脫供應商鎖定，掌控未來方向。' }
  ];

  return (
    <div style={{ padding: '60px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Section */}
      <div className="animate-slide-up" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>03.1</div>
        <div>
          <h2 style={{ fontSize: '56px', fontWeight: 300, color: 'var(--color-accent)', marginBottom: '8px' }}>
            OEM 真正得到什麼
          </h2>
          <div className="mono" style={{ fontSize: '18px', letterSpacing: '4px', color: 'var(--color-secondary)' }}>
            WHAT OEM REALLY GAINS
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', gap: '80px', alignItems: 'center' }}>
        
        {/* Left Grid Visual */}
        <div className="animate-slide-up" style={{ flex: 1.2, display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '650px',
            aspectRatio: '1/1',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="value_prop_grid.png" 
              alt="Value Proposition Grid" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div style={{ flex: 1 }}>
          <div className="animate-slide-up" style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '28px', color: 'var(--color-accent)', marginBottom: '24px', fontWeight: 300 }}>
              從產品交付到平台共生
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {points.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', marginTop: '10px' }} />
                  <div>
                    <span style={{ fontWeight: 600, color: 'var(--color-ink)', fontSize: '20px' }}>{p.t}：</span>
                    <span style={{ color: 'var(--color-secondary)', fontSize: '18px', lineHeight: 1.6 }}>{p.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Green Highlight Box */}
          <div className="animate-slide-up" style={{
            background: 'var(--color-ink)',
            padding: '24px 32px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            borderLeft: '4px solid var(--color-accent)',
            animationDelay: '0.4s'
          }}>
            <div style={{
              width: '24px', height: '24px', borderRadius: '50%',
              border: '2px solid var(--color-accent)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              color: 'var(--color-accent)', fontSize: '14px'
            }}>✓</div>
            <p style={{ color: '#fff', fontSize: '20px', fontWeight: 500, letterSpacing: '1px' }}>
              每一台 <span style={{ color: 'var(--color-accent)' }}>Foxconn inside</span> 的車輛，都將越開越聰明。
            </p>
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
          onClick={() => setActiveTab(3)}
          className="sans"
          style={{ padding: '12px 40px', border: '1px solid var(--color-ink)', borderRadius: '30px', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          ← 返回平台運作
        </button>
      </div>

    </div>
  );
}
