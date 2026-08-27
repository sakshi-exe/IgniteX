import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ExternalLink,
  Sparkles,
  BookOpen,
  Check,
  Compass,
  ArrowRight,
  Target,
  FileCode,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ThirtyDayRoadmapScreen({
  career,
  onBack,
  onOpenAssistant
}) {
  const [completedWeeks, setCompletedWeeks] = useState([]);
  const roadmapData = career?.thirtyDayRoadmap || {
    whyThisRoadmap: "Because Python and SQL are currently your biggest skill opportunities, we prioritize them before introducing machine learning.",
    weeks: []
  };

  const totalWeeks = roadmapData.weeks.length || 4;
  const completedCount = completedWeeks.length;
  const progressPercent = (completedCount / totalWeeks) * 100;

  const handleToggleWeek = (weekNumber) => {
    if (completedWeeks.includes(weekNumber)) {
      setCompletedWeeks(completedWeeks.filter(w => w !== weekNumber));
    } else {
      const next = [...completedWeeks, weekNumber];
      setCompletedWeeks(next);
      if (next.length === totalWeeks) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  return (
    <div className="thirty-day-container">
      {/* Top Navigation & Path Breadcrumb */}
      <div className="detail-top-nav">
        <button className="btn-back-link" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to Matches</span>
        </button>

        {/* Subtle Horizontal Path Metaphor: START -> FOUNDATION -> SKILLS -> PROJECT -> CAREER READY */}
        <div className="path-milestones-indicator">
          <span className="path-step-node active">START</span>
          <span className="path-step-arrow">→</span>
          <span className={`path-step-node ${completedWeeks.includes(1) ? 'active' : ''}`}>FOUNDATION</span>
          <span className="path-step-arrow">→</span>
          <span className={`path-step-node ${completedWeeks.includes(2) ? 'active' : ''}`}>SKILLS</span>
          <span className="path-step-arrow">→</span>
          <span className={`path-step-node ${completedWeeks.includes(3) ? 'active' : ''}`}>PROJECT</span>
          <span className="path-step-arrow">→</span>
          <span className={`path-step-node ${completedWeeks.includes(4) ? 'active' : ''}`}>CAREER READY</span>
        </div>
      </div>

      {/* Header Card */}
      <div className="thirty-day-header-card">
        <div className="thirty-day-meta-row">
          <div className="plan-badge-pill">
            <Compass size={14} />
            <span>YOUR CAREER PATH</span>
          </div>
          <span className="goal-tag">Target: {career?.title || 'Machine Learning Engineer'}</span>
        </div>

        <div className="thirty-day-title-row">
          <div>
            <h1 className="thirty-day-title">Your path to get there.</h1>
            <p className="thirty-day-sub">
              A personalized 30-day starting plan based on your current skills and your chosen career direction.
            </p>
          </div>

          <div className="weeks-progress-box">
            <span className="progress-badge-text">{completedCount} of {totalWeeks} weeks completed</span>
            <div className="progress-mini-bar">
              <div
                className="progress-mini-fill"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Why this roadmap? Highlight */}
        <div className="why-roadmap-card">
          <div className="why-roadmap-icon">
            <Compass size={18} />
          </div>
          <div className="why-roadmap-text">
            <h4>Why this roadmap?</h4>
            <p>{roadmapData.whyThisRoadmap}</p>
          </div>
        </div>
      </div>

      {/* 4-Week Vertical Timeline */}
      <div className="thirty-day-timeline">
        {roadmapData.weeks.map((week) => {
          const isDone = completedWeeks.includes(week.weekNumber);

          return (
            <div
              key={week.weekNumber}
              className={`timeline-week-card ${isDone ? 'week-done' : ''}`}
            >
              {/* Left Timeline Indicator */}
              <div className="timeline-marker-col">
                <div className={`week-badge-circle ${isDone ? 'done' : ''}`}>
                  {isDone ? <Check size={18} strokeWidth={3} /> : `W${week.weekNumber}`}
                </div>
                {week.weekNumber < totalWeeks && <div className="timeline-connecting-line"></div>}
              </div>

              {/* Card Body */}
              <div className="timeline-card-body">
                <div className="week-header-row">
                  <div className="week-title-group">
                    <div className="week-status-strip">
                      <span className="week-number-label">WEEK {week.weekNumber} · {week.phaseName}</span>
                      <span className="dot-divider">•</span>
                      <span className="week-est-hours">
                        <Clock size={13} /> {week.estimatedHours}
                      </span>
                      <span className={`week-status-tag ${isDone ? 'completed' : 'in-progress'}`}>
                        {isDone ? 'Completed' : 'In Progress'}
                      </span>
                    </div>
                    <h3 className="week-heading">{week.title}</h3>
                    <p className="week-focus-text">{week.focus}</p>
                  </div>

                  {/* Toggle Complete Button */}
                  <button
                    className={`btn-mark-complete ${isDone ? 'marked-done' : ''}`}
                    onClick={() => handleToggleWeek(week.weekNumber)}
                  >
                    {isDone ? (
                      <>
                        <CheckCircle2 size={16} />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <span className="checkbox-ring"></span>
                        <span>Mark Complete</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Week Goal Strip */}
                <div className="week-goal-strip">
                  <span className="goal-label">Goal:</span>
                  <span className="goal-text">"{week.goal}"</span>
                </div>

                {/* Curated Resources */}
                {week.resources && week.resources.length > 0 && (
                  <div className="week-resources-drawer">
                    <span className="resources-heading">Curated Resources:</span>
                    <div className="resources-pills">
                      {week.resources.map((res, rIdx) => (
                        <div key={rIdx} className="resource-pill">
                          <BookOpen size={13} className="text-primary-600" />
                          <span className="resource-name">{res.name}</span>
                          <span className="resource-type">({res.type})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Support Strip */}
      <div className="thirty-day-footer-strip">
        <div className="footer-left-info">
          <Compass size={18} className="text-primary-600" />
          <span>Need personalized help or have questions about Week 1?</span>
        </div>
        <button className="btn-ask-ai-link" onClick={onOpenAssistant}>
          Ask LUNARC AI →
        </button>
      </div>
    </div>
  );
}
