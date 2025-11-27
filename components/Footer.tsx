import React from 'react';
import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer>
      {/* Black Call to Action Section */}
      <div className="bg-[#111] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest mb-2 text-[#d4af37]">
            {t.footer.friendsTitle}
          </h2>
          <p className="text-gray-400 text-sm mb-12">{t.footer.friendsDesc}</p>
          
          <div className="flex flex-col items-center">
            <p className="mb-6 font-bold">{t.footer.subscribe}</p>
            {/* QR Code Placeholder */}
            <div className="bg-white p-2 rounded-lg mb-4">
               <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-black text-xs">
                 QR Code
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-[#f0f0f0] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            
            <div className="flex items-center gap-4">
               <span className="font-extrabold text-xl tracking-tighter uppercase">HeartMemo</span>
               <div className="flex space-x-4 ml-4 border-l border-gray-300 pl-4">
                 <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={18} /></a>
                 <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={18} /></a>
                 <a href="#" className="text-gray-400 hover:text-black transition-colors"><Facebook size={18} /></a>
               </div>
            </div>

            <div className="text-xs text-gray-500 max-w-md">
               {t.footer.mission}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider">
             <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
               <a href="#" className="hover:text-gray-600">{t.footer.faq || 'FAQ'}</a>
               <a href="#" className="hover:text-gray-600">{t.footer.company}</a>
               <a href="#" className="hover:text-gray-600">{t.footer.privacy}</a>
               <a href="#" className="hover:text-gray-600">{t.footer.terms}</a>
             </div>
             <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};