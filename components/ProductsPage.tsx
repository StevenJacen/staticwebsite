import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Download,
  Film,
  HeartHandshake,
  Layers,
  Lock,
  MessageCircle,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const productLine = [
  {
    title: '心忆康康',
    subtitle: 'AI 居家陪伴机器人',
    desc: '在父母身边提供日常问候、生活提醒、家庭消息和陪伴互动。',
    image: '/image/kangkang/product-family.webp',
    href: '/products/kangkang',
  },
  {
    title: '心忆同启 APP',
    subtitle: '家庭关怀助手',
    desc: '子女手机里的连接入口，用于绑定设备、设置提醒、接收简报和下载服务。',
    image: '/image/kangkang/home-remote-care.webp',
    href: '/products/app',
  },
  {
    title: '家庭关怀产品线',
    subtitle: '持续拓展的 AI 陪伴生态',
    desc: '围绕家庭沟通、居家陪伴和康养服务，持续拓展更完整的智能产品体验。',
    image: '/image/technology.png',
    href: '/products/future',
  },
];

const productHighlights = [
  {
    title: '心忆康康',
    label: '居家陪伴机器人',
    desc: '在父母身边提供问候、提醒、陪伴和家庭连接。',
    image: '/image/kangkang/product-family.webp',
    href: '/products/kangkang',
  },
  {
    title: '心忆同启 APP',
    label: '家庭关怀助手',
    desc: '子女手机里的设备绑定、提醒设置、简报接收入口。',
    image: '/image/kangkang/home-remote-care.webp',
    href: '/products/app',
  },
  {
    title: '家庭关怀产品线',
    label: 'AI 陪伴生态',
    desc: '围绕不同家庭场景，持续拓展更多智能陪伴与关怀产品。',
    image: '/image/technology.png',
    href: '/products/future',
  },
  {
    title: '产品视频',
    label: '真实场景',
    desc: '通过实拍画面了解产品外观、互动方式和家庭使用氛围。',
    image: '/image/events/shanghai-booth.webp',
    href: '/products/kangkang',
  },
];

const productSystemFeatures = [
  {
    icon: HeartHandshake,
    title: '陪伴互动',
    desc: '通过自然对话、主动问候和家庭消息，让产品成为父母身边更容易接受的陪伴入口。',
  },
  {
    icon: Bell,
    title: '生活提醒',
    desc: '支持作息、饮水、活动等日常提醒设置，帮助年轻家属把关心安排得更稳定。',
  },
  {
    icon: Smartphone,
    title: 'APP 连接',
    desc: '心忆同启 APP 连接设备、家庭成员、权限设置、下载与客服入口。',
  },
  {
    icon: MessageCircle,
    title: '家庭沟通',
    desc: '让文字消息、提醒和简报围绕家庭成员流转，减少零散沟通成本。',
  },
  {
    icon: ShieldCheck,
    title: '边界清晰',
    desc: '陪伴、提醒和辅助提示不替代医疗诊断、专业照护或紧急救援。',
  },
];

const kangkangFeatures = [
  {
    icon: Sparkles,
    label: '全屋移动',
    title: '主动找人主动跟随',
    desc: '不是放在桌上的音箱，而是能在家中移动到长辈身边的陪伴机器人。',
  },
  {
    icon: MessageCircle,
    label: '语音陪聊',
    title: '父母可以自然开口说话',
    desc: '康康支持语音互动，适合日常闲聊、问候和简单陪伴，让父母在家里多一个能回应的对象。',
  },
  {
    icon: HeartHandshake,
    label: '主动问候',
    title: '陪伴不只等人唤醒',
    desc: '在合适的日常场景中，康康可以主动发起问候或提醒，让陪伴更自然。',
  },
  {
    icon: Bell,
    label: '生活提醒',
    title: '把琐碎关心安排成日常',
    desc: '饮水、作息、用药时间、复诊等内容可作为生活事项提醒和信息记录，不构成医疗建议。',
  },
  {
    icon: Radio,
    label: '话题娱乐',
    title: '有兴趣，有话聊，对生活保持好奇。',
    desc: '让父母的生活方式多样化，查查天气、听听新闻、音乐和科普养生知识，让日常更有内容，也更有回应。',
  },
  {
    icon: MessageCircle,
    label: '亲情消息',
    title: '家人的话，更容易抵达',
    desc: '子女可通过 APP 发送消息，让父母在家中收到问候、提醒和家庭安排。',
  },
  {
    icon: Smartphone,
    label: 'APP 联动',
    title: '子女在手机上设置，父母在家中接收',
    desc: '心忆同启 APP 支持设备绑定、提醒设置、家庭成员管理、权限管理和生活简报等能力。',
  },
  {
    icon: Lock,
    label: '隐私保护',
    title: '先授权，再连接',
    desc: '家庭成员、提醒、消息和设备相关能力以用户授权、设备状态、网络环境和隐私政策为准。',
  },
];

