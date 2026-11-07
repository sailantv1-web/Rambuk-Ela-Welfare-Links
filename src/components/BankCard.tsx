import React, { useState } from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { Copy, Check, Landmark, ShieldCheck, Wifi } from 'lucide-react';

interface BankCardProps {
  onShowToast: (message: string) => void;
}

export const BankCard: React.FC<BankCardProps> = ({ onShowToast }) => {
  const bank = ASSOCIATION_DATA.bankDetails;
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedName, setCopiedName] = useState(false);
  const [copiedSwift, setCopiedSwift] = useState(false);

  const handleCopyName = async () => {
    try {
      await navigator.clipboard.writeText(bank.accountName);
      setCopiedName(true);
      onShowToast(`Account Name "${bank.accountName}" copied!`);
      setTimeout(() => setCopiedName(false), 2500);
    } catch {
      onShowToast("Unable to copy to clipboard");
    }
  };

  const handleCopyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bank.cleanAccountNumber);
      setCopiedAcc(true);
      onShowToast(`Account Number ${bank.cleanAccountNumber} copied!`);
      setTimeout(() => setCopiedAcc(false), 2500);
    } catch {
      onShowToast("Unable to copy to clipboard");
    }
  };

  const handleCopySwift = async () => {
    try {
      await navigator.clipboard.writeText(bank.swiftCode);
      setCopiedSwift(true);
      onShowToast(`SWIFT Code ${bank.swiftCode} copied!`);
      setTimeout(() => setCopiedSwift(false), 2500);
    } catch {
      onShowToast("Unable to copy to clipboard");
    }
  };

  return (
    <section className="px-4 py-2" aria-labelledby="bank-details-heading">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 id="bank-details-heading" className="text-xs font-bold uppercase tracking-wider text-sky-950/70 flex items-center gap-1.5">
          <Landmark className="w-3.5 h-3.5 text-blue-700" />
          Official Banking Credentials
        </h2>
        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Official Welfare Fund
        </span>
      </div>

      {/* 3D Virtual Bank Card Container */}
      <div className="relative overflow-hidden rounded-3xl p-5 text-white shadow-xl shadow-blue-950/15 border border-white/40 bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#047857]">
        {/* Subtle decorative curved watermarks */}
        <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />
        
        {/* Background micro grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        {/* Card Header: People's Bank + Akurana Branch */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            {/* Bank Icon Badge */}
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xs">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                <span>{bank.bankName}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/30 text-amber-200 border border-amber-300/40 font-mono">
                  {bank.currency.split(' ')[0]}
                </span>
              </div>
              <div className="text-xs text-sky-200 font-medium">
                {bank.branch}
              </div>
            </div>
          </div>

          {/* NFC & Verified Shield Badge */}
          <div className="flex items-center gap-2 text-white/70">
            <Wifi className="w-4 h-4 rotate-90" />
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
          </div>
        </div>

        {/* Metallic EMV Smart Chip Graphic */}
        <div className="relative z-10 mt-3 mb-2 flex items-center gap-3">
          <div className="w-9 h-7 rounded-lg bg-gradient-to-tr from-amber-300 via-amber-200 to-yellow-400 border border-amber-400/70 shadow-inner flex items-center justify-center">
            <div className="w-full h-[1px] bg-amber-600/50 my-auto" />
          </div>
          <span className="text-[10px] tracking-widest text-emerald-200 uppercase font-semibold">
            Non-Profit Welfare Account
          </span>
        </div>

        {/* PROMINENT ACCOUNT NAME SECTION */}
        <div className="relative z-10 my-2.5 p-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-wider text-sky-200 font-medium">
              Account Name
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
              {bank.accountName}
            </div>
          </div>
          <button
            onClick={handleCopyName}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/20 hover:bg-white active:bg-white text-white hover:text-blue-950 active:text-blue-950 text-[11px] font-bold shrink-0 border border-white/25 hover:border-white shadow-xs hover:shadow-md active:scale-95 transition-all duration-200"
            aria-label="Copy Account Name"
            title="Copy Account Name"
          >
            {copiedName ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-700" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Account Number Display */}
        <div className="relative z-10 my-2">
          <div className="text-[10px] uppercase tracking-wider text-sky-200 font-medium">
            Account Number
          </div>
          <div className="font-mono-numbers text-xl sm:text-2xl font-bold tracking-widest text-white mt-0.5 select-all">
            {bank.accountNumber}
          </div>
        </div>

        {/* Quick Copy Buttons Row: Account Number & SWIFT Code */}
        <div className="relative z-10 grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-white/15">
          {/* Copy Account Button (Inverts to white glass with blue text on hover/touch) */}
          <button
            onClick={handleCopyAccount}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/20 hover:bg-white active:bg-white backdrop-blur-md text-white hover:text-blue-950 active:text-blue-950 text-xs font-bold border border-white/30 hover:border-white shadow-xs hover:shadow-md active:translate-y-0.5 transition-all duration-200"
            aria-label="Copy Account Number to Clipboard"
          >
            {copiedAcc ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-700" />
                <span>Acc Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Acc No</span>
              </>
            )}
          </button>

          {/* Copy SWIFT Code Button (Inverts on hover/touch) */}
          <button
            onClick={handleCopySwift}
            className="flex items-center justify-between py-2 px-3 rounded-xl bg-black/25 hover:bg-white active:bg-white backdrop-blur-md text-white hover:text-slate-950 active:text-slate-950 text-xs font-bold border border-white/20 hover:border-white shadow-xs hover:shadow-md active:translate-y-0.5 transition-all duration-200"
            aria-label="Copy SWIFT Code to Clipboard"
          >
            <span className="text-white/80 group-hover:text-slate-700 font-normal text-[11px]">SWIFT:</span>
            <span className="font-mono font-bold text-amber-200 group-hover:text-amber-800 text-xs">{bank.swiftCode}</span>
            {copiedSwift ? (
              <Check className="w-3.5 h-3.5 text-emerald-300 ml-1" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-white/80 group-hover:text-slate-700 ml-1" />
            )}
          </button>
        </div>

        {/* Card Footer details */}
        <div className="relative z-10 mt-3 flex items-center justify-between text-[11px] text-sky-100">
          <span className="font-medium">
            People&apos;s Bank · Akurana Branch
          </span>
          <span className="text-emerald-200 font-semibold">
            Sri Lanka (LKR)
          </span>
        </div>
      </div>
    </section>
  );
};
