import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f6e2c8]">
      <div className="relative z-0 w-full">
        <video className="hidden h-auto w-full contrast-[1.04] saturate-[1.08] md:block" autoPlay loop muted playsInline>
          <source src="/video/banner.webm" type="video/webm" />
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>

        <video className="block h-auto w-full contrast-[1.04] saturate-[1.08] md:hidden" autoPlay loop muted playsInline>
          <source src="/video/banner-m.webm" type="video/webm" />
          <source src="/video/banner-m.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#fff4e3]/14" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 18% 8%, rgba(255,255,246,0.34), transparent 24%), linear-gradient(90deg, rgba(255,244,227,0.16) 0%, rgba(246,226,200,0.12) 54%, rgba(226,184,144,0.08) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fff4e3]/80 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-end">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(20px,6vw,88px)] pb-[clamp(32px,7vw,88px)]">
          <div className="pointer-events-auto max-w-2xl">
            <p className="hm-eyebrow">心忆康康 AI 居家陪伴机器人</p>
            <h1 className="hm-title mt-4 text-[clamp(34px,5vw,60px)] font-black leading-[1.12]">
              给爸妈一个会回应的陪伴
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.75] text-[#667085] md:text-lg">
              康康放在父母家，把主动问候、生活提醒和家人消息带到日常里。不替代家人照护，只让关心更容易抵达。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/products/kangkang" className="hm-primary px-6">
                了解康康
              </Link>
              <Link to="/cooperation" className="hm-secondary bg-white/85 px-6 backdrop-blur">
                预约产品演示
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
