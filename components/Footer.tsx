import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <div className="mb-5">
              <img src="/image/brand-logo.svg" alt="HeartMemo 心忆科技" className="h-16 w-auto brightness-0 invert" />
              <p className="mt-3 text-xs font-bold text-rose-200">北京心忆科技有限公司</p>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-300">
              专注 AI 家庭情感陪伴机器人与心忆同启 APP，让科技成为亲情沟通和日常关怀的温暖桥梁。
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <p className="font-bold text-white">联系信息</p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-rose-300" />
              <span>北京市海淀区永捷南路 2 号院 2 号楼</span>
            </p>
            <p className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-rose-300" />
              <span>联系电话：17600222898</span>
            </p>
            <p className="pl-6">服务热线：4001023698</p>
            <p className="pl-6">公司 CEO：18500190368</p>
          </div>

          <div className="space-y-4">
            <p className="font-bold">公众号与 APP 下载</p>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white p-2">
                <img src="/image/qrcode.jpg" alt="心忆科技二维码" className="h-20 w-20 object-cover" />
              </div>
              <p className="text-sm leading-7 text-slate-300">
                关注公众号，获取产品动态、心忆同启 APP 下载和客服入口。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-6 text-slate-400">
          <p>© 2026 Beijing HeartMemo Technology Co. Ltd. ICP 备案号、公安备案号待客户提供。</p>
          <p>产品功能受设备版本、网络状态、权限设置和实际交付版本影响；健康、心理与紧急情况请联系家属、社区人员或专业机构。</p>
        </div>
      </div>
    </footer>
  );
};
