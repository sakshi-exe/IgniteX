import React from "react";

export function AbstractIllustration() {
  return (
    <div className="hero-illustration-container">
      <svg
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-svg animate-float"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="grad-lavender" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F3FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EEF2FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="grad-mint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ECFDF5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D1FAE5" stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="line-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.8" />
          </linearGradient>

          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="card-shadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#7C3AED" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Ambient Soft Glowing Background Orbs */}
        <circle cx="260" cy="220" r="150" fill="url(#grad-lavender)" filter="url(#soft-glow)" opacity="0.8" />
        <circle cx="360" cy="160" r="100" fill="url(#grad-blue)" filter="url(#soft-glow)" opacity="0.6" />
        <circle cx="160" cy="290" r="90" fill="url(#grad-mint)" filter="url(#soft-glow)" opacity="0.7" />

        {/* Minimal Orbital Rings (Personal Growth & Career Horizon) */}
        <circle cx="260" cy="220" r="170" stroke="#DDD6FE" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.5" />
        <circle cx="260" cy="220" r="115" stroke="#C7D2FE" strokeWidth="1.5" opacity="0.6" />
        <circle cx="260" cy="220" r="60" stroke="#A7F3D0" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />

        {/* Dynamic Trajectory Paths (Branching Career Pathways) */}
        <path
          d="M 120 330 C 180 320, 210 260, 260 220 C 310 180, 360 130, 420 100"
          stroke="url(#line-grad-1)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 100 240 C 170 240, 210 220, 260 220 C 320 220, 370 280, 430 310"
          stroke="url(#line-grad-2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          fill="none"
        />
        <path
          d="M 260 220 C 290 150, 340 90, 390 60"
          stroke="#34D399"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />

        {/* Central Intelligence Core (Compass & AI Node) */}
        <g transform="translate(260, 220)">
          <circle r="32" fill="#FFFFFF" filter="url(#card-shadow)" />
          <circle r="26" fill="#7C3AED" />
          {/* Compass Sparkle Icon */}
          <path
            d="M 0 -12 L 3 -3 L 12 0 L 3 3 L 0 12 L -3 3 L -12 0 L -3 -3 Z"
            fill="#FFFFFF"
          />
          <circle r="3" fill="#D1FAE5" />
        </g>

        {/* Trajectory Milestone Nodes */}
        {/* Node 1: Discovery (Bottom Left) */}
        <g transform="translate(120, 330)">
          <circle r="12" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" filter="url(#card-shadow)" />
          <circle r="5" fill="#8B5CF6" />
        </g>

        {/* Node 2: Skill Growth (Center-Left) */}
        <g transform="translate(190, 255)">
          <circle r="8" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="2" />
          <circle r="3" fill="#4F46E5" />
        </g>

        {/* Node 3: Specialization (Top-Right High Target) */}
        <g transform="translate(420, 100)">
          <circle r="16" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" filter="url(#card-shadow)" />
          <circle r="7" fill="#10B981" />
        </g>

        {/* Node 4: Secondary Pathway (Bottom-Right) */}
        <g transform="translate(430, 310)">
          <circle r="10" fill="#FFFFFF" stroke="#818CF8" strokeWidth="2" />
          <circle r="4" fill="#818CF8" />
        </g>

        {/* Floating Minimal Glass Cards */}
        {/* Card 1: Match Score Badge */}
        <g transform="translate(340, 75)" filter="url(#card-shadow)">
          <rect width="130" height="42" rx="21" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1" />
          <circle cx="22" cy="21" r="9" fill="#D1FAE5" />
          <path d="M 18 21 L 21 24 L 27 18" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="38" y="25" fill="#0F172A" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700">94% Match</text>
        </g>

        {/* Card 2: AI Roadmap Step */}
        <g transform="translate(60, 190)" filter="url(#card-shadow)">
          <rect width="140" height="42" rx="21" fill="#FFFFFF" stroke="#E0E7FF" strokeWidth="1" />
          <circle cx="22" cy="21" r="9" fill="#EDE9FE" />
          <path d="M 22 15 L 24 19 L 28 20 L 25 23 L 26 27 L 22 25 L 18 27 L 19 23 L 16 20 L 20 19 Z" fill="#7C3AED" transform="scale(0.55) translate(18, 16)" />
          <text x="40" y="25" fill="#475569" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="600">Personalized</text>
        </g>

        {/* Card 3: Skills Indicator */}
        <g transform="translate(310, 330)" filter="url(#card-shadow)">
          <rect width="135" height="40" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          <circle cx="20" cy="20" r="5" fill="#6366F1" />
          <text x="36" y="24" fill="#334155" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600">Tailored Roadmap</text>
        </g>
      </svg>
    </div>
  );
}
