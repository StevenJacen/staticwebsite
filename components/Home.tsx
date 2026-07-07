import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Bell,
  Building2,
  Camera,
  CheckCircle2,
  HeartHandshake,
  MessageCircle,
  Newspaper,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Footer } from './Footer';

const purchaseReasons = [
  {
    icon: HeartHandshake,
    title: '独处时多一份陪伴',
    desc: '主动问候、日常闲聊和情绪回应，让父母一个人在家时，也能有被看见、被回应的时刻。',
  },
  {
    icon: Bell,
    title: '提醒不再只靠电话',
    desc: '饮水、作息、活动等提醒可以通过 APP 设置，把反复叮嘱变成更稳定的日常触达。',
  },
  {
    icon: Smartphone,
    title: '家人关心有入口',
    desc: '心忆同启 APP 连接家人与设备，帮助子女查看状态、接收简报、传递消息和远程设置提醒。',
  },
];

const familyScenarios = [
  '父母独居，子女不在同城',
  '上班忙，想把提醒和问候安排得更稳定',
  '多个家人一起照护，需要统一了解近况',
  '希望先了解产品，再决定购买或合作',
];

const productCards = [
  {
    title: '心忆康康',
    subtitle: '放在父母身边的 AI 陪伴机器人',
    desc: '面向居家陪伴、生活提醒和家庭连接，让关心不只停留在电话里。',
    image: '/image/kangkang/product-family.webp',
    href: '/products/kangkang',
  },
  {
    title: '心忆同启 APP',
    subtitle: '装在子女手机里的家庭关心入口',
    desc: '用于绑定设备、设置提醒、接收简报和连接家人，是子女理解产品价值的关键入口。',
    image: '/image/kangkang/scene-daily-care.webp',
    href: '/products/app',
  },
];

const exposureCards = [
  {
    icon: Camera,
    title: '活动照片',
    label: '宣传素材占位',
    desc: '用于放置展会、路演、产品试用或合作活动照片。',
    image: '/image/media/media-1.jpg',
  },
  {
    icon: Building2,
    title: '合作场景',
    label: '机构展示占位',
    desc: '用于展示社区、康养、渠道伙伴等真实合作场景。',
    image: '/image/media/media-2.jpg',
  },
  {
    icon: Newspaper,
    title: '媒体/公众号',
    label: '近期动态占位',
    desc: '用于承接公众号文章、产品动态、媒体报道和阶段性进展。',
    image: '/image/media/media-3.png',
  },
  {
    icon: MessageCircle,
    title: '用户咨询',
    label: '咨询素材占位',
    desc: '用于放置客服二维码、活动报名、购买咨询或试用招募入口。',
    image: '',
  },
];

const proofItems = [
  {
    icon: ShieldCheck,
    title: '隐私与权限',
    desc: '远程查看、消息、提醒等能力以授权和实际设备设置为准，强调必要采集与权限管理。',
  },
  {
    icon: CheckCircle2,
    title: '辅助而非替代',
    desc: '产品提供陪伴、提醒和辅助提示，不替代家属照护、医疗诊断或紧急救援服务。',
  },
  {
    icon: MessageCircle,
    title: '咨询与服务',
    desc: '提供 APP 下载、客服咨询和商务合作入口，方便进一步了解购买与落地方式。',
  },
];

export const Home: React.FC = () => {
  const location = useLocation();

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

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">For Family Care</p>
              <h1 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                给不常在父母身边的你，把关心留在爸妈身边
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">
                心忆康康不是替代亲情，而是帮子女把日常问候、生活提醒和家庭连接变得更及时。父母在家有人回应，子女在外也能多一份安心。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/products/kangkang"
                  className="rounded-full bg-blue-600 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  查看心忆康康
                </Link>
                <Link
                  to="/support"
                  className="rounded-full border border-slate-300 px-7 py-3 text-center text-sm font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
                >
                  下载 APP
                </Link>
                <Link
                  to="/cooperation"
                  className="rounded-full border border-slate-300 px-7 py-3 text-center text-sm font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-600"
                >
                  咨询购买
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-slate-100 shadow-sm">
              <img
                src="/image/kangkang/home-remote-care.webp"
                alt="子女通过心忆产品远程关心父母"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">Why HeartMemo</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">为什么子女会选择心忆康康</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {purchaseReasons.map((item) => (
                <article key={item.title} className="rounded-lg bg-white p-7 shadow-sm">
                  <item.icon className="h-9 w-9 text-blue-500" />
                  <h3 className="mt-6 text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">Product System</p>
              <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">心忆康康 + 心忆同启 APP</h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                一个在父母身边，一个在子女手机里。硬件负责陪伴和提醒，APP 负责连接家人和管理设置，共同组成家庭关心的入口。
              </p>
              <ul className="mt-8 space-y-3">
                {familyScenarios.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium leading-7 text-slate-700">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {productCards.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="group overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-[4/3] bg-slate-100">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold text-blue-500">{item.subtitle}</p>
                    <h3 className="mt-3 text-2xl font-black text-slate-950">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-16 text-white sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">Updates</p>
                <h2 className="mt-4 text-3xl font-black md:text-5xl">品牌动态与活动曝光</h2>
              </div>
              <p className="text-base leading-8 text-slate-300">
                这里用于补足官网的公司可信度：活动照片、合作场景、公众号内容和咨询入口先以可替换占位呈现，后续有素材后直接替换图片与标题。
              </p>
            </div>

            <div className="mt-10 overflow-x-auto pb-4">
              <div className="grid auto-cols-[minmax(260px,360px)] grid-flow-col gap-5">
                {exposureCards.map((item) => (
                  <article key={item.title} className="group relative h-[360px] overflow-hidden rounded-lg bg-slate-800">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-slate-800">
                        <item.icon className="h-16 w-16 text-slate-500" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-950">{item.label}</p>
                      <h3 className="mt-4 text-2xl font-black">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600">Trust</p>
                <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">让家人放心了解，再决定下一步</h2>
              </div>
              <p className="text-base leading-8 text-slate-600">
                官网表达会避免内部研发口径，更多使用面向家庭的辅助能力说明，让产品价值清楚，同时把隐私、安全和服务边界说清楚。
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {proofItems.map((item) => (
                <article key={item.title} className="rounded-lg bg-slate-50 p-7 ring-1 ring-slate-100">
                  <item.icon className="h-9 w-9 text-emerald-600" />
                  <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-blue-600 p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">Next Step</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">想先看看父母是否适合？</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50">
                可以先查看产品介绍、下载心忆同启 APP，或直接咨询购买与服务方式。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link to="/products/kangkang" className="rounded-full bg-white px-7 py-3 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-50">
                查看产品
              </Link>
              <Link to="/support" className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-blue-700">
                下载 APP
              </Link>
              <Link to="/cooperation" className="rounded-full border border-white/50 px-7 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-blue-700">
                咨询购买
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
