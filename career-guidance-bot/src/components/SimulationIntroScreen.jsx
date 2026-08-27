import React from "react";
import { Sparkles, ArrowRight, Brain, Clock, Target, CheckCircle2 } from "lucide-react";

export function SimulationIntroScreen({ onStartSimulation }) {
  return (
    <div className="simulation-intro-container animate-fade-in">
      <div className="simulation-intro-card">
        {/* Subtle Icon Header */}
        <div className="simulation-intro-avatar">
          <Brain size={32} className="text-primary" />
        </div>

        <div className="simulation-badge-pill">
          <Sparkles size={14} />
          <span>STAGE 2: BEHAVIORAL SIMULATION</span>
        </div>

        <h1 className="simulation-intro-title">Let's test your career instincts.</h1>

        <p className="simulation-intro-desc">
          Your interests tell us what you like. These short real-world scenarios help us understand how you think and solve problems in practice.
        </p>

        {/* 3 Quick highlights */}
        <div className="simulation-intro-highlights">
          <div className="intro-highlight-item">
            <CheckCircle2 size={16} className="text-mint" />
            <span>3 realistic work scenarios</span>
          </div>
          <div className="intro-highlight-item">
            <Clock size={16} className="text-primary" />
            <span>Takes ~1 minute</span>
          </div>
          <div className="intro-highlight-item">
            <Target size={16} className="text-secondary-600" />
            <span>Refines match accuracy</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="simulation-intro-cta">
          <button className="btn-primary-large" onClick={onStartSimulation}>
            <span>Start Simulation</span>
            <ArrowRight size={18} className="btn-arrow" />
          </button>
          <span className="cta-subtext">3 scenarios · About 1 minute</span>
        </div>
      </div>
    </div>
  );
}
