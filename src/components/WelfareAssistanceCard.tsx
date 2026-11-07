import React from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { HeartHandshake, MessageSquare, PhoneCall, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface WelfareAssistanceCardProps {
  onOpenQuickMessage: (topic?: string) => void;
  onShowToast: (message: string) => void;
}

export const WelfareAssistanceCard: React.FC<WelfareAssistanceCardProps> = ({
  onOpenQuickMessage,
  onShowToast,
}) => {
  const direct = ASSOCIATION_DATA.directConnect;

  const waEmergencyUrl = `https://wa.me/${direct.cleanPhone}?text=${encodeURIComponent(
    "Assalamu Alaikum / Greetings! I am reaching out to the Rambuk-Ela Welfare Association Desk regarding Community Welfare Assistance / Contribution."
  )}`;

  return (
    <section className="px-4 py-2" aria-labelledby="welfare-assistance-heading">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2
          id="welfare-assistance-heading"
          className="text-xs font-bold uppercase tracking-wider text-sky-950/70 flex items-center gap-1.5"
        >
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
          Official Welfare Desk & Support
        </h2>
        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Direct Aid
        </span>
      </div>

      {/* 3D Virtual Card Container (Styled prominently like the Banking Card) */}
      <div className="relative overflow-hidden rounded-3xl p-5 text-white shadow-xl shadow-emerald-950/20 border border-white/40 bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#1E3A8A]">
        {/* Subtle decorative curved ambient light watermarks */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-emerald-300/25 blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-sky-400/25 blur-2xl pointer-events-none" />

        {/* Background micro grid pattern for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        {/* Card Header: Official Welfare Badge + Verified Shield */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            {/* Heart Handshake Badge */}
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xs">
              <HeartHandshake className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span>Welfare Assistance Desk</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/30 text-amber-200 border border-amber-300/40 font-semibold">
                  Official
                </span>
              </div>
              <div className="text-xs text-emerald-200 font-medium">
                Rambuk-Ela Welfare Association
              </div>
            </div>
          </div>

          {/* Verified Badge */}
          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Confidential</span>
          </div>
        </div>

        {/* Metallic Chip / Community Sub-Banner */}
        <div className="relative z-10 mt-3 mb-2 flex items-center gap-2">
          <div className="w-8 h-6 rounded-md bg-gradient-to-tr from-amber-300 via-amber-200 to-yellow-400 border border-amber-400/70 shadow-inner flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
          </div>
          <span className="text-[10px] tracking-widest text-emerald-200 uppercase font-semibold">
            Emergency Aid · Janaza · Medical · Education · Donations
          </span>
        </div>

        {/* PROMINENT MAIN BANNER CONTENT (HIGHLIGHTED LIKE BANKING CARD) */}
        <div className="relative z-10 my-3 p-3.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25">
          <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug drop-shadow-sm">
            Need Welfare Assistance or Wish to Contribute?
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 font-medium mt-1 leading-relaxed">
            Reach out directly to the official association desk.
          </p>
          <div className="mt-2 text-[11px] text-sky-200/90 leading-tight">
            Compassionate, confidential support for families in Rambuk Ela. Contributions go 100% directly to verified community welfare programs.
          </div>
        </div>

        {/* Dual 3D Action Buttons: Inquire via Form & Direct WhatsApp */}
        <div className="relative z-10 grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-white/15">
          {/* Quick Message Modal Button */}
          <button
            onClick={() => onOpenQuickMessage("Welfare Support & Contribution")}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-blue-950 font-bold text-xs shadow-md border border-white/80 active:translate-y-0.5 transition-all duration-200"
            aria-label="Send Inquiry to Official Desk"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Inquire / Request</span>
          </button>

          {/* WhatsApp Direct Connect Button */}
          <a
            href={waEmergencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-white hover:to-white hover:bg-white active:from-white active:to-white active:bg-white text-white hover:text-[#059669] active:text-[#059669] font-bold text-xs shadow-md border border-white/30 hover:border-[#25D366] active:translate-y-0.5 transition-all duration-200"
            aria-label="Contact Official Desk on WhatsApp"
          >
            <Send className="w-3.5 h-3.5" />
            <span>WhatsApp Desk</span>
          </a>
        </div>

        {/* Card Footer: Official Guarantee Line */}
        <div className="relative z-10 mt-3 flex items-center justify-between text-[11px] text-sky-100/90">
          <span className="font-medium">
            Hotline: {direct.displayPhone}
          </span>
          <span className="text-emerald-200 font-semibold">
            Dedicated to Serving You
          </span>
        </div>
      </div>
    </section>
  );
};
