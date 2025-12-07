import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Brain, Activity, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const TechnologyPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img src="/image/technology.png" alt="Technology Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">
              {t.technologyPage.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              {t.technologyPage.subtitle}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
          
          {/* Section 1: Multimodal */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 mb-4">
                <Brain className="w-10 h-10" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.technologyPage.multimodal.title}</h2>
              <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              <p className="text-slate-600 leading-loose text-lg">
                {t.technologyPage.multimodal.desc}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="/image/tech_1.png" alt="Multimodal Processing" className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md" />
            </div>
          </div>

          {/* Section 2: Real-time Response */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right space-y-4">
              <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-500 mb-4">
                <Activity className="w-10 h-10" />
              </div>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.technologyPage.realtime.title}</h2>
               <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
               <p className="text-slate-600 leading-loose text-lg">
                 {t.technologyPage.realtime.desc}
               </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="/image/tech_2.png" alt="Real-time Response" className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md" />
            </div>
          </div>

          {/* Section 3: Multiple Personalities */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-500 mb-4">
                <Users className="w-10 h-10" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{t.technologyPage.personalities.title}</h2>
              <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
              <p className="text-slate-600 leading-loose text-lg">
                {t.technologyPage.personalities.desc}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="/image/tech_3.png" alt="Multiple Personalities" className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md" />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
