import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Vision } from './Vision';
import { FeatureBlock } from './FeatureBlock';
import { Footer } from './Footer';
import { FeatureItem } from '../types';
import { useLanguage } from './LanguageContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Bell, HeartHandshake, ShieldCheck, Cpu, Headphones, Smartphone } from 'lucide-react';

const featuresZh: FeatureItem[] = [
  {
    id: 'products',
    title: '产品',
    description: [
      '心忆康康守护版是一款 AI 家庭情感陪伴机器人，搭配心忆同启 APP 使用。',
      '支持主动问候、远程提醒、情绪识别、求助关键词提示、生活简报与家人消息传递。',
      '硬件采用树脂机身与布艺表面，米白、棕、粉、橘等配色，适合家庭陪伴与安全守护场景。'
    ],
    backgroundImage: '/image/kangkang/product-family.webp',
    backgroundImageMobile: '/image/kangkang/product-family.webp',
    imageAlt: '心忆康康产品',
    theme: 'teal',
    buttonText: '查看产品详情',
    link: '/products'
  },
  {
    id: 'technology',
    title: '科技',
    description: [
      '采用大语言模型，结合心理学知识、BSLA 情感计算模型与机器人感知系统。',
      '康康能够通过语音、画面和交互内容辅助理解长辈状态，提供更自然的问候、提醒和陪伴。',
      '产品能力以实际交付版本为准，情绪识别和求助提示均为辅助能力，不构成心理评估或医疗判断。'
    ],
    backgroundImage: '/image/kangkang/robot-three-view.webp',
    backgroundImageMobile: '/image/kangkang/robot-three-view.webp',
    imageAlt: '机器人技术',
    theme: 'gray',
    buttonText: '查看核心能力',
    link: '/technology'
  },
  {
    id: 'solutions',
    title: '场景方案',
    description: [
      '居家养老：1 台康康机器人 + 家庭成员 APP，帮助完成远程提醒、日常陪伴和家庭信息同步。',
      '社区康养：多台康康机器人 + 管理后台，辅助巡访和关怀触达。',
      '机构合作：围绕设备部署、家属沟通与住户体验提供定制化方案。'
    ],
    backgroundImage: '/image/kangkang/scene-daily-care.webp',
    backgroundImageMobile: '/image/kangkang/scene-daily-care.webp',
    imageAlt: '场景方案',
    theme: 'news',
    buttonText: '查看场景方案',
    link: '/solutions'
  }
];

const valueItems = [
  {
    icon: HeartHandshake,
    title: '亲情沟通 · 触手可及',
    desc: '支持语音与文字交互，让家人之间的问候不受距离限制。AI 对话可闲聊、可科普，提供日常陪伴体验。',
  },
  {
    icon: Bell,
    title: '生活提醒 · 贴心准时',
    desc: '通过 APP 设置作息、饮水、活动等日常事项提醒，帮助长辈规律生活。具体事项安排请以本人或家庭实际确认为准。',
  },
  {
    icon: ShieldCheck,
    title: '隐私保护 · 用心设计',
    desc: '产品采用权限管理、本地处理、传输加密、最小必要采集和摄像头物理遮挡等措施降低隐私风险。',
  },
];

const trustItems = [
  {
    icon: Cpu,
    title: '可落地硬件能力',
    desc: '心忆康康守护版配备激光雷达、视觉融合 SLAM、6 麦环形阵列、1080p RGB 摄像头与自动回充能力。',
  },
  {
    icon: Headphones,
    title: 'AI + 真人管家',
    desc: 'AI 系统处理基础日常陪伴需求，真人管家团队提供关怀与响应服务，服务范围以上线说明为准。',
  },
  {
    icon: Smartphone,
    title: 'APP 与家庭连接',
    desc: '心忆同启 APP 支持远程提醒、生活简报、家人消息传递和设备联动，帮助牵挂更及时触达。',
  },
];

export const Home: React.FC = () => {
  const { t } = useLanguage();
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
        <div className="w-full py-8 text-center bg-gradient-to-b from-white to-blue-50">
          <p className="text-[10px] md:text-xs text-slate-500 max-w-4xl mx-auto px-4 leading-relaxed font-medium">
            {t.hero.disclaimer}
          </p>
        </div>
        <Vision />

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-blue-500 tracking-widest uppercase">Core Value</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">不常回家，就选心忆康康</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {valueItems.map((item) => (
                <article key={item.title} className="rounded-2xl bg-slate-50 p-7 shadow-sm">
                  <item.icon className="w-8 h-8 text-blue-500 mb-5" />
                  <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-blue-500 tracking-widest uppercase">Trust</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">从硬件、服务到家庭连接的信任参考</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {trustItems.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                  <item.icon className="w-8 h-8 text-blue-500 mb-5" />
                  <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col">
          {featuresZh.map((feature) => (
            <FeatureBlock key={feature.id} item={feature} />
          ))}
        </div>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">想了解更多？</h2>
              <p className="mt-3 text-slate-300">下载心忆同启 APP，用 AI 连接亲情。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/support" className="rounded-full bg-blue-500 px-7 py-3 text-center text-sm font-bold text-white hover:bg-blue-600 transition">
                获取下载与客服入口
              </Link>
              <Link to="/cooperation" className="rounded-full border border-white/30 px-7 py-3 text-center text-sm font-bold text-white hover:bg-white hover:text-slate-900 transition">
                商务合作咨询
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
