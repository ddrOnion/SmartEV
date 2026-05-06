import { useState, useEffect } from 'react';

export function useTweaks() {
  const [tweaks, setTweaks] = useState({
    paperTone: 'warm', // warm, cool, neutral
    accentHue: 30, // 0-360
    accentSat: 20, // 0-100
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply tone
    let paperColor = '#f5f1ea';
    if (tweaks.paperTone === 'cool') paperColor = '#f0f2f5';
    if (tweaks.paperTone === 'neutral') paperColor = '#f4f4f4';
    root.style.setProperty('--color-paper', paperColor);

    // Apply accent
    root.style.setProperty('--accent-h', tweaks.accentHue);
    root.style.setProperty('--accent-s', `${tweaks.accentSat}%`);
  }, [tweaks]);

  return [tweaks, setTweaks];
}
