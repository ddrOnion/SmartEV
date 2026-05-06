import React from 'react';

export default function HeroScreen({ setActiveTab }) {
  const cards = [
    { id: 1, title: '為什麼 (Why)', subtitle: '做智慧電動車平台' },
    { id: 2, title: '什麼是 (What)', subtitle: '何謂智慧電動車平台' },
    { id: 3, title: '如何能 (How)', subtitle: '持續運作與創造價值' }
  ];

  return (
    <div style={{ padding: '120px 100px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <div className="mono text-accent" style={{ fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '24px' }}>
          Smart EV Platform (智慧電動車平台)
        </div>
        <h1 style={{ fontSize: '84px', letterSpacing: '-0.02em', color: 'var(--color-ink)', lineHeight: 1.2 }}>
          重塑交通生態的<br />
          <span style={{ color: 'var(--color-secondary)' }}>智慧運算核心</span>
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
              background: 'var(--color-paper-cool)',
              border: '1px solid rgba(140, 115, 90, 0.2)',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-ink)';
              e.currentTarget.style.borderColor = 'var(--color-ink)';
              e.currentTarget.querySelector('.card-num').style.color = 'var(--color-accent)';
              e.currentTarget.querySelector('.card-title').style.color = '#fff';
              e.currentTarget.querySelector('.card-subtitle').style.color = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-paper-cool)';
              e.currentTarget.style.borderColor = 'rgba(140, 115, 90, 0.2)';
              e.currentTarget.querySelector('.card-num').style.color = 'rgba(140, 115, 90, 0.3)';
              e.currentTarget.querySelector('.card-title').style.color = 'var(--color-ink)';
              e.currentTarget.querySelector('.card-subtitle').style.color = 'var(--color-secondary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div className="card-num mono" style={{ position: 'absolute', top: '20px', right: '30px', fontSize: '120px', lineHeight: 1, color: 'rgba(140, 115, 90, 0.3)', transition: 'color 0.3s' }}>
              0{card.id}
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="card-title sans" style={{ fontSize: '48px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '16px', transition: 'color 0.3s' }}>
                {card.title}
              </div>
              <div className="card-subtitle serif" style={{ fontSize: '24px', color: 'var(--color-secondary)', transition: 'color 0.3s' }}>
                {card.subtitle}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
