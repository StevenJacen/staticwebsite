import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface Translations {
  hero: {
    logo: string;
    titleHighlight: string;
    description: string;
    disclaimer: string;
  };
  vision: {
    description: string[];
  };
  featureBlock: {
    readMore: string;
  };
  footer: {
    mission: string;
    company: string;
    privacy: string;
    terms: string;
    receiveViaLine: string;
    officialAccount: string;
  };
  technologyPage: {
    title: string;
    subtitle: string;
    multimodal: { title: string; desc: string };
    realtime: { title: string; desc: string };
    personalities: { title: string; desc: string };
  };
  newsPage: {
    title: string;
    description: string;
    subtitle: string;
    backToNews: string;
  };
  aboutPage: {
    addressValue: string;
    phones: { label: string; value: string }[];
  };
}

const zhTranslations: Translations = {
  hero: {
    logo: 'HeartMemo',
    titleHighlight: '愿每个人都拥有爱和陪伴',
    description: '一个能感知你情绪、回应你需求的 AI 生活伙伴',
    disclaimer: '* 本视频中的心忆机器人为形象概念，部分规格、行为和功能可能与最终交付版本不同；产品能力受设备版本、网络状态和权限设置影响。',
  },
  vision: {
    description: [
      '心忆康康——一个真正“懂你”的陪伴者。',
      '',
      '它像一个贴心的朋友：',
      '',
      '在长辈独处时主动问候，',
      '在日常生活中提醒作息、饮水和活动，',
      '在需要帮助时提供求助关键词提示，',
      '通过心忆同启 APP，把牵挂传递给家人。',
      '',
      '我们不追求替代亲情的陪伴，',
      '只希望用科技为每个家庭搭建更温暖的沟通桥梁。',
      '',
      '北京心忆科技有限公司，让 AI 陪伴拥有温度。'
    ]
  },
  featureBlock: {
    readMore: '了解详情',
  },
  footer: {
    mission: '北京心忆科技有限公司，专注 AI 家庭情感陪伴机器人与心忆同启 APP。',
    company: '公司',
    privacy: '隐私政策',
    terms: '用户协议',
    receiveViaLine: '关注我们',
    officialAccount: '公众号',
  },
  technologyPage: {
    title: '核心科技',
    subtitle: '让 AI 理解情绪，让陪伴拥有温度',
    multimodal: {
      title: '多模态感知',
      desc: '通过语音、画面、肢体动作和交互内容等信息，辅助理解长辈状态，为问候、提醒和提示提供上下文。情绪识别能力不构成心理评估或医疗判断。'
    },
    realtime: {
      title: '主动陪伴与实时响应',
      desc: '心忆康康支持主动问候、远程提醒、求助关键词提示、视觉防跌倒检测、生活简报与家人消息传递，帮助日常关怀更及时。'
    },
    personalities: {
      title: '机器人系统工程',
      desc: '产品尺寸 435x245x245 mm，双轮电机差速驱动，激光雷达与视觉融合 SLAM，Wi-Fi 6 与蓝牙 5.4 联网，6 麦环形阵列，支持自动回充。'
    }
  },
  newsPage: {
    title: '资讯',
    description: '这里记录心忆科技的每一步成长、每一次突破，分享技术进展、产品动态与合作成果。',
    subtitle: '最新动态与里程碑',
    backToNews: '返回资讯列表'
  },
  aboutPage: {
    addressValue: '北京市海淀区永捷南路 2 号院 2 号楼',
    phones: [
      { label: '联系电话', value: '17600222898' },
      { label: '服务热线', value: '4001023698' }
    ]
  }
};

const enTranslations: Translations = {
  ...zhTranslations,
  hero: {
    logo: 'HeartMemo',
    titleHighlight: 'May everyone have love and companionship',
    description: 'An AI life companion that senses emotions and responds to everyday needs',
    disclaimer: '* The robot shown in this video is a concept. Specifications, behaviors, and features may vary from the final product.',
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
