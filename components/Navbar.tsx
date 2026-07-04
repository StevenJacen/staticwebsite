import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: '产品', href: '/products' },
  { label: '科技', href: '/technology' },
  { label: '场景方案', href: '/solutions' },
  { label: '资讯', href: '/news' },
  { label: '关于我们', href: '/about' },
  { label: '支持', href: '/support' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goTo = (href: string) => {
    setIsOpen(false);
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="w-full px-6 sm:px-8">
        <div className="flex justify-start items-center h-20 gap-8">
          <div className="flex items-center gap-12">
            <button className="flex-shrink-0 flex items-center cursor-pointer" onClick={goHome}>
              <img src="/image/brand-logo.svg" alt="HeartMemo 心忆科技" className="h-12 w-auto" />
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => goTo(link.href)}
                  className={`text-slate-500 hover:text-slate-900 font-bold text-lg tracking-widest transition-colors duration-200 cursor-pointer ${
                    location.pathname === link.href ? 'text-slate-900' : ''
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => goTo('/cooperation')}
                className="text-slate-500 hover:text-slate-900 font-bold text-lg tracking-widest transition-colors duration-200 cursor-pointer"
              >
                商务合作
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center px-2 text-slate-400 hover:text-slate-900 transition-colors" aria-label="Language">
              <Globe className="w-5 h-5" />
              <span className="ml-1 text-xs font-bold uppercase">EN</span>
            </button>

            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 focus:outline-none p-2">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0">
          <div className="px-6 py-4 space-y-4">
            {[...navLinks, { label: '商务合作', href: '/cooperation' }].map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block text-sm font-bold text-slate-600 hover:text-slate-900 uppercase tracking-widest cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
