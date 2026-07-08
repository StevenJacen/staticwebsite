import React, { useEffect } from 'react';
import { Brain, Lock, MessageCircle, Radar, ShieldCheck, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const techCards = [
  {
    icon: MessageCircle,
    title: '自然对话',
    desc: '围绕问候、闲聊、提醒和日常百科进行表达，让父母更容易接受这个“家里的小伙伴”。',
  },
  {
    icon: Brain,
    title: '辅助判断',
    desc: '通过语音、交互和使用记录提供辅助提示，帮助家人了解大致状态，但不替代医疗或心理评估。',
  },
  {
    icon: Radar,
    title: '机器人感知',
    desc: '结合基础传感、语音交互和设备状态，让陪伴、提醒与家庭连接有更稳定的硬件承载。',
  },
  {
    icon: Lock,
    title: '隐私优先',
    desc: '远程查看、消息同步和数据使用都应建立在授权、权限管理和明确告知之上。',
  },
];

export const TechnologyPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="hm-page-hero">
          <div className="hm-page-hero-inner">
            <div className="hm-page-hero-copy">
              <p className="hm-page-kicker">Technology</p>
              <h1 className="hm-page-title">让陪伴更自然，也让边界更清楚</h1>
              <p className="hm-page-lead">
                心忆的技术表达不追求堆参数，而是回答子女真正关心的问题：父母是否容易使用、家人是否能连接、隐私是否说清楚、能力边界是否可靠。
              </p>
            </div>
            <div className="hm-page-visual">
              <img src="/image/kangkang/robot-three-view.webp" alt="心忆康康机器人技术展示" className="h-full min-h-[360px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {techCards.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                  <item.icon className="h-9 w-9 text-blue-500" />
                  <h2 className="mt-6 text-xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <ShieldCheck className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">官网上的技术，要让家属更放心</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {['不夸大医疗能力', '不暴露内部研发阶段', '用家庭可理解的话说清楚价值'].map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 p-6 text-sm font-medium leading-7 text-slate-700">
                  <Sparkles className="mb-4 h-6 w-6 text-blue-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
