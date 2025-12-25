import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { NavItem, ViewState } from '../types';

interface Props {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<Props> = ({ currentView, setView, toggleTheme, isDark }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
      if (currentView === 'landing') {
        const sections = NAV_ITEMS.map(item => item.id);
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavClick = (id: string) => {
    if (currentView !== 'landing') {
      setView('landing');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => { setView('landing'); window.scrollTo(0,0); }}
        >
          <span className="material-symbols-outlined text-4xl text-primary">landscape</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            চিনেকিনি
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id && currentView === 'landing'
                  ? 'text-primary font-bold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span className="material-symbols-outlined text-gray-700 dark:text-yellow-400">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          {currentView !== 'login' && (
            <button
              onClick={() => setView('login')}
              className="px-5 py-2 rounded-full bg-primary text-white font-medium hover:bg-green-600 transition-all shadow-lg hover:shadow-primary/30"
            >
              লগইন
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;