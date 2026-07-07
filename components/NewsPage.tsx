import React, { useEffect } from 'react';
import { CalendarDays, MessageCircle, Newspaper, Radio, Sparkles } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const newsCards = [
  {
    tag: '展会曝光',
    title: '心忆康康亮相上海老博会',
    desc: '通过现场展示和观众互动，让更多家庭用户、合作方了解 AI 陪伴机器人在养老科技场景中的价值。',
    date: '上海老博会',
    image: '/image/events/shanghai-demo.webp',
  },
  {
    tag: '创新活动',
    title: '参与亚布力创新大赛',
    desc: '面向行业舞台介绍心忆科技的产品方向和家庭关怀价值，持续补充品牌与市场曝光。',
    date: '创新大赛',
    image: '/image/events/yabuli-group.webp',
  },
  {
    tag: '行业交流',
    title: '中欧国际论坛活动交流',
    desc: '论坛现场、产品展示和嘉宾交流素材将沉淀到官网精选资讯，同时通过公众号持续更新。',
    date: '中欧国际论坛',
    image: '/image/events/ceibs-group.webp',
  },
];

const updateRules = [
  '官网展示精选资讯，避免页面被过多日常消息淹没。',
  '公众号承担更高频的内容更新和活动露出。',
  '重要产品动态、合作进展和媒体信息再同步到官网。',
];

export const NewsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">News</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">精选资讯</h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
                官网保留适合用户和合作方快速了解公司的精选内容，日常更新与活动曝光通过公众号同步，让信息维护更轻、更稳定。
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 text-slate-950">
              <MessageCircle className="h-9 w-9 text-blue-500" />
              <h2 className="mt-5 text-2xl font-black">公众号同步</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">扫码关注，查看最新产品照片、活动动态和服务通知。</p>
              <img src="/image/qrcode.jpg" alt="心忆科技公众号二维码" className="mt-6 h-32 w-32 rounded-2xl border border-slate-100 object-cover p-2" />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-3">
              {newsCards.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-lg border border-slate-100 bg-slate-50 transition hover:border-blue-200 hover:bg-blue-50">
                  <div className="aspect-[4/3] bg-slate-100">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-7">
                    <Newspaper className="h-8 w-8 text-blue-500" />
                    <p className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-600">
                      <CalendarDays className="h-4 w-4" />
                      {item.date}
                    </p>
                    <p className="mt-4 text-sm font-bold text-slate-500">{item.tag}</p>
                    <h2 className="mt-3 text-xl font-black text-slate-950">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <Radio className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">资讯维护方式</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                静态官网不强行做高频动态流，先用公众号承接更新，再把重要内容沉淀为官网精选。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {updateRules.map((item) => (
                <p key={item} className="rounded-2xl bg-white p-6 text-sm font-medium leading-7 text-slate-700 shadow-sm">
                  <Sparkles className="mb-4 h-6 w-6 text-blue-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
