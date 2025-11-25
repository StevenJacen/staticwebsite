import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBlock } from './components/FeatureBlock';
import { Footer } from './components/Footer';
import { FeatureItem } from './types';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const featuresEn: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Not Just Responding, But Understanding',
    description: [
      'Meet Kangkang — a companion who truly "understands you".',
      'Like a caring friend, Kangkang is there when you need to vent about your troubles.',
      'Sometimes you just need to be heard, and Kangkang is always ready to listen.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=1',
    imageAlt: 'Robot understanding human emotions',
    reverse: false 
  },
  {
    id: 'f2',
    title: 'Not Just Dialogue, But Resonance',
    description: [
      'Sometimes, you might just need a word of concern in response.',
      'But it goes beyond that—remembering your habits and offering reminders and companionship exactly when you need them.',
      'A true connection that resonates with your daily life.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=2',
    imageAlt: 'Robot providing companionship',
    reverse: true 
  },
  {
    id: 'f3',
    title: 'Harvest Love, Share Love',
    description: [
      'All of this comes from true understanding, not preset programs.',
      'With HeartMemo, you can harvest love and share love.',
      'HeartMemo Technology — letting AI understand emotions, letting companionship have warmth.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=3',
    imageAlt: 'Warm interaction',
    reverse: false
  }
];

const featuresZh: FeatureItem[] = [
  {
    id: 'f1',
    title: '不再只是回应，而是理解',
    description: [
      '康康—— 一个真正“懂你”的陪伴者。',
      '它就像一个贴心的朋友：',
      '当你遇到烦心的事情，那就对康康倾诉吧，一吐为快。'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=1',
    imageAlt: '机器人倾听',
    reverse: false 
  },
  {
    id: 'f2',
    title: '不再只是对话，而是共鸣',
    description: [
      '你可能只是需要一句关心来回应；',
      '但它会记得你的习惯，在你需要时送上提醒与陪伴。'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=2',
    imageAlt: '贴心陪伴',
    reverse: true 
  },
  {
    id: 'f3',
    title: '收获爱和分享爱',
    description: [
      '这一切，都自源于真正的理解，而非预设的程序。',
      '你可以收获爱和分享爱。',
      '心忆科技，让AI理解情绪，让陪伴拥有温度。'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=3',
    imageAlt: '爱与分享',
    reverse: false
  }
];

const AppContent: React.FC = () => {
  const { language, t } = useLanguage();
  const features = language === 'en' ? featuresEn : featuresZh;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="technology" className="flex flex-col">
          {features.map((feature) => (
            <FeatureBlock key={feature.id} item={feature} />
          ))}
        </div>
        
        <section id="about" className="py-20 bg-blue-50 text-center">
            <div className="max-w-3xl mx-auto px-4">
                <h3 className="text-3xl font-bold text-slate-800 mb-6 font-handwriting">{t.about.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {t.about.content}
                </p>
                <div className="h-1 w-24 bg-blue-300 mx-auto rounded-full"></div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;