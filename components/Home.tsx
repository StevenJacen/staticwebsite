import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Footer } from './Footer';

const newsItems = [
  {
    image: '/image/events/shanghai-demo.webp',
    tag: '展会现场',
    title: '观众现场了解康康机器人',
    desc: '产品展示、现场讲解与互动体验共同构成更真实的产品印象。',
  },
  {
    image: '/image/events/shanghai-users.webp',
    tag: '用户互动',
    title: '康康被更多家庭用户看见',
    desc: '从展会体验到家庭咨询，心忆持续收集真实场景里的使用反馈。',
  },
  {
    image: '/image/events/delegation-visit.webp',
    tag: '商务参观',
    title: '接待商业访团交流',
    desc: '围绕产品落地、服务场景和合作方式，与合作伙伴展开更具体的沟通。',
  },
  {
    image: '/image/events/ceibs-scene.webp',
    tag: '场景体验',
    title: '在交流现场演示产品互动',
    desc: '康康不仅是展示品，也可以在实际交流中呈现陪伴与互动方式。',
  },
  {
    image: '/image/events/yabuli-group.webp',
    tag: '创新活动',
    title: '参与青年创新赛事',
    desc: '通过公开活动展示团队思考，让品牌动态与产品方向持续沉淀。',
  },
  {
    image: '/image/events/ceibs-group.webp',
    tag: '品牌露出',
    title: '论坛活动中的产品合影',
    desc: '用真实图片记录阶段性进展，官网沉淀精选内容，公众号同步更多动态。',
  },
];

const rollingHighlights = [
  {
    image: '/image/events/shanghai-booth.webp',
    title: '上海老博会产品展示',
    tag: '展会曝光',
  },
  {
    image: '/image/events/shanghai-users.webp',
    title: '观众现场体验康康',
    tag: '用户互动',
  },
  {
    image: '/image/events/delegation-visit.webp',
    title: '商业访团参观交流',
    tag: '商务交流',
  },
  {
    image: '/image/events/yabuli-stage.webp',
    title: '亚布力创新大赛路演',
    tag: '创新活动',
  },
  {
    image: '/image/events/ceibs-forum.webp',
    title: '中欧国际论坛现场',
    tag: '行业论坛',
  },
  {
    image: '/image/events/ceibs-scene.webp',
    title: '论坛现场产品互动',
    tag: '场景体验',
  },
];

const productEntrances = [
  {
    icon: Sparkles,
    title: '心忆康康',
    desc: '陪在父母身边的 AI 生活伙伴。',
    href: '/products/kangkang',
  },
  {
    icon: Smartphone,
    title: '心忆同启 APP',
    desc: '装在手机里的家庭关怀助手。',
    href: '/products/app',
  },
  {
    icon: HeartHandshake,
    title: '场景方案',
    desc: '面向居家、社区与机构合作。',
    href: '/solutions',
  },
];

const trustPoints = [
  '活动、展会与论坛动态持续沉淀',
  '产品能力以实际版本和授权设置为准',
  '陪伴、提醒和辅助提示不替代医疗或急救服务',
];

export const Home: React.FC = () => {
  const location = useLocation();
  const rollingItems = [...rollingHighlights, ...rollingHighlights];

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <section className="bg-white px-5 py-14 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div>
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">Rolling Moments</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-4xl">活动影像持续滚动</h2>
                </div>
                <Link to="/news" className="inline-flex items-center gap-2 text-sm font-black text-blue-700 transition hover:text-blue-900">
                  查看更多动态
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="hm-marquee">
                <div className="hm-marquee-track flex gap-5">
                  {rollingItems.map((item, index) => (
                    <Link
                      key={`${item.title}-${index}`}
                      to="/news"
                      className="group relative h-[260px] w-[280px] flex-none overflow-hidden rounded-lg bg-slate-900 shadow-sm md:h-[320px] md:w-[420px]"
                      aria-hidden={index >= rollingHighlights.length}
                    >
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">{item.tag}</p>
                        <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-600">Updates</p>
                <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">精选资讯与公众号动态</h2>
              </div>
              <p className="text-base leading-8 text-slate-600">
                官网保留更适合首次访问者浏览的精选内容，公众号同步更多活动照片、产品动态和服务通知。
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-100">
                  <div className="aspect-[4/3] bg-slate-100">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700">
                      <CalendarDays className="h-4 w-4" />
                      {item.tag}
                    </p>
                    <h3 className="mt-3 text-xl font-black leading-7 text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-6 rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <img src="/image/qrcode.jpg" alt="心忆科技公众号二维码" className="h-28 w-28 rounded-lg border border-slate-100 object-cover p-2" />
              <div>
                <MessageCircle className="h-8 w-8 text-emerald-600" />
                <h3 className="mt-3 text-2xl font-black text-slate-950">关注公众号，查看更完整的动态</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">产品照片、活动报道、服务通知和下载入口会通过公众号持续同步。</p>
              </div>
              <Link to="/news" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
                查看精选资讯
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Products</p>
                <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">从产品开始了解心忆</h2>
              </div>
              <p className="text-base leading-8 text-slate-600">
                心忆康康在父母身边，心忆同启 APP 在子女手机里。两者配合，让家庭关怀更容易开始，也更容易持续。
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {productEntrances.map((item) => (
                <Link key={item.title} to={item.href} className="rounded-lg border border-slate-100 bg-slate-50 p-7 transition hover:border-blue-200 hover:bg-blue-50">
                  <item.icon className="h-9 w-9 text-blue-600" />
                  <h3 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 pb-16 sm:px-8 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-slate-950 p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Contact</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">想进一步了解心忆？</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {trustPoints.map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-300" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link to="/products" className="rounded-md bg-white px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-slate-100">
                查看产品
              </Link>
              <Link to="/cooperation" className="rounded-md border border-white/40 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-slate-950">
                商务咨询
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
