import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Bot, CheckCircle2, HeartHandshake, ShieldCheck, Smartphone, Users, Cpu, Headphones, ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const values = [
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
    desc: '产品采用权限管理、本地处理、传输加密、最小必要采集和物理遮挡摄像头等措施降低隐私风险。',
  },
];

const products = [
  {
    icon: Smartphone,
    name: '心忆同启 APP',
    title: '装在手机里的家庭关怀助手',
    points: ['远程提醒', '家庭空间', '生活简报', '设备联动'],
  },
  {
    icon: Bot,
    name: 'AI 康康机器人',
    title: '居家陪伴机器人',
    points: ['主动问候', '情绪关怀', '求助提示', '日常备忘'],
  },
];

const trust = [
  { icon: Cpu, title: '硬件可交付', desc: '激光雷达、视觉融合 SLAM、6 麦环形阵列、1080p RGB 摄像头、自动回充。' },
  { icon: Headphones, title: 'AI + 真人管家', desc: 'AI 处理基础陪伴需求，真人服务团队承接更复杂的关怀与响应流程。' },
  { icon: Users, title: '复合型团队', desc: '创始团队兼具学术、科技与商业背景，科研团队覆盖 AI、嵌入式、心理学与机器人控制。' },
];

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#fffaf6] font-sans text-slate-950">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50">
          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="relative z-10">
              <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-rose-600 shadow-sm">
                AI 养老陪伴 · 家庭关怀助手
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                愿每个人都拥有爱和陪伴
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700 md:text-2xl">
                做一个能感知你情绪、回应你需求的 AI 生活伙伴。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-600">
                  了解产品 <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/solutions" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-bold text-slate-800 transition hover:border-rose-300 hover:text-rose-600">
                  查看场景方案
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="/image/kangkang/home-remote-care.webp" alt="老人和家人视频通话，康康机器人在旁陪伴" className="w-full rounded-[2rem] object-cover shadow-2xl shadow-rose-100" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black text-rose-600">价值主张</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">不常回家，就选心忆康康</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article key={item.title} className="rounded-3xl border border-rose-100 bg-white p-7 shadow-sm">
                <item.icon className="mb-5 h-8 w-8 text-rose-500" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm font-black text-rose-600">产品预览</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">软件连接家人，硬件陪在身边</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                心忆同启 APP 与 AI 康康机器人共同承接提醒、陪伴、沟通、设备联动与安全辅助提示。
              </p>
              <div className="mt-8 grid gap-4">
                {products.map((item) => (
                  <article key={item.name} className="rounded-3xl bg-slate-50 p-6">
                    <div className="flex items-start gap-4">
                      <item.icon className="mt-1 h-8 w-8 flex-shrink-0 text-rose-500" />
                      <div>
                        <h3 className="text-xl font-black">{item.name}</h3>
                        <p className="mt-1 text-sm font-bold text-slate-500">{item.title}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.points.map((point) => (
                            <span key={point} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">{point}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <img src="/image/kangkang/product-family.webp" alt="心忆康康机器人和心忆同启 APP" className="h-full min-h-[420px] rounded-[2rem] object-cover shadow-xl shadow-rose-100" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black text-rose-600">信任参考</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">从产品能力到团队背景，建立可验证的信任</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {trust.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <item.icon className="mb-5 h-8 w-8 text-rose-500" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold text-rose-200">合规提示</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {['不替代家属照护', '不构成心理评估或医疗判断', '健康与紧急情况应联系专业机构'].map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-rose-300" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-500">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 text-white lg:flex-row lg:items-center lg:px-8">
            <div>
              <h2 className="text-3xl font-black">想了解更多？</h2>
              <p className="mt-3 text-rose-50">下载心忆同启 APP，用 AI 连接亲情。</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/support" className="rounded-full bg-white px-7 py-3 text-center text-sm font-bold text-rose-600 transition hover:bg-rose-50">
                APP 下载与客服
              </Link>
              <Link to="/cooperation" className="rounded-full border border-white/40 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-rose-600">
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
