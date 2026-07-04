import React, { useEffect } from 'react';
import { Building2, Home, Users } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const solutions = [
  ['居家养老', '1 台康康机器人 + 家庭成员 APP', '远程提醒、日常陪伴、家庭信息同步', Home],
  ['社区康养', '多台康康机器人 + 社区管理后台', '批量管理、辅助巡访、提升关怀效率', Users],
  ['机构合作', '定制化部署方案', '提升住户体验、家属沟通效率、品牌差异化', Building2],
];

export const SolutionsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/image/kangkang/scene-daily-care.webp" alt="Solutions" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">场景方案</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">让 AI 陪伴进入真实养老场景</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {solutions.map(([title, config, value, Icon]) => (
              <article key={title as string} className="bg-white rounded-2xl shadow-sm p-8">
                {React.createElement(Icon as typeof Home, { className: 'w-10 h-10 text-blue-500 mb-6' })}
                <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
                <p className="mt-5 text-sm leading-7 text-slate-600"><span className="font-bold text-slate-900">典型配置：</span>{config}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600"><span className="font-bold text-slate-900">价值点：</span>{value}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
