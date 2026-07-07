import React, { useEffect } from 'react';
import { Download, HelpCircle, MessageCircle, Phone, ShieldCheck, Smartphone } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const downloadCards = [
  {
    icon: Smartphone,
    title: 'Android 下载',
    desc: '安卓端下载入口已进入调试与上线流程，可先使用二维码作为下载与关注入口。',
  },
  {
    icon: Download,
    title: 'iOS 版本',
    desc: 'iOS 版本入口会根据应用商店上线节奏更新。上线前建议通过客服确认当前可用方式。',
  },
  {
    icon: Phone,
    title: '联系客服',
    desc: '购买咨询、设备使用、APP 下载和售后问题，都可以通过客服电话进一步确认。',
  },
];

const faqs = [
  ['心忆康康可以替代家人照护吗？', '不可以。产品提供陪伴、提醒和辅助提示，不替代家属照护、社区服务、医疗诊断或紧急救援服务。'],
  ['远程查看是否一直开启？', '应以用户授权、隐私政策和实际设备设置为准。建议家人提前沟通使用边界，并在必要时关闭或调整权限。'],
  ['生活简报是不是健康报告？', '不是。生活简报用于帮助家人了解大致使用情况，不构成健康评估或医疗建议。'],
  ['购买前可以先咨询吗？', '可以。建议先确认父母居住场景、网络条件、使用习惯和家人照护方式，再决定是否购买。'],
];

export const SupportPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">Support</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">下载心忆同启 APP</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              这里集中放置 APP 下载、客服咨询、常见问题、隐私政策与用户协议入口，方便子女在购买前后快速找到下一步。
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="rounded-[2rem] bg-blue-50 p-8">
              <MessageCircle className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black text-slate-950">扫码下载或咨询</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">二维码可作为 APP 下载、公众号关注和客服触达入口。不同系统入口以上线状态为准。</p>
              <img src="/image/qrcode.jpg" alt="心忆同启 APP 下载二维码" className="mt-8 h-44 w-44 rounded-2xl bg-white object-cover p-3 shadow-sm" />
              <div className="mt-8 space-y-2 text-sm leading-7 text-slate-600">
                <p><span className="font-bold text-slate-950">咨询电话：</span>17600222898</p>
                <p><span className="font-bold text-slate-950">服务热线：</span>4001023698</p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {downloadCards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <item.icon className="h-8 w-8 text-blue-500" />
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500">FAQ</p>
                <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">常见问题</h2>
              </div>
              <a
                href="/legal-text.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:text-blue-600"
              >
                <ShieldCheck className="h-5 w-5 text-blue-500" />
                隐私政策与用户协议
              </a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <article key={question} className="rounded-2xl bg-white p-7 shadow-sm">
                  <HelpCircle className="h-7 w-7 text-blue-500" />
                  <h3 className="mt-4 text-xl font-black text-slate-950">{question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
