import React, { useRef, useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const productLinks = [
  { label: '心忆康康', href: '/products/kangkang' },
  { label: '心忆同启 APP', href: '/products/app' },
  { label: '下一代产品预留', href: '/products/future' },
];

const navLinks = [
  { label: '首页', href: '/' },
  { label: '科技', href: '/technology' },
  { label: '场景方案', href: '/solutions' },
  { label: '最新资讯', href: '/news' },
];

const aboutLinks = [
  { label: '公司介绍', href: '/about' },
  { label: '商务合作', href: '/cooperation' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<'products' | 'about' | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const showMenu = (menu: 'products' | 'about') => {
    clearCloseTimer();
    setOpenMenu(menu);
  };

  const scheduleCloseMenu = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 180);
  };

  const closeMenuNow = () => {
    clearCloseTimer();
    setOpenMenu(null);
  };

  const goTo = (href: string) => {
    setIsOpen(false);
    closeMenuNow();
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
  const isAboutActive = ['/about', '/cooperation'].includes(location.pathname);

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(17,24,39,0.08)] bg-[#fbfaf7]/90 backdrop-blur-[14px]">
      <div className="w-full px-[clamp(20px,4vw,64px)]">
        <div className="flex h-[72px] items-center gap-7">
          <div className="flex flex-shrink-0 items-center" aria-label="HeartMemo 心忆科技">
            <img src="/image/brand-logo.svg" alt="HeartMemo 心忆科技" className="h-10 w-auto" />
          </div>

          <div className="hidden min-w-0 items-center gap-[26px] xl:flex">
            <button
              onClick={() => goTo('/')}
              className={`text-sm font-semibold tracking-normal transition-colors hover:text-[#111827] ${
                location.pathname === '/' ? 'text-[#111827]' : 'text-[#111827]/70'
              }`}
            >
              首页
            </button>

            <div
              className="relative"
              onMouseEnter={() => showMenu('products')}
              onMouseLeave={scheduleCloseMenu}
              onFocus={() => showMenu('products')}
            >
              <button
                onClick={() => goTo('/products')}
                className={`flex items-center gap-1 text-sm font-semibold tracking-normal transition-colors hover:text-[#111827] ${
                  isProductsActive ? 'text-[#111827]' : 'text-[#111827]/70'
                }`}
              >
                产品
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 top-full w-56 pt-3 transition ${
                  openMenu === 'products' ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
                }`}
              >
                <div className="rounded-[8px] border border-[rgba(17,24,39,0.1)] bg-white p-3 shadow-[0_18px_55px_rgba(33,28,23,0.08)]">
                {productLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => goTo(link.href)}
                    className="block w-full rounded-[6px] px-4 py-3 text-left text-sm font-bold text-[#667085] transition hover:bg-[#fff1e7] hover:text-[#d94a38]"
                  >
                    {link.label}
                  </button>
                ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1, 4).map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className={`text-sm font-semibold tracking-normal transition-colors hover:text-[#111827] ${
                  location.pathname === link.href ? 'text-[#111827]' : 'text-[#111827]/70'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div
              className="relative"
              onMouseEnter={() => showMenu('about')}
              onMouseLeave={scheduleCloseMenu}
              onFocus={() => showMenu('about')}
            >
              <button
                onClick={() => goTo('/about')}
                className={`flex items-center gap-1 text-sm font-semibold tracking-normal transition-colors hover:text-[#111827] ${
                  isAboutActive ? 'text-[#111827]' : 'text-[#111827]/70'
                }`}
              >
                关于我们
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 top-full w-56 pt-3 transition ${
                  openMenu === 'about' ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
                }`}
              >
                <div className="rounded-[8px] border border-[rgba(17,24,39,0.1)] bg-white p-3 shadow-[0_18px_55px_rgba(33,28,23,0.08)]">
                {aboutLinks.map((link) => (
                  <button
                    key={`about-${link.href}`}
                    onClick={() => goTo(link.href)}
                    className="block w-full rounded-[6px] px-4 py-3 text-left text-sm font-bold text-[#667085] transition hover:bg-[#fff1e7] hover:text-[#d94a38]"
                  >
                    {link.label}
                  </button>
                ))}
                </div>
              </div>
            </div>

            {navLinks.slice(4).map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className={`text-sm font-semibold tracking-normal transition-colors hover:text-[#111827] ${
                  location.pathname === link.href ? 'text-[#111827]' : 'text-[#111827]/70'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-4">
            <button className="flex min-h-11 items-center rounded-[6px] border border-[rgba(17,24,39,0.14)] px-3 text-[#667085] transition-colors hover:text-[#111827]" aria-label="Language">
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-bold uppercase">EN</span>
            </button>

            <button
              onClick={() => setIsOpen((value) => !value)}
              className="rounded-[6px] p-2 text-[#111827] focus:outline-none xl:hidden"
              aria-label={isOpen ? '关闭菜单' : '打开菜单'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 w-full border-t border-[rgba(17,24,39,0.08)] bg-[#fbfaf7] shadow-[0_18px_55px_rgba(33,28,23,0.08)] xl:hidden">
          <div className="space-y-2 px-6 py-5">
            <button
              onClick={() => goTo('/')}
              className="block w-full rounded-[6px] px-3 py-2 text-left text-sm font-bold text-[#667085] hover:bg-white hover:text-[#111827]"
            >
              首页
            </button>
            <button
              onClick={() => goTo('/products')}
              className="block w-full rounded-[6px] px-3 py-2 text-left text-sm font-black text-[#111827]"
            >
              产品
            </button>
            {productLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-[6px] px-6 py-2 text-left text-sm font-bold text-[#667085] hover:bg-[#fff1e7] hover:text-[#d94a38]"
              >
                {link.label}
              </button>
            ))}
            {navLinks.slice(1, 4).map((link) => (
              <button
                key={link.href}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-[6px] px-3 py-2 text-left text-sm font-bold text-[#667085] hover:bg-white hover:text-[#111827]"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => goTo('/about')}
              className="block w-full rounded-[6px] px-3 py-2 text-left text-sm font-black text-[#111827]"
            >
              关于我们
            </button>
            {aboutLinks.map((link) => (
              <button
                key={`mobile-about-${link.href}`}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-[6px] px-6 py-2 text-left text-sm font-bold text-[#667085] hover:bg-[#fff1e7] hover:text-[#d94a38]"
              >
                {link.label}
              </button>
            ))}
            {navLinks.slice(4).map((link) => (
              <button
                key={`mobile-top-${link.href}`}
                onClick={() => goTo(link.href)}
                className="block w-full rounded-[6px] px-3 py-2 text-left text-sm font-bold text-[#667085] hover:bg-white hover:text-[#111827]"
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
