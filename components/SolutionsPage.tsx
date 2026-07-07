import React, { useEffect } from 'react';
import { Building2, CheckCircle2, Home, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const scenarios = [
  {
    icon: Home,
    title: '异地子女与独居父母',
    desc: '适合子女不常在父母身边，但希望把提醒、问候和近况了解做得更稳定的家庭。',
    points: ['日常提醒', '主动问候', '生活简报', 'APP 家庭连接'],
  },
  {
    icon: UsersRound,
    title: '多个家人共同照护',
    desc: '适合兄弟姐妹、夫妻或亲属共同关心父母，需要统一入口了解设备和提醒状态。',
    points: ['家庭成员管理', '消息传递', '权限设置', '照护协同'],
  },
  {
    icon: Building2,
    title: '社区康养与机构落地',
    desc: '适合社区、养老机构、康养服务商等合作方，围绕设备部署和服务流程评估合作。',
    points: ['场景咨询', '部署建议', '服务对接', '商务合作'],
  },
];

export const SolutionsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
          <div className="absolute inset-0 opacity-25">
            <img src="/image/kangkang/scene-daily-care.webp" alt="家庭照护场景" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">Solutions</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">给不同家庭和机构的落地方式</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              从异地子女购买，到社区康养和机构合作，官网需要让不同角色快速判断：这个产品能放在哪、怎么用、下一步找谁咨询。
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {scenarios.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-7">
                <item.icon className="h-10 w-10 text-blue-500" />
                <h2 className="mt-6 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                <div className="mt-6 grid gap-3">
                  {item.points.map((point) => (
                    <p key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      {point}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-blue-600 p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="text-3xl font-black md:text-5xl">不确定适合哪种场景？</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50">
                可以先从父母居住状态、网络条件、家庭成员照护方式和购买预算开始沟通。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link to="/products#kangkang" className="rounded-full bg-white px-7 py-3 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-50">
                查看产品
              </Link>
              <Link to="/cooperation" className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-blue-700">
                咨询合作
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
