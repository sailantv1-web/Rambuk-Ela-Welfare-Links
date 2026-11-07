import React from 'react';

export const IslamicPatternWatermark: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Sky Atmosphere Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-sky-100/80" />

      {/* Floating Ethereal Cloud Blobs */}
      <div className="absolute -top-16 -left-20 w-96 h-96 rounded-full bg-white/40 blur-3xl animate-cloud-slow" />
      <div className="absolute top-1/4 -right-24 w-80 h-80 rounded-full bg-white/50 blur-3xl animate-cloud-fast" />
      <div className="absolute top-2/3 -left-32 w-[420px] h-[420px] rounded-full bg-white/45 blur-3xl animate-cloud-slow" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-sky-200/50 blur-2xl animate-cloud-fast" />

      {/* Islamic 8-Point Star Arabesque Lattice Repeating SVG Pattern with 6% opacity */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.06] text-blue-950" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="islamic-star-lattice" 
            x="0" 
            y="0" 
            width="80" 
            height="80" 
            patternUnits="userSpaceOnUse"
          >
            {/* 8-Pointed Star (Rub el Hizb inspired geometric intersection) */}
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              {/* Outer Square 1 */}
              <rect x="25" y="25" width="30" height="30" />
              {/* Rotated Square 2 (45 degrees) */}
              <rect x="25" y="25" width="30" height="30" transform="rotate(45 40 40)" />
              {/* Central star core */}
              <circle cx="40" cy="40" r="6" />
              <circle cx="40" cy="40" r="1.5" fill="currentColor" />

              {/* Interlaced connecting lines to neighboring nodes */}
              <line x1="40" y1="0" x2="40" y2="15" />
              <line x1="40" y1="65" x2="40" y2="80" />
              <line x1="0" y1="40" x2="15" y2="40" />
              <line x1="65" y1="40" x2="80" y2="40" />

              {/* Corner interlock accents */}
              <path d="M0 0 L12 12 M80 0 L68 12 M0 80 L12 68 M80 80 L68 68" />
              <rect x="-8" y="-8" width="16" height="16" transform="rotate(45 0 0)" />
              <rect x="72" y="-8" width="16" height="16" transform="rotate(45 80 0)" />
              <rect x="-8" y="72" width="16" height="16" transform="rotate(45 0 80)" />
              <rect x="72" y="72" width="16" height="16" transform="rotate(45 80 80)" />

              {/* Hexagram petal lines */}
              <circle cx="40" cy="40" r="28" strokeDasharray="1 5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star-lattice)" />
      </svg>

      {/* Sunbeam / Divine Daybreak Luminous Gradient Overlay */}
      <div className="absolute inset-0 bg-radial from-white/30 via-transparent to-sky-300/10 pointer-events-none" />
    </div>
  );
};
