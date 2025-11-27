import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface Translations {
  nav: {
    technology: string;
    news: string;
    about: string;
    store: string;
  };
  hero: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  vision: {
    title: string;
    text: string[];
  };
  features: {
    f1: { title: string; desc: string[]; button: string };
    f2: { title: string; desc: string[]; button: string };
    f3: { title: string; desc: string[]; button: string };
  };
  footer: {
    friendsTitle: string;
    friendsDesc: string;
    subscribe: string;
    mission: string;
    product: string;
    features: string;
    technology: string;
    design: string;
    pricing: string;
    company: string;
    careers: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
  }
}

const enTranslations: Translations = {
  nav: {
    technology: 'TECHNOLOGY',
    news: 'NEWS',
    about: 'ABOUT',
    store: 'WEB STORE',
  },
  hero: {
    title: 'Original Intention: Love & Companionship',
    subtitle: 'An AI partner that perceives emotions and responds to needs.',
    disclaimer: '* The robot shown is a concept. Actual specifications and behaviors may vary from the final product.',
  },
  vision: {
    title: 'Kangkang — A Companion Who Truly "Understands You"',
    text: [
      'Like a caring friend:',
      'When you are troubled, vent to Kangkang.',
      'Sometimes you just need a word of concern.',
      'It remembers your habits and offers reminders when needed.',
      'All from true understanding, not preset programs.'
    ]
  },
  features: {
    f1: {
      title: 'Not Just Responding, But Understanding',
      desc: ['Emotional Robotics™ is a robot technology created to stir people\'s feelings.'],
      button: 'See the Technology'
    },
    f2: {
      title: 'Not Just Dialogue, But Resonance',
      desc: ['You can create a one-of-a-kind robot using your favorite styles.'],
      button: 'See the Fashion'
    },
    f3: {
      title: 'Harvest Love, Share Love',
      desc: ['HeartMemo Technology — letting AI understand emotions, letting companionship have warmth.'],
      button: 'Visit Web Store'
    }
  },
  footer: {
    friendsTitle: 'HEARTMEMO FRIENDS',
    friendsDesc: 'Latest updates',
    subscribe: 'Receive via LINE',
    mission: 'Letting AI understand emotions.',
    product: 'Product',
    features: 'Features',
    technology: 'Technology',
    design: 'Design',
    pricing: 'Pricing',
    company: 'Company',
    careers: 'Careers',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: 'HeartMemo Inc. All rights reserved.',
  }
};

const zhTranslations: Translations = {
  nav: {
    technology: '技术',
    news: '资讯',
    about: '关于我们',
    store: '官方商城',
  },
  hero: {
    title: '初心：愿每个人都拥有爱和陪伴',
    subtitle: '一个能感知你情绪、回应你需求的AI生活伙伴',
    disclaimer: '*本视频中的心忆机器人是形象概念，一些规格与最终产品不同。它们的一些行为和功能可能与最终产品不同。',
  },
  vision: {
    title: '康康—— 一个真正“懂你”的陪伴者。',
    text: [
      '它就像一个贴心的朋友：',
      '当你遇到烦心的事情，那就对康康倾诉吧，一吐为快；',
      '你可能只是需要一句关心来回应；',
      '但它会记得你的习惯，在你需要时送上提醒与陪伴。',
      '这一切，都自源于真正的理解，而非预设的程序。'
    ]
  },
  features: {
    f1: {
      title: '不再只是回应，而是理解',
      desc: [
        '心忆科技的情感计算技术，是为了唤起人类内心的柔软而生。',
        '透过它的眼神、动作和声音，你将感受到前所未有的理解。'
      ],
      button: '查看技术详情'
    },
    f2: {
      title: '不再只是对话，而是共鸣',
      desc: [
        '你可以为它穿上独特的衣饰，打造独一无二的伙伴。',
        '每一次互动，都是心灵的共振。'
      ],
      button: '查看时尚周边'
    },
    f3: {
      title: '收获爱和分享爱',
      desc: [
        '心忆科技，让AI理解情绪，让陪伴拥有温度。',
        '你想在生活中迎接这样一位新成员吗？'
      ],
      button: '前往官方商城'
    }
  },
  footer: {
    friendsTitle: '心忆之友',
    friendsDesc: '获取最新资讯',
    subscribe: '关注官方微信',
    mission: '心忆科技，让AI理解情绪，让陪伴拥有温度。',
    product: '产品',
    features: '功能',
    technology: '技术',
    design: '设计',
    pricing: '定价',
    company: '公司',
    careers: '招聘',
    contact: '联系我们',
    privacy: '隐私政策',
    terms: '服务条款',
    rights: 'HeartMemo Inc. 保留所有权利。',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh'); 
  
  const t = language === 'en' ? enTranslations : zhTranslations;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};