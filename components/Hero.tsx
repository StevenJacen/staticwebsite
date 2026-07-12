import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,rgba(217,74,56,0.06),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(20,184,200,0.12),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(217,155,69,0.13),transparent_34%),linear-gradient(135deg,#ffffff_0%,#fbfaf7_46%,#eef7f8_100%)]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] items-center gap-[clamp(28px,5vw,72px)] px-[clamp(20px,6vw,88px)] py-[clamp(54px,8vw,96px)] lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="hm-eyebrow">心忆康康｜AI 居家陪伴机器人</p>
          <h1 className="hm-title mt-4 max-w-[720px] text-[clamp(34px,5vw,56px)] font-black leading-[1.12]">给爸妈一个会回应的陪伴</h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.75] text-[#667085]">
            康康放在父母家，有爱又有陪伴。心忆康康支持语音陪聊、主动找人、各类生活提醒、资讯科普、健康监管、视频监管等家庭关怀辅助。不是替代家人照护，而是让日常关心更容易抵达。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products/kangkang" className="hm-primary px-6">
              了解康康
            </Link>
            <Link to="/cooperation" className="hm-primary px-6">
              预约产品演示
            </Link>
            <Link to="/products/kangkang#pricing" className="hm-secondary px-6">
              查看版本价格
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['会主动问候', '可做生活提醒', '家人消息可触达', '会移动到身边的 AI 居家陪伴机器人'].map((item) => (
              <span key={item} className="rounded-full border border-[#14b8c8]/25 bg-white/75 px-3 py-2 text-sm font-bold text-[#17334a]">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative grid min-h-[480px] place-items-center">
          <img
            src="/image/v4/scene-1.jpg"
            alt="心忆康康在家庭客厅中陪伴"
            className="w-full max-w-[620px] rounded-[8px] border border-[rgba(17,24,39,0.08)] bg-[linear-gradient(180deg,#fff,#f4f0e8)] object-cover shadow-[0_28px_90px_rgba(55,45,31,0.16)]"
          />
          <div className="absolute bottom-9 left-4 rounded-[8px] border border-[#14b8c8]/25 bg-white/80 px-4 py-3 text-sm font-bold text-[#111827] backdrop-blur-md md:left-6">
            全屋移动与主动问候
          </div>
          <div className="absolute right-4 top-9 rounded-[8px] border border-[#14b8c8]/25 bg-white/80 px-4 py-3 text-sm font-bold text-[#111827] backdrop-blur-md md:right-6">
            家庭消息稳定触达
          </div>
        </div>
      </div>
    </section>
  );
};
