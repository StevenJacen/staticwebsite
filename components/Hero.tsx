import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-16 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 tracking-tight mb-6">
          Technology that <span className="text-blue-400">Warms</span> Your Heart
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10">
          Discover a new form of companionship. Inspired by the warmth of life and the precision of modern engineering.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg transition transform hover:-translate-y-1">
            Learn More
          </button>
          <button className="px-8 py-4 bg-white hover:bg-slate-50 text-blue-400 border-2 border-blue-200 font-bold rounded-full shadow-md transition transform hover:-translate-y-1">
            View Gallery
          </button>
        </div>
      </div>
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
};