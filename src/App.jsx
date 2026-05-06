import React, { useState } from 'react';
import Layout from './components/Layout';
import { useTweaks } from './hooks/useTweaks';

import HeroScreen from './screens/HeroScreen';
import WhyScreen from './screens/WhyScreen';
import WhatScreen from './screens/WhatScreen';
import PlatformScreen from './screens/PlatformScreen';
import ModelDetailScreen from './screens/ModelDetailScreen';
import AgentDetailScreen from './screens/AgentDetailScreen';
import PlatformDetailScreen from './screens/PlatformDetailScreen';
import ValuePropScreen from './screens/ValuePropScreen';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [tweaks] = useTweaks(); // Keep the hook so the CSS variables still apply

  const renderScreen = () => {
    switch(activeTab) {
      case 0: return <HeroScreen setActiveTab={setActiveTab} />;
      case 1: return <WhyScreen setActiveTab={setActiveTab} />;
      case 2: return <WhatScreen setActiveTab={setActiveTab} />;
      case 3: return <PlatformScreen setActiveTab={setActiveTab} />;
      case 21: return <ModelDetailScreen setActiveTab={setActiveTab} />;
      case 22: return <AgentDetailScreen setActiveTab={setActiveTab} />;
      case 23: return <PlatformDetailScreen setActiveTab={setActiveTab} />;
      case 31: return <ValuePropScreen setActiveTab={setActiveTab} />;
      default: return <HeroScreen setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout>
      <div style={{ 
        width: '100%', 
        height: '100%',
        animation: 'fadeIn 0.5s ease' 
      }} key={activeTab}>
        {renderScreen()}
      </div>
    </Layout>
  );
}

export default App;
