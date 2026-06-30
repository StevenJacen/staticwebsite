import React, { useEffect } from 'react';
import { Building2, CheckCircle2, Home, Users } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const solutions = [
  {
    icon: Home,
    title: '居家养老',
    config: '1 台康康机器人 + 家庭成员 APP',
    value: '远程提醒、日常陪伴、家庭信息同步',
    desc: '子女在外工作，父母独自在家。康康机器人可在日常时段发起问候和事项提醒；APP 推送生活简报，帮助家人了解大致使用情况。',
  },
  {
    icon: Users,
    title: '社区康养',
    config: '多台康康机器人 + 社区管理后台',
    value: '批量管理、辅助巡访、提升关怀效率',
    desc: '社区服务中心引入产品，为老年居民提供智能陪伴与求助关键词提示辅助服务，降低社区服务人员巡访压力。',
  },
  {
    icon: Building2,
    title: '机构合作',
    config: '定制化部署方案',
    value: '提升住户体验、家属沟通效率、品牌差异化',
    desc: '养老机构部署康康机器人，作为日常关怀的补充手段，帮助提升住户体验和家属沟通效率。',
  },
];

const implementation = [
  '明确服务对象、设备数量、联网环境和实际看护流程',
  '确认远程查看、数据访问和隐私告知方式',
  '定义求助关键词后的人工响应流程',
  '上线前准备 APP 下载、客服、隐私政策、用户协议和备案信息',
];

export const SolutionsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#fffaf6] font-sans text-slate-950">
      <Navbar />
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-black text-rose-600">场景方案</p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">让 AI 陪伴进入真实养老场景</h1>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                面向家庭、社区和机构，心忆科技提供从硬件设备到 APP 连接的组合方案，帮助照护关系更及时、更清晰。
              </p>
            </div>
            <img src="/image/v3/solutions-triptych.png" alt="居家养老、社区康养、机构合作三类场景" className="rounded-[2rem] object-cover shadow-2xl shadow-rose-100" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {solutions.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-8 shadow-sm">
                <item.icon className="mb-6 h-10 w-10 text-rose-500" />
                <h2 className="text-2xl font-black">{item.title}</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  <p><span className="font-black text-slate-900">典型配置：</span>{item.config}</p>
                  <p><span className="font-black text-slate-900">价值点：</span>{item.value}</p>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-rose-50">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-sm font-black text-rose-600">落地建议</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">上线前需要确认的服务边界</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {implementation.map((item) => (
                <p key={item} className="flex gap-3 rounded-2xl bg-white p-5 text-sm font-bold text-slate-700 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-rose-500" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
