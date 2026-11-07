import React, { useState } from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: number;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({ className = '', size = 96 }) => {
  const [hasError, setHasError] = useState(false);

  // Geometry for SVG stroke circles with generous margin for crisp visibility
  const strokeRingSize = size + 28;
  const center = strokeRingSize / 2;
  const radius1 = size / 2 + 5; // inner counter-rotating ring in royal blue
  const radius2 = size / 2 + 10; // outer clockwise dashed ring in lime green
  const radius3 = size / 2 + 2; // subtle base rim ring

  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 ${className}`} 
      style={{ width: strokeRingSize, height: strokeRingSize }}
      aria-label="Rambuk-Ela Welfare Association Official Logo"
    >
      {/* Outer ambient glow halo echoing the logo's green and blue */}
      <div 
        className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#7bb432]/30 via-emerald-400/20 to-[#1e73be]/30 blur-md pointer-events-none" 
      />

      {/* SVG ANIMATED CIRCLES STROKE IN LOGO'S EXACT LIME GREEN & ROYAL BLUE */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        viewBox={`0 0 ${strokeRingSize} ${strokeRingSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Logo brand colors primary gradient: Lime Green to Royal Blue */}
          <linearGradient id="logoStrokeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7bb432" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#1e73be" />
          </linearGradient>

          {/* Logo brand colors inverse gradient: Royal Blue to Lime Green */}
          <linearGradient id="logoStrokeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e73be" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7bb432" />
          </linearGradient>

          {/* Filter for subtle stroke glow */}
          <filter id="strokeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#7bb432" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Subtle static guide track in faint brand gradient */}
        <circle
          cx={center}
          cy={center}
          r={radius2}
          stroke="url(#logoStrokeGrad1)"
          strokeWidth="1"
          strokeOpacity="0.25"
        />

        {/* Outer Rotating Dash Ring in Logo Colors (Clockwise) */}
        <circle
          cx={center}
          cy={center}
          r={radius2}
          stroke="url(#logoStrokeGrad1)"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeDasharray="42 22 28 18"
          className="animate-logo-stroke-cw"
          style={{ transformOrigin: `${center}px ${center}px` }}
          filter="url(#strokeGlow)"
        />

        {/* Inner Counter-Rotating Accent Ring in Logo Colors (Counter-Clockwise) */}
        <circle
          cx={center}
          cy={center}
          r={radius1}
          stroke="url(#logoStrokeGrad2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="24 16 36 20"
          className="animate-logo-stroke-ccw"
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* Subtle Inner Rim Accent */}
        <circle
          cx={center}
          cy={center}
          r={radius3}
          stroke="#7bb432"
          strokeWidth="1"
          strokeOpacity="0.3"
          strokeDasharray="6 6"
          className="animate-logo-stroke-cw"
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* 4 Orbital Satellite Nodes in Logo Colors */}
        <g className="animate-logo-stroke-cw" style={{ transformOrigin: `${center}px ${center}px` }}>
          <circle cx={center} cy={center - radius2} r="3" fill="#7bb432" stroke="#ffffff" strokeWidth="1" />
          <circle cx={center + radius2} cy={center} r="3" fill="#1e73be" stroke="#ffffff" strokeWidth="1" />
          <circle cx={center} cy={center + radius2} r="3" fill="#7bb432" stroke="#ffffff" strokeWidth="1" />
          <circle cx={center - radius2} cy={center} r="3" fill="#1e73be" stroke="#ffffff" strokeWidth="1" />
        </g>
      </svg>

      {/* Central White circular container for the official logo image */}
      <div 
        className="relative z-10 rounded-full bg-white p-1.5 shadow-lg border border-white/95 overflow-hidden flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {!hasError ? (
          <img
            src="/assets/aistudio/RBK_logo-01_3000d056.jpg"
            alt="Rambuk-Ela Welfare Association Official Logo"
            className="w-full h-full object-contain rounded-full select-none"
            loading="eager"
            onError={() => setHasError(true)}
          />
        ) : (
          /* SVG Vector Fallback */
          <svg 
            viewBox="0 0 160 160" 
            className="w-full h-full"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="80" cy="80" r="76" fill="#ffffff" stroke="#7bb432" strokeWidth="3" />
            <circle cx="56" cy="60" r="14" fill="#7bb432" />
            <circle cx="104" cy="54" r="14" fill="#1e73be" />
            <path d="M 40 98 C 42 74 60 72 74 76 C 68 88 60 94 40 98 Z" fill="#7bb432" />
            <path d="M 120 98 C 118 74 100 72 86 76 C 92 88 100 94 120 98 Z" fill="#1e73be" />
          </svg>
        )}
      </div>
    </div>
  );
};
