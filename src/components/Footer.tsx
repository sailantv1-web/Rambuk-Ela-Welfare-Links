import React from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { ArrowUp, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const org = ASSOCIATION_DATA.organization;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-6 pt-6 pb-12 px-4 text-center border-t border-white/60">
      {/* Official Registry Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 shadow-xs text-xs font-semibold text-slate-700 mb-3">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Govt. Reg. No: {org.regNo}</span>
      </div>

      <p className="text-xs font-bold text-blue-950">
        {org.englishName}
      </p>
      <p className="font-sinhala text-xs text-emerald-800 mt-0.5">
        {org.sinhalaName}
      </p>

      <p className="text-xs text-slate-700 font-semibold mt-2 max-w-xs mx-auto leading-relaxed">
        Serving the community of Rambuk Ela.
      </p>
      <p className="text-[11px] text-slate-500 mt-0.5 max-w-xs mx-auto leading-relaxed">
        Dedicated to community welfare, mutual solidarity, and youth progress.
      </p>

      {/* Back to top button */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-700 text-xs font-semibold border border-white/80 shadow-xs transition-all active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>
      </div>

      <div className="mt-5 text-[10px] text-slate-400 flex items-center justify-center gap-1">
        <span>© {new Date().getFullYear()} {org.englishName}</span>
        <span>·</span>
        <span className="flex items-center gap-0.5">
          With <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500 inline" /> for Rambuk Ela
        </span>
      </div>
    </footer>
  );
};
