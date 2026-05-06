import React, { useEffect, useRef, useState } from 'react';

const SECTIONS = [
  { num: '01', label: 'WHY' },
  { num: '02', label: 'WHAT' },
  { num: '03', label: 'HOW' },
];

function getActiveSection(tab) {
  if (tab === 1) return 0;
  if ([2, 21, 22, 23].includes(tab)) return 1;
  if ([3, 31].includes(tab)) return 2;
  return -1;
}

export default function Layout({ children, activeTab = 0 }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const activeSection = getActiveSection(activeTab);

  // Handle 1920x1080 fixed canvas scaling
  useEffect(() => {
    const handleResize = () => {
      const vW = window.innerWidth;
      const vH = window.innerHeight;
      const scaleX = vW / 1920;
      const scaleY = vH / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--color-paper-neutral)'
    }}>
      <div 
        className="stage"
        ref={containerRef}
        style={{
          transform: `scale(${scale})`
        }}
      >
        {/* Main Content Area filling the entire 1920x1080 canvas */}
        <main style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {children}
        </main>

        {/* Section Progress Indicator */}
        {activeSection >= 0 && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            zIndex: 200,
            pointerEvents: 'none',
          }}>
            {SECTIONS.map((s, i) => {
              const isActive = i === activeSection;
              const isPast = i < activeSection;
              return (
                <React.Fragment key={s.num}>
                  {i > 0 && (
                    <div style={{
                      width: '48px',
                      height: '1px',
                      background: isPast ? 'var(--color-accent)' : 'rgba(140,115,90,0.2)',
                      transition: 'background 0.4s ease',
                      margin: '0 4px',
                    }} />
                  )}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '5px',
                  }}>
                    <div style={{
                      width: isActive ? '10px' : '6px',
                      height: isActive ? '10px' : '6px',
                      borderRadius: '50%',
                      background: isActive || isPast ? 'var(--color-accent)' : 'rgba(140,115,90,0.2)',
                      transition: 'all 0.4s ease',
                      boxShadow: isActive ? '0 0 8px rgba(140,115,90,0.5)' : 'none',
                    }} />
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '9px',
                      letterSpacing: '1.5px',
                      color: isActive ? 'var(--color-accent)' : isPast ? 'var(--color-secondary)' : 'rgba(140,115,90,0.3)',
                      transition: 'color 0.4s ease',
                    }}>
                      {s.num}
                    </span>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
