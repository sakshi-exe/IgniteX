import React, { useEffect } from "react";
import {
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeftRight,
  RotateCcw,
  Brain,
  Code,
  Binary,
  Cpu,
  ShieldCheck,
  Zap,
  TrendingUp,
  Layers
} from "lucide-react";
import confetti from "canvas-confetti";
import { generateProfileSummary } from "../data/careerData";

// Icon mapping for evidence points
const EVIDENCE_ICONS = {
  Code,
  Brain,
  Binary,
  Cpu,
  Sparkles,
  Zap
};

// Circular Match Indicator Component
function MatchRing({ percentage, isPrimary }) {
  const radius = isPrimary ? 36 : 28;
  const stroke = isPrimary ? 5.5 : 4.5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`match-ring-wrapper ${isPrimary ? "ring-primary" : ""}`}>
      <svg height={radius * 2} width={radius * 2} className="match-ring-svg">
        <circle
          stroke="#EDE9FE"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={isPrimary ? "#7C3AED" : percentage > 88 ? "#6366F1" : "#8B5CF6"}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="match-ring-progress"
        />
      </svg>
      <div className="match-ring-label">
        <span className={`percent-number ${isPrimary ? "text-lg font-bold" : ""}`}>
          {percentage}%
        </span>
        <span className="percent-text">Match</span>
      </div>
    </div>
  );
}

