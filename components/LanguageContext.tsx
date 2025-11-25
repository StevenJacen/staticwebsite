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
    titlePrefix: 'Technology that',
    titleHighlight: 'Warms',
    titleSuffix: 'Your Heart',
    description: 'Discover a new form of companionship. Inspired by the warmth of life and the precision of modern engineering.',
    learnMore: 'Learn More',
    viewGallery: 'View Gallery',
  },
  featureBlock: {
    readMore: 'Read more details',
  },
  about: {
    title: 'About HeartMemo',
    content: 'We believe that the future of technology is not just about intelligence, but about warmth. Inspired by the pure connection found in nature, we strive to build a future where robots and humans coexist in harmony.'
  },
  footer: {
    mission: 'Bringing warmth to technology. Our mission is to create interfaces that feel human, gentle, and kind.',
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
    titlePrefix: '让科技',
    titleHighlight: '温暖',
    titleSuffix: '人心',
    description: '探索全新的陪伴方式。灵感源自生命的温度与现代工程的精准。',
    learnMore: '了解更多',
    viewGallery: '浏览图库',
  },
  featureBlock: {
    readMore: '阅读更多详情',
  },
  about: {
    title: '关于 HeartMemo',
    content: '我们相信科技的未来不仅在于智能，更在于温度。受自然界纯粹连接的启发，我们致力于构建机器人与人类和谐共存的未来。'
  },
  footer: {
    mission: '为科技注入温度。我们的使命是创造具有人性、温和且友善的交互体验。',
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