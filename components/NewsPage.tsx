import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from './LanguageContext';
import HeartMemoArticle from './HeartMemoArticle';
import { assetPath } from './assetPath';

export const NewsPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedArticle]);

  if (selectedArticle === 'heartmemo-ceibs') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow py-8 px-4">
          <div className="max-w-4xl mx-auto mb-6">
            <button 
              onClick={() => setSelectedArticle(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.newsPage?.backToNews || "Back to News"}
            </button>
          </div>
          <HeartMemoArticle />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section - Reference from TechnologyPage.tsx */}
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
           <img 
              src={assetPath('image/new.png')} 
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
            {/* Real News Item: HeartMemo & CEIBS */}
            <div 
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedArticle('heartmemo-ceibs')}
            >
              <div className="h-48 relative overflow-hidden">
                 <img src={assetPath('image/media/media-1.jpg')} alt="HeartMemo and CEIBS alumni" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-500 font-semibold mb-2">2025.12.02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  心忆科技携手中欧创协团
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  心忆科技由三位中欧24级北京班校友联合创立，致力于通过“AI+心理学”的情感计算技术...
                </p>
                <button className="text-slate-900 font-bold text-sm uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                  Read More &rarr;
                </button>
              </div>
            </div>

            {/* Placeholder News Items */}
            {[2, 3].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow opacity-60">
                <div className="h-48 bg-slate-200 flex items-center justify-center text-slate-400">
                   <span>Coming Soon</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-500 font-semibold mb-2">2025.12.0{item}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">HeartMemo Update {item}</h3>
                  <p className="text-slate-600 mb-4">
                    More news coming soon.
                  </p>
                  <button className="text-slate-900 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors" disabled>
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
