import React from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { Users, ChevronRight, PhoneCall, Award, ShieldCheck } from 'lucide-react';

interface MembersTeaserCardProps {
  onOpenMembers: () => void;
}

export const MembersTeaserCard: React.FC<MembersTeaserCardProps> = ({ onOpenMembers }) => {
  const members = ASSOCIATION_DATA.boardMembers;
  const president = members.find((m) => m.designation === 'President');
  const vp = members.find((m) => m.designation === 'Vice President');
  const sec = members.find((m) => m.designation === 'Secretary');

  return (
    <section className="px-4 py-2" aria-labelledby="members-teaser-heading">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 id="members-teaser-heading" className="text-xs font-bold uppercase tracking-wider text-sky-950/70 flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-blue-700" />
          Leadership & Committee
        </h2>
        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Dedicated Page
        </span>
      </div>

      <div className="p-4 rounded-3xl glass-card border border-white/85 shadow-sm">
        {/* Top Header Row with Avatar Previews */}
        <div className="flex items-center justify-between">
          <div className="flex items-center -space-x-2.5 overflow-hidden py-1">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-amber-950 flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-xs">
              HR
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-xs">
              SW
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-700 to-teal-500 text-white flex items-center justify-center font-bold text-xs ring-2 ring-white shadow-xs">
              AA
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-[10px] ring-2 ring-white shadow-xs">
              +9
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>12 Members</span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-3">
          <h3 className="text-sm font-bold text-slate-900 leading-snug">
            Board of Members & Leadership Directory
          </h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Direct phone dialers, WhatsApp chat buttons, and verified contact cards for all Executive Council and Committee officers.
          </p>

          {/* Quick Leadership Highlight */}
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-2xl bg-amber-50/80 border border-amber-200/80">
              <div className="inline-flex items-center gap-1 text-[10px] uppercase font-black text-amber-800 mb-0.5">
                <span>👑</span>
                <span>President</span>
              </div>
              <div className="font-extrabold text-slate-900 truncate">{president?.name || 'Hussain Rifna'}</div>
              <div className="text-[10px] font-semibold text-amber-700 font-sinhala">සභාපති</div>
            </div>
            <div className="p-2.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 text-left">
              <div className="inline-flex items-center gap-1 text-[10px] uppercase font-black text-emerald-800 mb-0.5">
                <span>🛡️</span>
                <span>Vice President</span>
              </div>
              <div className="font-extrabold text-slate-900 truncate">{vp?.name || 'Shafeek Wahab'}</div>
              <div className="text-[10px] font-semibold text-emerald-700 font-sinhala">උප සභාපති</div>
            </div>
          </div>
        </div>

        {/* Action Button: Navigate to Dedicated Members Page with Invert Glass Effect */}
        <button
          onClick={onOpenMembers}
          className="mt-3.5 w-full py-2.5 px-4 rounded-xl bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] hover:from-white hover:to-white hover:bg-white active:from-white active:to-white active:bg-white text-white hover:text-blue-700 active:text-blue-700 border border-transparent hover:border-blue-600 active:border-blue-700 text-xs font-bold shadow-md shadow-blue-900/15 hover:shadow-lg hover:shadow-blue-500/25 active:translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-1.5"
        >
          <PhoneCall className="w-4 h-4" />
          <span>View Members Contact Details (Separate Page)</span>
          <ChevronRight className="w-4 h-4 ml-0.5" />
        </button>
      </div>
    </section>
  );
};
