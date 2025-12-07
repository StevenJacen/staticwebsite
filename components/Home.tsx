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
      'Utilizing large language models, combined with psychological knowledge and techniques, to create emotional companion robots.',
      'No longer just responding, but truly understanding.',
      'It remembers your habits, grows with its environment, and forms its own unique personality.',
      'Providing care and companionship whenever you need it.'
    ],
    backgroundImage: '/image/technology.png',
    backgroundImageMobile: '/image/technology-m.png',
    imageAlt: 'Robot Technology',
    theme: 'gray',
    buttonText: 'See the Technology',
    link: '/technology'
  },
  {
    id: 'news',
    title: 'LATEST NEWS',
    description: [
      'Here we record every step of growth and every breakthrough of HeartMemo Tech.',
      'Follow how we deeply integrate psychology with artificial intelligence to redefine the human-machine relationship.',
      'bringing truly emotionally intelligent companionship to everyone',
      'We share technical progress, product updates, and partnership achievements, committed to making affective computing warmer and AI companionship deeper.',
    ],
    backgroundImage: '/image/new.png',
    backgroundImageMobile: '/image/new-m.png',
    imageAlt: 'Latest News',
    theme: 'news',
    buttonText: 'Read More',
    link: '/news'
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
  },
  {
    id: 'news',
    title: '资讯',
    description: [
      '这里记录心忆科技的每一步成长、每一次突破',
      '关注我们如何将心理学与人工智能深度融合，重新定义人机关系',
      '为每一个人带来真正懂情感的智能陪伴',
      '分享技术进展、产品动态与合作成果，致力于让情感计算更有温度，让AI陪伴更具深度。'
    ],
    backgroundImage: '/image/new.png',
    backgroundImageMobile: '/image/new-m.png',
    imageAlt: '资讯',
    theme: 'news',
    buttonText: '了解更多',
    link: '/news'
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
