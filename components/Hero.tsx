import React from 'react';
import { useLanguage } from './LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-6">
          {t.hero.titlePrefix} <span className="text-blue-400">{t.hero.titleHighlight}</span> {t.hero.titleSuffix}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-8">
          {t.hero.description}
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <button className="px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg transition transform hover:-translate-y-1">
            {t.hero.learnMore}
          </button>
          <button className="px-8 py-4 bg-white hover:bg-slate-50 text-blue-400 border-2 border-blue-200 font-bold rounded-full shadow-md transition transform hover:-translate-y-1">
            {t.hero.viewGallery}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="max-w-3xl mx-auto text-xs text-slate-400 px-4">
          {t.hero.disclaimer}
        </p>
      </div>
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
};