import React from 'react';
import { useLanguage } from './LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative w-full h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-gray-50">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://picsum.photos/1920/1080?blur=4"
          >
            {/* Using a cleaner, high-key video if available, defaulting to abstract or robot placeholder */}
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-white-abstract-technology-background-194-large.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Subtle overlay to ensure text contrast without washing out the video */}
          <div className="absolute inset-0 bg-white/20 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <p className="text-gray-600 text-lg md:text-xl font-medium tracking-wide mb-4 animate-fade-in-up">
            {t.hero.subtitle}
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight drop-shadow-sm">
             <span className="block text-blue-500/80 mb-2 font-handwriting">{t.hero.title}</span>
          </h1>
        </div>
      </section>

      {/* Disclaimer Section - Outside Hero, plain text */}
      <div className="bg-white py-8 px-4 text-center border-b border-gray-100">
        <p className="text-[10px] md:text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {t.hero.disclaimer}
        </p>
      </div>
    </>
  );
};