import React from 'react';
import { useLanguage } from './LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden bg-slate-100">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src="video/banner.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-white/20 z-10"></div>
      </div>

      {/* Center Overlay Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-6 drop-shadow-sm">
        <span className="text-blue-500">{t.hero.titleHighlight}</span> 
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl text-slate-700 font-medium mb-10 leading-relaxed drop-shadow-sm">
          {t.hero.description}
        </p>
         {/* Disclaimer */}
        <p className="max-w-3xl mx-auto text-xs text-slate-600/90 px-4 font-medium ">
          {t.hero.disclaimer}
        </p>
      </div>
    </section>
  );
};