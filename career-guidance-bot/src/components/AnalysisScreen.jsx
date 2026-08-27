import React, { useEffect, useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const ANALYSIS_STEPS = [
  { label: 'Understanding your interests', delay: 400 },
  { label: 'Identifying your strengths', delay: 1100 },
  { label: 'Finding your best direction', delay: 1900 }
];

export default function AnalysisScreen({ onComplete }) {
  const [completedSteps, setCompletedSteps] = useState([0]);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setCompletedSteps([0, 1]);
      setProgress(65);
    }, 900);

    const t2 = setTimeout(() => {
      setCompletedSteps([0, 1, 2]);
      setProgress(100);
    }, 1800);

    const t3 = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className="analysis-page-container">
      <div className="analysis-card">
        {/* Animated Compass Orbit Icon */}
        <div className="analysis-ai-avatar">
          <div className="avatar-pulse-ring"></div>
          <div className="avatar-core">
            <Compass size={32} className="spin-slow" />
          </div>
        </div>

        {/* Direction Analysis Heading */}
        <div className="analysis-text-header">
          <h2 className="analysis-title">Finding your direction...</h2>
          <p className="analysis-subtitle">
            LUNARC Compass is connecting your interests, strengths and preferences to possible career paths.
          </p>
        </div>

        {/* Animated 3-Step Checklist */}
        <div className="analysis-steps-list">
          {ANALYSIS_STEPS.map((step, index) => {
            const isDone = completedSteps.includes(index);
            const isCurrent = completedSteps.length - 1 === index && progress < 100;

            return (
              <div
                key={index}
                className={`analysis-step-item ${isDone ? 'active' : ''}`}
              >
                <div className={`step-status-icon ${isDone ? 'completed' : isCurrent ? 'in-progress' : 'pending'}`}>
                  {isDone ? (
                    <CheckCircle2 size={16} />
                  ) : isCurrent ? (
                    <Compass size={14} className="spin-icon" />
                  ) : (
                    <span className="dot-wait"></span>
                  )}
                </div>
                <span className="step-label">{step.label}</span>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="analysis-progress-track">
          <div
            className="analysis-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button className="skip-analysis-btn" onClick={onComplete}>
          <span>View Matches Directly</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
