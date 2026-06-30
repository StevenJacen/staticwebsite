import React, { useEffect } from 'react';
import { GraduationCap, Lightbulb, Users } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const founders = [
  ['张凯', '创始人兼 CEO', '太原理工大学计算机专业，中欧国际工商学院 EMBA，拥有机器人行业与企业经营管理经验。'],
  ['赵利军', '联合创始人兼 CTO', '清华大学本硕，中欧国际 EMBA，深耕 AI 算法、计算机视觉、自动驾驶与机器人领域。'],
  ['刘宁', '联合创始人兼 COO', '南京大学生命科学本科、纽约州立大学市场营销硕士，中欧国际工商学院 EMBA。'],
];

const researchers = [
  ['谭日宏', '总工程师', '主导机器人嵌入式系统开发，具备嵌入式与高性能计算经验。'],
  ['王虎博士', 'AI 架构师', '负责具身智能感知与 AI 算法研发，拥有医疗 AI、隐私计算、数字疗法等产业化经验。'],
  ['周红桂博士', '情感架构师', '主导情感计算与交互心理算法研发，拥有临床实操经验和心理学研究成果。'],
];

const culture = [
  ['愿景', '愿每个人都拥有爱和陪伴。'],
  ['使命', '让 AI 情感陪伴机器人成为能与家庭共同成长的生活伙伴。'],
  ['价值观', '客户为先、产品为本、长期主义、温暖克制。'],
];

const milestones = [
  ['品牌定位', 'HeartMemo 为主品牌，心忆科技为公司主体，心忆康康为机器人名称，心忆同启为 APP 名称。'],
  ['产品方向', '围绕家庭陪伴、情感关怀、安全守护和代际沟通，打造 AI 家庭情感陪伴机器人。'],
  ['资料待补', '企业发展年份、融资信息、公开荣誉和证书图片需客户最终确认后再正式展示。'],
];

export const AboutPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/image/technology.png" alt="About HeartMemo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">关于我们</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">心忆同启，从“牵挂”开始</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <Lightbulb className="w-10 h-10 text-blue-500 mb-6" />
            <h2 className="text-3xl font-bold text-slate-800">品牌故事</h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-loose">
              <p>每一位在外打拼的子女，心里都有一份对父母的牵挂。我们希望用技术，为“常回家看看”多提供一种可能。</p>
              <p>心忆，取“心中挂念”之意；同启，寓意“共同开启”。心忆同启 APP 与 AI 康康机器人，就是这份牵挂的载体。</p>
              <p>我们不追求替代亲情的陪伴，只希望在科技与人文的交汇处，为每一个家庭搭建一座更温暖的沟通桥梁。</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-slate-800">公司简介</h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-loose">
              <p>北京心忆科技有限公司（Beijing HeartMemo Technology Co. Ltd.）专注 AI 家庭情感陪伴机器人与心忆同启 APP。</p>
              <p>公司希望把心理学、AI 算法、机器人硬件和真人服务结合起来，让养老陪伴从“工具”走向“被愿意亲近的伙伴”。</p>
              <p>除核心专家团队外，心忆科技还汇聚来自清华、北大、北航等院校的硕士工程师，覆盖计算机视觉、自然语言处理、嵌入式开发和机器人控制等技术栈。</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-9 h-9 text-blue-500" />
              <h2 className="text-3xl font-bold text-slate-800">创始团队</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {founders.map(([name, role, desc]) => (
                <article key={name} className="bg-white rounded-2xl shadow-sm p-7">
                  <p className="text-xl font-bold text-slate-800">{name}</p>
                  <p className="mt-2 text-sm font-bold text-blue-500">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-9 h-9 text-blue-500" />
              <h2 className="text-3xl font-bold text-slate-800">科研团队</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {researchers.map(([name, role, desc]) => (
                <article key={name} className="bg-white rounded-2xl shadow-sm p-7">
                  <p className="text-xl font-bold text-slate-800">{name}</p>
                  <p className="mt-2 text-sm font-bold text-blue-500">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">企业文化</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {culture.map(([label, content]) => (
                <article key={label} className="bg-white rounded-2xl shadow-sm p-7">
                  <p className="text-sm font-bold text-blue-500">{label}</p>
                  <p className="mt-4 text-lg leading-8 font-medium text-slate-700">{content}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-slate-800">发展历程与荣誉资质</h2>
            <div className="mt-6 space-y-5">
              {milestones.map(([label, content]) => (
                <div key={label} className="rounded-xl bg-blue-50 p-5">
                  <p className="font-bold text-slate-800">{label}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
