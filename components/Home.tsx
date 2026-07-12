import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  HeartHandshake,
  MessageCircle,
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
            <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="hm-eyebrow">Family Scenes</p>
                <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">很多关心，不该只停在微信和电话里</h2>
              </div>
              <p className="text-base leading-8 text-[#667085]">康康进入家庭生活节奏，让问候、提醒和家人的消息，在需要的时候更容易到达父母身边。</p>
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
            <p className="mx-auto mt-10 max-w-4xl text-center text-base font-bold leading-8 text-[#17334a]">
              康康不是放在家里的摆件，而是会进入生活节奏的陪伴机器人。家庭场景，才是它最能被理解的地方。
            </p>
          </div>
        </section>

        <section className="hm-section bg-[#f8f4ed]">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="hm-eyebrow">Updates</p>
                <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">精选资讯与公众号动态</h2>
              </div>
              <p className="text-base leading-8 text-[#667085]">
                官网保留更适合首次访问者浏览的精选内容，公众号同步更多活动照片、产品动态和服务通知。
              </p>
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
                    <h3 className="mt-3 text-xl font-black leading-7 text-[#111827]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#667085]">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="hm-card mt-10 grid gap-6 p-6 shadow-[0_18px_55px_rgba(33,28,23,0.08)] lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <img src="/image/qrcode.jpg" alt="心忆科技公众号二维码" className="h-28 w-28 rounded-[8px] border border-[rgba(17,24,39,0.1)] object-cover p-2" />
              <div>
                <MessageCircle className="h-8 w-8 text-[#14b8c8]" />
                <h3 className="mt-3 text-2xl font-black text-[#111827]">关注公众号，查看更完整的动态</h3>
                <p className="mt-2 text-sm leading-7 text-[#667085]">产品照片、活动报道、服务通知和下载入口会通过公众号持续同步。</p>
              </div>
              <Link to="/news" className="hm-primary gap-2 px-6 text-sm">
                查看精选资讯
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="hm-section bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="hm-eyebrow">Products</p>
                <h2 className="hm-title mt-4 text-3xl font-black md:text-5xl">了解心忆</h2>
              </div>
              <p className="text-base leading-8 text-[#667085]">
                心忆康康在父母身边，心忆同启 APP 在子女手机里。两者配合，让家庭关怀更容易开始，也更容易持续。
              </p>
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
