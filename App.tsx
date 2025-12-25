import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import TransitionOverlay from './components/TransitionOverlay';
import LoginPage from './components/LoginPage';
import DetailsPage from './components/DetailsPage';
import { ViewState, LandData } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [selectedLand, setSelectedLand] = useState<LandData | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      setIsDark(true);
    }
  };

  // View Transition Logic
  const handleViewChange = (newView: ViewState, data?: LandData) => {
    setIsLoading(true);
    setTimeout(() => {
      setView(newView);
      if (data) setSelectedLand(data);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 600);
  };

  return (
    <div className="min-h-screen relative font-bangla">
      <TransitionOverlay isLoading={isLoading} />
      
      {view !== 'login' && view !== 'details' && (
        <Navbar 
          currentView={view} 
          setView={(v) => handleViewChange(v)} 
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
      )}

      {view === 'landing' && (
        <>
          <Hero onSelectLand={(land) => handleViewChange('details', land)} />
          <Features />
          <Services />
          <About />
          <MapSection />
          <Footer />
        </>
      )}

      {view === 'login' && (
        <LoginPage onBack={() => handleViewChange('landing')} />
      )}

      {view === 'details' && selectedLand && (
        <DetailsPage land={selectedLand} onBack={() => handleViewChange('landing')} />
      )}

      {/* AI Assistant is globally available */}
      <AIAssistant />
    </div>
  );
};

export default App;
