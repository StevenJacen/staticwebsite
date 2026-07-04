import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="bg-slate-100 pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <img src="/image/brand-logo.svg" alt="HeartMemo 心忆科技" className="h-14 w-auto" />
              </div>
              <p className="text-xs text-slate-500 leading-7 max-w-xl">{t.footer.mission}</p>
            </div>

            <div className="flex flex-col items-end text-right space-y-2">
              <p className="text-sm font-medium text-gray-900">{t.footer.receiveViaLine}</p>
              <p className="text-[0.65rem] font-medium text-gray-900 text-center mx-auto">{t.footer.officialAccount}</p>
              <div className="bg-white p-1 rounded-lg">
                <img src="/image/qrcode.jpg" alt="HeartMemo official account QR code" className="w-16 h-16" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 text-sm text-slate-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <span>{t.aboutPage.addressValue}</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {t.aboutPage.phones.map((p) => (
                  <span key={p.value}>
                    <span className="text-slate-400">{p.label}：</span>
                    <a href={`tel:${p.value}`} className="hover:text-slate-900 transition-colors">{p.value}</a>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">
            <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
              <a href="/support" className="hover:text-slate-900">FAQ</a>
              <a href="/about" className="hover:text-slate-900">{t.footer.company}</a>
              <a href="/support" className="hover:text-slate-900">{t.footer.privacy}</a>
              <a href="/support" className="hover:text-slate-900">{t.footer.terms}</a>
            </div>
            <p className="font-normal">&copy; 2026 Beijing HeartMemo Technology Co. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
