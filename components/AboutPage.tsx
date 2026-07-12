import React, { useEffect } from 'react';
import { Brain, Building2, GraduationCap, Rocket, UsersRound } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const founders = [
  {
    name: '张凯',
    role: '创始人兼 CEO',
    desc: '太原理工大学计算机专业、中欧国际工商学院 EMBA，拥有机器人行业与企业经营管理经验，负责公司战略与商业化落地。',
  },
  {
    name: '赵利军',
    role: '联合创始人兼 CTO',
    desc: '清华大学本硕、中欧国际工商学院 EMBA，深耕 AI 算法、计算机视觉、自动驾驶与机器人研发。',
  },
  {
    name: '刘宁',
    role: '联合创始人兼 COO',
    desc: '南京大学生命科学本科、纽约州立大学市场营销硕士、中欧国际工商学院 EMBA，负责公司运营、资本与战略协同。',
  },
];

const researchers = [
  {
    name: '谭日宏',
    role: '总工程师',
    desc: '清华大学本科、中航技术研究院硕士，长期从事嵌入式与高性能计算，主导机器人嵌入式系统开发。',
  },
  {
    name: '王虎 博士',
    role: 'AI 架构师',
    desc: '中国科学院博士，负责具身智能感知与 AI 算法研发，具备算法、硬件、软件与产品落地经验。',
  },
  {
    name: '周红桂 博士',
    role: '情感架构师',
    desc: '中南大学心理学博士，研究方向覆盖情感计算、心理量表与交互心理，推动心理学研究转化为产品体验。',
  },
];

const milestones = [
  ['2025.06', '项目启动，围绕 AI、心理学与居家陪伴场景组建跨学科团队。'],
  ['2025', '入驻中关村 AI 北纬社区，完成初期团队和知识产权布局。'],
  ['2025.12', '推进首款心忆康康 MVP 产品与家庭场景验证。'],
  ['2026', '通过展会、论坛和真实用户互动，持续打磨产品与服务方式。'],
];

export const AboutPage: React.FC = () => {
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
              <p className="hm-page-kicker">About HeartMemo</p>
              <h1 className="hm-page-title">北京心忆科技有限公司</h1>
              <p className="hm-page-lead">北京心忆科技有限公司关注年轻家属与父母之间真实存在的距离：不常回家、提醒不及时、想关心却没有稳定入口。我们希望用 AI 与机器人产品，把日常问候、生活提醒和亲情消息变得更容易触达。</p>
            </div>
            <div className="hm-page-visual">
              <img src="/image/events/delegation-presentation.webp" alt="心忆科技团队产品交流" />
            </div>
          </div>
        </section>

        <section className="hm-section bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <Building2 className="h-10 w-10 text-[#d94a38]" />
              <p className="hm-eyebrow mt-6">公司介绍</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">让科技承接家庭里那些细小但重要的关心</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['有感知的存在', '通过语音、动作和设备能力理解使用场景，让互动更自然。'],
                ['有温度的交互', '从被动应答走向主动问候，让独处的时间少一点冷清。'],
                ['有边界的产品', '清楚说明授权、服务与能力范围，不替代家属照护和专业服务。'],
              ].map(([title, desc]) => (
                <article key={title} className="hm-card p-6">
                  <h3 className="text-xl font-black text-[#111827]">{title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#667085]">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hm-section bg-[#edf7fb]">
          <div className="mx-auto max-w-7xl">
            <div className="hm-section-heading">
              <UsersRound className="h-10 w-10 text-[#14b8c8]" />
              <p className="hm-eyebrow mt-5">创始人团队</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">学术、科技与商业的复合背景</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {founders.map((item) => (
                <article key={item.name} className="hm-card p-7">
                  <p className="text-sm font-bold text-[#d94a38]">{item.role}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#111827]">{item.name}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-[#667085]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hm-section bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="hm-section-heading">
              <GraduationCap className="h-10 w-10 text-[#d94a38]" />
              <p className="hm-eyebrow mt-5">科研团队</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">从底层系统到情感交互</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {researchers.map((item) => (
                <article key={item.name} className="hm-card p-7">
                  <Brain className="h-8 w-8 text-[#14b8c8]" />
                  <p className="mt-5 text-sm font-bold text-[#d94a38]">{item.role}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#111827]">{item.name}</h3>
                  <p className="mt-4 text-[15px] leading-8 text-[#667085]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hm-section bg-[#f8f4ed]">
          <div className="mx-auto max-w-7xl">
            <div className="hm-section-heading">
              <Rocket className="h-10 w-10 text-[#d94a38]" />
              <p className="hm-eyebrow mt-5">公司发展历程</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">从产品雏形走向真实家庭场景</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map(([time, desc]) => (
                <article key={time} className="hm-card p-6">
                  <p className="text-lg font-black text-[#d94a38]">{time}</p>
                  <p className="mt-4 text-[15px] leading-7 text-[#667085]">{desc}</p>
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
