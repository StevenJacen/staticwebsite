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
    title: 'Emotional Bond',
    description: [
      'Our technology focuses on the subtle non-verbal cues that build trust.',
      'Through soft gestures and eye contact, we bridge the gap between machine and life.',
      'It’s not just about function; it’s about the feeling of presence.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=1',
    imageAlt: 'Robot interacting with human',
    reverse: false 
  },
  {
    id: 'f2',
    title: 'Soft Robotics',
    description: [
      'Designed to be held, hugged, and loved.',
      'Advanced sensors monitor touch, temperature, and posture to respond naturally to your embrace.',
      'Safety and comfort are at the core of our hardware design philosophy.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=2',
    imageAlt: 'Soft texture close up',
    reverse: true 
  },
  {
    id: 'f3',
    title: 'Daily Rhythm',
    description: [
      'Wake up together, relax together.',
      'Our AI adapts to your lifestyle, learning your patterns to become the perfect companion.',
      'Experience a life where technology supports your emotional well-being seamlessly.'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=3',
    imageAlt: 'Lifestyle scene',
    reverse: false
  }
];

const featuresZh: FeatureItem[] = [
  {
    id: 'f1',
    title: '情感纽带',
    description: [
      '我们的技术专注于建立信任的微妙非语言信号。',
      '通过轻柔的手势和眼神接触，我们弥合了机器与生命之间的鸿沟。',
      '这不仅仅是功能，更是存在的温度。'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=1',
    imageAlt: '机器人与人类互动',
    reverse: false 
  },
  {
    id: 'f2',
    title: '柔性机器人学',
    description: [
      '专为拥抱和宠爱而设计。',
      '先进的传感器监测触摸、温度和姿态，以自然地回应您的拥抱。',
      '安全和舒适是我们硬件设计的核心理念。'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=2',
    imageAlt: '柔软质感特写',
    reverse: true 
  },
  {
    id: 'f3',
    title: '生活节律',
    description: [
      '一起醒来，一起放松。',
      '我们的 AI 适应您的生活方式，学习您的习惯，成为完美的伴侣。',
      '体验科技无缝支持您情感健康的每一天。'
    ],
    imageSrc: 'https://picsum.photos/800/800?random=3',
    imageAlt: '生活场景',
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