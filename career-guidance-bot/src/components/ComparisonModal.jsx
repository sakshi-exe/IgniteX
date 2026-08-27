import React from "react";
import { X, Sparkles, Check, ArrowRight, DollarSign, TrendingUp, Clock, Layers } from "lucide-react";

export function ComparisonModal({ isOpen, onClose, matches, onSelectCareer }) {
  if (!isOpen) return null;

  const compareList = matches.slice(0, 3);

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="comparison-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-pill">
              <Sparkles size={16} />
            </div>
            <div>
              <h2>Compare Your Top Matches</h2>
              <p>Side-by-side breakdown to help you make an informed decision.</p>
            </div>
          </div>

          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Comparison Table / Grid */}
        <div className="comparison-grid-container">
          <div className="comparison-columns-grid">
            {compareList.map((career, index) => {
              const isPrimary = index === 0;

              return (
                <div
                  key={career.id}
                  className={`compare-card-col ${isPrimary ? "prominent-compare" : ""}`}
                >
                  {isPrimary && (
                    <div className="compare-top-badge">
                      <Sparkles size={12} />
                      <span>Highest Fit</span>
                    </div>
                  )}

                  <div className="compare-card-header">
                    <span className="compare-match-score">{career.matchPercentage}% Match</span>
                    <h3 className="compare-career-title">{career.title}</h3>
                    <p className="compare-lead">{career.tagline}</p>
                  </div>

                  {/* Attributes list */}
                  <div className="compare-metrics-list">
                    <div className="compare-metric-row">
                      <span className="compare-metric-label">Estimated Salary</span>
                      <span className="compare-metric-val">{career.salaryRange}</span>
                    </div>

                    <div className="compare-metric-row">
                      <span className="compare-metric-label">Growth Outlook</span>
                      <span className="compare-metric-val">{career.outlook}</span>
                    </div>

                    <div className="compare-metric-row">
                      <span className="compare-metric-label">Roadmap Phases</span>
                      <span className="compare-metric-val">{career.roadmap.length} Milestone Steps</span>
                    </div>
                  </div>

                  {/* Core Skills */}
                  <div className="compare-skills-box">
                    <span className="compare-skills-label">Core Skills:</span>
                    <div className="compare-chips">
                      {career.skills.slice(0, 4).map((skill, sIdx) => (
                        <span key={sIdx} className="compare-chip">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Why It Fits */}
                  <div className="compare-why-box">
                    <span className="compare-skills-label">Top Reason:</span>
                    <div className="compare-reason-item">
                      <Check size={14} className="text-mint" />
                      <span>{career.whyItMatches[0]?.title || "Analytical Thinking"}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="compare-card-footer">
                    <button
                      className="btn-select-compare"
                      onClick={() => {
                        onSelectCareer(career);
                        onClose();
                      }}
                    >
                      <span>Explore Roadmap</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
