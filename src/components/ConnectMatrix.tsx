import React, { useState } from 'react';
import { ASSOCIATION_DATA } from '../data/associationData';
import { Mail, ExternalLink, Copy, Check } from 'lucide-react';

interface ConnectMatrixProps {
  onShowToast: (message: string) => void;
}

export const ConnectMatrix: React.FC<ConnectMatrixProps> = ({ onShowToast }) => {
  const direct = ASSOCIATION_DATA.directConnect;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${direct.cleanPhone}?text=${encodeURIComponent(direct.whatsappDefaultMessage)}`;
  const emailMailto = `mailto:${direct.email}?subject=${encodeURIComponent("Inquiry regarding Rambuk-Ela Welfare Association")}`;

  const handleCopy = (e: React.MouseEvent, text: string, label: string, key: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    onShowToast(`${label} copied!`);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const socialRows = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      detailId: direct.displayPhone,
      copyValue: direct.whatsappNumber,
      url: whatsappUrl,
      actionLabel: 'Chat Now',
      isExternal: true,
      // Before click: Green gradient glass button with white icons and text
      defaultCardStyle: 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white border border-emerald-400/40 shadow-md shadow-emerald-900/20',
      // After click / hover / touch: Inverts to white glass button with emerald border and text
      invertCardStyle: 'hover:bg-none hover:bg-white active:bg-none active:bg-white hover:border-2 hover:border-[#25D366] hover:shadow-xl active:border-[#25D366]',
      iconBoxDefault: 'bg-white/20 border border-white/35 text-white',
      iconBoxInvert: 'group-hover:bg-emerald-50 group-active:bg-emerald-50 group-hover:border-emerald-300',
      titleColor: 'text-white group-hover:text-emerald-950 group-active:text-emerald-950',
      detailColor: 'text-yellow-200 group-hover:text-emerald-800 group-active:text-emerald-800',
      badgeDefault: 'bg-white/20 border-white/30 text-white',
      badgeInvert: 'group-hover:bg-emerald-100 group-hover:text-emerald-800 group-hover:border-emerald-300',
      copyButtonInvert: 'group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200',
      arrowInvert: 'group-hover:text-[#128C7E] group-active:text-[#128C7E]',
      icon: (
        <svg className="w-6 h-6 fill-white group-hover:fill-[#128C7E] group-active:fill-[#128C7E] transition-colors duration-200" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      detailId: direct.facebookHandle,
      copyValue: direct.facebookUrl,
      url: direct.facebookUrl,
      actionLabel: 'Visit Page',
      isExternal: true,
      // Before click: Blue gradient glass button with white icons and text
      defaultCardStyle: 'bg-gradient-to-r from-[#1877F2] to-[#0D5AC1] text-white border border-blue-400/40 shadow-md shadow-blue-900/20',
      // After click / hover / touch: Inverts to white glass button with blue border and text
      invertCardStyle: 'hover:bg-none hover:bg-white active:bg-none active:bg-white hover:border-2 hover:border-[#1877F2] hover:shadow-xl active:border-[#1877F2]',
      iconBoxDefault: 'bg-white/20 border border-white/35 text-white',
      iconBoxInvert: 'group-hover:bg-blue-50 group-active:bg-blue-50 group-hover:border-blue-300',
      titleColor: 'text-white group-hover:text-blue-950 group-active:text-blue-950',
      detailColor: 'text-yellow-200 group-hover:text-blue-800 group-active:text-blue-800',
      badgeDefault: 'bg-white/20 border-white/30 text-white',
      badgeInvert: 'group-hover:bg-blue-100 group-hover:text-blue-800 group-hover:border-blue-300',
      copyButtonInvert: 'group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-200',
      arrowInvert: 'group-hover:text-[#1877F2] group-active:text-[#1877F2]',
      icon: (
        <svg className="w-6 h-6 fill-white group-hover:fill-[#1877F2] group-active:fill-[#1877F2] transition-colors duration-200" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      detailId: direct.tiktokHandle,
      copyValue: direct.tiktokHandle,
      url: direct.tiktokUrl,
      actionLabel: 'Follow',
      isExternal: true,
      // Before click: Dark / Black gradient glass button with white icons and text
      defaultCardStyle: 'bg-gradient-to-r from-[#27272a] via-[#18181b] to-[#09090b] text-white border border-slate-600/40 shadow-md shadow-black/30',
      // After click / hover / touch: Inverts to white glass button with black border and text
      invertCardStyle: 'hover:bg-none hover:bg-white active:bg-none active:bg-white hover:border-2 hover:border-black hover:shadow-xl active:border-black',
      iconBoxDefault: 'bg-white/20 border border-white/35 text-white',
      iconBoxInvert: 'group-hover:bg-slate-100 group-active:bg-slate-100 group-hover:border-slate-300',
      titleColor: 'text-white group-hover:text-black group-active:text-black',
      detailColor: 'text-yellow-200 group-hover:text-slate-800 group-active:text-slate-800',
      badgeDefault: 'bg-white/20 border-white/30 text-white',
      badgeInvert: 'group-hover:bg-slate-200 group-hover:text-black group-hover:border-slate-300',
      copyButtonInvert: 'group-hover:bg-slate-100 group-hover:text-black group-hover:border-slate-300',
      arrowInvert: 'group-hover:text-black group-active:text-black',
      icon: (
        <svg className="w-6 h-6 fill-white group-hover:fill-black group-active:fill-black transition-colors duration-200" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.92c0 1.91-.4 3.84-1.49 5.42-1.35 1.96-3.66 3.23-6.07 3.38-2.61.16-5.26-.77-7.06-2.67-1.78-1.88-2.56-4.59-2.12-7.14.44-2.57 2.14-4.78 4.54-5.83 1.28-.56 2.69-.78 4.09-.72v4.09c-.79-.08-1.61-.01-2.35.3-.96.4-1.7 1.25-1.97 2.24-.31 1.11-.08 2.36.63 3.25.71.9 1.86 1.41 3.01 1.34 1.24-.07 2.37-.82 2.89-1.94.3-.63.45-1.34.45-2.06V.02h-1.07z"/>
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      detailId: direct.instagramHandle,
      copyValue: direct.instagramHandle,
      url: direct.instagramUrl,
      actionLabel: 'Follow',
      isExternal: true,
      // Before click: Sunset gradient glass button with white icons and text
      defaultCardStyle: 'bg-gradient-to-r from-[#fd5949] via-[#d6249f] to-[#285aeb] text-white border border-pink-400/40 shadow-md shadow-pink-900/25',
      // After click / hover / touch: Inverts to white glass button with magenta border and text
      invertCardStyle: 'hover:bg-none hover:bg-white active:bg-none active:bg-white hover:border-2 hover:border-[#d6249f] hover:shadow-xl active:border-[#d6249f]',
      iconBoxDefault: 'bg-white/20 border border-white/35 text-white',
      iconBoxInvert: 'group-hover:bg-pink-50 group-active:bg-pink-50 group-hover:border-pink-300',
      titleColor: 'text-white group-hover:text-[#d6249f] group-active:text-[#d6249f]',
      detailColor: 'text-yellow-200 group-hover:text-pink-900 group-active:text-pink-900',
      badgeDefault: 'bg-white/20 border-white/30 text-white',
      badgeInvert: 'group-hover:bg-pink-100 group-hover:text-pink-800 group-hover:border-pink-300',
      copyButtonInvert: 'group-hover:bg-pink-50 group-hover:text-pink-700 group-hover:border-pink-200',
      arrowInvert: 'group-hover:text-[#d6249f] group-active:text-[#d6249f]',
      icon: (
        <svg className="w-6 h-6 fill-white group-hover:fill-[#d6249f] group-active:fill-[#d6249f] transition-colors duration-200" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      id: 'email',
      name: 'Gmail / Official Email',
      detailId: direct.email,
      copyValue: direct.email,
      url: emailMailto,
      actionLabel: 'Send Email',
      isExternal: false,
      // Before click: Gmail Red gradient glass button with white icons and text
      defaultCardStyle: 'bg-gradient-to-r from-[#EA4335] via-[#DB4437] to-[#B31412] text-white border border-rose-400/40 shadow-md shadow-rose-900/25',
      // After click / hover / touch: Inverts to white glass button with red border and text
      invertCardStyle: 'hover:bg-none hover:bg-white active:bg-none active:bg-white hover:border-2 hover:border-[#EA4335] hover:shadow-xl active:border-[#EA4335]',
      iconBoxDefault: 'bg-white/20 border border-white/35 text-white',
      iconBoxInvert: 'group-hover:bg-rose-50 group-active:bg-rose-50 group-hover:border-rose-300',
      titleColor: 'text-white group-hover:text-[#EA4335] group-active:text-[#EA4335]',
      detailColor: 'text-yellow-200 group-hover:text-rose-900 group-active:text-rose-900',
      badgeDefault: 'bg-white/20 border-white/30 text-white',
      badgeInvert: 'group-hover:bg-rose-100 group-hover:text-rose-800 group-hover:border-rose-300',
      copyButtonInvert: 'group-hover:bg-rose-50 group-hover:text-rose-700 group-hover:border-rose-200',
      arrowInvert: 'group-hover:text-[#EA4335] group-active:text-[#EA4335]',
      icon: <Mail className="w-6 h-6 text-white group-hover:text-[#EA4335] group-active:text-[#EA4335] transition-colors duration-200" />,
    },
  ];

  return (
    <section className="px-4 py-2" aria-labelledby="social-channels-heading">
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 id="social-channels-heading" className="text-xs font-bold uppercase tracking-wider text-sky-950/70">
          Official Connect Channels
        </h2>
        <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Interactive Portals
        </span>
      </div>

      {/* 5 Social Buttons in 1 Column 5 Rows with each icon's own color gradient glass button, inverting on click/touch */}
      <div className="flex flex-col gap-2.5">
        {socialRows.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            className={`group relative flex items-center justify-between p-3.5 rounded-2xl backdrop-blur-md transition-all duration-200 active:translate-y-0.5 active:shadow-inner cursor-pointer select-none ${item.defaultCardStyle} ${item.invertCardStyle}`}
          >
            {/* Left: Brand Icon Box + Title & ID Details */}
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              {/* Inside Icon Box: Frosted Glass before click, inverts on hover/touch */}
              <div
                className={`w-12 h-12 rounded-2xl ${item.iconBoxDefault} ${item.iconBoxInvert} flex items-center justify-center shrink-0 shadow-sm transition-all duration-200`}
              >
                {item.icon}
              </div>

              {/* Title & Details: White text & Yellow detail ID by default, inverts on hover/touch */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {/* Platform Title */}
                  <span className={`text-sm font-extrabold transition-colors duration-200 truncate ${item.titleColor}`}>
                    {item.name}
                  </span>
                  {/* Action Pill Badge */}
                  <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold border backdrop-blur-sm transition-all duration-200 shrink-0 ${item.badgeDefault} ${item.badgeInvert}`}>
                    {item.actionLabel}
                  </span>
                </div>

                {/* ID / Detail Handle */}
                <div className={`text-xs font-mono-numbers transition-colors duration-200 font-bold truncate mt-0.5 ${item.detailColor}`}>
                  {item.detailId}
                </div>
              </div>
            </div>

            {/* Right: Quick Copy Button & Action Arrow */}
            <div className="flex items-center gap-1.5 shrink-0 ml-2">
              <button
                type="button"
                onClick={(e) => handleCopy(e, item.copyValue, item.name, item.id)}
                className={`p-2 rounded-xl bg-white/20 border border-white/30 text-white transition-all duration-200 active:scale-90 ${item.copyButtonInvert}`}
                title={`Copy ${item.name} details`}
                aria-label={`Copy ${item.name} details`}
              >
                {copiedKey === item.id ? (
                  <Check className="w-4 h-4 text-yellow-300" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
              <div className={`p-1.5 text-white/80 group-hover:translate-x-0.5 transition-all duration-200 ${item.arrowInvert}`}>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