const appFeatures = [
  {
    icon: Smartphone,
    label: '设备绑定',
    title: '把康康连接到家庭',
    desc: '按步骤完成设备绑定，让康康和家庭成员建立连接。',
  },
  {
    icon: Bell,
    label: '提醒设置',
    title: '把关心提前安排好',
    desc: '为父母设置饮水、作息、用药时间、复诊等生活事项提醒。',
  },
  {
    icon: MessageCircle,
    label: '亲情消息',
    title: '想说的话，直接送到家里',
    desc: '通过 APP 给父母发送问候、安排和家庭消息。',
  },
  {
    icon: HeartHandshake,
    label: '家庭空间',
    title: '多个家人一起参与',
    desc: '支持家庭成员协同管理，减少信息分散和重复沟通。',
  },
  {
    icon: Layers,
    label: '生活简报',
    title: '辅助了解大致情况',
    desc: '在授权和设备条件允许下，帮助家人了解设备使用和提醒情况。',
  },
  {
    icon: Lock,
    label: '权限与隐私',
    title: '谁能看、谁能管，说清楚',
    desc: '家庭成员权限、数据访问和相关服务以用户授权和隐私政策为准。',
  },
];

const kangkangSolutions = [
  {
    title: '适合谁',
    desc: '适合不常在父母身边、希望把提醒和问候安排得更稳定的子女；也适合需要多个家人共同照护、希望有统一家庭关怀入口的家庭。',
  },
  {
    title: '解决什么',
    desc: '不是解决所有养老问题，而是解决日常陪伴和家庭消息触达不稳定的问题：父母少一点冷清，子女少一点悬着的心。',
  },
  {
    title: '怎么用',
    desc: '康康在父母家中使用，子女通过心忆同启 APP 绑定设备、设置提醒、发送亲情消息、管理家庭成员和权限。',
  },
];

const kangkangTimeline = [
  {
    time: '08:00',
    title: '主动问候',
    scene: '早上好，昨晚睡得怎么样？',
  },
  {
    time: '10:30',
    title: '喝水活动',
    scene: '起来活动一下，喝点水吧。',
  },
  {
    time: '15:00',
    title: '兴趣陪伴',
    scene: '要不要听一段喜欢的戏曲？',
  },
  {
    time: '19:30',
    title: '家人连接',
    scene: '孩子给您留了一句话。',
  },
];

const kangkangStandards = [
  {
    title: '技术路径',
    desc: '先进入真实家庭空间，再理解家庭习惯，最后把提醒、问候和消息稳定落到日常。',
  },
  {
    title: '场景定义',
    desc: '以全屋移动、主动说话、家庭连接和子女安心，定义居家陪伴机器人的核心场景。',
  },
  {
    title: '产品路线',
    desc: '从主动陪伴开始，逐步扩展家庭记忆、生活协助和更多居家关怀能力。',
  },
  {
    title: '隐私态度',
    desc: '远程能力与数据访问以用户授权、设备设置和隐私政策为准，可逐项说明边界。',
  },
];

const kangkangPlans = [
  {
    name: '心忆康康守护版',
    price: '7999',
    qrImage: '/image/kangkang/kangkang-mini-program-qr.jpg',
    qrAlt: '心忆康康小程序二维码',
    qrCaption: '扫码咨询守护版',
    tag: '守护版',
    desc: '更关注老人独居状态、子女远程安心的家庭。',
    features: ['主动陪伴与自然对话', '更完整的家庭状态关注', '更强的远程关心能力', '更多服务权益'],
    cta: '咨询守护版',
  },
];

const kangkangFaqs = [
  {
    question: '心忆康康和普通摄像头有什么区别？',
    answer: '摄像头主要是被动查看，心忆康康可以在家中移动，主动和长辈说话、陪伴、提醒。',
  },
  {
    question: '父母不会用智能设备怎么办？',
    answer: '使用前会完成联网、绑定和基础演示，子女也可以通过心忆同启 APP 协助设置日常提醒。',
  },
  {
    question: '家里户型复杂能不能用？',
    answer: '实际可用性会受到门槛、地面、网络和设备状态影响，建议先沟通家庭环境再安排演示或部署。',
  },
  {
    question: '现在有哪些版本和价格？',
    answer: '心忆康康守护版为 7999 元。使用方式和服务内容可能因配置不同而变化，具体权益以小程序或工作人员的最终说明为准。',
  },
  {
    question: '摄像头和隐私会不会让父母有压力？',
    answer: '康康强调陪伴和提醒，远程能力与数据访问都以用户授权、设备设置和隐私政策为准，购买前可以逐项确认边界。',
  },
  {
    question: '能不能先看演示再决定？',
    answer: '可以从商务合作或公众号入口提交咨询，工作人员会联系安排产品介绍或演示方式。',
  },
];

