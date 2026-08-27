import React from 'react';
import {
  Sparkles,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  TrendingUp,
  Brain,
  SlidersHorizontal,
  Bookmark,
  Compass,
  Code,
  Binary,
  Cpu,
  Target,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Flame
} from 'lucide-react';
import { generateProfileSummary } from '../data/careerData';

// Dynamic icon mapper for evidence cards
const ICON_MAP = {
  Code,
  Brain,
  Binary,
  Cpu,
  Compass,
  Sparkles
};

export default function ResultsScreen({
  careers,
  userAnswers,
  onSelectCareer,
  onOpenCompare,
  onRetake,
  onNavigateToRoadmap
}) {
  const profileSummary = generateProfileSummary(userAnswers);
  const primaryCareer = careers[0];
  const secondaryCareers = careers.slice(1);

  return (
    <div className="results-container">
      {/* Results Header */}
      <div className="results-header-section">
        <div className="results-badge-pill">
          <Compass size={14} />
          <span>YOUR CAREER DIRECTION</span>
        </div>
        <h1 className="results-main-title">Here are your strongest matches.</h1>
        <p className="results-subtitle">
          Based on your interests, strengths and how you approached the career scenarios.
        </p>

        {/* Profile Tagline Strip */}
        <div className="profile-summary-card">
          <div className="summary-card-inner">
            <div className="summary-icon-box">
              <Compass size={22} />
            </div>
            <div className="summary-details">
              <span className="summary-label">Your Unique Profile</span>
              <span className="summary-tags">{profileSummary.tags}</span>
              <span className="summary-persona">{profileSummary.persona}</span>
            </div>
            <button className="summary-retake-btn" onClick={onRetake}>
              <RefreshCw size={13} />
              <span>Retake</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. Prominent Primary Recommendation Card */}
      {primaryCareer && (
        <section className="prominent-match-section">
          <div className="primary-career-box">
            {/* Simulation Boost & Badge Header */}
            <div className="primary-boost-strip">
              <span className="boost-badge">
                <Flame size={13} />
                +{primaryCareer.simulationBoost || 7}% confidence after career simulation
              </span>
              <span className="primary-rating-badge">{primaryCareer.matchBadge || 'Strong Match'}</span>
            </div>

            {/* Title & Match Indicator Row */}
            <div className="primary-header-content">
              <div className="primary-title-group">
                <h2 className="primary-career-title">{primaryCareer.title}</h2>
                <p className="primary-career-tagline">{primaryCareer.tagline}</p>
                <div className="why-it-fits-box">
                  <span className="why-fit-label">Why it fits: </span>
                  <span className="why-fit-text-inline">{primaryCareer.fitSummary}</span>
                </div>
              </div>

              {/* Radial Percentage Ring */}
              <div className="match-ring-wrapper">
                <svg className="match-ring-svg" width="96" height="96" viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#F1F1F7"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#7C3AED"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - (primaryCareer.matchPercentage || 96) / 100)}
                    strokeLinecap="round"
                    fill="transparent"
                    className="match-ring-progress"
                  />
                </svg>
                <div className="match-ring-label">
                  <span className="percent-number text-lg">{primaryCareer.matchPercentage || 96}%</span>
                  <span className="percent-text">MATCH</span>
                </div>
              </div>
            </div>

            {/* 2. Explainable Match: Why this direction? (4 Evidence Points) */}
            <div className="explainable-evidence-box">
              <div className="evidence-header-row">
                <Compass size={18} className="text-primary-600" />
                <h3>Why this direction?</h3>
              </div>

              <div className="evidence-grid">
                {primaryCareer.explainableEvidence?.map((ev, idx) => {
                  const EvIcon = ICON_MAP[ev.icon] || Check;
                  return (
                    <div key={idx} className="evidence-card">
                      <div className="evidence-top">
                        <div className="evidence-check-dot">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="evidence-type-tag">{ev.title}</span>
                      </div>
                      <span className="evidence-text">{ev.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* AI Insight Pastel Highlight Card */}
              <div className="ai-insight-highlight-card">
                <div className="ai-insight-icon">✦</div>
                <div className="ai-insight-content">
                  <h4>AI Insight</h4>
                  <p>{primaryCareer.aiInsight}</p>
                </div>
              </div>

              {/* Recommendation Confidence Strip */}
              <div className="confidence-strip">
                <div className="confidence-left">
                  <ShieldCheck size={16} className="text-mint-600" />
                  <span className="confidence-label">Recommendation confidence:</span>
                  <strong className="confidence-level">{primaryCareer.confidenceLabel || 'High'}</strong>
                </div>
                <span className="confidence-desc">{primaryCareer.confidenceDesc}</span>
              </div>
            </div>

            {/* 3. Skill Gap Analysis Table */}
            <div className="skill-gap-section">
              <div className="skill-gap-header">
                <div>
                  <h3>Your Skill Gap</h3>
                  <p>See what you already have and what you need to develop for your chosen direction.</p>
                </div>
              </div>

              <div className="skill-gap-table-wrapper">
                <table className="skill-gap-table">
                  <thead>
                    <tr>
                      <th>Skill</th>
                      <th>Current</th>
                      <th>Target</th>
                      <th>Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    {primaryCareer.skillGap?.map((item, idx) => (
                      <tr key={idx}>
                        <td className="skill-col-name">{item.skill}</td>
                        <td>
                          <span className={`skill-level-pill current-${item.current.toLowerCase()}`}>
                            {item.current}
                          </span>
                        </td>
                        <td>
                          <span className="skill-level-pill target">
                            {item.target}
                          </span>
                        </td>
                        <td>
                          <span className={`priority-pill priority-${item.priority.toLowerCase()}`}>
                            {item.priority}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Best Starting Point & Build Roadmap CTA */}
            <div className="personalized-next-step-box">
              <div className="next-step-text">
                <span className="next-step-eyebrow">YOUR BEST NEXT STEP</span>
                <h4 className="next-step-title">{primaryCareer.bestStartingPoint?.title || 'Start with Python + SQL'}</h4>
                <p className="next-step-desc">
                  {primaryCareer.bestStartingPoint?.desc || 'Based on your current profile, start with Python + SQL.'}
                </p>
              </div>

              <button
                className="btn-build-roadmap-primary"
                onClick={() => onNavigateToRoadmap ? onNavigateToRoadmap(primaryCareer) : onSelectCareer(primaryCareer)}
              >
                <span>Build My Roadmap</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Secondary Career Matches */}
      {secondaryCareers.length > 0 && (
        <section className="other-matches-section">
          <div className="other-matches-header">
            <span className="other-eyebrow">EXPLORE ALTERNATIVE PATHS</span>
            <h3>Other Strong Career Directions</h3>
          </div>

          <div className="other-cards-grid">
            {secondaryCareers.map(career => (
              <div key={career.id} className="secondary-career-card">
                <div className="secondary-card-top">
                  <div className="secondary-match-badge">
                    <span className="match-tag-sm">{career.matchPercentage}% MATCH</span>
                  </div>
                  <span className="primary-rating-badge">{career.matchBadge}</span>
                </div>

                <h3 className="secondary-career-title">{career.title}</h3>
                <p className="secondary-career-desc">{career.tagline}</p>

                <div className="secondary-skills-row">
                  {career.skills.slice(0, 3).map((sk, idx) => (
                    <span key={idx} className="skill-tag-sm">{sk.name}</span>
                  ))}
                </div>

                <button
                  className="btn-explore-secondary-sm"
                  onClick={() => onSelectCareer(career)}
                >
                  <span>Explore Career</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Compare All Utility Bar */}
      <div className="results-utility-bar">
        <button className="btn-compare-all" onClick={onOpenCompare}>
          <SlidersHorizontal size={16} />
          <span>Compare All Matches Side-by-Side</span>
        </button>
      </div>
    </div>
  );
}
