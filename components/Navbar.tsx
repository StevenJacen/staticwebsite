import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const navLinks: NavLink[] = [
  { label: 'Technology', href: '#technology' },
  { label: 'News', href: '#news' },
  { label: 'About Us', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="bg-blue-400 p-2 rounded-full text-white mr-2">
              <Heart className="h-6 w-6 fill-current" />
            </div>
            <span className="font-bold text-2xl text-slate-700 tracking-tight">HeartMemo</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-blue-500 font-bold text-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-500 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-50 border-t border-blue-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-100 transition-all"
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