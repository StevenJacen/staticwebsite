import React, { useEffect } from 'react';
import { CalendarDays, MessageCircle } from 'lucide-react';
import { Navbar } from './Navbar';
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

export const NewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#111827]">
      <Navbar />
      <main>
        <section className="hm-page-hero">
          <div className="hm-page-hero-inner">
            <div className="hm-page-hero-copy">
              <p className="hm-page-kicker">News</p>
              <h1 className="hm-page-title">精选资讯</h1>
              <p className="hm-page-lead">在这里查看心忆的产品动态、活动现场和合作进展；更多照片、服务通知与日常更新通过公众号持续同步。</p>
            </div>
            <div className="hm-page-visual">
              <img src="/image/events/ceibs-group.webp" alt="心忆科技活动现场" />
            </div>
          </div>
        </section>

        <section className="hm-section bg-[#f8f4ed]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="hm-eyebrow">Updates</p>
                <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">精选资讯与公众号动态</h2>
              </div>
              <p className="text-base leading-8 text-[#667085]">官网保留适合用户和合作方快速浏览的精选内容，公众号同步更多活动照片、产品动态和服务通知。</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <article key={item.title} className="hm-card overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(217,74,56,0.1)]">
                  <div className="aspect-[4/3] bg-[#eef7f8]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="inline-flex items-center gap-2 text-sm font-bold text-[#d94a38]">
                      <CalendarDays className="h-4 w-4" />
                      {item.tag}
                    </p>
                    <h2 className="mt-3 text-xl font-black leading-7 text-[#111827]">{item.title}</h2>
                    <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="hm-card mt-10 grid gap-6 p-6 shadow-[0_18px_55px_rgba(33,28,23,0.08)] sm:grid-cols-[auto_1fr] sm:items-center">
              <img src="/image/qrcode.jpg" alt="心忆科技公众号二维码" className="h-28 w-28 rounded-[8px] border border-[rgba(17,24,39,0.1)] object-cover p-2" />
              <div>
                <MessageCircle className="h-8 w-8 text-[#14b8c8]" />
                <h2 className="mt-3 text-2xl font-black text-[#111827]">关注公众号，查看更完整的动态</h2>
                <p className="mt-2 text-[15px] leading-7 text-[#667085]">产品照片、活动报道、服务通知和下载入口会通过公众号持续同步。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
