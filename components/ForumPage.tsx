import React, { useEffect } from 'react';
import { Bot, CalendarDays, MessagesSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const topics = [
  { icon: Bot, title: '产品与场景', desc: '围绕具身智能产品如何进入真实家庭、社区和服务场景展开交流。' },
  { icon: MessagesSquare, title: '行业观点', desc: '关注机器人、人工智能与家庭关怀相关的实践观察和公开讨论。' },
  { icon: CalendarDays, title: '论坛活动', desc: '后续论坛、沙龙与社区活动将在这里持续更新。' },
];

export const ForumPage: React.FC = () => {
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
              <p className="hm-page-kicker">Embodied Intelligence Community</p>
              <h1 className="hm-page-title">具身智能论坛社区</h1>
              <p className="hm-page-lead">连接产品团队、行业伙伴和真实场景，共同讨论具身智能如何从技术走向可理解、可使用的日常体验。</p>
            </div>
          </div>
        </section>
        <section className="hm-section bg-[#fbfaf7]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-3">
              {topics.map((item) => (
                <article key={item.title} className="hm-card p-7">
                  <item.icon className="h-9 w-9 text-[#d94a38]" />
                  <h2 className="mt-5 text-2xl font-black text-[#111827]">{item.title}</h2>
                  <p className="mt-4 text-[15px] leading-8 text-[#667085]">{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-[8px] border border-[#f2c9aa] bg-[#fff1e7] p-8 md:flex md:items-center md:justify-between md:gap-8">
              <div>
                <h2 className="text-2xl font-black text-[#111827]">社区内容正在持续建设</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">可先通过最新资讯查看心忆参加的论坛和活动。</p>
              </div>
              <Link to="/news" className="hm-primary mt-6 px-6 md:mt-0">查看最新资讯</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
