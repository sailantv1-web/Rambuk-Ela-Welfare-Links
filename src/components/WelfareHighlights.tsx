import React from 'react';
import { HeartHandshake, GraduationCap, Activity, Building2, ChevronRight } from 'lucide-react';
import { ASSOCIATION_DATA } from '../data/associationData';

interface WelfareHighlightsProps {
  onOpenQuickMessage: (topic?: string) => void;
}

export const WelfareHighlights: React.FC<WelfareHighlightsProps> = ({ onOpenQuickMessage }) => {
  const pillars = [
    {
      id: "welfare-1",
      title: "Bereavement & Janaza Welfare",
      description: "Immediate dignified support for grieving families: transport, Janaza arrangements, and compassionate community aid.",
      icon: HeartHandshake,
      badge: "Priority Care",
      color: "emerald"
    },
    {
      id: "welfare-2",
      title: "Education & Student Upliftment",
      description: "School supplies distributions, essential stationery packs, seminars, and educational aid for deserving village youth.",
      icon: GraduationCap,
      badge: "Empowerment",
      color: "blue"
    },
    {
      id: "welfare-3",
      title: "Medical Subsidies & Health Aid",
      description: "Subsidies for urgent medical treatments, health awareness screening camps, and community emergency care.",
      icon: Activity,
      badge: "Healthcare",
      color: "rose"
    },
    {
      id: "welfare-4",
      title: "Community Amenities & Development",
      description: "Neighborhood infrastructure maintenance, environmental care, road safety, and social welfare programs.",
      icon: Building2,
      badge: "Infrastructure",
      color: "amber"
    }
  ];

  return (
    <section className="px-4 py-2" aria-labelledby="welfare-pillars-heading">
      <div className="flex items-center justify-between mb-2.5 px-1">
        <h2 id="welfare-pillars-heading" className="text-xs font-bold uppercase tracking-wider text-sky-950/70 flex items-center gap-1.5">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
          Community Welfare Services
        </h2>
        <span className="text-[11px] font-medium text-slate-500">
          Since 2011
        </span>
      </div>

      {/* Community Visual Feature Card with Generated Photography */}
      <div className="relative mb-3 rounded-3xl overflow-hidden shadow-md border border-white/80 group">
        <div className="h-40 w-full relative bg-slate-800">
          <img
            src="/src/assets/images/community_unity_hands_1794051811812.jpg"
            alt="Rambuk Ela Community Unity and Charity"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to secondary image or gradient container
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "/src/assets/images/rambuk_ela_hills_scenery_1794051811104.jpg";
            }}
          />
          {/* Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent" />

          {/* Overlay Text */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/80 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider mb-1">
              Community Solidarity
            </div>
            <h3 className="text-sm font-bold leading-tight">
              Dedicated to serving every family in Rambuk Ela
            </h3>
            <p className="text-[11px] text-sky-200 mt-0.5">
              Empowering unity, dignity, and collective upliftment.
            </p>
          </div>
        </div>
      </div>

      {/* Service Pillars List */}
      <div className="grid grid-cols-1 gap-2.5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="p-3 rounded-2xl glass-card border border-white/85 shadow-xs flex items-start gap-3 transition-all hover:bg-white/90"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-emerald-700">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {pillar.title}
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.2 rounded font-semibold bg-sky-50 text-sky-700 border border-sky-100 shrink-0">
                    {pillar.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Action Prompt to submit request */}
      <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-blue-500/10 border border-emerald-300/40 flex items-center justify-between">
        <div className="min-w-0 pr-2">
          <div className="text-xs font-bold text-emerald-950">
            Need Welfare Assistance or Wish to Contribute?
          </div>
          <div className="text-[11px] text-emerald-800/80">
            Reach out directly to the official association desk.
          </div>
        </div>
        <button
          onClick={() => onOpenQuickMessage("General Community Inquiry")}
          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shrink-0 shadow-xs active:scale-95 transition-all flex items-center gap-1"
        >
          <span>Inquire</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
