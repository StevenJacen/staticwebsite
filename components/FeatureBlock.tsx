import React from 'react';
import { FeatureItem } from '../types';

interface FeatureBlockProps {
  item: FeatureItem;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ item }) => {
  return (
    <div className={`py-16 md:py-24 ${item.reverse ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-200 rounded-[2rem] rotate-2 opacity-50 group-hover:rotate-1 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-square md:aspect-[4/3]">
                <img 
                  src={item.imageSrc} 
                  alt={item.imageAlt} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 font-handwriting">
              {item.title}
            </h2>
            <div className="space-y-4">
              {item.description.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-200 pl-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="mt-4 px-6 py-2 text-blue-500 font-bold border-b-2 border-blue-200 hover:border-blue-500 transition-colors">
              Read more details &rarr;
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};