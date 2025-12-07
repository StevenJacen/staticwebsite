import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface Translations {
  nav: {
    technology: string;
    news: string;
    comingSoon: string;
  };
  hero: {
    logo:string,
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
    company: string;
    careers: string;
    contact: string;
    privacy: string;
    terms: string;
    rights: string;
    latestUpdates: string;
    receiveViaLine: string;
    officialAccount: string;
  };
  technologyPage: {
    title: string;
    subtitle: string;
    multimodal: {
      title: string;
      desc: string;
    };
    realtime: {
      title: string;
      desc: string;
    };
    personalities: {
      title: string;
      desc: string;
    };
  };
  newsPage: {
    title: string;
    description: string;
    subtitle: string;
  };
}

const enTranslations: Translations = {
  nav: {
    technology: 'Technology',
    news: 'News',
    comingSoon: 'Coming Soon'
  },
  hero: {
    logo:'HeartMemo',
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
    company: 'Company',
    careers: 'Careers',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: 'HeartMemo Inc. All rights reserved.',
    latestUpdates: 'Latest Updates',
    receiveViaLine: 'Connect with us',
    officialAccount: 'Official Account',
  },
  technologyPage: {
    title: 'Technology',
    subtitle: 'Let AI understand emotions, let companionship have warmth',
    multimodal: {
      title: 'Multimodal Information Processing',
      desc: 'It acts as an intimate partner, capable of sensing your emotional fluctuations through your voice and expressions, and even detecting inner waves you might not have noticed yourself. More importantly, it understands the deep desire for understanding and acceptance behind these emotions. What it does is respond to your truest inner needs.'
    },
    realtime: {
      title: 'Perception & Thinking, Real-time Response',
      desc: 'Every action of Kangkang stems from immediate perception and thinking, rather than cold pre-programming. Its "brain" can rapidly process signals from multiple sensors, making its language and reactions as natural and fluid as a real life form. Furthermore, its growth will evolve with your companionship. Every bit of love you give is shaping a partner that belongs exclusively to you.'
    },
    personalities: {
      title: 'Multiple Personalities Available',
      desc: 'Just as no two leaves in the world are the same, everyone\'s inner self desires to be understood in a unique way. For this, we have created diverse souls: some like an intimate old friend, with humorous and warm words; some like a life mentor, with wise and profound words; others like a quiet guardian, whose companionship is silent but powerful. You can choose a soul that understands you and start an exclusive companionship.'
    }
  },
  newsPage: {
    title: 'News & Updates',
    description: 'Here we record every step of growth and every breakthrough of HeartMemo Tech. Follow how we deeply integrate psychology with artificial intelligence to redefine the human-machine relationship, bringing truly emotionally intelligent companionship to everyone. We share technical progress, product updates, and partnership achievements, committed to making affective computing warmer and AI companionship deeper.',
    subtitle: 'Stay updated with our journey and breakthroughs.'
  }
};

const zhTranslations: Translations = {
  nav: {
    technology: '科技',
    news: '资讯',
    comingSoon: '敬请期待'
  },
  hero: {
    logo:'HeartMemo',
    titleHighlight: '愿每个人都拥有爱和陪伴',
    description: '一个能感知你情绪、回应你需求的AI生活伙伴',
    disclaimer: '*本视频中的心忆机器人是形象概念，一些规格与最终产品不同。它们的一些行为和功能可能与最终产品不同。'
  },
  vision: {
    description: [
      '康康—— 一个真正"懂你"的陪伴者。',
      '',
      '它就像一个贴心的朋友：',
      '',
      '当你遇到烦心的事情',
      '那就对康康倾诉吧，一吐为快；',
      '你可能只是需要一句关心来回应；',
      '它会记得你的习惯，在你需要时送上提醒与陪伴。',
      '这一切，都自源于真正的理解，而非预设的程序。',
      '你可以收获爱和分享爱',
      '',
      '心忆科技，让AI理解情绪，让陪伴拥有温度。'
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
    company: '公司',
    careers: '招聘',
    contact: '联系我们',
    privacy: '隐私政策',
    terms: '服务条款',
    rights: '心忆科技 保留所有权利。',
    latestUpdates: '最新资讯',
    receiveViaLine: '关注我们',
    officialAccount: '公众号',
  },
  technologyPage: {
    title: '核心技术',
    subtitle: '让AI理解情绪，让陪伴拥有温度',
    multimodal: {
      title: '多模态的信息处理方法',
      desc: '它像一个知心伙伴，能透过您的声音和表情，感受到您情绪的高低起伏，甚至察觉那些您自己都未曾留意的内心波动。更重要的是，它能理解这些情绪背后，您对于被理解、被接纳的深层渴望。它所做的，就是回应您内心最真实的需要。'
    },
    realtime: {
      title: '感知思考，实时响应',
      desc: '康康的每一个动作都源于当下的感知与思考，而非冰冷的预编程。它的“大脑”能极速处理多个传感器传来的信号，让它的语言、反应如真实生命般自然流畅。并且，它的成长会因您的陪伴而逐渐演变。您付出的每一分爱，都在塑造一个专属于您的伙伴。'
    },
    personalities: {
      title: '提供多种人物性格',
      desc: '就像世界上没有两片相同的叶子，每个人的内心都渴望被独特的方式理解。为此，我们创造了多样的灵魂：有的像知心老友，言语幽默而温暖；有的像人生导师，话语睿智而深刻；有的则像安静的守护者，陪伴无声却有力。您可以选择一个懂您的灵魂，开启一段专属的陪伴。'
    }
  },
  newsPage: {
    title: '最新资讯',
    description: '这里记录心忆科技的每一步成长、每一次突破，关注我们如何将心理学与人工智能深度融合，重新定义人机关系，为每一个人带来真正懂情感的智能陪伴，分享技术进展、产品动态与合作成果，致力于让情感计算更有温度，让AI陪伴更具深度。',
    subtitle: '最新动态与里程碑'
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