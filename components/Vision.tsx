import React from 'react';
import { useLanguage } from './LanguageContext';

export const Vision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-normal text-slate-800 mb-4 font-sans">
          {t.vision.title}
        </h2>
        <h3 className="text-xl md:text-3xl font-medium text-slate-900 mb-16">
          {t.vision.subtitle}
        </h3>
        
        <div className="space-y-6">
          {t.vision.description.map((line, index) => (
            <p key={index} className="text-base md:text-lg text-slate-600 font-medium leading-loose">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};