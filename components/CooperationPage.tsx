import React, { useEffect } from 'react';
import { Building, Handshake, Network, PhoneCall } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const entries = [
  [Handshake, '商务合作', '面向品牌联合、场景共建、项目试点与资源合作。'],
  [Network, '渠道加盟', '面向区域渠道、养老服务渠道、医疗康养渠道等合作伙伴。'],
  [Building, '机构部署', '面向养老机构、社区服务中心、康养中心提供部署方案。'],
];

export const CooperationPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">商务合作</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">一起把有温度的 AI 陪伴带到更多家庭</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3 mb-10">
            {entries.map(([Icon, title, desc]) => (
              <article key={title as string} className="bg-white rounded-2xl shadow-sm p-8">
                {React.createElement(Icon as typeof Handshake, { className: 'w-10 h-10 text-blue-500 mb-6' })}
                <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 flex items-start gap-4">
            <PhoneCall className="w-8 h-8 text-blue-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-slate-800">联系心忆科技</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">公司 CEO：18500190368；服务热线：4001023698；地址：北京市海淀区永捷南路 2 号院 2 号楼。</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
