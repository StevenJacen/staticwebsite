import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface Translations {
  nav: {
    technology: string;
    news: string;
    about: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    disclaimer: string;
    learnMore: string;
    viewGallery: string;
  };
  featureBlock: {
    readMore: string;
  };
  about: {
    title: string;
    content: string;
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
  }
}

const enTranslations: Translations = {
  nav: {
    technology: 'Technology',
    news: 'News',
    about: 'About Us',
  },
  hero: {
    titlePrefix: 'Our Vision:',
    titleHighlight: 'Love & Companionship',
    titleSuffix: 'For Everyone',
    description: 'An AI life partner that perceives your emotions and responds to your needs.',
    disclaimer: '* The robot shown in this video is a concept. Actual specifications and behaviors may vary from the final product.',
    learnMore: 'Learn More',
    viewGallery: 'View Gallery',
  },
  featureBlock: {
    readMore: 'Read more details',
  },
  about: {
    title: 'About HeartMemo',
    content: 'HeartMemo Technology: Letting AI understand emotions, giving companionship warmth.'
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
  }
};

const zhTranslations: Translations = {
  nav: {
    technology: '技术',
    news: '资讯',
    about: '关于我们',
  },
  hero: {
    titlePrefix: '初心：',
    titleHighlight: '愿每个人都拥有爱和陪伴',
    titleSuffix: '',
    description: '一个能感知你情绪、回应你需求的AI生活伙伴',
    disclaimer: '*本视频中的心忆机器人是形象概念，一些规格与最终产品不同。它们的一些行为和功能可能与最终产品不同。',
    learnMore: '了解更多',
    viewGallery: '浏览图库',
  },
  featureBlock: {
    readMore: '阅读更多详情',
  },
  about: {
    title: '关于 HeartMemo',
    content: '心忆科技，让AI理解情绪，让陪伴拥有温度。'
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