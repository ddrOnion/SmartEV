import React from 'react';

export default function HeroScreen({ setActiveTab }) {
  const cards = [
    { id: 1, title: '為什麼 (Why)', subtitle: '做智慧電動車平台' },
    { id: 2, title: '什麼是 (What)', subtitle: '何謂智慧電動車平台' },
    { id: 3, title: '如何能 (How)', subtitle: '持續運作與創造價值' }
  ];

  return (
    <div style={{ padding: '100px 100px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '72px', letterSpacing: '-0.01em', color: 'var(--color-ink)', lineHeight: 1.3, fontWeight: 700 }}>
          驅動車輛持續進化<br />
          <span style={{ color: '#156082' }}>智慧電動車平台</span><br />
          <span style={{ fontSize: '48px', color: 'var(--color-secondary)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>(Smart EV Platform)</span>
        </h1>
      </div>

      <div style={{ display: 'flex', gap: '40px', width: '100%', maxWidth: '1600px' }}>
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => setActiveTab(card.id)}
            style={{
              flex: 1,
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '40px',
              background: '#156082',
              border: '4px solid #042433',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1b739c';
              e.currentTarget.querySelector('.card-num').style.color = 'rgba(255, 255, 255, 0.35)';
              e.currentTarget.querySelector('.card-subtitle').style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(4, 36, 51, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#156082';
              e.currentTarget.querySelector('.card-num').style.color = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.querySelector('.card-subtitle').style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div className="card-num mono" style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '120px', lineHeight: 1, color: 'rgba(255, 255, 255, 0.15)', transition: 'all 0.3s' }}>
              0{card.id}
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="card-title sans" style={{ fontSize: '48px', fontWeight: 600, color: '#ffffff', marginBottom: '16px', transition: 'color 0.3s' }}>
                {card.title}
              </div>
              <div className="card-subtitle serif" style={{ fontSize: '28px', color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.3s', fontWeight: 500 }}>
                {card.subtitle}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
