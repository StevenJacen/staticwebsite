import React from 'react';
import { useLanguage } from './LanguageContext';

export const Vision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-12">
          {t.vision.title}
        </h2>
        
        <div className="space-y-6">
          {t.vision.text.map((line, index) => (
            <p 
              key={index} 
              className={`text-sm md:text-base leading-loose text-gray-600 ${index === 0 ? 'font-bold text-gray-800 mb-8' : ''}`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};