export function ResultsScreen({
  matches,
  userAnswers,
  onSelectCareer,
  onBuildRoadmap,
  onOpenComparison,
  onRetake
}) {
  useEffect(() => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#7C3AED", "#6366F1", "#10B981", "#C084FC", "#DDD6FE"]
      });
    } catch (e) {}
  }, []);

  const profileSummary = generateProfileSummary(userAnswers);
  const primaryCareer = matches[0];
  const secondaryMatches = matches.slice(1, 3);

  return (
    <div className="results-container animate-fade-in">
      {/* Header Section */}
      <div className="results-header-section">
        <div className="results-badge-pill">
          <Sparkles size={14} className="text-primary" />
          <span>YOUR PERSONALIZED RESULTS</span>
        </div>

        <h1 className="results-main-title">Your strongest career matches.</h1>
        <p className="results-subtitle">
          Based on your interests, strengths and how you approached the scenarios.
        </p>

        {/* Dynamic Compact Profile Summary Card */}
        <div className="profile-summary-card">
          <div className="summary-card-inner">
            <div className="summary-icon-box">
              <Brain size={20} />
            </div>
            <div className="summary-details">
              <span className="summary-label">YOUR PROFILE & BEHAVIOR</span>
              <h3 className="summary-tags">{profileSummary.tags}</h3>
              <p className="summary-persona">{profileSummary.persona}</p>
            </div>
            <button className="summary-retake-btn" onClick={onRetake} title="Tweak your discovery questionnaire">
              <RotateCcw size={14} />
              <span>Adjust Answers</span>
            </button>
          </div>
        </div>
      </div>

      {/* 1. PRIMARY PROMINENT CAREER CARD (EXPLAINABLE & DEEP) */}
      <div className="prominent-match-section">
        <div className="primary-career-box">
          {/* Top Boost Banner */}
          <div className="primary-boost-strip">
            <div className="boost-badge">
              <Sparkles size={13} />
              <span>+{primaryCareer.simulationBoost || 7}% confidence after career simulation</span>
            </div>
            <span className="primary-rating-badge">{primaryCareer.matchBadge || "Strong Match"}</span>
          </div>

          {/* Primary Header Row */}
          <div className="primary-header-content">
            <div className="primary-title-group">
              <span className="match-tag-label">{primaryCareer.matchPercentage}% MATCH</span>
              <h2 className="primary-career-title">{primaryCareer.title}</h2>
              <p className="primary-career-tagline">{primaryCareer.fitSummary || primaryCareer.tagline}</p>
            </div>

            <MatchRing percentage={primaryCareer.matchPercentage} isPrimary={true} />
          </div>

          {/* SECTION: WHY CAREERPILOT RECOMMENDS THIS (4 Evidence Points) */}
          <div className="explainable-evidence-box">
            <div className="evidence-header-row">
              <Sparkles size={16} className="text-primary" />
              <h3>Why CareerPilot recommends this</h3>
            </div>

            <div className="evidence-grid">
              {primaryCareer.explainableEvidence ? (
                primaryCareer.explainableEvidence.map((item, idx) => {
                  const IconC = EVIDENCE_ICONS[item.icon] || Check;
                  return (
                    <div key={idx} className="evidence-card">
                      <div className="evidence-top">
                        <div className="evidence-check-dot">
                          <Check size={12} />
                        </div>
                        <span className="evidence-type-tag">{item.type}</span>
                      </div>
                      <p className="evidence-text">{item.text}</p>
                    </div>
                  );
                })
              ) : (
                <>
                  <div className="evidence-card">
                    <span className="evidence-type-tag">Interest</span>
                    <p className="evidence-text">You selected Technology and AI as areas you enjoy.</p>
                  </div>
                  <div className="evidence-card">
                    <span className="evidence-type-tag">Strength</span>
                    <p className="evidence-text">You identified analytical thinking and problem solving as strengths.</p>
                  </div>
                  <div className="evidence-card">
                    <span className="evidence-type-tag">Subject</span>
                    <p className="evidence-text">You enjoy mathematics and computer science.</p>
                  </div>
                  <div className="evidence-card">
                    <span className="evidence-type-tag">Behavior</span>
                    <p className="evidence-text">You consistently selected technical and data-driven approaches in the career simulation.</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* AI INSIGHT CARD */}
          <div className="ai-insight-highlight-card">
            <div className="ai-insight-icon">
              <span>✦</span>
            </div>
            <div className="ai-insight-content">
              <h4>AI Insight</h4>
              <p>
                {primaryCareer.aiInsight ||
                  "Your answers suggest that you enjoy solving structured problems and working with technical systems. Your scenario choices strongly reinforced this pattern, which is why Machine Learning Engineering ranks highest."}
              </p>
            </div>
          </div>

          {/* MATCH CONFIDENCE */}
          <div className="confidence-strip">
            <div className="confidence-left">
              <ShieldCheck size={18} className="text-mint" />
              <div>
                <span className="confidence-label">Recommendation confidence:</span>
                <strong className="confidence-level">{primaryCareer.confidenceLabel || "High"}</strong>
              </div>
            </div>
            <p className="confidence-desc">
              {primaryCareer.confidenceDesc || "Your questionnaire answers and simulation choices strongly align."}
            </p>
          </div>

          {/* SECTION: SKILL GAP ANALYSIS */}
          <div className="skill-gap-section">
            <div className="skill-gap-header">
              <Layers size={18} className="text-primary" />
              <div>
                <h3>Your Skill Gap</h3>
                <p>See what you already have and what you should develop next for {primaryCareer.title}.</p>
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
                  {(primaryCareer.skillGap || [
                    { skill: "Python", current: "Good", target: "Strong", priority: "High" },
                    { skill: "Mathematics", current: "Developing", target: "Strong", priority: "High" },
                    { skill: "SQL", current: "Beginner", target: "Strong", priority: "High" },
                    { skill: "Machine Learning", current: "Beginner", target: "Advanced", priority: "High" },
                    { skill: "Git", current: "Developing", target: "Intermediate", priority: "Medium" }
                  ]).map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="skill-col-name">{row.skill}</td>
                      <td>
                        <span className={`skill-level-pill current-${row.current.toLowerCase()}`}>
                          {row.current}
                        </span>
                      </td>
                      <td>
                        <span className="skill-level-pill target">
                          {row.target}
                        </span>
                      </td>
                      <td>
                        <span className={`priority-pill priority-${row.priority.toLowerCase()}`}>
                          {row.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PERSONALIZED NEXT STEP & PRIMARY CTA */}
          <div className="personalized-next-step-box">
            <div className="next-step-text">
              <span className="next-step-eyebrow">YOUR BEST STARTING POINT</span>
              <h3 className="next-step-title">{primaryCareer.bestStartingPoint?.title || "Start with Python + SQL"}</h3>
              <p className="next-step-desc">
                {primaryCareer.bestStartingPoint?.desc ||
                  "These skills will give you the strongest foundation for your next stage before entering complex ML pipelines."}
              </p>
            </div>

            <button
              className="btn-build-roadmap-primary"
              onClick={() => onBuildRoadmap(primaryCareer)}
            >
              <span>Build My Roadmap</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. OTHER MATCHED CAREERS */}
      <div className="other-matches-section">
        <div className="other-matches-header">
          <span className="other-eyebrow">ALTERNATIVE PATHWAYS</span>
          <h3>Other Strong Career Fits</h3>
        </div>

        <div className="other-cards-grid">
          {secondaryMatches.map((career) => (
            <div key={career.id} className="secondary-career-card">
              <div className="secondary-card-top">
                <div>
                  <span className="match-tag-sm">{career.matchPercentage}% MATCH</span>
                  <h4 className="secondary-career-title">{career.title}</h4>
                </div>
                <MatchRing percentage={career.matchPercentage} isPrimary={false} />
              </div>

              <p className="secondary-career-desc">{career.fitSummary || career.tagline}</p>

              <div className="secondary-skills-row">
                {career.skills.slice(0, 4).map((s, i) => (
                  <span key={i} className="skill-chip-sm">{s.name}</span>
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
      </div>

      {/* Footer Utility Bar: Compare Options */}
      <div className="results-utility-bar">
        <button className="btn-compare-all" onClick={onOpenComparison}>
          <ArrowLeftRight size={16} />
          <span>Compare All 3 Matches Side-by-Side</span>
        </button>
      </div>
    </div>
  );
}
