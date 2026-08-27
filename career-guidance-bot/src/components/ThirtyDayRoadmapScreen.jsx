import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw,
  Target,
  Layers,
  ChevronDown,
  ChevronUp,
  FolderGit2
} from "lucide-react";
import confetti from "canvas-confetti";

export function ThirtyDayRoadmapScreen({
  career,
  onBackToResults,
  onOpenAiAssistant,
  onExploreFullCareer
}) {
  const [completedWeeks, setCompletedWeeks] = useState({ 0: false, 1: false, 2: false, 3: false });
  const [expandedWeek, setExpandedWeek] = useState(0);

  const roadmapData = career.thirtyDayRoadmap || {
    whyThisRoadmap: "Because Python and SQL are currently your biggest skill opportunities, we prioritize them before introducing machine learning.",
    weeks: []
  };

  const toggleWeekComplete = (index) => {
    const isNowComplete = !completedWeeks[index];
    setCompletedWeeks(prev => ({
      ...prev,
      [index]: isNowComplete
    }));

    if (isNowComplete) {
      try {
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
          colors: ["#10B981", "#7C3AED", "#6366F1", "#A7F3D0"]
        });
      } catch (e) {}
    }
  };

  const completedCount = Object.values(completedWeeks).filter(Boolean).length;
  const totalWeeks = roadmapData.weeks.length || 4;
  const progressPercent = Math.round((completedCount / totalWeeks) * 100);

  return (
    <div className="thirty-day-container animate-fade-in">
      {/* Top Breadcrumb & Action */}
      <div className="detail-top-nav">
        <button className="btn-back-link" onClick={onBackToResults}>
          <ArrowLeft size={16} />
          <span>Back to Matches</span>
        </button>

        <div className="detail-action-buttons">
          <button className="btn-icon-pill" onClick={onExploreFullCareer}>
            <Layers size={15} />
            <span>Full Career Roadmap</span>
          </button>
        </div>
      </div>

      {/* Header Card */}
      <div className="thirty-day-header-card">
        <div className="thirty-day-meta-row">
          <div className="plan-badge-pill">
            <Sparkles size={14} />
            <span>YOUR PERSONALIZED PLAN</span>
          </div>
          <span className="goal-tag">Target: {career.title}</span>
        </div>

        <div className="thirty-day-title-row">
          <div>
            <h1 className="thirty-day-title">Your first 30 days</h1>
            <p className="thirty-day-sub">
              An achievable starting plan based on your current skills and your {career.title} goal.
            </p>
          </div>

          <div className="weeks-progress-box">
            <span className="progress-badge-text">
              {completedCount} / {totalWeeks} weeks completed
            </span>
            <div className="progress-mini-bar">
              <div
                className="progress-mini-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Why this roadmap? Personalization Banner */}
        <div className="why-roadmap-card">
          <div className="why-roadmap-icon">
            <Target size={18} />
          </div>
          <div className="why-roadmap-text">
            <h4>Why this roadmap?</h4>
            <p>{roadmapData.whyThisRoadmap}</p>
          </div>
        </div>
      </div>

      {/* Vertical 4-Week Timeline */}
      <div className="thirty-day-timeline">
        {roadmapData.weeks.map((week, index) => {
          const isDone = !!completedWeeks[index];
          const isExpanded = expandedWeek === index;
          const statusLabel = isDone ? "Completed" : index === 0 ? "In Progress" : "Not Started";

          return (
            <div
              key={index}
              className={`timeline-week-card ${isDone ? "week-done" : isExpanded ? "week-active" : ""}`}
            >
              {/* Left Timeline Marker */}
              <div className="timeline-marker-col">
                <div className={`week-badge-circle ${isDone ? "done" : ""}`}>
                  {isDone ? <Check size={16} /> : `W${week.weekNumber}`}
                </div>
                {index < totalWeeks - 1 && <div className="timeline-connecting-line" />}
              </div>

              {/* Card Body */}
              <div className="timeline-card-body">
                <div className="week-header-row">
                  <div className="week-title-group">
                    <div className="week-status-strip">
                      <span className="week-number-label">WEEK {week.weekNumber}</span>
                      <span className="bullet-sep">•</span>
                      <span className="week-est-hours">
                        <Clock size={12} />
                        {week.estimatedHours}
                      </span>
                      <span className="bullet-sep">•</span>
                      <span className={`week-status-tag ${statusLabel.toLowerCase().replace(/\s/g, "-")}`}>
                        {statusLabel}
                      </span>
                    </div>

                    <h3 className="week-heading">{week.title}</h3>
                    <p className="week-focus-text">Focus: {week.focus}</p>
                  </div>

                  <button
                    className={`btn-mark-complete ${isDone ? "marked-done" : ""}`}
                    onClick={() => toggleWeekComplete(index)}
                  >
                    <CheckCircle2 size={16} />
                    <span>{isDone ? "Completed ✓" : "Mark Complete"}</span>
                  </button>
                </div>

                {/* Goal Strip */}
                <div className="week-goal-strip">
                  <span className="goal-label">Weekly Goal:</span>
                  <p className="goal-text">"{week.goal}"</p>
                </div>

                {/* Curated Resources Section */}
                {week.resources && week.resources.length > 0 && (
                  <div className="week-resources-drawer">
                    <span className="resources-heading">Curated Resources:</span>
                    <div className="resources-pills">
                      {week.resources.map((res, rIdx) => (
                        <div key={rIdx} className="resource-pill">
                          <BookOpen size={13} />
                          <span className="resource-name">{res.name}</span>
                          <span className="resource-type">{res.type}</span>
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

      {/* Bottom Follow-up Strip */}
      <div className="thirty-day-footer-strip">
        <div className="footer-left-info">
          <Sparkles size={18} className="text-primary" />
          <span>Have questions about Week 1 or need learning tips?</span>
        </div>

        <button className="btn-ask-ai-link" onClick={onOpenAiAssistant}>
          <span>Ask CareerPilot AI →</span>
        </button>
      </div>
    </div>
  );
}
