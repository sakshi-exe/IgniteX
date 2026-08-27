import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
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
  Check
} from 'lucide-react';
import { DISCOVERY_QUESTIONS } from '../data/careerData';

// Dynamic icon mapper
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

export default function DiscoveryScreen({
  currentStepIndex,
  answers,
  onSelectOption,
  onNext,
  onBack
}) {
  const currentQuestion = DISCOVERY_QUESTIONS[currentStepIndex];
  const selectedOptions = answers[currentQuestion.id] || [];
  const isValid = selectedOptions.length >= (currentQuestion.minSelections || 1);
  const isLastQuestion = currentStepIndex === DISCOVERY_QUESTIONS.length - 1;
  const progressPercent = ((currentStepIndex + 1) / DISCOVERY_QUESTIONS.length) * 100;

  const handleOptionToggle = (optionId) => {
    let newSelections;
    if (selectedOptions.includes(optionId)) {
      newSelections = selectedOptions.filter(id => id !== optionId);
    } else {
      if (selectedOptions.length < currentQuestion.maxSelections) {
        newSelections = [...selectedOptions, optionId];
      } else {
        newSelections = [...selectedOptions.slice(1), optionId];
      }
    }
    onSelectOption(currentQuestion.id, newSelections);
  };

  return (
    <div className="discovery-container">
      {/* Top Header Card */}
      <div className="discovery-header-card">
        <div className="discovery-meta-row">
          <div className="meta-left">
            <span className="discovery-label">LUNARC COMPASS · Career Discovery</span>
            <span className="step-badge">
              Step {currentQuestion.step} of {DISCOVERY_QUESTIONS.length}
            </span>
          </div>
          <span className="time-indicator">{currentQuestion.timeRemaining}</span>
        </div>

        {/* Progress bar */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Question Content */}
      <div className="question-content-box">
        <div className="question-header">
          <h2 className="question-title">{currentQuestion.title}</h2>
          <p className="question-subtitle">{currentQuestion.subtitle}</p>
        </div>

        {/* Options Grid */}
        <div className="options-grid">
          {currentQuestion.options.map(option => {
            const isSelected = selectedOptions.includes(option.id);
            const IconComponent = ICON_MAP[option.icon] || Compass;

            return (
              <div
                key={option.id}
                className={`option-card ${isSelected ? 'selected' : ''}`}
                onClick={() => handleOptionToggle(option.id)}
              >
                <div className="option-card-inner">
                  <div className="card-top-row">
                    <div className={`option-icon-box ${isSelected ? 'icon-active' : ''}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className={`selection-indicator ${isSelected ? 'checked' : ''}`}>
                      {isSelected && <Check size={14} strokeWidth={3} />}
                    </div>
                  </div>

                  <div className="card-text-group">
                    <h3 className="option-title">{option.title}</h3>
                    <p className="option-description">{option.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selection Status Counter */}
        <div className="selection-status-strip">
          <span className="selection-count-text">
            {selectedOptions.length} of {currentQuestion.maxSelections} selected
          </span>
          <span className="selection-hint">
            {selectedOptions.length === 0
              ? 'Select at least 1 option to continue'
              : selectedOptions.length < currentQuestion.maxSelections
              ? 'You can pick more options or continue'
              : 'Maximum selections chosen'}
          </span>
        </div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="discovery-footer-nav">
        <button className="btn-back" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>{currentStepIndex === 0 ? 'Home' : 'Previous'}</span>
        </button>

        <button
          className={`btn-continue ${isValid ? 'active' : 'disabled'}`}
          onClick={isValid ? onNext : undefined}
          disabled={!isValid}
        >
          <span>{isLastQuestion ? 'Proceed to Simulation' : 'Continue'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
