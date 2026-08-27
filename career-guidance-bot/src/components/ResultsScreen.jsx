import React, { useEffect } from "react";
import { Sparkles, Check, ArrowRight, ArrowLeftRight, RotateCcw, Brain, Briefcase, Zap } from "lucide-react";
import confetti from "canvas-confetti";
import { generateProfileSummary } from "../data/careerData";

// Circular Match Indicator Component
function MatchRing({ percentage, isPrimary }) {
  const radius = isPrimary ? 34 : 28;
  const stroke = isPrimary ? 5 : 4.5;
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
  onOpenComparison,
  onRetake
}) {
  // Fire subtle celebration confetti once
  useEffect(() => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#7C3AED", "#6366F1", "#10B981", "#C084FC", "#DDD6FE"]
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const profileSummary = generateProfileSummary(userAnswers);
  const topMatches = matches.slice(0, 3);

  return (
    <div className="results-container animate-fade-in">
      {/* Header Section */}
      <div className="results-header-section">
        <div className="results-badge-pill">
          <Sparkles size={14} className="text-primary" />
          <span>YOUR PERSONALIZED RESULTS</span>
        </div>

        <h1 className="results-main-title">Here are your strongest matches.</h1>
        <p className="results-subtitle">
          Based on your interests, strengths and preferences, we identified the career pathways with the highest alignment.
        </p>

        {/* Dynamic Compact Profile Summary Card */}
        <div className="profile-summary-card">
          <div className="summary-card-inner">
            <div className="summary-icon-box">
              <Brain size={20} />
            </div>
            <div className="summary-details">
              <span className="summary-label">YOUR PROFILE</span>
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

      {/* Top 3 Horizontal Career Match Cards */}
      <div className="career-cards-grid">
        {topMatches.map((career, index) => {
          const isPrimary = index === 0;

          return (
            <div
              key={career.id}
              className={`career-card ${isPrimary ? "prominent-card" : "standard-card"}`}
            >
              {isPrimary && (
                <div className="top-match-ribbon">
                  <Sparkles size={13} />
                  <span>Top Recommendation</span>
                </div>
              )}

              {/* Card Header with Circular Percentage Ring */}
              <div className="card-header-row">
                <div className="card-title-group">
                  <span className="match-tag-label">{career.matchPercentage}% MATCH</span>
                  <h2 className="career-card-title">{career.title}</h2>
                </div>

                <MatchRing percentage={career.matchPercentage} isPrimary={isPrimary} />
              </div>

              {/* Short Description */}
              <p className="career-card-desc">{career.fitSummary || career.tagline}</p>

              {/* Why It Matches Section */}
              <div className="why-matches-box">
                <span className="why-label">Why it matches:</span>
                <ul className="why-bullets-list">
                  {career.whyItMatches ? (
                    career.whyItMatches.slice(0, 3).map((reason, rIndex) => (
                      <li key={rIndex}>
                        <div className="bullet-check">
                          <Check size={12} />
                        </div>
                        <span>{reason.title || reason}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li>
                        <div className="bullet-check"><Check size={12} /></div>
                        <span>AI & technology interest</span>
                      </li>
                      <li>
                        <div className="bullet-check"><Check size={12} /></div>
                        <span>Analytical thinking</span>
                      </li>
                      <li>
                        <div className="bullet-check"><Check size={12} /></div>
                        <span>Problem solving</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Key Skills Chips */}
              <div className="key-skills-strip">
                <span className="skills-label">Key skills:</span>
                <div className="skills-chips-row">
                  {career.skills.slice(0, 4).map((skill, sIndex) => (
                    <span key={sIndex} className="skill-chip-sm">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Card CTA */}
              <div className="card-action-bottom">
                <button
                  className={`btn-explore-career ${isPrimary ? "btn-explore-primary" : "btn-explore-secondary"}`}
                  onClick={() => onSelectCareer(career)}
                >
                  <span>Explore Career</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
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
