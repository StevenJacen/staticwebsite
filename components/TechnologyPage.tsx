import React, { useEffect } from 'react';
import { Brain, Lock, MessageCircle, Radar, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const techCards = [
  {
    icon: MessageCircle,
    label: '自然对话',
    title: '让父母更容易开口',
    desc: '康康通过语音交互承接日常问候、陪聊和提醒，让父母不用学习复杂操作。',
  },
  {
    icon: Sparkles,
    label: '主动能力',
    title: '不只等待唤醒',
    desc: '康康可在合适场景中主动问候或提醒，具体触发能力以实际版本、设备状态和用户设置为准。',
  },
  {
    icon: Radar,
    label: '感知能力',
    title: '用于辅助互动，不做风险保证',
    desc: '声源响应、基础动作和相关感知能力用于改善互动体验，不保证识别所有异常情况。',
  },
  {
    icon: Lock,
    label: '数据权限',
    title: '家庭数据先授权再使用',
    desc: '设备绑定、家庭成员、消息、提醒和简报等能力以用户授权、设备状态、网络环境和隐私政策为准。',
  },
  {
    icon: Brain,
    label: '规划能力',
    title: '测试中功能要标注清楚',
    desc: '远程巡检、跌倒提示、健康数据、情绪识别、自动回充、SLAM 建图、第三方平台联动等，如未正式开放，将明确标注规划中或测试中。',
  },
];

export const TechnologyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="hm-page-hero">
          <div className="hm-page-hero-inner">
            <div className="hm-page-hero-copy">
              <p className="hm-page-kicker">Technology</p>
              <h1 className="hm-page-title">少一点技术名词，多一点家属放心</h1>
              <p className="hm-page-lead">每项能力都从真实使用出发：父母是否容易开口、产品何时主动、数据怎样授权，以及哪些功能仍在测试。</p>
            </div>
            <div className="hm-page-visual">
              <img src="/image/kangkang/robot-three-view.webp" alt="心忆康康机器人技术展示" />
            </div>
          </div>
        </section>

        <section className="hm-section bg-[#edf7fb]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {techCards.map((item) => (
                <article key={item.label} className="hm-card p-6">
                  <item.icon className="h-9 w-9 text-[#14b8c8]" />
                  <p className="mt-5 text-xs font-bold text-[#d94a38]">{item.label}</p>
                  <h2 className="mt-3 text-xl font-black leading-8 text-slate-950">{item.title}</h2>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
