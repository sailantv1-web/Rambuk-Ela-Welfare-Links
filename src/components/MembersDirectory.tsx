import React, { useState, useMemo } from 'react';
import { ASSOCIATION_DATA, BoardMember, generateMemberVCard } from '../data/associationData';
import { Search, Phone, Users, Copy, Check, Download, X, ArrowLeft } from 'lucide-react';

interface MembersDirectoryProps {
  onBack: () => void;
  onShowToast: (message: string) => void;
}

type FilterCategory = 'all' | 'executive' | 'treasurer' | 'committee';

export const MembersDirectory: React.FC<MembersDirectoryProps> = ({ onBack, onShowToast }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const members = ASSOCIATION_DATA.boardMembers;

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      // Category filter
      if (activeCategory !== 'all' && member.category !== activeCategory) {
        return false;
      }

      // Search query (matches name, designation, or phone number)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = member.name.toLowerCase().includes(query);
        const matchesDesignation = member.designation.toLowerCase().includes(query);
        const matchesPhone =
          member.phone.includes(query) || member.formattedPhone.toLowerCase().includes(query);
        return matchesName || matchesDesignation || matchesPhone;
      }

      return true;
    });
  }, [members, activeCategory, searchQuery]);

  const handleCopyPhone = async (member: BoardMember) => {
    try {
      await navigator.clipboard.writeText(member.phone);
      setCopiedId(member.id);
      onShowToast(`Phone number for ${member.name} copied!`);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      onShowToast("Unable to copy phone number");
    }
  };

  const handleDownloadMemberVCard = (member: BoardMember) => {
    const vcardContent = generateMemberVCard(member);
    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${member.name.replace(/\s+/g, '_')}_RBK_Welfare.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onShowToast(`Contact card for ${member.name} downloaded!`);
  };

  // Helper for member avatar and badge styling
  // Both President (Hussain Rifna) and Vice President (Shafeek Wahab) share the same golden look
  const getMemberStyling = (member: BoardMember) => {
    const initials = member.name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('');

    const isPresident = member.designation === 'President';
    const isVicePresident = member.designation === 'Vice President';

    // Both President and Vice President in golden look
    if (isPresident || isVicePresident) {
      return {
        avatarBg: 'bg-amber-400 text-slate-950 font-bold shadow-xs',
        badgeBg: 'bg-amber-100 text-amber-900 border-amber-300/80',
        initials,
        showBadge: true
      };
    }

    if (member.category === 'executive') {
      return {
        avatarBg: 'bg-emerald-500 text-white font-bold shadow-xs',
        badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300/80',
        initials,
        showBadge: true
      };
    }

    if (member.category === 'treasurer') {
      return {
        avatarBg: 'bg-sky-500 text-white font-bold shadow-xs',
        badgeBg: 'bg-sky-100 text-sky-900 border-sky-300/80',
        initials,
        showBadge: true
      };
    }

    return {
      avatarBg: 'bg-slate-700 text-white font-bold shadow-xs',
      badgeBg: 'bg-slate-100 text-slate-800 border-slate-300/80',
      initials,
      showBadge: true
    };
  };

  return (
    <div className="flex-1 flex flex-col pb-10">
      {/* Dedicated Page Top Bar */}
      <div className="sticky top-0 z-30 pt-4 pb-3 px-4 backdrop-blur-xl bg-white/85 border-b border-white/80 shadow-xs flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-50 text-blue-950 font-bold text-xs border border-slate-200 shadow-xs active:scale-95 transition-all"
          aria-label="Back to official hub"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700" />
          <span>Home Hub</span>
        </button>

        <div className="flex items-center gap-2">
          <img
            src="/assets/aistudio/RBK_logo-01_3000d056.jpg"
            alt="RBK Welfare Logo"
            className="w-7 h-7 rounded-full object-contain bg-white border border-slate-200"
          />
          <div className="text-right">
            <div className="text-xs font-extrabold text-blue-950">
              RBK Welfare Directory
            </div>
            <div className="text-[10px] text-emerald-800 font-semibold">
              {members.length} Verified Leaders
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Page Title & Context */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Directory</span>
          </div>
          <h1 className="text-xl font-extrabold text-blue-950 tracking-tight">
            Board of Members & Leadership
          </h1>
          <p className="font-sinhala text-sm font-semibold text-emerald-800 mt-0.5">
            නායකත්ව සහ කාරක සභා සාමාජික විස්තර
          </p>
          <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
            Direct contact numbers, phone dialers, and WhatsApp chat links for all executive officers.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, role, or phone..."
            className="w-full pl-10 pr-10 py-2.5 rounded-2xl glass-card text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500/50 border border-white/80 shadow-xs transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Tabs / Segmented Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3.5">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white/70 hover:bg-white text-slate-600 border border-white/80'
            }`}
          >
            All Members ({members.length})
          </button>

          <button
            onClick={() => setActiveCategory('executive')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeCategory === 'executive'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white/70 hover:bg-white text-slate-600 border border-white/80'
            }`}
          >
            Executive Council (3)
          </button>

          <button
            onClick={() => setActiveCategory('treasurer')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeCategory === 'treasurer'
                ? 'bg-sky-600 text-white shadow-xs'
                : 'bg-white/70 hover:bg-white text-slate-600 border border-white/80'
            }`}
          >
            Treasurers (2)
          </button>

          <button
            onClick={() => setActiveCategory('committee')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
              activeCategory === 'committee'
                ? 'bg-slate-800 text-white shadow-xs'
                : 'bg-white/70 hover:bg-white text-slate-600 border border-white/80'
            }`}
          >
            Committee Members (7)
          </button>
        </div>

        {/* Member Cards List matching requested style */}
        <div className="space-y-3">
          {filteredMembers.length === 0 ? (
            <div className="text-center py-10 px-4 rounded-3xl glass-card border border-white/80">
              <Users className="w-8 h-8 mx-auto text-slate-400 mb-2" />
              <div className="text-sm font-semibold text-slate-700">No members found</div>
              <div className="text-xs text-slate-500 mt-1">Try clearing your search query or filter</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-3.5 py-1.5 rounded-xl bg-sky-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredMembers.map((member) => {
              const style = getMemberStyling(member);
              const waGreeting = `Assalamu Alaikum / Greetings Mr. ${member.name}, I am contacting you regarding Rambuk-Ela Welfare Association.`;
              const waLink = `https://wa.me/${member.cleanWaNumber}?text=${encodeURIComponent(waGreeting)}`;
              const callLink = `tel:${member.phone}`;

              return (
                <div
                  key={member.id}
                  className="p-3.5 sm:p-4 rounded-3xl bg-white shadow-sm border border-slate-100/90 transition-all hover:shadow-md"
                >
                  {/* Member Info Row */}
                  <div className="flex items-center gap-3">
                    {/* Tier Avatar Rounded Square */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 ${style.avatarBg}`}
                    >
                      <span>{style.initials}</span>
                    </div>

                    {/* Name & Designation Details */}
                    <div className="flex-1 min-w-0">
                      {/* Name + Golden / Highlighted Pill Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                          {member.name}
                        </h3>
                        {style.showBadge && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-lg font-bold border tracking-wide shadow-xs shrink-0 ${style.badgeBg}`}
                          >
                            {member.designation}
                          </span>
                        )}
                      </div>

                      {/* Phone Number below name (no duplicate designation text) */}
                      <div className="flex items-center gap-1.5 text-xs mt-1 text-slate-500">
                        <span className="font-mono-numbers text-xs font-medium">
                          {member.formattedPhone}
                        </span>
                      </div>
                    </div>

                    {/* Quick Copy / Download dropdown button */}
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => handleCopyPhone(member)}
                        title="Copy phone number"
                        aria-label={`Copy phone for ${member.name}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100/70 transition-colors"
                      >
                        {copiedId === member.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDownloadMemberVCard(member)}
                        title="Download contact card"
                        aria-label={`Download contact for ${member.name}`}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100/70 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Dual Action Buttons (Call Now & WhatsApp) */}
                  <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-100/80">
                    <a
                      href={callLink}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1d63ed] hover:bg-[#1550c7] text-white text-xs font-bold shadow-xs active:translate-y-0.5 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0f766e] text-white text-xs font-bold shadow-xs active:translate-y-0.5 transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-white text-white" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Navigation Back to Hub */}
        <div className="mt-6 pt-4 text-center border-t border-white/60">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onBack();
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-blue-950 font-bold text-xs border border-white/80 shadow-md active:scale-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600" />
            <span>Return to Official Hub</span>
          </button>
        </div>
      </div>
    </div>
  );
};