const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-white font-sans text-slate-900">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

const ProductIndex: React.FC = () => (
  <PageShell>
    <section className="hm-page-hero">
      <div className="hm-page-hero-inner">
        <div className="hm-page-hero-copy">
          <div>
            <p className="hm-page-kicker">Products</p>
            <h1 className="hm-page-title">用 AI 陪伴，把家人的关心留在身边</h1>
            <p className="hm-page-lead">
              心忆以 AI 机器人和家庭关怀 APP 为核心，让日常问候、生活提醒和家庭沟通更稳定地抵达父母身边。
            </p>
          </div>
          <div className="mt-10 hidden gap-3 lg:grid lg:grid-cols-3">
            {productLine.map((item) => (
              <Link key={item.title} to={item.href} className="rounded-lg bg-white/10 p-4 text-sm font-black text-white ring-1 ring-white/10 transition hover:bg-white hover:text-slate-950">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="hm-page-visual">
          <img src="/image/kangkang/product-family.webp" alt="心忆产品体系" />
        </div>
      </div>
    </section>

    <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Product Family</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">从身边陪伴到手机连接</h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            一个产品陪在父母身边，一个入口装在子女手机里。两者配合，让家庭关怀更容易开始，也更容易持续。
          </p>
        </div>

        <div className="mt-10 overflow-x-auto pb-5">
          <div className="grid auto-cols-[minmax(280px,420px)] grid-flow-col gap-5">
            {productHighlights.map((item) => (
              <Link key={item.title} to={item.href} className="group relative h-[360px] overflow-hidden rounded-lg bg-slate-900 shadow-sm">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{item.desc}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-black">
                    查看详情
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-600">Family Care</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">围绕家庭关怀的核心能力</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            从陪伴互动到生活提醒，从 APP 连接到隐私边界，心忆希望把科技能力转化成家人更容易理解和使用的日常关怀。
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productSystemFeatures.map((item, index) => (
            <article
              key={item.title}
              className={`rounded-lg border border-slate-100 bg-slate-50 p-7 shadow-sm ${
                index === 1 || index === 4 ? 'lg:translate-y-10' : ''
              } ${index === 2 ? 'lg:translate-y-5' : ''}`}
            >
              <item.icon className="h-9 w-9 text-emerald-600" />
              <h3 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white px-5 pb-16 sm:px-8 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-blue-600 p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-100">Next</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">从具体产品开始了解心忆</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-50">
            如果想看机器人，进入心忆康康；如果想看手机端能力，进入心忆同启 APP。
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Link to="/products/kangkang" className="rounded-md bg-white px-6 py-3 text-center text-sm font-bold text-blue-700 transition hover:bg-blue-50">
            心忆康康
          </Link>
          <Link to="/products/app" className="rounded-md border border-white/50 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-white hover:text-blue-700">
            心忆同启 APP
          </Link>
        </div>
      </div>
    </section>
  </PageShell>
);

const KangkangProduct: React.FC = () => {
  const [activeScene, setActiveScene] = useState(0);
  const location = useLocation();
  const scene = kangkangTimeline[activeScene];

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[#39251f] px-[clamp(20px,6vw,88px)] py-[clamp(68px,8vw,108px)] text-white">
        <div className="absolute inset-0">
          <img src="/image/v4/kangkang-hero.jpg" alt="心忆康康产品家族" className="h-full w-full object-cover object-[center_60%]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#241815]/90 via-[#39251f]/68 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="hm-eyebrow text-white before:bg-[#d99b45]">HeartMemo Kangkang</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.14] md:text-5xl">心忆康康：陪在父母身边的 AI 居家陪伴机器人</h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-white/75">
            康康放在父母家，有爱又有陪伴。心忆康康支持语音陪聊、主动找人、各类生活提醒、资讯科普、健康监管、视频监管等家庭关怀辅助。不是替代家人照护，而是让日常关心更容易抵达。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/cooperation" className="hm-primary px-6">预约演示</Link>
            <a href="#pricing" className="rounded-[6px] border border-white/45 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111827]">查看版本与服务</a>
            <Link to="/products/app" className="rounded-[6px] border border-white/45 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#111827]">下载心忆同启 APP</Link>
          </div>
        </div>
      </section>

      <section className="hm-section bg-[#fff8f3]">
        <div className="mx-auto max-w-7xl">
          <div className="hm-section-heading">
            <p className="hm-eyebrow">产品方案</p>
            <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">心忆康康：产品方案</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {kangkangSolutions.map((item, index) => (
              <article key={item.title} className="hm-card p-7">
                <span className="text-sm font-bold text-[#d94a38]">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-black text-[#111827]">{item.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-[#667085]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-section hm-definition-section bg-white">
        <div>
          <p className="hm-eyebrow">品类定义</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">陪在父母身边的 AI 生活伙伴</h2>
          <p className="mt-6 text-base leading-8 text-[#667085]">
            心忆康康不是放在桌上的音箱，而是能走到老人身边的家庭机器人。父母可以自然互动，子女也能通过 APP 参与设置和了解大致近况。
          </p>
        </div>
        <div className="hm-compare-list">
          <div><span>第一步</span><strong>进入真实家庭空间</strong></div>
          <div><span>第二步</span><strong>主动问候与自然对话</strong></div>
          <div><span>第三步</span><strong>连接子女的日常关心</strong></div>
          <div><span>最终</span><strong>成为家庭关怀的长期入口</strong></div>
        </div>
      </section>

      <section className="hm-section hm-capability-section">
        <div className="hm-section-heading">
          <p className="hm-eyebrow">产品能力</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">从移动陪伴到家庭连接</h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="hm-capability-grid">
            {kangkangFeatures.map((item) => (
              <article key={item.title}>
                <item.icon className="mb-5 h-9 w-9 text-[#14b8c8]" />
                <p className="text-xs font-bold text-[#d94a38]">{item.label}</p>
                <h3 className="text-lg font-black text-[#111827]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-section hm-product-proof-section">
        <div className="hm-proof-image">
          <img src="/image/kangkang/product-family.webp" alt="心忆康康产品形象" />
        </div>
        <div>
          <p className="hm-eyebrow">真实产品</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">看见康康在家庭里的陪伴方式</h2>
          <p className="mt-6 text-base leading-8 text-[#667085]">
            通过真实画面了解康康的外观、互动方式和使用氛围。它提供的是日常陪伴与提醒辅助，不替代家属照护和专业服务。
          </p>
          <div className="hm-proof-points">
            <span>日常陪伴</span>
            <span>生活提醒</span>
            <span>家庭连接</span>
          </div>
        </div>
      </section>

      <section className="hm-section bg-white">
        <div className="hm-section-heading">
          <p className="hm-eyebrow">一天的陪伴</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">从早到晚，主动陪在家里</h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="hm-timeline">
            {kangkangTimeline.map((item, index) => (
              <button
                key={item.time}
                type="button"
                onClick={() => setActiveScene(index)}
                className={`hm-time-card ${activeScene === index ? 'hm-time-card-active' : ''}`}
              >
                <span>{item.time}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
          <div className="hm-scene-preview">
            <span>康康说</span>
            <p>{scene.scene}</p>
          </div>
        </div>
      </section>

      <section className="hm-section hm-family-section">
        <div>
          <p className="hm-eyebrow text-white before:bg-[#d99b45]">子女价值</p>
          <h2 className="mt-4 text-3xl font-black leading-[1.18] md:text-4xl">买给父母的，其实也是给自己的安心</h2>
          <p className="mt-6 text-base leading-8">
            不是监控父母，而是用陪伴、提醒和家庭消息，让关心更自然地抵达家里。
          </p>
        </div>
        <div className="hm-family-points">
          <span>少一点牵挂</span>
          <span>多一点连接</span>
          <span>更自然的陪伴入口</span>
          <span>持续升级的家庭机器人</span>
        </div>
      </section>

      <section id="pricing" className="hm-section hm-pricing-section">
        <div className="hm-section-heading">
          <p className="hm-eyebrow">版本价格</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">选择适合家人的康康</h2>
          <p className="mt-5">使用方式和服务内容不同。你可以先预约一次产品演示，我们会根据家庭场景说明适合的版本与服务范围。</p>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="hm-pricing-grid">
            <div className="hm-pricing-image">
              <img src="/image/v4/scene-5.jpg" alt="家庭成员体验心忆康康" />
            </div>
            {kangkangPlans.map((plan) => (
              <article key={plan.name} className="hm-price-card hm-price-card-highlighted">
                {plan.tag && <div className="hm-price-tag">{plan.tag}</div>}
                <h3>{plan.name}</h3>
                {plan.price && (
                  <div className="hm-price">
                    {plan.price}
                    <span>元起</span>
                  </div>
                )}
                {plan.qrImage && (
                  <div className="hm-price-qr">
                    <img src={plan.qrImage} alt={plan.qrAlt} />
                    <p>{plan.qrCaption}</p>
                  </div>
                )}
                <p className="mt-5">{plan.desc}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link to="/cooperation" className="hm-primary mt-8 px-6">
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-section hm-trust-section">
        <div className="hm-section-heading">
          <p className="hm-eyebrow">场景标准</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">我们做的不是一台设备，而是家庭机器人的长期入口</h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="hm-trust-grid">
            {kangkangStandards.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-black text-[#111827]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667085]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-section hm-faq-section">
        <div className="hm-section-heading">
          <p className="hm-eyebrow">购买前</p>
          <h2 className="hm-title mt-4 text-3xl font-black md:text-4xl">大家最关心这些问题</h2>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="hm-faq-list">
            {kangkangFaqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p className="mt-3">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="hm-disclaimer">
        产品用于日常陪伴、生活提醒、亲情消息和家庭关怀辅助，不替代家属照护、专业护理、医疗诊疗、急救服务或安防系统；健康、用药、复诊相关内容仅作为提醒和信息记录，不构成医疗建议。
      </section>
    </PageShell>
  );
};

const AppProduct: React.FC = () => (
  <PageShell>
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="mx-auto w-full max-w-sm rounded-lg border border-white/15 bg-slate-900 p-4 shadow-2xl">
          <div className="rounded-lg bg-white p-5 text-slate-950">
            <div className="mx-auto h-1.5 w-16 rounded-full bg-slate-200" />
            <div className="mt-6 rounded-lg bg-blue-600 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100">App Preview</p>
              <h2 className="mt-3 text-2xl font-black">心忆同启</h2>
              <p className="mt-3 text-sm leading-6 text-blue-50">家庭关怀助手</p>
            </div>
            <div className="mt-5 space-y-3">
              {appFeatures.slice(0, 4).map((item) => (
                <div key={item.title} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">HeartMemo App</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">心忆同启 APP：子女手机里的家庭关怀入口</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            连接康康设备、家庭成员和日常提醒。子女可以在手机上设置提醒、发送亲情消息、管理权限，并辅助了解设备状态和生活简报。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#download" className="hm-primary px-6">下载 APP</a>
            <Link to="/support" className="rounded-[6px] border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#111827]">了解如何连接康康</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Family Care</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">把关心安排成清晰的日常</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            从绑定设备到设置提醒，再到接收生活简报，心忆同启让家庭成员更容易参与日常关怀。
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-100 bg-slate-50 p-6">
              <item.icon className="h-8 w-8 text-blue-600" />
              <p className="mt-5 text-xs font-bold text-[#d94a38]">{item.label}</p>
              <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="download" className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg bg-white p-8 shadow-sm lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <img src="/image/qrcode.jpg" alt="心忆同启 APP 下载二维码" className="h-36 w-36 rounded-lg border border-slate-100 object-cover p-2" />
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Download</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950">下载心忆同启 APP</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            扫码获取 APP 下载、公众号动态和客服咨询入口。不同系统的可用方式以上线状态为准。
          </p>
        </div>
        <Link to="/support" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
          <Download className="h-5 w-5" />
          查看支持
        </Link>
      </div>
    </section>

  </PageShell>
);

const FutureProduct: React.FC = () => (
  <PageShell>
    <section className="bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Lock className="h-12 w-12 text-amber-300" />
        <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-amber-300">Product Family</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">新产品尽请期待</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
          心忆将围绕居家陪伴、家庭沟通和康养服务持续拓展更多智能产品，让不同家庭都能找到适合自己的关怀方式。
        </p>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {['居家陪伴', '家庭连接', '情感交互'].map((item) => (
          <article key={item} className="rounded-lg border border-slate-100 bg-slate-50 p-7">
            <Film className="h-9 w-9 text-blue-600" />
            <h2 className="mt-5 text-2xl font-black text-slate-950">{item}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">围绕真实家庭需求，持续探索更自然、更安心的 AI 关怀体验。</p>
          </article>
        ))}
      </div>
    </section>
  </PageShell>
);

export const ProductsPage: React.FC = () => {
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (productId === 'kangkang') {
    return <KangkangProduct />;
  }

  if (productId === 'app') {
    return <AppProduct />;
  }

  if (productId === 'future') {
    return <FutureProduct />;
  }

  return <ProductIndex />;
};
