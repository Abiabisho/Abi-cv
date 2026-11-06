import React from 'react';

export default function Logo({ size = 'md', showText = true, text = 'Setegn.dev', subtitle = '' }) {
  const sizeMap = {
    sm: { box: 'w-7 h-7', text: 'text-sm', icon: 18, radius: 'rounded-lg' },
    md: { box: 'w-9 h-9', text: 'text-base', icon: 22, radius: 'rounded-xl' },
    lg: { box: 'w-12 h-12', text: 'text-xl', icon: 28, radius: 'rounded-2xl' },
    xl: { box: 'w-16 h-16', text: 'text-2xl', icon: 38, radius: 'rounded-2xl' }
  };

  const current = sizeMap[size] || sizeMap.md;

  return (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Brand Icon Mark */}
      <div
        className={`relative ${current.box} ${current.radius} bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-[1.5px] shadow-lg shadow-blue-600/20 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300 shrink-0`}
      >
        <div className={`w-full h-full ${current.radius} bg-[#0b0f19] flex items-center justify-center overflow-hidden relative`}>
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/20" />

          {/* SVG Monogram: Interlocking S & D with Tech / Finance Nodes */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[78%] h-[78%] relative z-10 transition-transform duration-300 group-hover:rotate-3"
          >
            <defs>
              <linearGradient id="logoGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="50%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <linearGradient id="logoGradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>

            {/* Tech Bracket Left < */}
            <path
              d="M 12 14 L 7 20 L 12 26"
              stroke="url(#logoGradPrimary)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />

            {/* Tech Bracket Right > */}
            <path
              d="M 28 14 L 33 20 L 28 26"
              stroke="url(#logoGradPrimary)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />

            {/* Central Monogram S */}
            <path
              d="M 23 15.5 C 23 15.5 17 14.5 17 18 C 17 21 23 20.5 23 23.5 C 23 26.5 17 26 17 26"
              stroke="url(#logoGradAccent)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Finance Growth Dot / Node */}
            <circle cx="20" cy="11" r="1.8" fill="#60A5FA" />
            <circle cx="20" cy="29" r="1.8" fill="#38BDF8" />
          </svg>
        </div>
      </div>

      {/* Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className={`font-bold tracking-tight text-white ${current.text} group-hover:text-blue-300 transition-colors`}>
              {text.split('.')[0]}
            </span>
            {text.includes('.') && (
              <span className={`font-mono font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent ${current.text}`}>
                .{text.split('.')[1]}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-[10px] font-mono text-slate-400 -mt-0.5 tracking-wider uppercase">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
