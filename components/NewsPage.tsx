import React, { useEffect } from 'react';
import { CalendarDays, Newspaper } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const news = [
  {
    date: '2025.12.02',
    title: '心忆科技携手中欧创协，共同探索 AI 养老陪伴新场景',
    desc: '围绕 AI、心理学与机器人产品落地，心忆科技持续推进技术、产品和产业合作。',
  },
  {
    date: '待更新',
    title: '产品动态',
    desc: '心忆同启 APP 与 AI 康康机器人后续版本进展可在此发布。',
  },
  {
    date: '待更新',
    title: '合作进展',
    desc: '社区康养、机构合作、渠道项目等动态可在此集中展示。',
  },
];

export const NewsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="bg-slate-950 px-5 py-20 text-white sm:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold text-orange-300">新闻动态</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">记录心忆科技的每一步成长</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              分享技术进展、产品更新与合作成果，让外界了解心忆科技如何把 AI 陪伴带入真实生活。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-100 p-7 shadow-sm">
                <Newspaper className="mb-5 h-8 w-8 text-orange-500" />
                <p className="flex items-center gap-2 text-sm font-bold text-orange-600">
                  <CalendarDays className="h-4 w-4" />
                  {item.date}
                </p>
                <h2 className="mt-4 text-xl font-black">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
