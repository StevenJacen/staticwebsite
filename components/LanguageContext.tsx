import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface Translations {
  nav: {
    technology: string;
    features: string;
    fashion: string;
    pricing: string;
  };
  hero: {
    titleHighlight: string;
    description: string;
    disclaimer: string;
  };
  vision: {
    description: string[];
  };
  features: {
    f1: {
      title: string;
      desc: string[];
      button: string;
    };
    f2: {
      title: string;
      desc: string[];
      button: string;
    };
    f3: {
      title: string;
      desc: string[];
      button: string;
    };
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
  },
  hero: {
    titleHighlight: 'May everyone have love and companionship',
    description: 'An AI life companion that senses your emotions and responds to your needs',
    disclaimer: '* The robot shown in this video is a concept. Actual specifications and behaviors may vary from the final product. Some behaviors may differ.',
  },
  vision: {
    description: [
      'Meet Kangkang — a companion who truly "understands you".',
      'Like a caring friend:',
      'When you need to vent about your troubles, talk to Kangkang and let it all out;',
      'You might just need a caring response;',
      'It remembers your habits and offers reminders and companionship when you need them.'
    ]
  },
  features: {
    f1: {
      title: 'AI-Powered Emotional Understanding',
      desc: [
        'Advanced emotion recognition technology that understands your feelings',
        'Personalized responses based on your emotional state',
        'Deep learning algorithms that grow with you'
      ],
      button: 'Learn More'
    },
    f2: {
      title: 'Designed for Connection',
      desc: [
        'Crafted with love and care for meaningful companionship',
        'Beautiful design that fits naturally into your life',
        'Always there when you need someone to talk to'
      ],
      button: 'Explore Design'
    },
    f3: {
      title: 'Share the Love',
      desc: [
        'Bring HeartMemo to your loved ones',
        'Perfect gift for those who need companionship',
        'Experience the warmth of AI-powered care'
      ],
      button: 'Get Started'
    }
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
  },
  hero: {
    titleHighlight: '愿每个人都拥有爱和陪伴',
    description: '一个能感知你情绪、回应你需求的AI生活伙伴',
    disclaimer: '*本视频中的心忆机器人是形象概念，一些规格与最终产品不同。它们的一些行为和功能可能与最终产品不同。'
  },
  vision: {
    description: [
      '康康—— 一个真正"懂你"的陪伴者。',
      '它就像一个贴心的朋友：',
      '当你遇到烦心的事情，那就对康康倾诉吧，一吐为快；',
      '你可能只是需要一句关心来回应；',
      '但它会记得你的习惯，在你需要时送上提醒与陪伴。'
    ]
  },
  features: {
    f1: {
      title: 'AI驱动的情感理解',
      desc: [
        '先进的情感识别技术，真正理解你的感受',
        '基于你的情绪状态提供个性化回应',
        '深度学习算法，与你一起成长'
      ],
      button: '了解更多'
    },
    f2: {
      title: '为连接而设计',
      desc: [
        '用爱与关怀打造有意义的陪伴',
        '融入生活的优雅设计',
        '当你需要倾诉时，它始终在你身边'
      ],
      button: '探索设计'
    },
    f3: {
      title: '分享爱意',
      desc: [
        '将心忆带给你爱的人',
        '送给需要陪伴之人的完美礼物',
        '体验AI驱动的温暖关怀'
      ],
      button: '立即开始'
    }
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