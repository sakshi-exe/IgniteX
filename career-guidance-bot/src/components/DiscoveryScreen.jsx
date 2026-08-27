import React from "react";
import {
  Code,
  Palette,
  Microscope,
  TrendingUp,
  Users,
  Brain,
  Sparkles,
  Lightbulb,
  MessageSquare,
  Compass,
  BarChart3,
  HeartHandshake,
  Zap,
  CheckCircle2,
  Binary,
  Terminal,
  Atom,
  Briefcase,
  Coins,
  BookOpen,
  PenTool,
  Smile,
  Cpu,
  PieChart,
  Layout,
  Workflow,
  Search,
  Heart,
  Rocket,
  Globe,
  ArrowLeft,
  ArrowRight,
  Check
} from "lucide-react";
import { DISCOVERY_QUESTIONS } from "../data/careerData";

// Icon mapping helper
const ICON_MAP = {
  Code,
  Palette,
  Microscope,
  TrendingUp,
  Users,
  Brain,
  Sparkles,
  Lightbulb,
  MessageSquare,
  Compass,
  BarChart3,
  HeartHandshake,
  Zap,
  CheckCircle2,
  Binary,
  Terminal,
  Atom,
  Briefcase,
  Coins,
  BookOpen,
  PenTool,
  Smile,
  Cpu,
  PieChart,
  Layout,
  Workflow,
  Search,
  Heart,
  Rocket,
  Globe
};

export function DiscoveryScreen({
  currentStepIndex,
  answers,
  onToggleOption,
  onNext,
  onBack
}) {
  const currentQuestion = DISCOVERY_QUESTIONS[currentStepIndex] || DISCOVERY_QUESTIONS[0];
  const totalSteps = DISCOVERY_QUESTIONS.length;
  const progressPercent = ((currentStepIndex + 1) / totalSteps) * 100;

  const currentSelection = answers[currentQuestion.id] || [];
  const hasMinSelection = currentSelection.length >= currentQuestion.minSelections;
  const isMaxReached = currentSelection.length >= currentQuestion.maxSelections;

  const handleCardClick = (optionId) => {
    onToggleOption(currentQuestion.id, optionId, currentQuestion.maxSelections);
  };

  return (
    <div className="discovery-container animate-fade-in">
      {/* Top Header & Progress */}
      <div className="discovery-header-card">
        <div className="discovery-meta-row">
          <div className="meta-left">
            <span className="discovery-label">Career Discovery</span>
            <span className="step-badge">Step {currentStepIndex + 1} of {totalSteps}</span>
          </div>
          <div className="meta-right">
            <span className="time-indicator">{currentQuestion.timeRemaining}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Card Area */}
      <div className="question-content-box">
        <div className="question-header">
          <h1 className="question-title">{currentQuestion.title}</h1>
          <p className="question-subtitle">{currentQuestion.subtitle}</p>
        </div>

        {/* Grid of Interactive Option Cards */}
        <div className="options-grid">
          {currentQuestion.options.map((opt) => {
            const isSelected = currentSelection.includes(opt.id);
            const IconComponent = ICON_MAP[opt.icon] || Sparkles;

            return (
              <div
                key={opt.id}
                role="button"
                tabIndex={0}
                className={`option-card ${isSelected ? "selected" : ""} ${
                  !isSelected && isMaxReached ? "disabled-hint" : ""
                }`}
                onClick={() => handleCardClick(opt.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(opt.id);
                  }
                }}
              >
                <div className="option-card-inner">
                  <div className="card-top-row">
                    <div className={`option-icon-box ${isSelected ? "icon-active" : ""}`}>
                      <IconComponent size={20} />
                    </div>

                    <div className={`selection-indicator ${isSelected ? "checked" : ""}`}>
                      {isSelected ? <Check size={14} /> : null}
                    </div>
                  </div>

                  <div className="option-text-group">
                    <h3 className="option-title">{opt.title}</h3>
                    {opt.description && (
                      <p className="option-description">{opt.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selection Status Note */}
        <div className="selection-status-strip">
          <span className="selection-count-text">
            {currentSelection.length} of {currentQuestion.maxSelections} selected
          </span>
          {!hasMinSelection && (
            <span className="selection-hint">Please choose at least 1 option to continue</span>
          )}
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="discovery-footer-nav">
        <button
          className="btn-back"
          onClick={onBack}
        >
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>

        <button
          className={`btn-continue ${hasMinSelection ? "active" : "disabled"}`}
          disabled={!hasMinSelection}
          onClick={onNext}
        >
          <span>{currentStepIndex === totalSteps - 1 ? "Analyze Career Profile" : "Continue"}</span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
