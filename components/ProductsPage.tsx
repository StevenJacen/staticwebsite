import React, { useEffect } from 'react';
import { Bell, Bot, Brain, Lock, MessageCircle, Smartphone, Wifi, AlertTriangle, HeartPulse, Music, TextCursorInput } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const appFeatures = [
  ['远程提醒', '关心，不会被距离挡住', '支持设置作息、饮水、活动等生活提醒。提醒触达受网络和设备状态影响，建议结合实际确认。'],
  ['AI 聊天', '能聊天，也能陪伴', '支持语音与文字交互，可用于日常闲聊、生活百科查询、饮食与养生科普信息获取。'],
  ['家庭空间', '一扇门，一家人', '通过邀请码或链接邀请家人加入，共享提醒、设备状态和相关记录。数据访问以用户授权和隐私政策为准。'],
  ['生活简报', '每天一份，了解近况', '基于互动记录和提醒信息生成日报或周报，帮助家人了解大致使用情况。'],
  ['设备联动', '软件连硬件，关怀更到位', '绑定康康机器人后，可在授权范围内接收设备提示并远程配置提醒内容。'],
];

const robotFeatures = [
  { icon: MessageCircle, title: '语音交互', desc: '普通话远场唤醒、基础指令、单轮闲聊识别，支持语速和音量调节。' },
  { icon: Brain, title: '情绪关怀', desc: '基于语音、画面和交互内容提供基础情绪表情、声音提示及求助关键词提示。' },
  { icon: Lock, title: '隐私保护', desc: '支持权限管理、传输加密、最小必要采集和摄像头物理遮挡等隐私保护设计。' },
  { icon: Bot, title: '硬件互动', desc: '基础行走、物理避障、防止碰撞、手臂动作、声源方向响应和自动回充。' },
  { icon: Bell, title: '日常备忘', desc: '支持通过语音或 APP 设置生活备忘、周期提醒和亲情消息播报。' },
];

const specs = [
  '尺寸：435 x 245 x 245 mm',
  '重量：4.6kg',
  '续航：5-7 小时',
  '联网：Wi-Fi 6、蓝牙 5.4',
  '摄像头：1080p RGB，对角 120 度',
  '麦克风：6 麦环形阵列，5m 拾音',
  '屏幕：2.1 英寸圆形 LCD',
  '配色：米白 / 棕 / 粉 / 橘',
];

const v1Groups = [
  {
    icon: AlertTriangle,
    title: '安全保障',
    items: ['一键紧急求助：文字消息 + 辅助拨打电话', '跌倒风险辅助提示', '隐私模式一键开关：摄像头 / 麦克风', '设备断网 / 断电告警', '预警消息分级强推送'],
  },
  {
    icon: Smartphone,
    title: '代际情感链接',
    items: ['手机 APP 远程查看授权画面', '一键 480P 视频', '接收子女文字消息'],
  },
  {
    icon: HeartPulse,
    title: '健康管理',
    items: ['每日定时主动询问血压 / 血糖并支持语音录入', '健康数据超标双向预警', '通用健康常识播报，仅供日常参考'],
  },
  {
    icon: Bell,
    title: '基础生活辅助',
    items: ['单组定时用药提醒，可超时同步子女', '每日播报天气 / 日期 / 农历', '基础语音指令识别', '基础自动避障'],
  },
  {
    icon: TextCursorInput,
    title: '适老化操作',
    items: ['屏幕字体不小于 21px，高对比度显示', '大尺寸凸起物理按键：求助 / 通话', '菜单层级不超过 2 级，仅保留核心入口', '基础声光反馈'],
  },
  {
    icon: Music,
    title: '情感陪伴与娱乐',
    items: ['开机入户欢迎', '本地戏曲 / 音乐播放和轻互动', '基础肢体动作与情绪表情配合', '每日定时主动问候或特定场景问候', '情绪低落迹象下的话题转移与陪伴引导'],
  },
];

export const ProductsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <div className="relative bg-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/image/kangkang/product-family.webp" alt="HeartMemo product" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-light tracking-wider mb-6 text-emerald-400 uppercase">产品</h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light">心忆同启 APP 与心忆康康守护版</p>
          </div>
        </div>

        <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <Smartphone className="w-10 h-10 text-blue-500 mb-6" />
              <h2 className="text-3xl font-bold text-slate-800">心忆同启 APP</h2>
              <p className="mt-4 text-slate-600 leading-loose">装在手机里的家庭关怀助手，帮助家人远程设置提醒、查看设备状态和接收生活简报。</p>
            </div>
            <div className="grid gap-4">
              {appFeatures.map(([label, title, desc]) => (
                <article key={label} className="bg-white rounded-2xl shadow-sm p-6">
                  <p className="text-sm font-bold text-blue-500">{label}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-800">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">AI 康康机器人</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {robotFeatures.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl shadow-sm p-7">
                  <item.icon className="w-8 h-8 text-blue-500 mb-5" />
                  <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <Wifi className="w-7 h-7 text-blue-500" />
              <h2 className="text-2xl font-bold text-slate-800">硬件参数</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <img src="/image/kangkang/robot-three-view.webp" alt="AI 康康机器人三视图" className="w-full rounded-2xl bg-slate-50 object-cover p-3" />
              <div className="grid gap-4 sm:grid-cols-2">
                {specs.map((item) => (
                  <p key={item} className="rounded-xl bg-blue-50 p-4 text-sm font-medium text-slate-700">{item}</p>
                ))}
              </div>
            </div>
            <p className="mt-6 text-xs leading-6 text-slate-500">求助、跌倒检测、远程查看、情绪反馈等功能均为辅助提示，不替代家属照护、社区服务、医疗诊断或急救服务。</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-3">V1.0 基础必做能力</h2>
            <p className="text-sm leading-7 text-slate-500 mb-8">
              以下能力来自客户提供的 V1.0 需求表，官网表达按辅助功能呈现，实际效果受设备版本、网络状态、权限设置和部署环境影响。
            </p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {v1Groups.map((group) => (
                <article key={group.title} className="bg-white rounded-2xl shadow-sm p-7">
                  <group.icon className="w-8 h-8 text-blue-500 mb-5" />
                  <h3 className="text-lg font-bold text-slate-800">{group.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-7 text-slate-600">· {item}</li>
                    ))}
                  </ul>
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
