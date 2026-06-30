import React, { useEffect } from 'react';
import { Building, Handshake, Mail, Network, PhoneCall } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const entries = [
  { icon: Handshake, title: '商务合作', desc: '面向品牌联合、场景共建、项目试点与资源合作，适合企业、平台和服务商洽谈。' },
  { icon: Network, title: '渠道加盟', desc: '面向区域渠道、养老服务渠道、医疗康养渠道等合作伙伴，具体政策待客户补充。' },
  { icon: Building, title: '机构部署', desc: '面向养老机构、社区服务中心、康养中心，围绕设备、后台、服务流程和家属沟通设计方案。' },
];

export const CooperationPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#fffaf6] font-sans text-slate-950">
      <Navbar />
      <main>
        <section className="bg-slate-950 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black text-rose-300">合作入口</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">一起把有温度的 AI 陪伴带到更多家庭</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              我们欢迎社区、机构、渠道和产业伙伴共建养老陪伴服务。正式上线前可接入表单、企微或 CRM 接口。
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8">
          {entries.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
              <item.icon className="mb-6 h-10 w-10 text-rose-500" />
              <h2 className="text-2xl font-black">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="bg-rose-50 px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">联系我们</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                当前版本先展示合作路径和联系方式。后续如需要收集线索，可补充姓名、机构、城市、电话、合作类型和备注字段。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <PhoneCall className="mb-4 h-7 w-7 text-rose-500" />
                <p className="font-black">商务合作</p>
                <p className="mt-2 text-sm text-slate-600">18500190368</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <Mail className="mb-4 h-7 w-7 text-rose-500" />
                <p className="font-black">合作邮箱</p>
                <p className="mt-2 text-sm text-slate-600">待客户提供</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
