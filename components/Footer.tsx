import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';

const footerGroups = [
  {
    title: '产品',
    links: [
      ['心忆康康', '/products/kangkang'],
      ['心忆同启 APP', '/products/app'],
      ['未来产品预留', '/products/future'],
    ],
  },
  {
    title: '服务',
    links: [
      ['下载 APP', '/support'],
      ['常见问题', '/support'],
      ['隐私政策与用户协议', '/legal-text.html'],
    ],
  },
  {
    title: '公司',
    links: [
      ['关于我们', '/about'],
      ['精选资讯', '/news'],
      ['商务合作', '/cooperation'],
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03030d] text-white">
      <div className="mx-auto max-w-7xl px-[clamp(20px,6vw,88px)] py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_0.8fr]">
          <div>
            <img src="/image/brand-logo.svg" alt="HeartMemo 心忆科技" className="h-12 w-auto rounded-[6px] bg-white px-2 py-1" />
            <p className="mt-6 max-w-xl text-sm leading-8 text-white/68">
              北京心忆科技有限公司专注 AI 陪伴与家庭连接产品。我们不追求替代亲情，只希望让子女的关心更及时、更稳定地抵达父母身边。
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/68">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14b8c8]" />
                北京市海淀区永捷南路 2 号院 2 号楼
              </p>
              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#14b8c8]" />
                17600222898 / 4001023698 / 18500190368
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-black text-white">{group.title}</h2>
                <div className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    href.endsWith('.html') ? (
                      <a key={`${group.title}-${label}-${href}`} href={href} target="_blank" rel="noreferrer" className="block text-sm text-white/55 transition hover:text-white">
                        {label}
                      </a>
                    ) : (
                      <Link key={`${group.title}-${label}-${href}`} to={href} className="block text-sm text-white/55 transition hover:text-white">
                        {label}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:text-right">
            <p className="text-sm font-black text-white">公众号同步</p>
            <p className="mt-3 text-sm leading-7 text-white/55">扫码查看产品动态、活动曝光和下载入口。</p>
            <img src="/image/qrcode.jpg" alt="心忆科技公众号二维码" className="mt-5 h-24 w-24 rounded-[8px] bg-white object-cover p-2 lg:ml-auto" />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© 2026 Beijing HeartMemo Technology Co. Ltd. 产品功能与服务范围以实际上线版本、设备状态、网络状态和授权设置为准。</p>
        </div>
      </div>
    </footer>
  );
};
