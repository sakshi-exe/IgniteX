import React from 'react';
import { ArrowRight, Compass, Sparkles, Target, Zap, Clock } from 'lucide-react';

export default function SimulationIntroScreen({ onStartSimulation }) {
  return (
    <div className="simulation-intro-container">
      <div className="simulation-intro-card">
        <div className="simulation-intro-avatar">
          <Compass size={32} strokeWidth={2.2} />
        </div>

        <div className="simulation-badge-pill">
          <Compass size={14} />
          <span>CAREER SIMULATION</span>
        </div>

        <h1 className="simulation-intro-title">Let's test your instincts.</h1>

        <p className="simulation-intro-desc">
          Your interests show what you like. These real-world situations help LUNARC Compass understand how you think.
        </p>

        <div className="simulation-intro-highlights">
          <div className="intro-highlight-item">
            <Target size={15} className="text-primary-600" />
            <span>3 realistic scenarios</span>
          </div>
          <span className="dot-divider">•</span>
          <div className="intro-highlight-item">
            <Clock size={15} className="text-secondary-600" />
            <span>Takes about 1 minute</span>
          </div>
          <span className="dot-divider">•</span>
          <div className="intro-highlight-item">
            <Sparkles size={15} className="text-mint-600" />
            <span>Refines your direction</span>
          </div>
        </div>

        <div className="simulation-intro-cta">
          <button className="btn-primary-large" onClick={onStartSimulation}>
            <span>Start Career Simulation</span>
            <ArrowRight size={18} className="btn-arrow" />
          </button>
          <span className="cta-subtext">No right or wrong answers — choose what you'd naturally do</span>
        </div>
      </div>
    </div>
  );
}
