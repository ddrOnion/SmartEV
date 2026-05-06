import React from 'react';

export default function WhatScreen({ setActiveTab }) {
  const cardStyle = {
    background: 'rgba(140,115,90,0.05)',
    border: '1px solid rgba(140,115,90,0.15)',
    borderRadius: '24px',
    padding: '40px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background = 'rgba(140,115,90,0.1)';
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(140,115,90,0.1)';
    e.currentTarget.style.borderColor = 'var(--color-accent)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = 'rgba(140,115,90,0.05)';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(140,115,90,0.15)';
  };

  return (
    <div style={{ padding: '80px 100px', height: '100%', display: 'flex', flexDirection: 'column' }}>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '60px' }}>
        <div className="mono text-accent" style={{ fontSize: '120px', lineHeight: 0.8, fontWeight: 300 }}>02</div>
        <div>
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>什麼是智慧電動車平台產品</h2>
          <div className="mono text-accent" style={{ fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>WHAT IS SMART EV PLATFORM</div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        {/* Top Row: Model and Agentic AI */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', flex: 1 }}>
          <div
            style={{ ...cardStyle }}
            onClick={() => setActiveTab(21)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: 600 }}>大模型</h3>
            <p style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>
              AI 智駕駕駛、AI 智駕座艙 與 AI 智駕底盤 的基礎模型。
            </p>
            <div style={{ marginTop: '24px', color: 'var(--color-accent)', fontWeight: 600 }}>了解更多 →</div>
          </div>

          <div
            style={{ ...cardStyle }}
            onClick={() => setActiveTab(22)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h3 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: 600 }}>Agentic 代理</h3>
            <p style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>
              OEM 應用 AI Agent，加速智慧應用的量產迭代任務。
            </p>
            <div style={{ marginTop: '24px', color: 'var(--color-accent)', fontWeight: 600 }}>了解更多 →</div>
          </div>
        </div>

        {/* Bottom Row: Smart EV Platform */}
        <div
          style={{ ...cardStyle, flex: '0 0 280px' }}
          onClick={() => setActiveTab(23)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 style={{ fontSize: '40px', marginBottom: '20px', fontWeight: 600 }}>智慧電動車平台</h3>
          <p style={{ fontSize: '20px', color: 'var(--color-secondary)', maxWidth: '900px', margin: '0 auto' }}>
            對 OEM 開放的平台，專門為客戶進行智駕模型訓練與 Agent 部署，讓客戶在保有技術核心與 Data 主權的同時，也可以在量產後持續進化智駕功能。
          </p>
          <div style={{ marginTop: '24px', color: 'var(--color-accent)', fontWeight: 600 }}>了解更多 →</div>
        </div>
      </div>

      {/* Return to Home Button */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
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
        >
          <span style={{ fontSize: '24px' }}>←</span> 回首頁
        </button>
      </div>

    </div>
  );
}
