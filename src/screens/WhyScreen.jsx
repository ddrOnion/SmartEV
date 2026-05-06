import React, { useState } from 'react';

export default function WhyScreen({ setActiveTab }) {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    {
      title: "車廠面臨的核心困境",
      subtitle: "SDV 時代的結構性痛點",
      image: "car_factory_dilemma_1778048452901.png",
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { t: "技術黑盒", d: "無法掌握核心演算法與模型，被供應商綁定" },
            { t: "高昂代價", d: "每次更新須重新談判、整合，成本失控" },
            { t: "量產即過時", d: "車輛出廠後智能功能停止進化，用戶體驗停滯" }
          ].map((item, i) => (
            <div key={i} className="animate-slide-up" style={{ 
              background: 'rgba(26, 24, 20, 0.9)', 
              padding: '24px 32px', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--color-accent)',
              animationDelay: `${0.2 + i * 0.1}s`
            }}>
              <h4 style={{ color: 'var(--color-accent)', fontSize: '20px', marginBottom: '8px', fontWeight: 600 }}>{item.t}</h4>
              <p style={{ color: '#fff', fontSize: '16px', opacity: 0.9 }}>{item.d}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "不只是賣軟體",
      subtitle: "RECLAIMING THE SOUL OF THE VEHICLE",
      image: "soul_passing_orb_1778048473463.png",
      content: (
        <div className="animate-slide-up" style={{ fontSize: '24px', lineHeight: 1.8, color: 'var(--color-secondary)' }}>
          <p style={{ marginBottom: '40px' }}>
            我們提供的是一套<span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>「主權級別」</span>的智慧化能力——讓車廠拿回產品的靈魂與進化權。
          </p>
          <div style={{ paddingLeft: '24px', borderLeft: '2px solid var(--color-accent)' }}>
            <h4 style={{ color: 'var(--color-ink)', fontSize: '28px', marginBottom: '16px' }}>賦能者 (Enabler)</h4>
            <p>助力 OEM 從「硬體組裝者」轉型為「數據驅動的智能營運商」。</p>
          </div>
        </div>
      )
    }
  ];

  const currentPage = pages[pageIndex];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Page Content */}
      <div key={pageIndex} style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
        
        {/* Header Section */}
        <div className="animate-slide-up" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '56px', fontWeight: 300, color: 'var(--color-accent)', marginBottom: '8px', opacity: 0.8 }}>
            {currentPage.title}
          </h2>
          <div className="mono" style={{ fontSize: '18px', letterSpacing: '4px', color: 'var(--color-secondary)' }}>
            {currentPage.subtitle}
          </div>
        </div>

        {/* Main Body */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '80px',
          flexDirection: pageIndex === 0 ? 'row' : 'row-reverse' 
        }}>
          {/* Image Container */}
          <div className="animate-slide-up" style={{ 
            flex: 1.5, 
            height: '600px', 
            borderRadius: '12px', 
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
            position: 'relative'
          }}>
            <img 
              src={currentPage.image} 
              alt={currentPage.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ 
              position: 'absolute', 
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.2))'
            }} />
          </div>

          {/* Text Container */}
          <div style={{ flex: 1 }}>
            {currentPage.content}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div style={{ 
        height: '120px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 80px',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button 
            onClick={() => setActiveTab(0)}
            className="sans"
            style={{
              padding: '12px 24px',
              border: '1px solid var(--color-ink)',
              borderRadius: '30px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            ← BACK TO HUB
          </button>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {pages.map((_, i) => (
            <div key={i} style={{ 
              width: i === pageIndex ? '40px' : '10px', 
              height: '10px', 
              borderRadius: '5px',
              background: i === pageIndex ? 'var(--color-accent)' : 'rgba(0,0,0,0.1)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }} />
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          {pageIndex === 0 ? (
            <button 
              onClick={() => setPageIndex(1)}
              className="sans"
              style={{
                padding: '12px 32px',
                background: 'var(--color-ink)',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Next Strategy →
            </button>
          ) : (
            <button 
              onClick={() => setPageIndex(0)}
              className="sans"
              style={{
                padding: '12px 32px',
                background: 'var(--color-paper-cool)',
                color: 'var(--color-ink)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Previous Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
