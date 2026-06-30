import React, { useEffect } from 'react';
import { AlertTriangle, Bell, Bot, Brain, Camera, HeartPulse, Lock, MessageCircle, Music, Smartphone, TextCursorInput, Wifi } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const appFeatures = [
  ['远程提醒', '关心，不会被距离挡住', '支持设置作息、饮水、活动等生活提醒。提醒触达受网络和设备状态影响，建议结合实际确认。'],
  ['AI 聊天', '能聊天，也能陪伴', '支持语音与文字交互，可用于日常闲聊、生活百科查询、饮食与养生科普信息获取。相关内容供日常参考。'],
  ['家庭空间', '一扇门，一家人', '通过邀请码或链接邀请家人加入，共享提醒、设备状态和相关记录。数据访问以用户授权和隐私政策为准。'],
  ['生活简报', '每天一份，了解近况', '基于互动记录和提醒信息生成日报或周报，帮助家人了解大致使用情况。简报内容受使用频率和权限设置影响。'],
  ['设备联动', '软件连硬件，关怀更到位', '绑定康康机器人后，可在授权范围内接收设备提示并远程配置提醒内容。'],
];

const robotFeatures = [
  { icon: MessageCircle, title: '语音交互 · 随时可以聊', desc: '支持多轮对话、指令识别、语速和音量调节。在部分场景下可主动发起问候或提醒，为长辈提供日常陪伴体验。' },
  { icon: Brain, title: '情绪关怀 · 陪伴感', desc: '基于语音和交互内容提供情绪关怀反馈及求助关键词提示。该能力作为辅助提示，不构成心理评估或医疗判断。' },
  { icon: Lock, title: '隐私保护 · 多一层守护', desc: '采用权限管理、本地处理、传输加密、最小必要采集、物理遮挡摄像头等措施降低隐私风险。' },
  { icon: Bot, title: '硬件交互 · 自然互动', desc: '支持基础肢体动作、声源方向响应、APP 配网与设备管理。实际动作效果和硬件配置以交付版本为准。' },
  { icon: Bell, title: '日常备忘 · 信息传达', desc: '支持通过语音或 APP 设置生活备忘、周期提醒和亲情消息播报。健康相关备忘应以医生或专业人士建议为准。' },
];

const v1Groups = [
  { icon: AlertTriangle, title: '安全保障需求', items: ['一键紧急求助：文字消息 + 辅助拨打电话', '基础跌倒检测辅助提示', '隐私模式一键开关：摄像头 / 麦克风', '设备断网 / 断电告警', '预警消息分级强推送'] },
  { icon: Camera, title: '代际情感链接需求', items: ['手机 APP 远程查看授权实时画面', '一键 480P 视频', '接收子女文字消息'] },
  { icon: HeartPulse, title: '健康管理需求', items: ['每日定时主动询问血压 / 血糖并支持语音口述录入', '数据超标双向预警', '通用健康常识播报'] },
  { icon: Bell, title: '基础生活辅助需求', items: ['单组定时用药提醒，可超时同步子女', '每日播报天气 / 日期 / 农历', '基础语音指令识别', '基础自动避障'] },
  { icon: TextCursorInput, title: '适老化操作需求', items: ['屏幕字体不小于 21px，高对比度显示', '大尺寸凸起物理按键：求助 / 通话', '菜单层级不超过 2 级，仅保留核心入口', '基础声光反馈'] },
  { icon: Music, title: '基础情感陪伴需求', items: ['开机入户欢迎', '本地戏曲 / 音乐播放和轻互动', '基础肢体动作与情绪表情配合', '每日定时主动问候或特定场景问候', '情绪低落迹象下的话题转移与陪伴引导'] },
];

const specs = [
  '产品尺寸：435 x 245 x 245 mm',
  '类型：AI 家庭情感陪伴机器人',
  '重量：4.6kg',
  '续航：5-7 小时',
  '联网方式：Wi-Fi 6、蓝牙 5.4',
  '导航避障：激光雷达 + 视觉融合 SLAM',
  '摄像头：1080p RGB，对角 120 度',
  '麦克风：6 麦环形阵列，5m 拾音',
  '屏幕：2.1 英寸圆形 LCD',
  '扬声器：5W',
  '存储：128GB',
  '配色：米白 / 棕 / 粉 / 橘',
];

export const ProductsPage: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-[#fffaf6] font-sans text-slate-950">
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-slate-950 to-slate-800 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-black text-rose-300">产品</p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">心忆同启 APP 与 AI 康康机器人</h1>
              <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
                一个装在手机里的家庭关怀助手，一个放在家里的居家陪伴机器人，共同承接提醒、陪伴、沟通和设备联动场景。
              </p>
            </div>
            <img src="/image/v3/product-companion.png" alt="心忆同启 APP 与 AI 康康机器人" className="rounded-[2rem] object-cover shadow-2xl shadow-black/30" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <Smartphone className="mb-6 h-10 w-10 text-rose-500" />
              <h2 className="text-3xl font-black">心忆同启 APP</h2>
              <p className="mt-4 text-lg font-bold text-slate-500">装在手机里的家庭关怀助手</p>
              <p className="mt-6 text-sm leading-7 text-slate-600">
                “家庭关怀助手”强调协助与连接，避免暗示产品能够全面监护。所有数据访问以用户授权和隐私政策为准。
              </p>
            </div>
            <div className="grid gap-4">
              {appFeatures.map(([label, title, desc]) => (
                <article key={label} className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-black text-rose-600">{label}</p>
                  <h3 className="mt-2 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-sm font-black text-rose-600">AI 康康机器人</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">居家陪伴机器人，可问候、可提醒、可陪伴</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {robotFeatures.map((item) => (
                <article key={item.title} className="rounded-3xl bg-slate-50 p-7">
                  <item.icon className="mb-5 h-8 w-8 text-rose-500" />
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="text-sm font-black text-rose-600">V1.0 需求能力</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">基础必做能力清单</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
            以下能力来自客户提供的 V1.0 功能表。官网以辅助能力呈现，实际效果受设备版本、网络状态、权限设置和部署环境影响。
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {v1Groups.map((group) => (
              <article key={group.title} className="rounded-3xl bg-white p-7 shadow-sm">
                <group.icon className="mb-5 h-8 w-8 text-rose-500" />
                <h3 className="text-lg font-black">{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-7 text-slate-600">· {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-sm font-black text-rose-300">硬件参数</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">心忆康康守护版</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {specs.map((item) => (
                <p key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-slate-200">{item}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
