import React, { useEffect } from 'react';
import { GraduationCap, Lightbulb, Newspaper, ShieldCheck, Users } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const founders = [
  ['张凯', '创始人兼 CEO', '太原理工大学计算机专业，中欧国际工商学院 EMBA，拥有机器人行业与企业经营管理经验，具备企业商业化落地实操经验。'],
  ['赵利军', '联合创始人兼 CTO', '清华大学本硕，中欧国际 EMBA，深耕 AI 算法、计算机视觉、自动驾驶与机器人领域。'],
  ['刘宁', '联合创始人兼 COO', '南京大学生命科学本科、纽约州立大学市场营销硕士，中欧国际工商学院 EMBA，具备投资人与创业者双重视角。'],
];

const researchers = [
  ['谭日宏', '总工程师', '主导机器人嵌入式系统开发，具备嵌入式与高性能计算经验，覆盖从芯片级到应用层的系统架构能力。'],
  ['王虎博士', 'AI 架构师', '负责具身智能感知与 AI 算法研发，拥有医疗 AI、隐私计算、数字疗法等产业化经验。'],
  ['周红桂博士', '情感架构师', '主导情感计算与交互心理算法研发，拥有临床实操经验和心理学研究成果。'],
];

const compliance = [
  '隐私政策、用户协议、APP 下载二维码、ICP 备案号、公安备案号需以上线前客户最终资料为准。',
  '远程查看、健康数据、生活简报等能力均应以用户授权和隐私政策为前提。',
  '情绪识别、跌倒检测、求助提示均为辅助能力，不构成心理评估、医疗判断或急救承诺。',
];

const news = [
  ['品牌资料', 'HeartMemo 为注册商标，心忆科技为公司主体，心忆康康为机器人名称，心忆同启为 APP 名称。'],
  ['产品动态', '心忆康康守护版围绕家庭陪伴、情感关怀、安全守护和代际沟通持续迭代。'],
  ['资料待补', '企业文化、发展历程、获得荣誉和证书图片需客户确认公开版本后正式展示。'],
];

export const AboutPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#fffaf6] font-sans text-slate-950">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-rose-50 to-amber-50 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black text-rose-600">关于我们</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">心忆同启，从“牵挂”开始</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-700">
              每一位在外打拼的子女，心里都有一份对父母的牵挂。心忆科技希望用技术，为“常回家看看”多提供一种可能。
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Lightbulb className="mb-6 h-10 w-10 text-rose-500" />
              <h2 className="text-3xl font-black md:text-4xl">品牌故事</h2>
            </div>
            <div className="space-y-5 text-base leading-9 text-slate-700">
              <p>心忆，取“心中挂念”之意；同启，寓意“共同开启”。心忆同启 APP 与 AI 康康机器人，就是这份牵挂的载体。</p>
              <p>我们不追求替代亲情的陪伴，只希望在科技与人文的交汇处，为每一个家庭搭建一座更温暖的沟通桥梁。</p>
              <p>心忆康康采用温和、憨厚、让人放松的形象，减少传统机器人的冰冷感，让长辈愿意亲近、愿意交流。</p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="mb-10">
              <Users className="mb-5 h-9 w-9 text-rose-500" />
              <p className="text-sm font-black text-rose-600">团队</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">学术、科技与商业复合背景</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {founders.map(([name, role, desc]) => (
                <article key={name} className="rounded-3xl bg-slate-50 p-7">
                  <p className="text-xl font-black">{name}</p>
                  <p className="mt-2 text-sm font-black text-rose-600">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>

            <div className="mt-14 mb-10">
              <GraduationCap className="mb-5 h-9 w-9 text-rose-500" />
              <h2 className="text-3xl font-black md:text-4xl">科研团队</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                团队还汇聚来自清华、北大、北航等院校的硕士工程师，覆盖计算机视觉、自然语言处理、嵌入式开发与机器人控制等技术栈。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {researchers.map(([name, role, desc]) => (
                <article key={name} className="rounded-3xl border border-rose-100 p-7">
                  <p className="text-xl font-black">{name}</p>
                  <p className="mt-2 text-sm font-black text-rose-600">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-950 p-8 text-white">
              <ShieldCheck className="mb-5 h-9 w-9 text-rose-300" />
              <h2 className="text-3xl font-black">合规与隐私</h2>
              <div className="mt-6 space-y-4">
                {compliance.map((item) => (
                  <p key={item} className="text-sm leading-7 text-slate-300">· {item}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <Newspaper className="mb-5 h-9 w-9 text-rose-500" />
              <h2 className="text-3xl font-black">新闻动态</h2>
              <div className="mt-6 space-y-4">
                {news.map(([title, desc]) => (
                  <article key={title} className="rounded-2xl bg-rose-50 p-5">
                    <p className="font-black text-slate-900">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
