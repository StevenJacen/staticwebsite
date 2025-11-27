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
            src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-technology-background-194-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-white/20 z-10"></div>
      </div>

      {/* Center Overlay Content */}
      <div className="relative z-20 text-center px-4 animate-fade-in-up">
         <div className="mb-4 text-slate-500 font-medium tracking-wide uppercase text-sm md:text-base">
            A little love can change the world.
         </div>
         <h1 className="text-5xl md:text-8xl font-black text-slate-800 tracking-tighter mb-2 mix-blend-multiply opacity-90">
            {t.hero.title}
         </h1>
         <div className="text-slate-400 font-bold tracking-[0.5em] text-xs md:text-sm uppercase">
            {t.hero.subtitle}
         </div>
      </div>
    </section>
  );
};