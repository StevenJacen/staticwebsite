import React from 'react';
import { FeatureItem } from '../types';
import { useLanguage } from './LanguageContext';

interface FeatureBlockProps {
  item: FeatureItem;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ item }) => {
  const { t } = useLanguage();

  // Render Logic based on Theme
  if (item.theme === 'teal') {
    // "Fashion" Style - Colored Background Band
    return (
      <section
        id={item.id}
        className="relative py-24 bg-blue-100 overflow-hidden"
        style={item.backgroundImage ? {
          backgroundImage: `url(${item.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {/* Optional overlay for better text readability when background image is used */}
        {item.backgroundImage && (
          <div className="absolute inset-0" />
        )}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="w-full md:w-5/12 text-left space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-slate-800 uppercase tracking-wide">
                  {item.title}
                </h2>
                <div className="space-y-4 text-slate-600">
                  {item.description.map((p, i) => (
                    <p key={i} className="text-sm font-medium leading-relaxed max-w-md">{p}</p>
                  ))}
                </div>
                <button className="px-8 py-3 rounded-full border border-slate-700 text-slate-800 text-xs font-bold uppercase tracking-widest hover:bg-white hover:border-transparent transition-all mt-4">
                  {item.buttonText || t.featureBlock.readMore}
                </button>
             </div>
          </div>
        </div>
      </section>
    );
  }

  if (item.theme === 'beige') {
    // "Store/Hello" Style - Rising Image
    return (
      <section
        id={item.id}
        className="relative pt-24 bg-slate-50 overflow-hidden min-h-[600px] flex flex-col justify-between"
        style={item.backgroundImage ? {
          backgroundImage: `url(${item.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {/* Optional overlay for better text readability when background image is used */}
        {item.backgroundImage && (
          <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-sm" />
        )}
        <div className="text-center px-4 relative z-10 mb-12">
           <h2 className="text-4xl md:text-5xl font-light text-slate-800 uppercase tracking-wide mb-8">
              {item.title}
           </h2>
           <div className="max-w-2xl mx-auto space-y-4 text-slate-600 mb-8">
              {item.description.map((p, i) => (
                <p key={i} className="text-base leading-relaxed">{p}</p>
              ))}
           </div>
           <button className="px-10 py-4 rounded-full border border-slate-400 text-slate-700 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 hover:text-white transition-all bg-transparent">
              {item.buttonText}
           </button>
        </div>
      </section>
    );
  }

  // Default 'gray' / Technology style
  return (
    <section
      id={item.id}
      className="relative py-24 bg-slate-50/50"
      style={item.backgroundImage ? {
        backgroundImage: `url(${item.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      {/* Optional overlay for better text readability when background image is used */}
      {item.backgroundImage && (
        <div className="absolute inset-0 " />
      )}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative z-10">
         <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-12 uppercase tracking-wider">
            {item.title}
         </h2>
         <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-5/12 space-y-6">
               {item.description.map((p, i) => (
                  <p key={i} className="text-sm leading-7 text-slate-600 font-medium">
                    {p}
                  </p>
               ))}
               <div className="pt-6">
                 <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-widest hover:border-slate-800 hover:text-slate-800 transition-all">
                    {item.buttonText || t.featureBlock.readMore}
                 </button>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};