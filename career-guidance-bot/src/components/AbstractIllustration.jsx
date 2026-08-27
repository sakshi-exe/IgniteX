import React from 'react';

export default function AbstractIllustration() {
  return (
    <div className="hero-illustration-container">
      <svg
        className="hero-svg"
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Gradients */}
          <linearGradient id="compassBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAF8FF" />
            <stop offset="100%" stopColor="#F5F3FF" />
          </linearGradient>

          <linearGradient id="purplePathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>

          <linearGradient id="bluePathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>

          <linearGradient id="mintPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>

          <linearGradient id="needleNorth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          <linearGradient id="needleSouth" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbit Rings */}
        <circle cx="260" cy="220" r="180" stroke="#EDE9FE" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="260" cy="220" r="130" stroke="#E0E7FF" strokeWidth="1.5" />
        <circle cx="260" cy="220" r="80" stroke="#F3F4F6" strokeWidth="1" />

        {/* Converging Path Lines (You are here -> Explore -> Discover -> Your Direction) */}
        {/* Path 1: Top-Left (Interests) */}
        <path
          d="M 70 80 Q 150 120 260 220"
          stroke="url(#purplePathGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        {/* Path 2: Bottom-Left (Strengths) */}
        <path
          d="M 60 350 Q 160 300 260 220"
          stroke="url(#bluePathGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        {/* Path 3: Top-Right (Skills) */}
        <path
          d="M 450 90 Q 380 150 260 220"
          stroke="url(#mintPathGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Path 4: Bottom-Right (Roadmap) */}
        <path
          d="M 440 340 Q 360 280 260 220"
          stroke="url(#purplePathGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Central Compass Base Plate */}
        <circle cx="260" cy="220" r="72" fill="url(#compassBgGrad)" stroke="#DDD6FE" strokeWidth="2" />
        <circle cx="260" cy="220" r="62" fill="white" stroke="#F1F1F7" strokeWidth="1.5" />

        {/* Compass Dial Cardinal Ticks */}
        <line x1="260" y1="162" x2="260" y2="170" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="260" y1="270" x2="260" y2="278" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="202" y1="220" x2="210" y2="220" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="310" y1="220" x2="318" y2="220" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />

        {/* Compass Needle */}
        <polygon points="260,172 268,220 260,214 252,220" fill="url(#needleNorth)" />
        <polygon points="260,268 268,220 260,214 252,220" fill="url(#needleSouth)" />

        {/* Center Spark / Pivot */}
        <circle cx="260" cy="220" r="7" fill="#7C3AED" />
        <circle cx="260" cy="220" r="3" fill="white" />

        {/* Milestone Node 1: "You Are Here" */}
        <g transform="translate(60, 65)">
          <rect width="112" height="32" rx="16" fill="white" stroke="#DDD6FE" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="6" fill="#7C3AED" />
          <text x="30" y="20" fill="#0F172A" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">You Are Here</text>
        </g>

        {/* Milestone Node 2: "Explore" */}
        <g transform="translate(48, 335)">
          <rect width="102" height="32" rx="16" fill="white" stroke="#BFDBFE" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="6" fill="#4F46E5" />
          <text x="30" y="20" fill="#0F172A" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Explore</text>
        </g>

        {/* Milestone Node 3: "Discover" */}
        <g transform="translate(370, 75)">
          <rect width="106" height="32" rx="16" fill="white" stroke="#A7F3D0" strokeWidth="1.5" />
          <circle cx="16" cy="16" r="6" fill="#10B981" />
          <text x="30" y="20" fill="#0F172A" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Discover</text>
        </g>

        {/* Destination Node: "Your Direction" */}
        <g transform="translate(355, 325)">
          <rect width="128" height="36" rx="18" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.5" />
          <polygon points="370,343 376,339 376,347" fill="#7C3AED" />
          <text x="24" y="22" fill="#7C3AED" fontSize="11" fontWeight="800" fontFamily="Inter, sans-serif">Your Direction →</text>
        </g>

        {/* Subtle AI Sparkles */}
        <g transform="translate(290, 150)">
          <path d="M 0 -6 Q 0 0 6 0 Q 0 0 0 6 Q 0 0 -6 0 Q 0 0 0 -6 Z" fill="#7C3AED" opacity="0.85" />
        </g>
        <g transform="translate(225, 290)">
          <path d="M 0 -5 Q 0 0 5 0 Q 0 0 0 5 Q 0 0 -5 0 Q 0 0 0 -5 Z" fill="#10B981" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
