import React, { useEffect } from 'react';
import { Building2, CheckCircle2, Home, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const scenarios = [
  {
    icon: Home,
    title: '不常在身边，也能把关心安排到日常',
    label: '异地子女',
    desc: '适合父母独居或半独居、子女不常回家的家庭。康康帮助承接日常问候、提醒和亲情消息。',
    points: ['日常问候', '生活提醒', '亲情消息', 'APP 家庭连接'],
    cta: '咨询适合我家的版本',
    href: '/products/kangkang#pricing',
  },
  {
    icon: UsersRound,
    title: '多个家人，共用一个关怀入口',
    label: '多人照护',
    desc: '适合兄弟姐妹或亲属共同照护父母，通过 APP 协同设置提醒、发送消息和管理权限。',
    points: ['家庭成员管理', '消息传递', '提醒设置', '权限管理'],
    cta: '了解家庭空间',
    href: '/products/app',
  },
  {
    icon: Building2,
    title: '让陪伴设备进入服务流程评估',
    label: '社区 / 机构',
    desc: '适合社区康养、养老机构、康复服务商等合作方，围绕设备展示、部署、服务流程和用户体验开展沟通。',
    points: ['设备展示', '部署沟通', '流程评估', '用户体验'],
    cta: '联系机构合作',
    href: '/cooperation',
  },
];

export const SolutionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="hm-page-hero">
          <div className="absolute inset-0 opacity-35">
            <img src="/image/v4/scene-4.jpg" alt="康康家庭使用场景" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#102033] via-[#102033]/90 to-[#102033]/45" />
          <div className="hm-page-hero-inner">
            <div className="hm-page-hero-copy">
              <p className="hm-page-kicker">Solutions</p>
              <h1 className="hm-page-title">让关心进入不同家庭的日常</h1>
              <p className="hm-page-lead">面向异地子女、独居父母、多人照护家庭、社区康养和机构合作，了解康康的使用方式和服务边界。</p>
            </div>
          </div>
        </section>

        <section className="hm-section bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {scenarios.map((item) => (
              <article key={item.label} className="hm-card flex flex-col p-7">
                <item.icon className="h-10 w-10 text-[#d94a38]" />
                <p className="mt-5 text-sm font-bold text-[#d94a38]">{item.label}</p>
                <h2 className="mt-3 text-2xl font-black leading-9 text-slate-950">{item.title}</h2>
                <p className="mt-4 text-[15px] leading-8 text-slate-600">{item.desc}</p>
                <div className="mt-6 grid gap-3">
                  {item.points.map((point) => (
                    <p key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-[#14b8c8]" />
                      {point}
                    </p>
                  ))}
                </div>
                <Link to={item.href} className="hm-secondary mt-8 px-5">{item.cta}</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
