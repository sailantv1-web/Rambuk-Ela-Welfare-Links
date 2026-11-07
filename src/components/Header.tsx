import React from 'react';
import { OfficialLogo } from './OfficialLogo';
import { ASSOCIATION_DATA, generateVCard } from '../data/associationData';
import { ShieldCheck, Share2, UserPlus, Check } from 'lucide-react';

interface HeaderProps {
  onShowToast: (message: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowToast }) => {
  const [downloadedVCard, setDownloadedVCard] = React.useState(false);
  const [shared, setShared] = React.useState(false);

  const handleDownloadVCard = () => {
    const vcardContent = generateVCard();
    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'RambukEla_Welfare_Association.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    setDownloadedVCard(true);
    onShowToast("Official Contact Card downloaded! Add to your phone.");
    setTimeout(() => setDownloadedVCard(false), 2500);
  };

  const handleShare = async () => {
    const shareData = {
      title: ASSOCIATION_DATA.organization.englishName,
      text: `${ASSOCIATION_DATA.organization.englishName} (${ASSOCIATION_DATA.organization.sinhalaName}) - Official Digital Directory`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        // User cancelled or aborted
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        onShowToast("Directory link copied to clipboard!");
        setTimeout(() => setShared(false), 2000);
      } catch {
        onShowToast("Could not copy link");
      }
    }
  };

  return (
    <header className="relative pt-6 pb-4 px-4 text-center">
      {/* Top Utility Bar: Quick Share & Save Contact */}
      <div className="flex items-center justify-between mb-4">
        {/* Government Reg No Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs text-xs font-semibold text-emerald-800 tracking-tight">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Reg: {ASSOCIATION_DATA.organization.regNo}</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleDownloadVCard}
            aria-label="Save Official Contact to Phone"
            title="Save Contact to Phone"
            className="group flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-white/75 hover:bg-emerald-600 active:bg-emerald-700 text-slate-700 hover:text-white active:text-white border border-white/80 hover:border-emerald-500 shadow-xs hover:shadow-md hover:shadow-emerald-600/25 transition-all duration-200 active:scale-95"
          >
            {downloadedVCard ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                <span className="text-emerald-700 group-hover:text-white font-semibold">Saved</span>
              </>
            ) : (
              <>
                <UserPlus className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                <span>Save Contact</span>
              </>
            )}
          </button>

          <button
            onClick={handleShare}
            aria-label="Share Directory Link"
            title="Share Directory"
            className="group flex items-center justify-center w-8 h-8 rounded-full bg-white/75 hover:bg-blue-600 active:bg-blue-700 text-slate-700 hover:text-white active:text-white border border-white/80 hover:border-blue-500 shadow-xs hover:shadow-md hover:shadow-blue-600/25 transition-all duration-200 active:scale-95"
          >
            {shared ? (
              <Check className="w-4 h-4 text-emerald-600 group-hover:text-white" />
            ) : (
              <Share2 className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>
      </div>

      {/* Center Logo in Glass Halo */}
      <div className="flex justify-center mb-3">
        <div className="p-3 rounded-full bg-white/85 backdrop-blur-xl border border-white shadow-xl shadow-sky-900/10">
          <OfficialLogo size={88} />
        </div>
      </div>

      {/* Organization Title */}
      <h1 className="text-xl sm:text-2xl font-extrabold text-blue-950 tracking-tight leading-snug">
        {ASSOCIATION_DATA.organization.englishName}
      </h1>

      {/* Sinhala Subheader */}
      <p className="font-sinhala text-base sm:text-lg font-semibold text-emerald-800 mt-1">
        {ASSOCIATION_DATA.organization.sinhalaName}
      </p>

      {/* Official Green Motto Pill */}
      <div className="mt-2.5 inline-flex items-center justify-center">
        <div className="px-3.5 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-medium tracking-wide shadow-sm backdrop-blur-sm border border-emerald-400/30">
          <span>{ASSOCIATION_DATA.organization.motto}</span>
        </div>
      </div>

      {/* Physical Address Line */}
      <p className="text-xs text-sky-950/90 mt-2 font-semibold tracking-tight">
        # 209, Kandy Road, Rambuk Ela, Sri Lanka
      </p>
    </header>
  );
};
