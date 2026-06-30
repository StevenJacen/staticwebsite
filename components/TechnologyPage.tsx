import React, { useEffect } from 'react';
import { Activity, Brain, Cpu, Eye, Lock, UserCheck } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from './LanguageContext';

const pillars = [
  [Eye, '多模态感知', '通过语音、画面、肢体动作和交互内容等信息，辅助理解长辈状态。'],
  [Brain, 'BSLA 情感计算模型', '结合心理学研究和情感计算方法，为基础情绪识别、回应策略和陪伴交互提供理论支撑。'],
  [Activity, '主动陪伴策略', '在老人独处、生日祝福、情绪低落等场景中触发问候或提醒。'],
  [Cpu, '机器人系统工程', '覆盖嵌入式、计算机视觉、自然语言处理、机器人控制和硬件交互。'],
  [UserCheck, 'AI + 真人管家', 'AI 系统处理基础陪伴需求，真人服务团队承接更复杂的关怀与响应流程。'],
  [Lock, '权限与隐私保护', '通过权限管理、传输加密、最小必要采集和摄像头物理遮挡等措施降低隐私风险。'],
];

export const TechnologyPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/image/technology.png" alt="Technology Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">
              {t.technologyPage.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              {t.technologyPage.subtitle}
            </p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(([Icon, title, desc]) => (
              <article key={title as string} className="bg-white rounded-2xl shadow-sm p-7">
                {React.createElement(Icon as typeof Eye, { className: 'w-9 h-9 text-blue-500 mb-6' })}
                <h2 className="text-xl font-bold text-slate-800">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-white p-6 text-xs leading-6 text-slate-500 shadow-sm">
            情绪识别、跌倒检测、求助提示和远程查看均为辅助能力，不构成心理评估、医疗判断或急救承诺。
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};
