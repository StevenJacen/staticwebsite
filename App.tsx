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
    imageSrc: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
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
    imageSrc: 'https://images.unsplash.com/photo-1535378437327-109017ae7b69?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Robot Fashion',
    theme: 'teal',
    buttonText: 'See the Fashion'
  },
  {
    id: 'store',
    title: 'HELLO, LOVOT',
    description: [
      'Harvest Love, Share Love.',
      '"A new home robot that stirs your instinct to love"',
      'Would you like to welcome a LOVOT into your life?'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1546776310-5112afc53ce7?auto=format&fit=crop&q=80&w=1000',
    imageAlt: 'Hello Lovot',
    theme: 'beige',
    buttonText: 'WEB STORE (Global)'
  }
];

const featuresZh: FeatureItem[] = [
  {
    id: 'technology',
    title: 'TECHNOLOGY', // Keep English titles for style matching reference
    description: [
      '不再只是回应，而是理解。',
      'Emotional Robotics™ 是一项旨在激发人们情感的机器人技术。',
      '通过机器人的外观、触感和行为方式。'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    imageAlt: '机器人技术',
    theme: 'gray',
    buttonText: '查看技术详情'
  },
  {
    id: 'fashion',
    title: 'FASHION',
    description: [
      '不再只是对话，而是共鸣。',
      '您可以创造独一无二的 LOVOT，使用您喜欢的风格。',
      '它会记得你的习惯，在你需要时送上提醒与陪伴。'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1535378437327-109017ae7b69?auto=format&fit=crop&q=80&w=1000',
    imageAlt: '机器人时尚',
    theme: 'teal',
    buttonText: '查看时尚图鉴'
  },
  {
    id: 'store',
    title: 'HELLO, LOVOT',
    description: [
      '收获爱和分享爱。',
      '“一个激发你爱的本能的新型家庭机器人”',
      '你想欢迎一个 LOVOT 进入你的生活吗？'
    ],
    imageSrc: 'https://images.unsplash.com/photo-1546776310-5112afc53ce7?auto=format&fit=crop&q=80&w=1000',
    imageAlt: '你好 Lovot',
    theme: 'beige',
    buttonText: '前往商店'
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
        <div className="w-full bg-slate-50 py-8 text-center border-b border-slate-100">
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