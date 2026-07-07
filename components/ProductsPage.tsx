import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  PlayCircle,
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
    icon: HeartHandshake,
    title: '主动问候',
    desc: '在合适的日常场景中发起问候或闲聊，为父母独处时提供陪伴感。',
  },
  {
    icon: Bell,
    title: '生活提醒',
    desc: '支持作息、饮水、活动等提醒设置，帮助家庭把关心变成稳定安排。',
  },
  {
    icon: MessageCircle,
    title: '家庭消息',
    desc: '配合心忆同启 APP 传递家人消息，让子女的问候更容易抵达。',
  },
  {
    icon: Sparkles,
    title: '自然互动',
    desc: '通过语音对话、基础动作和设备状态反馈，降低父母使用科技产品的距离感。',
  },
  {
    icon: ShieldCheck,
    title: '辅助提示',
    desc: '情绪关怀与求助关键词仅作为辅助提示，不构成心理评估或医疗判断。',
  },
  {
    icon: Lock,
    title: '隐私边界',
    desc: '远程能力与数据访问以用户授权、设备设置和隐私政策为准。',
  },
];

const appFeatures = [
  '绑定心忆康康设备',
  '远程设置生活提醒',
  '查看设备状态与授权设置',
  '接收生活简报',
  '邀请家庭成员加入',
  '传递文字消息和关心',
];

const appSteps = [
  {
    title: '绑定设备',
    desc: '把心忆康康与家庭账号连接起来，形成清晰的使用入口。',
  },
  {
    title: '设置提醒',
    desc: '为父母安排日常事项提醒，提醒触达受网络和设备状态影响。',
  },
  {
    title: '接收简报',
    desc: '通过互动记录和提醒信息了解大致使用情况，不作为健康报告。',
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
    <section className="bg-white px-5 py-14 sm:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="overflow-hidden rounded-lg bg-slate-100 shadow-sm">
          <img src="/image/kangkang/product-family.webp" alt="心忆产品体系" className="h-full min-h-[420px] w-full object-cover" />
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-slate-950 p-8 text-white md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Products</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-6xl">用 AI 陪伴，把家人的关心留在身边</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
              心忆以 AI 机器人和家庭关怀 APP 为核心，让日常问候、生活提醒和家庭沟通更稳定地抵达父母身边。
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {productLine.map((item) => (
              <Link key={item.title} to={item.href} className="rounded-lg bg-white/10 p-4 text-sm font-black text-white ring-1 ring-white/10 transition hover:bg-white hover:text-slate-950">
                {item.title}
              </Link>
            ))}
          </div>
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

const KangkangProduct: React.FC = () => (
  <PageShell>
    <section className="relative overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8 md:py-28">
      <div className="absolute inset-0 opacity-30">
        <img src="/image/kangkang/robot-three-view.webp" alt="心忆康康机器人" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/35" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">HeartMemo Kangkang</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">心忆康康：居家陪伴机器人</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200">
          可问候、可提醒、可陪伴。它不是替代亲情，而是把子女的关心更稳定地放在父母身边。
        </p>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-slate-100 bg-slate-50 shadow-sm">
          <img src="/image/kangkang/product-family.webp" alt="心忆康康产品形象" className="h-full min-h-[420px] w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Care Companion</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">陪在父母身边的 AI 生活伙伴</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            心忆康康把日常问候、生活提醒和家庭消息放在家里。父母可以自然互动，子女也能通过 APP 参与设置和了解大致近况。
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['日常陪伴', '生活提醒', '家庭连接'].map((item) => (
              <p key={item} className="rounded-lg bg-blue-50 px-4 py-4 text-center text-sm font-black text-blue-700">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-600">In Real Life</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">看见康康在家庭里的陪伴方式</h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            通过实拍画面了解康康的外观、互动方式和使用氛围。它提供的是日常陪伴与提醒辅助，不替代家属照护和专业服务。
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-lg bg-slate-950 shadow-sm">
          <video className="aspect-video w-full object-cover" autoPlay loop muted playsInline>
            <source src="/video/banner-1.webm" type="video/webm" />
            <source src="/video/banner.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Care Features</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">围绕陪伴、提醒与家庭连接</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {kangkangFeatures.map((item, index) => (
            <article key={item.title} className={`rounded-lg border border-slate-100 bg-slate-50 p-7 ${index % 2 === 1 ? 'lg:translate-y-8' : ''}`}>
              <item.icon className="h-9 w-9 text-blue-600" />
              <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

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
                <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">HeartMemo App</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">心忆同启 APP：装在手机里的家庭关怀助手</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
            连接设备、管理提醒、加入家庭空间、接收简报和找到服务入口，让子女的关心有一个清晰、稳定的手机端入口。
          </p>
        </div>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-blue-600">Family Care</p>
          <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">把关心安排成清晰的日常</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            从绑定设备到设置提醒，再到接收生活简报，心忆同启让家庭成员更容易参与日常关怀。
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {appSteps.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-100 bg-slate-50 p-6">
              <Layers className="h-8 w-8 text-blue-600" />
              <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
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

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-600">App Experience</p>
            <h2 className="mt-4 text-3xl font-black text-slate-950 md:text-5xl">手机端的家庭关怀体验</h2>
          </div>
          <p className="text-base leading-8 text-slate-600">
            通过简洁的操作路径，把设备管理、提醒配置和家庭信息同步放进同一个入口。
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {['绑定设备', '设置提醒', '查看简报'].map((item) => (
            <article key={item} className="rounded-lg bg-slate-950 p-6 text-white">
              <PlayCircle className="h-10 w-10 text-amber-300" />
              <h3 className="mt-5 text-2xl font-black">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">从手机端完成关键操作，让家人的关心更容易落到日常。</p>
            </article>
          ))}
        </div>
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
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">持续拓展的家庭关怀产品线</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
          心忆将围绕居家陪伴、家庭沟通和康养服务持续拓展更多智能产品，让不同家庭都能找到适合自己的关怀方式。
        </p>
      </div>
    </section>

    <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {['居家陪伴', '家庭连接', '康养协同'].map((item) => (
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
