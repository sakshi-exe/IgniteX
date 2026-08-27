import React from "react";
import { X, Sparkles, Compass, CheckCircle2, ShieldCheck, Zap, Brain, Target, Heart } from "lucide-react";

export function HowItWorksModal({ isOpen, onClose, onStartDiscovery }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="info-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-pill">
              <Compass size={16} />
            </div>
            <div>
              <h2>How CareerPilot Works</h2>
              <p>Designed to be understood in 5 seconds without friction.</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="info-modal-body">
          <div className="how-it-works-steps">
            <div className="how-step-card">
              <div className="how-step-num">01</div>
              <div className="how-step-info">
                <h3>Share Your Interests & Strengths</h3>
                <p>Answer 4 quick, intuitive questions about your passions, skills, preferred subjects, and work styles (~2 min).</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">02</div>
              <div className="how-step-info">
                <h3>AI Career Fit Computation</h3>
                <p>Our intelligent engine analyzes compatibility across 12+ modern careers, mapping your traits to industry requirements.</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">03</div>
              <div className="how-step-info">
                <h3>Review Strongest Matches</h3>
                <p>Explore high-confidence career cards with match percentages, rationale, and key skill requirements.</p>
              </div>
            </div>

            <div className="how-step-card">
              <div className="how-step-num">04</div>
              <div className="how-step-info">
                <h3>Follow Your Personalized Roadmap</h3>
                <p>Access step-by-step milestone checklists with estimated timelines and curated free learning resources.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-modal-footer">
          <button
            className="btn-modal-action"
            onClick={() => {
              onClose();
              onStartDiscovery();
            }}
          >
            <span>Start Career Discovery</span>
            <Sparkles size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="info-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-pill">
              <Sparkles size={16} />
            </div>
            <div>
              <h2>About CareerPilot</h2>
              <p>AI Career Guidance Built for Students & Educational Growth.</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="info-modal-body">
          <div className="about-content-section">
            <div className="about-highlight-box">
              <span className="about-eyebrow">MISSION</span>
              <p>
                Career decisions shouldn't be overwhelming or confusing. CareerPilot combines thoughtful educational design with intelligent AI profiling to help students discover who they can become.
              </p>
            </div>

            <div className="about-pillars-grid">
              <div className="about-pillar-card">
                <ShieldCheck size={20} className="pillar-icon" />
                <h4>Calm & Trustworthy</h4>
                <p>No noisy gaming mechanics or spammy ads. A tranquil pastel workspace for focused reflection.</p>
              </div>

              <div className="about-pillar-card">
                <Brain size={20} className="pillar-icon" />
                <h4>Intelligent Alignment</h4>
                <p>Tailored match percentage algorithms factoring in subjects, personality strengths, and interests.</p>
              </div>

              <div className="about-pillar-card">
                <Target size={20} className="pillar-icon" />
                <h4>Actionable Roadmaps</h4>
                <p>From zero to industry-ready with clear weekly milestones and free vetted resources.</p>
              </div>

              <div className="about-pillar-card">
                <Heart size={20} className="pillar-icon" />
                <h4>Accessible to All</h4>
                <p>Free, fast, and simple. Designed specifically for university students and career counselors.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-modal-footer">
          <button className="btn-modal-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
