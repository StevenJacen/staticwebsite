import React, { useState } from 'react';
import { Heart, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: t.nav.technology, href: '/technology' },
    { label: t.nav.news, href: '/news' },
    { label: t.nav.comingSoon, href: '#coming-soon' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      if (href.startsWith('#') && href !== '#') {
         const element = document.querySelector(href);
         if (element) {
           element.scrollIntoView({ behavior: 'smooth' });
         }
      }
    }
  };
  
  const goHome = () => {
      if (location.pathname !== '/') {
          navigate('/');
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  }

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
       <div className="w-full px-6 sm:px-8">
        <div className="flex justify-start items-center h-20 gap-8">
          
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={goHome}>
              <div className="bg-blue-400 p-1.5 rounded-full text-white mr-2">
                <Heart className="h-6 w-6 fill-current" />
              </div>
              <span className="font-bold text-2xl text-slate-700 tracking-tight">HeartMemo</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className="text-slate-500 hover:text-slate-900 font-bold text-lg tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: CTA & Language */}
          <div className="flex items-center gap-4 ml-auto">

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center px-2 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="ml-1 text-xs font-bold uppercase">{language === 'en' ? 'CN' : 'EN'}</span>
            </button>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-900 focus:outline-none p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavigation(e, link.href)}
                className="block text-sm font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};