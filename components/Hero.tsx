import React from 'react';
import { useLanguage } from './LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-slate-100">
      {/* Video Container - Determines section height */}
      <div className="relative w-full z-0">
        {/* Desktop Video */}
        <video
          className="hidden md:block w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video/banner.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video */}
        <video
          className="block md:hidden w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="video/banner-m.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-white/20 z-10"></div>
      </div>

      {/* Center Overlay Content - Absolute positioned over video */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Small title on top */}
          <p className="text-sm md:text-base text-slate-700 font-medium mb-4 tracking-wide drop-shadow-sm">
            {t.hero.titleHighlight}
          </p>

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            {/* <img
              src="image/logo.png"
              alt="HeartMemo Logo"
              className="h-8 md:h-12 w-auto drop-shadow-lg"
            /> */}
            <span className="text-5xl md:text-8xl font-extrabold bg-gradient-multi-color animate-gradient-x text-transparent bg-clip-text">
              {t.hero.logo}
            </span>
          </div>

          <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-700 font-medium mb-10 leading-relaxed drop-shadow-sm">
            {t.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};