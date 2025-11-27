import React, { useState } from 'react';
import { Heart, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.technology, href: '#technology' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.fashion, href: '#fashion' },
    { label: t.nav.pricing, href: '#pricing' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="bg-slate-900 p-1.5 rounded-full text-white mr-2">
                <Heart className="h-4 w-4 fill-current" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-widest uppercase font-sans">HeartMemo</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-900 font-bold text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: CTA & Language */}
          <div className="flex items-center gap-4">

            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center px-2 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="ml-1 text-xs font-bold uppercase">{language}</span>
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
                onClick={() => setIsOpen(false)}
                className="block text-sm font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest"
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