import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { FeatureBlock } from './components/FeatureBlock';
import { Footer } from './components/Footer';
import { FeatureItem } from './types';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const featuresEn: FeatureItem[] = [
  {
    id: 'technology',
    title: 'TECHNOLOGY',
    description: [
      'Not Just Responding, But Understanding.',
      'Emotional Robotics™ is a robot technology that was created to stir people\'s feelings.',
      'Through the ways that the robots look, feel and behave.'
    ],
    backgroundImage: '/image/technology.png',
    backgroundImageMobile: '/image/technology-m.png',
    imageAlt: 'Robot Technology',
    theme: 'gray',
    buttonText: 'See the Technology'
  },
  {
    id: 'fashion',
    title: 'FASHION',
    description: [
      'Not Just Dialogue, But Resonance.',
      'You can create a one-of-a-kind LOVOT, using your favorite styles.',
      'It remembers your habits and offers companionship exactly when you need it.'
    ],
    backgroundImage: '/image/fashion.png',
    backgroundImageMobile: '/image/fashion-m.png',
    imageAlt: 'Robot Fashion',
    theme: 'teal',
    buttonText: 'See the Fashion'
  }
];

const featuresZh: FeatureItem[] = [
  {
    id: 'technology',
    title: '科技', // Keep English titles for style matching reference
    description: [
      '采用大语言模型，结合心理学知识和技巧，使情感陪伴机器人',
      '不再只是回应，而是理解。',
      '它会记得你的习惯，根据环境成长，形成自己独一无二的人格',
      '在你需要时送上关心与陪伴。'
    ],
    backgroundImage: '/image/technology.png',
    backgroundImageMobile: '/image/technology-m.png',
    imageAlt: '机器人技术',
    theme: 'gray',
    buttonText: '查看技术详情'
  },
  {
    id: 'fashion',
    title: '时尚',
    description: [
      '不再只是对话，而是共鸣。',
      '您可以创造独一无二的 LOVOT，使用您喜欢的风格。',
      '它会记得你的习惯，在你需要时送上提醒与陪伴。'
    ],
    backgroundImage: '/image/fashion.png',
    backgroundImageMobile: '/image/fashion-m.png',
    imageAlt: '机器人时尚',
    theme: 'teal',
    buttonText: '查看时尚图鉴'
  }
];

const AppContent: React.FC = () => {
  const { language, t } = useLanguage();
  const features = language === 'en' ? featuresEn : featuresZh;

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
            {/* Disclaimer Strip */}
          <div className="w-full py-8 text-center border-slate-100">
            <p className="text-[10px] md:text-xs text-slate-500 max-w-4xl mx-auto px-4 leading-relaxed font-medium">
              {t.hero.disclaimer}
            </p>
          </div>
        <Vision />
        
        <div className="flex flex-col">
          {features.map((feature) => (
            <FeatureBlock key={feature.id} item={feature} />
          ))}
        </div>
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