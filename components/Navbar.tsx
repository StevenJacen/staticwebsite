import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: '首页', href: '/' },
  { label: '产品', href: '/products' },
  { label: '场景方案', href: '/solutions' },
  { label: '关于我们', href: '/about' },
  { label: '支持', href: '/support' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (href: string) => {
    setIsOpen(false);
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-rose-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => goTo('/')} className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white">
            <Heart className="h-5 w-5 fill-current" />
          </span>
          <span>
            <span className="block text-xl font-black tracking-tight text-slate-950">HeartMemo</span>
            <span className="block text-xs font-bold text-slate-500">心忆科技</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => goTo(link.href)}
              className={`text-sm font-bold transition-colors ${
                location.pathname === link.href ? 'text-rose-600' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => goTo('/cooperation')}
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rose-600"
          >
            合作入口
          </button>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full p-2 text-slate-700 hover:bg-rose-50 lg:hidden"
          aria-label="打开导航"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-rose-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {[...navLinks, { label: '合作入口', href: '/cooperation' }].map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="rounded-xl px-3 py-3 text-left text-sm font-bold text-slate-700 hover:bg-rose-50"
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
