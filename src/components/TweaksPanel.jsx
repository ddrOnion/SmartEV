import React from 'react';

export default function TweaksPanel({ tweaks, setTweaks }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: '40px',
      right: '40px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid rgba(0,0,0,0.1)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      zIndex: 100,
      width: '280px',
      fontFamily: 'var(--font-sans)',
      fontSize: '14px'
    }}>
      <div style={{ fontWeight: 600, marginBottom: '16px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-secondary)' }}>
        Appearance Tweaks
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-secondary)' }}>Paper Tone</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['warm', 'cool', 'neutral'].map(tone => (
            <button
              key={tone}
              onClick={() => setTweaks({ ...tweaks, paperTone: tone })}
              style={{
                flex: 1,
                padding: '6px 0',
                border: `1px solid ${tweaks.paperTone === tone ? 'var(--color-accent)' : '#ddd'}`,
                background: tweaks.paperTone === tone ? 'var(--color-paper)' : 'transparent',
                borderRadius: '4px',
                cursor: 'pointer',
                textTransform: 'capitalize',
                fontSize: '12px'
              }}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <label style={{ color: 'var(--color-secondary)' }}>Accent Hue</label>
          <span className="mono">{tweaks.accentHue}</span>
        </div>
        <input 
          type="range" 
          min="0" max="360" 
          value={tweaks.accentHue}
          onChange={(e) => setTweaks({ ...tweaks, accentHue: e.target.value })}
          style={{ width: '100%', accentColor: 'var(--color-accent)' }}
        />
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <label style={{ color: 'var(--color-secondary)' }}>Accent Saturation</label>
          <span className="mono">{tweaks.accentSat}%</span>
        </div>
        <input 
          type="range" 
          min="0" max="100" 
          value={tweaks.accentSat}
          onChange={(e) => setTweaks({ ...tweaks, accentSat: e.target.value })}
          style={{ width: '100%', accentColor: 'var(--color-accent)' }}
        />
      </div>
    </div>
  );
}
