import React, { useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const productLinks = [
  { label: '心忆康康', href: '/products/kangkang' },
  { label: '心忆同启 APP', href: '/products/app' },
  { label: '未来产品预留', href: '/products/future' },
];

const navLinks = [
  { label: '首页', href: '/' },
  { label: '科技', href: '/technology' },
  { label: '场景方案', href: '/solutions' },
  { label: '资讯', href: '/news' },
];

const aboutLinks = [
  { label: '关于我们', href: '/about' },
  { label: '服务与支持', href: '/support' },
  { label: '商务合作', href: '/cooperation' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (href: string) => {
    setIsOpen(false);
    navigate(href);
    window.setTimeout(() => {
      if (href === location.pathname) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
  };

  const isProductsActive = location.pathname.startsWith('/products');
  const isAboutActive = ['/about', '/support', '/cooperation'].includes(location.pathname);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="w-full px-5 sm:px-8">
        <div className="flex h-20 items-center gap-8">
          <div className="flex flex-shrink-0 items-center" aria-label="HeartMemo 心忆科技">
            <img src="/image/brand-logo.svg" alt="HeartMemo 心忆科技" className="h-12 w-auto" />
          </div>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className={`text-base font-bold tracking-widest transition-colors hover:text-slate-950 ${
                  location.pathname === link.href ? 'text-slate-950' : 'text-slate-500'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="group relative">
              <button
                onClick={() => goTo('/products')}
                className={`flex items-center gap-1 text-base font-bold tracking-widest transition-colors hover:text-slate-950 ${
                  isProductsActive ? 'text-slate-950' : 'text-slate-500'
                }`}
              >
                产品
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full w-52 translate-y-3 rounded-lg bg-white p-3 opacity-0 shadow-xl ring-1 ring-slate-100 transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                {productLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => goTo(link.href)}
                    className="block w-full rounded-md px-4 py-3 text-left text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="group relative">
              <button
                onClick={() => goTo('/about')}
                className={`flex items-center gap-1 text-base font-bold tracking-widest transition-colors hover:text-slate-950 ${
                  isAboutActive ? 'text-slate-950' : 'text-slate-500'
                }`}
              >
                关于我们
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full w-52 translate-y-3 rounded-lg bg-white p-3 opacity-0 shadow-xl ring-1 ring-slate-100 transition group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                {aboutLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => goTo(link.href)}
                    className="block w-full rounded-md px-4 py-3 text-left text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="flex items-center px-2 text-slate-400 transition-colors hover:text-slate-900" aria-label="Language">
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-bold uppercase">EN</span>
            </button>

            <button
              onClick={() => setIsOpen((value) => !value)}
              className="p-2 text-slate-900 focus:outline-none lg:hidden"
              aria-label={isOpen ? '关闭菜单' : '打开菜单'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full border-t border-slate-100 bg-white shadow-lg lg:hidden">
          <div className="space-y-2 px-6 py-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => goTo('/products')}
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-black text-slate-900"
            >
              产品
            </button>
            {productLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-md px-6 py-2 text-left text-sm font-bold text-slate-500 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
            {aboutLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-md px-3 py-2 text-left text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
