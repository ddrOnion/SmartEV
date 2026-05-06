import React from 'react';

export default function WhyScreen({ setActiveTab }) {
  return (
    <div style={{ padding: '80px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      


      <div className="animate-slide-up delay-100" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '80px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>01</div>
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>為什麼需要智慧電動車平台產品</h2>
          <div className="mono text-accent" style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>WHY WE NEED SMART EV PLATFORM</div>
        </div>
      </div>

      <div className="animate-slide-up delay-300" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '40px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          background: 'var(--color-paper-cool)', 
          padding: '60px 80px', 
          borderLeft: '4px solid var(--color-accent)',
          fontSize: '24px',
          lineHeight: 1.8,
          color: 'var(--color-ink)'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '24px', fontSize: '28px' }}>
            車廠的痛點：
          </div>
          <div style={{ color: 'var(--color-secondary)' }}>
            在 SDV 軟體定義汽車的時代，OEM 無法掌握底層及核心技術，使每次產品的迭代與新開發都付出高昂的代價，造成已交付的產品不再更新。使用智慧電動車平台產品不只是在「買軟體」，而是一種「持續演進的生命週期服務」。
          </div>
        </div>
      </div>

      {/* Return to Home Button (Bottom) */}
      <div className="animate-slide-up delay-500" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '40px' }}>
        <button 
          onClick={() => setActiveTab(0)}
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
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '24px' }}>←</span> 回首頁
        </button>
      </div>

    </div>
  );
}
