import React from 'react';
import { useLanguage } from './LanguageContext';

export const Vision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-blue-50">
      {/* Ambient Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 md:p-16 shadow-xl shadow-blue-100/50">
          <h2 className="text-2xl md:text-4xl font-normal text-gray-900 mb-4 font-sans tracking-wide">
            {t.vision.title}
          </h2>
          <h3 className="text-xl md:text-3xl font-medium text-blue-700 mb-12">
            {t.vision.subtitle}
          </h3>
          
          <div className="space-y-6">
            {t.vision.description.map((line, index) => (
              line === '' ? (
                <div key={index} className="h-4"></div>
              ) : index === 0 ? (
                <p key={index} className="text-xl md:text-2xl text-gray-900 font-bold leading-loose">
                  {line}
                </p>
              ) : (
                <p key={index} className="text-base md:text-lg text-slate-700 font-medium leading-loose">
                  {line}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};