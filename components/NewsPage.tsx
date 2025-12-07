import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from './LanguageContext';

export const NewsPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Reference from TechnologyPage.tsx */}
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
           <img 
              src="/image/new.png" 
              alt="News Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90"></div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">
              {t.newsPage.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              {t.newsPage.subtitle}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.newsPage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder News Items to make the page look complete */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                   {/* Placeholder Image Area */}
                   <span>Image {item}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-500 font-semibold mb-2">2025.12.0{item}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">HeartMemo Update {item}</h3>
                  <p className="text-slate-600 mb-4">
                    Short description of the news update goes here. Keeping you informed about our latest progress.
                  </p>
                  <button className="text-slate-900 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors">
                    Read More &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
