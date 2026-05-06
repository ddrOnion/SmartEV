import React from 'react';

export default function PlatformDetailScreen({ setActiveTab }) {
  const steps = [
    {
      num: '1',
      title: '數據閉環管理',
      detail: '車端數據自動回傳、篩選與結構化處理'
    },
    {
      num: '2',
      title: '雲端大模型訓練',
      detail: '利用大規模 GPU 叢集進行模型優化與 AIGC 場景生成'
    },
    {
      num: '3',
      title: 'OTA 無縫下發',
      detail: '優化後的模型通過 OTA 回傳車端，實現能力進階'
    }
  ];

  return (
    <div style={{ padding: '60px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Section (Unified with 02.1 & 02.2) */}
      <div className="animate-slide-up" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02.3</div>
        <div>
          <h2 style={{ fontSize: '56px', fontWeight: 300, color: 'var(--color-accent)', marginBottom: '8px' }}>
            從車端到雲端，再回到車端
          </h2>
          <div className="mono" style={{ fontSize: '18px', letterSpacing: '4px', color: 'var(--color-secondary)' }}>
            CLOSED-LOOP DATA INTELLIGENCE
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', gap: '80px', alignItems: 'center' }}>
        
        {/* Left Visual Section */}
        <div className="animate-slide-up" style={{ flex: 1.2, height: '580px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}>
          <img 
            src="cloud_loop_viz.png" 
            alt="Cloud Intelligence Loop" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Right Sequence Section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {steps.map((s, i) => (
            <div 
              key={i} 
              className="animate-slide-up" 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '32px',
                animationDelay: `${0.2 + i * 0.1}s`
              }}
            >
              {/* Number Chevron */}
              <div style={{
                width: '80px',
                height: '100px',
                background: 'var(--color-ink)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 300,
                fontFamily: 'var(--font-mono)',
                clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%)',
                flexShrink: 0
              }}>
                {s.num}
              </div>

              {/* Text Info */}
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: '16px', color: 'var(--color-secondary)', lineHeight: 1.5 }}>
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
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
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => setActiveTab(2)}
            className="sans"
            style={{ padding: '12px 32px', border: '1px solid var(--color-ink)', borderRadius: '30px', background: 'transparent', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            ← 返回產品介紹
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className="sans"
            style={{ padding: '12px 40px', background: 'var(--color-ink)', color: '#fff', border: 'none', borderRadius: '30px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(26,24,20,0.8)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-ink)'}
          >
            平台運作 →
          </button>
        </div>
      </div>

    </div>
  );
}
