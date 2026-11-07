import React, { useState } from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { MapPin, Navigation, ExternalLink, Copy, Check, Compass } from 'lucide-react';

interface LocationCardProps {
  onShowToast: (message: string) => void;
}

export const LocationCard: React.FC<LocationCardProps> = ({ onShowToast }) => {
  const org = ASSOCIATION_DATA.organization;
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(org.address);
      setCopiedAddress(true);
      onShowToast("Address copied to clipboard!");
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch {
      onShowToast("Unable to copy address");
    }
  };

  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent(org.address)}`;

  return (
    <section className="px-4 py-2" aria-labelledby="location-heading">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 id="location-heading" className="text-xs font-bold uppercase tracking-wider text-sky-950/70 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-blue-700" />
          Headquarters & Community Office
        </h2>
        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Central Province
        </span>
      </div>

      <div className="p-4 rounded-3xl glass-card border border-white/85 shadow-sm">
        {/* Address and details */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-slate-900 leading-snug">
              {org.address}
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Rambuk Ela · Akurana DS Division · Kandy District
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Postal Code: {org.postalCode} · Sri Lanka
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map frame with fallback */}
        <div className="relative mt-3.5 h-44 rounded-2xl overflow-hidden border border-slate-200/80 shadow-inner bg-sky-100">
          <iframe
            title="Rambuk Ela Welfare Association Location Map"
            src={org.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full"
          />
          {/* Quick overlay tag */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <div className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-800 shadow-xs border border-white/80">
              📍 Rambuk Ela, Kandy
            </div>
          </div>
        </div>

        {/* Dual Actions: Google Maps Directions & Copy Address */}
        <div className="grid grid-cols-2 gap-2 mt-3 pt-2">
          {/* Open Google Maps button */}
          <a
            href={org.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-b from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold shadow-xs active:translate-y-0.5 transition-all"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          {/* Copy Address button */}
          <button
            onClick={handleCopyAddress}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/80 hover:bg-white text-slate-800 text-xs font-semibold border border-slate-200 shadow-xs active:translate-y-0.5 transition-all"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Address</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
