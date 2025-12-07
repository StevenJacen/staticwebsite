import React from 'react';
import { Heart} from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer>
      {/* Main Footer Links */}
      <div className="bg-slate-100 pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
             
             {/* Logo */}
             <div className="flex items-center">
               <div className="bg-blue-400 p-1.5 rounded-full text-white mr-2">
                 <Heart className="h-4 w-4 fill-current" />
               </div>
               
               <span className="font-bold text-2xl text-slate-700 tracking-tight">HeartMemo</span>
             </div>

            {/* QR Code Section - aligned with Logo */}
            <div className="flex flex-col items-end text-right space-y-2">
              <p className="text-sm font-medium text-gray-900">{t.footer.receiveViaLine}</p>
              <p className="text-[0.65rem] font-medium text-gray-900 text-center mx-auto">{t.footer.officialAccount}</p>
              <div className="bg-white p-1 rounded-lg">
                <img src="image/qrcode.jpg" alt="QR Code to connect on Line" className="w-16 h-16" />
              </div>
            </div>

          </div>

          <div className="text-xs text-slate-500 space-y-4 max-w-2xl mb-12">
            <p>{t.footer.mission}</p>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">
            <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
               <a href="#" className="hover:text-slate-900">FAQ</a>
               <a href="#" className="hover:text-slate-900">{t.footer.company}</a>
               <a href="#" className="hover:text-slate-900">{t.footer.privacy}</a>
               <a href="#" className="hover:text-slate-900">{t.footer.terms}</a>
            </div>
            <p className="font-normal">&copy; 2026 HeartMemo, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};