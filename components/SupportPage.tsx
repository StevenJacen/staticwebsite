import React, { useEffect } from 'react';
import { Download, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const faqs = [
  ['康康机器人可以替代家人照护吗？', '不能。产品提供日常提醒、陪伴互动和辅助提示，不替代家属照护、社区服务、医疗诊断或急救服务。'],
  ['远程查看视频是否一直开启？', '应以用户授权、隐私政策和实际设备设置为准。建议明确告知使用范围，并在必要时关闭或遮挡摄像头。'],
  ['生活简报是否等于健康报告？', '不是。简报仅供家人了解大致使用情况，不构成健康评估。'],
];

const guides = [
  ['一键求助', '长辈可通过物理按键或语音触发求助，系统向家属发送文字消息，并提供辅助拨打电话能力。'],
  ['隐私模式', '支持一键关闭摄像头 / 麦克风等采集能力，具体状态应在设备和 APP 中清晰展示。'],
  ['远程查看', '家属可在授权范围内通过手机 APP 查看实时画面；画质、稳定性受网络环境影响。'],
  ['用药提醒', '支持单组定时用药提醒，超时未响应时可同步提醒子女。健康安排请以医生或家属确认结果为准。'],
  ['健康录入', '支持每日定时询问血压 / 血糖并通过语音录入，异常提示仅作日常参考。'],
  ['娱乐播报', '支持本地戏曲、音乐播放、传统民乐曲库选择播放和每日免费新闻播报。'],
];

export const SupportPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">支持</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">下载、使用指南与客服入口</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {[
              [Download, 'APP 下载', '苹果下载二维码已提供；安卓统一入口研发中。'],
              [MessageCircle, '使用指南', '包含配网、绑定家庭空间、设置提醒、远程查看和权限管理。'],
              [Phone, '联系客服', '联系电话：17600222898；服务热线：4001023698。'],
            ].map(([Icon, title, desc]) => (
              <article key={title as string} className="bg-white rounded-2xl shadow-sm p-8">
                {React.createElement(Icon as typeof Download, { className: 'w-9 h-9 text-blue-500 mb-5' })}
                <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{desc}</p>
              </article>
            ))}
          </div>

          <a
            href="/legal-text.html"
            target="_blank"
            rel="noreferrer"
            className="mb-12 inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
          >
            隐私政策与第三方信息共享清单（文本审核页）
          </a>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-slate-800">常见问题</h2>
            </div>
            <div className="space-y-4">
              {faqs.map(([question, answer]) => (
                <article key={question} className="rounded-xl bg-blue-50 p-5">
                  <h3 className="font-bold text-slate-800">{question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mt-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-slate-800">使用指南</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {guides.map(([title, desc]) => (
                <article key={title} className="rounded-xl bg-blue-50 p-5">
                  <h3 className="font-bold text-slate-800">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
