import React, { useEffect } from 'react';
import { Download, HelpCircle, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const guides = [
  ['一键求助', '长辈可通过物理按键或语音触发求助，系统向家属发送文字消息，并提供辅助拨打电话能力。'],
  ['隐私模式', '支持一键关闭摄像头 / 麦克风等采集能力，具体状态应在设备和 APP 中清晰展示。'],
  ['远程查看', '家属可在授权范围内通过手机 APP 查看实时画面；画质、稳定性受网络环境影响。'],
  ['用药提醒', '支持单组定时用药提醒，超时未响应时可同步提醒子女。健康安排请以医生或家属确认结果为准。'],
  ['健康录入', '支持每日定时询问血压 / 血糖并通过语音录入，异常提示仅作日常参考。'],
  ['娱乐播报', '支持本地戏曲、音乐播放、传统民乐曲库选择播放和每日免费新闻播报。'],
];

const faqs = [
  ['康康机器人可以替代家人照护吗？', '不能。产品提供日常提醒、陪伴互动和辅助提示，不替代家属照护、社区服务、医疗诊断或急救服务。'],
  ['远程查看视频是否一直开启？', '应以用户授权、隐私政策和实际设备设置为准。建议明确告知使用范围，并在必要时关闭或遮挡摄像头。'],
  ['求助信号如何处理？', '产品可对身体反应描述、向子女求助等内容进行辅助提示，后续响应仍需要家属、社区人员或服务团队确认。'],
  ['生活简报是否等于健康报告？', '不是。简报基于互动记录和提醒信息生成，仅供家人了解大致使用情况，不构成健康评估。'],
];

export const SupportPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#fffaf6] font-sans text-slate-950">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-sky-50 to-rose-50 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black text-rose-600">支持</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">常见问题、使用指南、APP 下载与客服入口</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-700">
              第二版先搭建完整支持结构，正式上线前需要补充 APP 下载二维码、隐私政策、用户协议与备案信息。
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8">
          {[
            [Download, 'APP 下载', '苹果下载二维码已提供；安卓统一入口研发中。上线时可接入应用商店链接或二维码。'],
            [MessageCircle, '使用指南', '配网、绑定家庭空间、设置提醒、远程查看、隐私模式和权限管理等。'],
            [Phone, '联系客服', '联系电话：17600222898；服务热线：4001023698；公司 CEO：18500190368。'],
          ].map(([Icon, title, desc]) => (
            <article key={title as string} className="rounded-3xl bg-white p-8 shadow-sm">
              {React.createElement(Icon as typeof Download, { className: 'mb-5 h-9 w-9 text-rose-500' })}
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <a
            href="/legal-text.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-rose-300 hover:text-rose-600"
          >
            隐私政策与第三方信息共享清单（文本审核页）
          </a>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-rose-500" />
              <h2 className="text-3xl font-black">使用指南</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {guides.map(([title, desc]) => (
                <article key={title} className="rounded-3xl bg-rose-50 p-6">
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-rose-500" />
            <h2 className="text-3xl font-black">常见问题</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="font-black">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 flex gap-3 rounded-3xl bg-slate-950 p-6 text-sm leading-7 text-slate-300">
            <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-rose-300" />
            隐私政策、用户协议、备案信息和客服承诺应由客户最终确认，避免官网承诺超出实际服务能力。
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};
