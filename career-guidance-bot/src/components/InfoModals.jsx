import React from 'react';
import { X, Compass, CheckCircle2, Shield, Award, HelpCircle, Info, Sparkles, Target, Map } from 'lucide-react';

export function HowItWorksModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="info-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-pill">
              <Compass size={20} />
            </div>
            <div>
              <h2>How LUNARC Compass Works</h2>
              <p>An intelligent 5-step journey to find your career direction</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="info-modal-body">
          <div className="how-it-works-steps">
            <div className="how-step-card">
              <div className="how-step-num">01</div>
              <div className="how-step-info">
                <h3>4-Question Discovery</h3>
                <p>We ask simple, focused questions about your natural curiosities, strengths, favorite subjects, and preferred impact areas.</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">02</div>
              <div className="how-step-info">
                <h3>Real-World Career Simulation</h3>
                <p>3 quick real-world workplace scenarios test how you naturally think, decompose problems, and make decisions under realistic constraints.</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">03</div>
              <div className="how-step-info">
                <h3>Explainable Match Engine</h3>
                <p>LUNARC Compass provides transparent, evidence-based recommendations so you understand exactly why each career direction matches you.</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">04</div>
              <div className="how-step-info">
                <h3>Skill Gap Breakdown</h3>
                <p>Compare your current proficiency against industry targets with actionable priorities (High vs Medium priority skills).</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">05</div>
              <div className="how-step-info">
                <h3>Personalized 30-Day Path</h3>
                <p>Follow a practical 4-week step-by-step roadmap with realistic weekly hours, milestones, and curated free learning resources.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-modal-footer">
          <button className="btn-modal-action" onClick={onClose}>
            Got it, Let's Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="info-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-pill">
              <Compass size={20} />
            </div>
            <div>
              <h2>About LUNARC Compass</h2>
              <p>Built for the LUNARC 2.0 Agentic AI Hackathon</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="info-modal-body">
          <div className="about-content-section">
            <div className="about-highlight-box">
              <span className="about-eyebrow">OUR MISSION</span>
              <p>
                <strong>LUNARC Compass</strong> helps students discover their career direction through calm, approachable, and explainable AI guidance. Instead of overwhelming learners with complex dashboards or rigid career mandates, we provide transparent recommendations and actionable 30-day starting plans.
              </p>
            </div>

            <div className="about-pillars-grid">
              <div className="about-pillar-card">
                <Shield size={20} className="pillar-icon" />
                <h4>5-Second Clarity</h4>
                <p>Zero learning curve. Students instantly understand what to do and get clear value immediately.</p>
              </div>
              <div className="about-pillar-card">
                <Target size={20} className="pillar-icon" />
                <h4>Instinct Simulation</h4>
                <p>Evaluates real-world decision instincts alongside expressed interests for robust guidance.</p>
              </div>
              <div className="about-pillar-card">
                <Sparkles size={20} className="pillar-icon" />
                <h4>Transparent Reasoning</h4>
                <p>Every match is backed by interest, strength, subject, and behavioral evidence.</p>
              </div>
              <div className="about-pillar-card">
                <Map size={20} className="pillar-icon" />
                <h4>Actionable 30-Day Paths</h4>
                <p>Converts career ambition into achievable weekly milestones and free curated projects.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-modal-footer">
          <button className="btn-modal-action" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export function ComparisonModal({ isOpen, onClose, careers, onSelectCareer }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="comparison-modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-pill">
              <Compass size={20} />
            </div>
            <div>
              <h2>Compare Career Directions</h2>
              <p>Review and evaluate your top matches side-by-side</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="comparison-grid-container">
          <div className="comparison-columns-grid">
            {careers.map((career, idx) => (
              <div
                key={career.id}
                className={`compare-card-col ${idx === 0 ? 'prominent-compare' : ''}`}
              >
                {idx === 0 && (
                  <div className="compare-top-badge">
                    <Sparkles size={12} />
                    <span>Top Match</span>
                  </div>
                )}

                <div className="compare-match-score">
                  <span>{career.matchPercentage}% MATCH</span>
                </div>

                <h3 className="compare-career-title">{career.title}</h3>
                <p className="compare-lead">{career.tagline}</p>

                <div className="compare-metrics-list">
                  <div className="compare-metric-row">
                    <span className="compare-metric-label">Salary Range:</span>
                    <span className="compare-metric-val">{career.salaryRange}</span>
                  </div>
                  <div className="compare-metric-row">
                    <span className="compare-metric-label">Job Growth:</span>
                    <span className="compare-metric-val text-mint">{career.outlook}</span>
                  </div>
                </div>

                <div className="compare-skills-box">
                  <span className="compare-skills-label">Core Skills:</span>
                  <div className="compare-chips">
                    {career.skills.slice(0, 4).map((sk, sIdx) => (
                      <span key={sIdx} className="compare-chip">{sk.name}</span>
                    ))}
                  </div>
                </div>

                <div className="compare-why-box">
                  <span className="compare-skills-label">Why It Matches You:</span>
                  <p className="compare-reason-item">{career.fitSummary}</p>
                </div>

                <button
                  className="btn-select-compare"
                  onClick={() => {
                    onSelectCareer(career);
                    onClose();
                  }}
                >
                  <span>Select Direction</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="info-modal-footer">
          <button className="btn-modal-secondary" onClick={onClose}>
            Done Comparing
          </button>
        </div>
      </div>
    </div>
  );
}
