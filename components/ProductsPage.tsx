import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  CheckCircle2,
  Film,
  HeartHandshake,
  Lock,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const productLine = [
  {
    title: '心忆康康',
    desc: '陪在父母身边的 AI 生活伙伴，承担问候、提醒、陪伴和家庭连接入口。',
    href: '/products/kangkang',
  },
  {
    title: '心忆同启 APP',
    desc: '装在子女手机里的家庭关心入口，用来绑定设备、设置提醒和接收简报。',
    href: '/products/app',
  },
  {
    title: '未来产品预留',
    desc: '后续家庭智能产品会继续放在产品体系下，保持官网结构可扩展。',
    href: '/products/future',
  },
];

const kangkangValues = [
  {
    icon: HeartHandshake,
    title: '主动陪伴',
    desc: '围绕日常问候、闲聊和情绪回应，让父母独处时多一个可以互动的对象。',
  },
  {
    icon: Bell,
    title: '生活提醒',
    desc: '通过 APP 设置饮水、作息、活动等提醒，减少子女反复电话叮嘱的压力。',
  },
  {
    icon: MessageCircle,
    title: '家庭消息',
    desc: '支持家人消息传递和生活简报，让关心不只停留在“想起来再问”。',
  },
  {
    icon: ShieldCheck,
    title: '安全边界',
    desc: '求助、提醒、远程查看等能力均为辅助提示，不替代家属照护、医疗诊断或急救服务。',
  },
];

const appFeatures = [
  '绑定心忆康康设备',
  '远程设置生活提醒',
  '接收生活简报与设备状态',
  '管理家庭成员与权限',
  '传递文字消息和关心',
  '查看隐私与授权设置',
];

const routeSection: Record<string, string> = {
  '/products/kangkang': 'kangkang',
  '/products/app': 'app',
  '/products/future': 'future',
};

export const ProductsPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const target = routeSection[location.pathname];
    window.setTimeout(() => {
      if (target) {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
          <div className="absolute inset-0 opacity-25">
            <img src="/image/kangkang/product-family.webp" alt="心忆产品家族" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">Products</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">给子女看的产品说明</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200">
              先看清楚产品如何帮你照顾“不常在身边”的父母，再决定是否下载、咨询或购买。心忆康康不是替代亲情，而是让关心更稳定地抵达家里。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products/kangkang" className="rounded-full bg-blue-600 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700">
                了解心忆康康
              </Link>
              <Link to="/products/app" className="rounded-full border border-white/40 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-slate-950">
                下载心忆同启 APP
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-14 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {productLine.map((item) => (
              <Link key={item.title} to={item.href} className="rounded-lg border border-slate-100 bg-slate-50 p-7 transition hover:border-blue-200 hover:bg-blue-50">
                <Sparkles className="h-8 w-8 text-blue-500" />
                <h2 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="kangkang" className="scroll-mt-28 bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="grid min-h-[430px] grid-cols-5 bg-slate-100">
                {['01', '02', '03', '04', '05'].map((item) => (
                  <div key={item} className="flex items-end border-r border-white/70 bg-gradient-to-b from-slate-200 to-white p-4 last:border-r-0">
                    <div>
                      <p className="text-xs font-black text-blue-500">五娃娃长图素材占位</p>
                      <p className="mt-2 text-3xl font-black text-slate-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="bg-white px-6 py-4 text-sm leading-7 text-slate-500">
                等拿到“五个娃娃长图”正式素材后，替换这里的占位网格即可，右侧文案结构不需要重做。
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">HeartMemo Kangkang</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">心忆康康：把日常关心放在父母身边</h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                它更像一个家里的陪伴入口：能问候、能提醒、能互动，也能和子女手机里的心忆同启 APP 配合，让照护从零散电话变成更连续的家庭连接。
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {kangkangValues.map((item) => (
                  <article key={item.title} className="rounded-lg bg-white p-5 shadow-sm">
                    <item.icon className="h-7 w-7 text-blue-500" />
                    <h3 className="mt-4 font-black text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">Product Video</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">用真实画面理解产品，而不是读一张能力表</h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                官网展示会使用面向家庭的语言表达能力边界，避免把研发阶段、内部版本表或“必做能力”直接放给用户看。
              </p>
            </div>
            <div className="overflow-hidden rounded-lg bg-slate-100 shadow-sm">
              <video className="aspect-video w-full object-cover" autoPlay loop muted playsInline>
                <source src="/video/banner-1.webm" type="video/webm" />
                <source src="/video/banner.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="app" className="scroll-mt-28 bg-slate-950 px-5 py-16 text-white sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="mx-auto w-full max-w-sm rounded-[2.2rem] border border-white/15 bg-slate-900 p-4 shadow-2xl">
              <div className="rounded-[1.65rem] bg-white p-5 text-slate-950">
                <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-200" />
                <div className="mt-6 rounded-lg bg-blue-600 p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100">App Preview</p>
                  <h3 className="mt-3 text-2xl font-black">手机界面素材占位</h3>
                  <p className="mt-3 text-sm leading-6 text-blue-50">后续替换为心忆同启 APP 截图。</p>
                </div>
                <div className="mt-5 space-y-3">
                  {appFeatures.slice(0, 4).map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">HeartMemo App</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">心忆同启 APP：子女手机里的关心入口</h2>
              <p className="mt-6 text-base leading-8 text-slate-300">
                购买前可以先理解 APP 的作用：它负责把家人、提醒、设备状态和服务入口连接起来，是子女持续使用产品的核心入口。
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {appFeatures.map((item) => (
                  <p key={item} className="flex items-start gap-3 rounded-lg bg-white/10 p-4 text-sm font-medium text-slate-100 ring-1 ring-white/10">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="mt-8 grid gap-5 rounded-lg bg-white p-6 text-slate-950 md:grid-cols-[auto_1fr] md:items-center">
                <img src="/image/qrcode.jpg" alt="心忆同启 APP 下载二维码" className="h-32 w-32 rounded-lg border border-slate-100 object-cover p-2" />
                <div>
                  <Smartphone className="h-8 w-8 text-blue-500" />
                  <h3 className="mt-3 text-2xl font-black">下载心忆同启 APP</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Android 下载二维码可先使用，iOS 版本入口根据上线节奏更新。
                  </p>
                  <Link to="/support" className="mt-4 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                    查看下载与客服
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-lg bg-slate-100 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div>
              <Film className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black text-slate-950">APP 演示视频占位</h2>
            </div>
            <p className="text-base leading-8 text-slate-600">
              PDF 中提到可展示 APP 视频。当前先保留视频说明区，等确认横版/竖版、时长和文件大小后替换为正式演示视频，避免上线文件过大影响加载。
            </p>
          </div>
        </section>

        <section id="future" className="scroll-mt-28 bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-lg bg-slate-100 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div>
              <Lock className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black text-slate-950">未来产品预留</h2>
            </div>
            <p className="text-base leading-8 text-slate-600">
              产品栏目不再只承载单个滚动页面。后续第二款、第三款家庭智能产品可以继续作为同级入口加入，避免每次扩展都重做整站结构。
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
