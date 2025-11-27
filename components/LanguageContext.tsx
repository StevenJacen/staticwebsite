import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface Translations {
  nav: {
    technology: string;
    features: string;
    fashion: string;
    pricing: string;
    store: string;
  };
  hero: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };
  vision: {
    title: string;
    subtitle: string;
    description: string[];
  };
  featureBlock: {
    readMore: string;
  };
  footer: {
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
    latestUpdates: string;
    receiveViaLine: string;
  }
}

const enTranslations: Translations = {
  nav: {
    technology: 'Technology',
    features: 'Features',
    fashion: 'Fashion',
    pricing: 'Pricing',
    store: 'Web Store',
  },
  hero: {
    title: 'HeartMemo',
    subtitle: 'powered by love',
    disclaimer: '* The robot shown in this video is a concept. Actual specifications and behaviors may vary from the final product. Some behaviors may differ.',
  },
  vision: {
    title: 'Our Vision:',
    subtitle: 'May everyone have love and companionship.',
    description: [
      'Meet Kangkang — a companion who truly "understands you".',
      'Like a caring friend, Kangkang is there when you need to vent about your troubles.',
      'Sometimes you just need to be heard, and Kangkang is always ready to listen.'
    ]
  },
  featureBlock: {
    readMore: 'See the details',
  },
  footer: {
    mission: 'HeartMemo Tech. Letting AI understand emotions, letting companionship have warmth.',
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
    latestUpdates: 'Latest Updates',
    receiveViaLine: 'Connect with us',
  }
};

const zhTranslations: Translations = {
  nav: {
    technology: '技术',
    features: '功能',
    fashion: '时尚',
    pricing: '定价',
    store: '在线商店',
  },
  hero: {
    title: 'HeartMemo',
    subtitle: 'powered by love',
    disclaimer: '*本视频中的心忆机器人是形象概念，一些规格与最终产品不同。它们的一些行为和功能可能与最终产品不同。',
  },
  vision: {
    title: '初心：愿每个人都拥有爱和陪伴',
    subtitle: '一个能感知你情绪、回应你需求的AI生活伙伴',
    description: [
      '康康—— 一个真正“懂你”的陪伴者。',
      '它就像一个贴心的朋友：',
      '当你遇到烦心的事情，那就对康康倾诉吧，一吐为快；',
      '你可能只是需要一句关心来回应；',
      '但它会记得你的习惯，在你需要时送上提醒与陪伴。'
    ]
  },
  featureBlock: {
    readMore: '了解详情',
  },
  footer: {
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
    latestUpdates: '最新资讯',
    receiveViaLine: '关注我们',
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