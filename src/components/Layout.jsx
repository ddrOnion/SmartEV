import React, { useEffect, useRef, useState } from 'react';

export default function Layout({ children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

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
      backgroundColor: '#000'
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
      </div>
    </div>
  );
}
