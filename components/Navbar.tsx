import React, { useState } from 'react';
import { Heart, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.technology, href: '#technology' },
    { label: t.nav.features, href: '#fashion' }, // Mapping 'Features' generally
    { label: t.nav.about, href: '#about' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Logo & Navigation Links */}
          <div className="flex items-center gap-12">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              {/* Using text logo to match reference minimalism */}
              <span className="font-extrabold text-2xl text-black tracking-tighter uppercase">HeartMemo</span>
            </div>

            {/* Desktop Menu - Aligned Left */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-black font-medium text-xs tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Language Switcher & CTA */}
          <div className="flex items-center gap-4">
             {/* Store Button (CTA) */}
            <a href="#" className="hidden md:block px-4 py-2 bg-black text-white text-xs font-bold rounded-full hover:bg-gray-800 transition-colors">
              {t.nav.store}
            </a>

            {/* Language Toggle */}
             <button 
              onClick={toggleLanguage}
              className="text-gray-400 hover:text-black transition-colors font-medium text-xs flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              {language === 'en' ? 'JP/CN' : 'EN'}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-black focus:outline-none p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-bold text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
            <a href="#" className="block px-3 py-3 text-sm font-bold text-white bg-black rounded-lg text-center mt-4">
              {t.nav.store}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};