import React, { useEffect, useState } from "react";
import { Sparkles, Check, Loader2, Brain, Cpu, ArrowRight } from "lucide-react";

export function AnalysisScreen({ onComplete }) {
  const [analysisStep, setAnalysisStep] = useState(1); // 1, 2, 3

  useEffect(() => {
    // Smooth step progression
    const timer1 = setTimeout(() => setAnalysisStep(2), 700);
    const timer2 = setTimeout(() => setAnalysisStep(3), 1500);
    const timer3 = setTimeout(() => {
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="analysis-page-container animate-fade-in">
      <div className="analysis-card">
        {/* Animated AI Pulse Icon */}
        <div className="analysis-ai-avatar">
          <div className="avatar-pulse-ring"></div>
          <div className="avatar-core">
            <Sparkles size={32} className="ai-sparkle-icon" />
          </div>
        </div>

        {/* Headings */}
        <div className="analysis-text-header">
          <h1 className="analysis-title">Building your career profile...</h1>
          <p className="analysis-subtitle">
            We're connecting your interests, strengths and preferences to potential career paths.
          </p>
        </div>

        {/* 3-Step Process Indicator */}
        <div className="analysis-steps-list">
          {/* Step 1 */}
          <div className={`analysis-step-item ${analysisStep >= 1 ? "active" : ""}`}>
            <div className={`step-status-icon ${analysisStep > 1 ? "completed" : "in-progress"}`}>
              {analysisStep > 1 ? (
                <Check size={16} />
              ) : (
                <Loader2 size={16} className="spin-icon" />
              )}
            </div>
            <span className="step-label">Understanding your interests</span>
          </div>

          {/* Step 2 */}
          <div className={`analysis-step-item ${analysisStep >= 2 ? "active" : "pending"}`}>
            <div className={`step-status-icon ${analysisStep > 2 ? "completed" : analysisStep === 2 ? "in-progress" : "waiting"}`}>
              {analysisStep > 2 ? (
                <Check size={16} />
              ) : analysisStep === 2 ? (
                <Loader2 size={16} className="spin-icon" />
              ) : (
                <span className="dot-wait"></span>
              )}
            </div>
            <span className="step-label">Identifying your strengths</span>
          </div>

          {/* Step 3 */}
          <div className={`analysis-step-item ${analysisStep >= 3 ? "active" : "pending"}`}>
            <div className={`step-status-icon ${analysisStep === 3 ? "in-progress" : "waiting"}`}>
              {analysisStep === 3 ? (
                <Loader2 size={16} className="spin-icon" />
              ) : (
                <span className="dot-wait"></span>
              )}
            </div>
            <span className="step-label">Finding your best matches</span>
          </div>
        </div>

        {/* Shimmer Progress Track */}
        <div className="analysis-progress-track">
          <div
            className="analysis-progress-bar"
            style={{
              width: analysisStep === 1 ? "35%" : analysisStep === 2 ? "70%" : "100%"
            }}
          />
        </div>

        {/* Optional Skip Button */}
        <button className="skip-analysis-btn" onClick={onComplete}>
          <span>View matches immediately</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
