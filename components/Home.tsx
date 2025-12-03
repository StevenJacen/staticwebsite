import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Vision } from './Vision';
import { FeatureBlock } from './FeatureBlock';
import { Footer } from './Footer';
import { FeatureItem } from '../types';
import { useLanguage } from './LanguageContext';
import { useLocation } from 'react-router-dom';

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
    buttonText: 'See the Technology',
    link: '/technology'
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
    buttonText: '查看技术详情',
    link: '/technology'
  }
];

export const Home: React.FC = () => {
  const { language, t } = useLanguage();
  const features = language === 'en' ? featuresEn : featuresZh;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
            {/* Disclaimer Strip */}
          <div className="w-full py-8 text-center bg-gradient-to-b from-white to-blue-50">
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
