import React from 'react';
import { FeatureItem } from '../types';

interface FeatureBlockProps {
  item: FeatureItem;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ item }) => {
  
  // Theme 1: Tech Style (Gray Background, Clean Layout)
  if (item.theme === 'gray') {
    return (
      <section className="py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-light text-slate-800 uppercase tracking-widest">
                {item.title}
              </h2>
              <div className="space-y-4">
                {item.description.map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed font-light">{p}</p>
                ))}
              </div>
              <button className="mt-6 px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400 transition-all text-sm font-bold">
                {item.buttonText}
              </button>
            </div>
            <div className="w-full md:w-1/2">
               <img 
                  src={item.imageSrc} 
                  alt={item.imageAlt} 
                  className="w-full h-auto rounded-3xl shadow-sm"
                />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Theme 2: Fashion Style (Teal/Blue Gradient Background)
  if (item.theme === 'teal') {
    return (
      <section className="py-24 bg-[#A8D0D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="w-full md:w-1/2 order-2 md:order-1">
               <img 
                  src={item.imageSrc} 
                  alt={item.imageAlt} 
                  className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-light text-slate-800 uppercase tracking-widest">
                {item.title}
              </h2>
              <div className="space-y-4">
                 {item.description.map((p, i) => (
                  <p key={i} className="text-slate-700 leading-relaxed font-medium">{p}</p>
                ))}
              </div>
               <button className="mt-6 px-8 py-3 rounded-full bg-white/40 border border-white/50 text-slate-800 hover:bg-white/60 transition-all text-sm font-bold backdrop-blur-sm">
                {item.buttonText}
              </button>
            </div>
          </div>
        </div>
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-200/20 to-transparent pointer-events-none"></div>
      </section>
    );
  }

  // Theme 3: Beige/Warm Style (Center Focus, Emerging Image)
  if (item.theme === 'beige') {
    return (
      <section className="pt-24 pb-0 bg-[#FFF8E5] relative overflow-hidden min-h-[600px] flex flex-col justify-between">
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-right relative z-10 w-full">
          <div className="lg:w-1/2 ml-auto lg:pl-12 pb-12">
            <h2 className="text-4xl md:text-5xl font-thin text-slate-800 mb-6 uppercase tracking-wider">
              {item.title}
            </h2>
             <div className="space-y-4 mb-8">
                 {item.description.map((p, i) => (
                  <p key={i} className="text-slate-600 text-lg">{p}</p>
                ))}
              </div>
             <button className="px-10 py-4 rounded-full border border-orange-300 text-orange-800 hover:bg-orange-100/50 transition-all text-sm font-bold uppercase tracking-wider">
                {item.buttonText}
              </button>
          </div>
        </div>
        
        {/* Image positioned at bottom center/left */}
        <div className="relative w-full max-w-2xl mx-auto lg:mx-0 lg:absolute lg:bottom-0 lg:left-24">
           <img 
              src={item.imageSrc} 
              alt={item.imageAlt} 
              className="w-full h-auto object-bottom"
            />
        </div>
      </section>
    );
  }

  return null;
};