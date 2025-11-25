import React from 'react';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100 pt-16 pb-8 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
               <div className="bg-blue-500 p-2 rounded-full text-white mr-2">
                  <Heart className="h-5 w-5 fill-current" />
               </div>
               <span className="font-bold text-2xl text-slate-700">HeartMemo</span>
            </div>
            <p className="text-slate-600 mb-6 max-w-sm">
              Bringing warmth to technology. Our mission is to create interfaces that feel human, gentle, and kind.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-blue-400 hover:text-blue-600 shadow-sm transition-transform hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-pink-500 hover:text-pink-600 shadow-sm transition-transform hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-blue-700 hover:text-blue-800 shadow-sm transition-transform hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">Technology</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">Design</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">News</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200/60 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 HeartMemo Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};