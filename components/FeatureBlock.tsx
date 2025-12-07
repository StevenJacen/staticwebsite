import React, { useState, useEffect } from 'react';
import { FeatureItem } from '../types';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

interface FeatureBlockProps {
  item: FeatureItem;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({ item }) => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Select the appropriate background image based on screen size
  const backgroundImage = isMobile && item.backgroundImageMobile
    ? item.backgroundImageMobile
    : item.backgroundImage;
    
  const renderButton = () => {
    const buttonContent = (
      <button className={`px-8 py-3 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
        item.theme === 'teal' 
          ? 'border-white text-white hover:bg-white hover:text-white hover:border-transparent'
          : item.theme === 'beige'
            ? 'border-white text-slate-700 hover:bg-slate-800 hover:text-white bg-transparent px-10 py-4'
            : 'border-cyan-200/50 text-cyan-400 hover:bg-cyan-500 hover:text-white'
      }`}>
        {item.buttonText || t.featureBlock.readMore}
      </button>
    );

    if (item.link) {
      return <Link to={item.link}>{buttonContent}</Link>;
    }
    return buttonContent;
  };

  // Render Logic based on Theme
  if (item.theme === 'teal') {
    // "Fashion" Style - Colored Background Band
    return (
      <section
        id={item.id}
        className="relative py-24 bg-blue-100 overflow-hidden"
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {/* Overlay for better text readability */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
        )}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="w-full md:w-5/12 text-left space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-white uppercase tracking-wide">
                  {item.title}
                </h2>
                <div className="space-y-4 text-gray-100">
                  {item.description.map((p, i) => (
                    <p key={i} className="text-sm font-medium leading-relaxed max-w-md">{p}</p>
                  ))}
                </div>
                <div className="mt-4">
                  {renderButton()}
                </div>
             </div>
          </div>
        </div>
      </section>
    );
  }

  if (item.theme === 'news') {
    // "News" Style - Background Image with darker text
    return (
      <section
        id={item.id}
        className="relative py-24 overflow-hidden"
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {/* Overlay for better text readability */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black/20" />
        )}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-left items-center gap-12">
             <div className="w-full md:w-5/12 space-y-6 text-left">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-12 uppercase tracking-wider">
                  {item.title}
                </h2>
                <div className="space-y-6">
                  {item.description.map((p, i) => (
                    <p key={i} className="text-sm leading-7 text-gray-200 font-medium">{p}</p>
                  ))}
                </div>
                <div className="pt-6 flex justify-center">
                  {renderButton()}
                </div>
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
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : undefined}
      >
        {/* Optional overlay for better text readability when background image is used */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-slate-50/20" />
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
           {renderButton()}
        </div>
      </section>
    );
  }

  // Default 'gray' / Technology style
  return (
    <section
      id={item.id}
      className="relative py-24 bg-slate-900"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : undefined}
    >
      {/* Dark overlay for tech feel */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-slate-900/20" />
      )}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
         <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="w-full md:w-5/12 space-y-6 text-left">
               <h2 className="text-3xl md:text-4xl font-light text-white mb-12 uppercase tracking-wider">
                  {item.title}
               </h2>
               <div className="space-y-6">
                   {item.description.map((p, i) => (
                      <p key={i} className="text-sm leading-7 text-white font-medium">
                        {p}
                      </p>
                   ))}
               </div>
               <div className="pt-6 flex justify-center">
                 {renderButton()}
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};