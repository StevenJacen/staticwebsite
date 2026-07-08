import React, { useEffect } from 'react';
import { Building2, HeartHandshake, ShieldCheck, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const values = [
  {
    icon: HeartHandshake,
    title: '面向年轻家属',
    desc: '官网和产品表达优先帮助子女理解价值、确认边界、做出购买或咨询决策。',
  },
  {
    icon: UsersRound,
    title: '连接家庭关系',
    desc: '我们不替代亲情，而是让提醒、问候和消息在家庭成员之间更稳定地流动。',
  },
  {
    icon: ShieldCheck,
    title: '说清能力边界',
    desc: '产品能力以实际上线版本为准，辅助提示不替代医疗、照护或紧急救援。',
  },
];

export const AboutPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="hm-page-hero">
          <div className="hm-page-hero-inner">
            <div className="hm-page-hero-copy">
              <p className="hm-page-kicker">About HeartMemo</p>
              <h1 className="hm-page-title">北京心忆科技有限公司，让 AI 陪伴拥有温度</h1>
              <p className="hm-page-lead">
                我们关注的是年轻家属和父母之间真实存在的距离：不常回家、提醒不及时、想关心却没有稳定入口。心忆希望用 AI 与机器人产品，把这些关心变得更容易触达。
              </p>
            </div>
            <div className="hm-page-card">
              <Building2 className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-2xl font-black">公司定位</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                面向年轻家属、家庭照护场景和康养合作方，提供 AI 陪伴、家庭连接和智能硬件相关产品与服务。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <item.icon className="h-9 w-9 text-blue-500" />
                <h2 className="mt-6 text-xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-slate-100 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="text-3xl font-black text-slate-950 md:text-5xl">想进一步了解心忆？</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">可以从产品、资讯或商务合作入口继续了解我们的产品落地和服务方式。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link to="/products" className="rounded-full bg-blue-600 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700">
                查看产品
              </Link>
              <Link to="/cooperation" className="rounded-full border border-slate-300 px-7 py-3 text-center text-sm font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-600">
                商务合作
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
