import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[calc(100dvh-72px)] w-full overflow-hidden bg-[#f6e2c8]">
      <div
        className="absolute inset-y-0 right-0 hidden w-[min(58vw,980px)] min-w-[600px] overflow-hidden lg:block"
        style={{
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 12%, rgba(0,0,0,0.45) 30%, #000 54%)',
          maskImage:
            'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 12%, rgba(0,0,0,0.45) 30%, #000 54%)',
        }}
      >
        <video
          className="h-full w-full object-cover object-right brightness-[1.03] contrast-[1.09] saturate-[1.16]"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/video/banner.webm" type="video/webm" />
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 top-[54%] overflow-hidden lg:hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.18) 16%, #000 42%)',
          maskImage:
            'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.18) 16%, #000 42%)',
        }}
      >
        <video
          className="h-full w-full object-cover object-center brightness-[1.03] contrast-[1.09] saturate-[1.16]"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/video/banner.webm" type="video/webm" />
          <source src="/video/banner.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] -translate-y-[clamp(28px,4vh,56px)] items-center justify-start px-[clamp(20px,6vw,88px)] text-left">
        <h1 className="hm-title max-w-[760px] text-[clamp(40px,5vw,76px)] font-black leading-[1.08] text-[#6b4428]">
          让每个人都有爱与陪伴
        </h1>
      </div>
    </section>
  );
};
