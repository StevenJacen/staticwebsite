import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  HeartHandshake,
  MessagesSquare,
  MoonStar,
  Send,
  Sparkles,
  Sunrise,
  UsersRound,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Footer } from './Footer';

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
    title: '中欧校园产品互动',
    tag: '场景体验',
  },
  {
    image: '/image/events/shanghai-demo.webp',
    title: '上海老博会现场演示',
    tag: '产品演示',
  },
  {
    image: '/image/events/delegation-presentation.webp',
    title: '商业访团产品介绍',
    tag: '产品交流',
  },
  {
    image: '/image/events/ceibs-group.webp',
    title: '中欧校园交流合影',
    tag: '品牌现场',
  },
];

const familyScenes = [
  {
    icon: Sunrise,
    image: '/image/v4/scene-1.jpg',
    title: '早上该起床了，康康先去叫一声',
    desc: '父母起床节奏不固定，子女也不可能每天准时打电话。康康会在合适的时间主动问候，提醒起床、喝水、吃早饭，把早上的第一件事先照顾到。',
    closing: '让关心先从早晨开始。',
  },
  {
    icon: MessagesSquare,
    image: '/image/v4/scene-3.jpg',
    title: '一个人在家时，也有人陪着说两句',
    desc: '很多老人不是不想说话，而是家里太安静。康康可以陪聊、回应简单对话、发起问候，让独处的时间不那么冷清。',
    closing: '让家里不只是安静。',
  },
  {
    icon: BellRing,
    image: '/image/v4/scene-4.jpg',
    title: '饮水、作息、用药时间，康康帮着记',
    desc: '父母常常记得住大事，忘得掉小事。康康可以把饮水、作息、用药时间、复诊等事项放进日常提醒里，让关心变成更稳定的节奏。',
    closing: '把提醒变成习惯。',
  },
  {
    icon: Send,
    image: '/image/v4/scene-2.jpg',
    title: '人在外地，关心也能送到家里',
    desc: '子女通过心忆同启 APP 发送亲情消息、设置提醒、查看设备状态，让“我在外地”不再等于“家里没人照应”。',
    closing: '人不在家，心可以到家。',
  },
  {
    icon: UsersRound,
    image: '/image/v4/scene-5.jpg',
    title: '一家人一起关心，不用来回反复问',
    desc: '当父母由兄弟姐妹、配偶或亲属共同照护时，康康和 APP 可以成为统一入口，提醒、消息和家庭成员设置都更清楚。',
    closing: '一家人，用一个入口。',
  },
  {
    icon: MoonStar,
    image: '/image/v4/scene-6.jpg',
    title: '晚上睡前，家人的一句话也能到家里',
    desc: '忙完一天以后，很多关心其实只差一句话。康康可以把问候、安排和提醒留在家里，让晚上的陪伴更稳定。',
    closing: '让陪伴延续到晚上。',
  },
];

const aboutEntrances = [
  {
    icon: Sparkles,
    title: '产品动态',
    desc: '看康康功能、版本、APP 下载说明。',
    href: '/products',
  },
  {
    icon: CalendarDays,
    title: '真实活动',
    desc: '看展会、论坛、用户现场体验。',
    href: '/news',
  },
  {
    icon: HeartHandshake,
    title: '合作资讯',
    desc: '看机构合作、商务交流、渠道动态。',
    href: '/cooperation',
  },
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
    <div className="flex min-h-screen flex-col bg-[#fbfaf7] font-sans text-[#111827]">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <section className="hm-section bg-[#fbfaf7]">
          <div className="mx-auto max-w-7xl">
            <div>
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="hm-eyebrow">Rolling Moments</p>
                  <h2 className="hm-title mt-3 text-3xl font-black md:text-5xl">真实现场里的康康</h2>
                </div>
                <Link to="/news" className="inline-flex items-center gap-2 text-sm font-black text-[#d94a38] transition hover:text-[#102033]">
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
                      className="group relative h-[260px] w-[280px] flex-none overflow-hidden rounded-[8px] bg-[#102033] shadow-[0_22px_70px_rgba(61,45,28,0.14)] md:h-[320px] md:w-[420px]"
                      aria-hidden={index >= rollingHighlights.length}
                    >
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <p className="text-xs font-black uppercase tracking-normal text-[#d99b45]">{item.tag}</p>
                        <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hm-section bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="hm-eyebrow">Family Scenes</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">
                很多关心，不该只停在<span className="whitespace-nowrap">微信和电话里</span>
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {familyScenes.map((item) => (
                <article key={item.title} className="hm-card group overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(217,74,56,0.1)]">
                  <div className="aspect-[4/3] overflow-hidden bg-[#f8f4ed]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-6">
                    <item.icon className="h-8 w-8 text-[#d94a38]" />
                    <h3 className="mt-4 text-xl font-black leading-8 text-[#111827]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#667085]">{item.desc}</p>
                    <p className="mt-5 border-t border-[rgba(17,24,39,0.08)] pt-4 text-sm font-bold text-[#17334a]">{item.closing}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hm-section bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="hm-eyebrow">Products</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">了解心忆</h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {aboutEntrances.map((item) => (
                <Link key={item.title} to={item.href} className="hm-card p-7 transition hover:border-[#d94a38]/45 hover:shadow-[0_20px_60px_rgba(217,74,56,0.1)]">
                  <item.icon className="h-9 w-9 text-[#14b8c8]" />
                  <h3 className="mt-5 text-2xl font-black text-[#111827]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#667085]">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-[clamp(20px,6vw,88px)] pb-[clamp(64px,8vw,112px)]">
          <div className="mx-auto max-w-7xl rounded-[8px] border border-[#f2c9aa] bg-[#fff1e7] p-8 md:p-12">
            <div>
              <p className="hm-eyebrow">Contact</p>
              <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">想知道康康适不适合你家？</h2>
              <p className="mt-5 max-w-4xl text-base leading-8 text-[#667085]">可以先从父母居住状态、是否异地、提醒需求和家庭成员数量开始沟通。</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <Link to="/cooperation" className="hm-primary px-6">
                预约产品演示
              </Link>
              <Link to="/products/kangkang#pricing" className="hm-secondary bg-white px-6">
                咨询适合我家的版本
              </Link>
              <Link to="/cooperation" className="hm-secondary bg-white px-6">
                联系机构合作
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
