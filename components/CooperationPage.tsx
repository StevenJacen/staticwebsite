import React, { useEffect } from 'react';
import { Building2, Handshake, MessageCircle, Store, UsersRound } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const cooperationTypes = [
  {
    icon: Store,
    title: '渠道合作',
    desc: '面向家庭用户购买咨询、产品展示、渠道销售和区域服务协同。',
  },
  {
    icon: Building2,
    title: '机构落地',
    desc: '面向社区康养、养老机构、康复服务和相关照护场景，评估设备部署与服务流程。',
  },
  {
    icon: UsersRound,
    title: '联合推广',
    desc: '围绕活动曝光、用户教育、公众号内容和产品体验进行联合传播。',
  },
];

export const CooperationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <main>
        <section className="hm-page-hero">
          <div className="hm-page-hero-inner">
            <div className="hm-page-hero-copy">
              <p className="hm-page-kicker">Cooperation</p>
              <h1 className="hm-page-title">商务合作咨询</h1>
              <p className="hm-page-lead">
                如果你关注家庭照护、康养服务、渠道销售或机构落地，可以通过这里了解合作方向，并与心忆团队进一步沟通。
              </p>
            </div>
            <div className="hm-page-card">
              <MessageCircle className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-2xl font-black">联系心忆</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">咨询电话：17600222898</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">服务热线：4001023698</p>
              <img src="/image/qrcode.jpg" alt="商务合作二维码" className="mt-5 h-24 w-24 rounded-[8px] border border-slate-100 object-cover p-2" />
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {cooperationTypes.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <item.icon className="h-10 w-10 text-blue-500" />
                <h2 className="mt-6 text-2xl font-black text-slate-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <Handshake className="h-10 w-10 text-blue-500" />
              <h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">沟通前可以先准备这些信息</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {['合作场景与目标用户', '预计采购或服务规模', '需要产品展示、试用还是部署方案'].map((item) => (
                <p key={item} className="rounded-2xl bg-slate-50 p-6 text-sm font-medium leading-7 text-slate-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="hm-disclaimer">
          康康用于日常陪伴、生活提醒、亲情消息和家庭关怀辅助，不替代家属照护、专业护理、医疗诊疗、急救服务或安防系统；健康、用药、复诊相关内容仅作为提醒和信息记录，不构成医疗建议。
        </section>
      </main>
      <Footer />
    </div>
  );
};
