import React, { useState } from "react";
import { Map, Sparkles, Check, Clock, BookOpen, ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";

export function MyRoadmapView({ activeCareer, onExploreCareer, onRetake }) {
  const [completedMilestones, setCompletedMilestones] = useState({});

  if (!activeCareer) {
    return (
      <div className="empty-roadmap-container animate-fade-in">
        <div className="empty-roadmap-card">
          <div className="empty-icon-box">
            <Map size={36} />
          </div>
          <h2>No Active Roadmap Yet</h2>
          <p>Complete the career discovery questionnaire to generate your tailored step-by-step roadmap.</p>
          <button className="btn-primary-large" onClick={onRetake}>
            <span>Start Career Discovery</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    );
  }

  const toggleMilestone = (stepIdx, mIdx) => {
    const key = `${stepIdx}-${mIdx}`;
    setCompletedMilestones(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Calculate stats
  let totalMilestones = 0;
  let finishedCount = 0;
  activeCareer.roadmap.forEach((step, sIdx) => {
    step.milestones.forEach((_, mIdx) => {
      totalMilestones++;
      if (completedMilestones[`${sIdx}-${mIdx}`]) finishedCount++;
    });
  });
  const progressPercent = totalMilestones > 0 ? Math.round((finishedCount / totalMilestones) * 100) : 0;

  return (
    <div className="my-roadmap-container animate-fade-in">
      {/* Header Banner */}
      <div className="my-roadmap-header-card">
        <div className="header-badge-row">
          <div className="active-path-pill">
            <Sparkles size={14} />
            <span>Active Learning Path</span>
          </div>
          <span className="match-tag-pill">{activeCareer.matchPercentage}% Match</span>
        </div>

        <div className="header-title-row">
          <div>
            <h1>{activeCareer.title} Roadmap</h1>
            <p>{activeCareer.tagline}</p>
          </div>

          <button className="btn-view-details" onClick={() => onExploreCareer(activeCareer)}>
            <span>View Full Career Insights</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Progress Strip */}
        <div className="roadmap-progress-strip">
          <div className="progress-numbers">
            <span>Overall Completion</span>
            <strong>{progressPercent}% ({finishedCount}/{totalMilestones} Milestones)</strong>
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* Roadmap Steps Grid */}
      <div className="my-roadmap-steps-list">
        {activeCareer.roadmap.map((step, sIdx) => {
          const stepDone = step.milestones.every((_, mIdx) => completedMilestones[`${sIdx}-${mIdx}`]);

          return (
            <div key={sIdx} className={`roadmap-step-card ${stepDone ? "step-completed" : ""}`}>
              <div className="step-card-header">
                <div className="step-number-tag">{step.stepNumber}</div>
                <div className="step-header-info">
                  <div className="step-time-pill">
                    <Clock size={12} />
                    <span>{step.duration}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <span className="step-focus-highlight">{step.focus}</span>
                </div>
                {stepDone && (
                  <div className="step-complete-badge">
                    <CheckCircle2 size={16} />
                    <span>Completed</span>
                  </div>
                )}
              </div>

              <p className="step-desc-text">{step.description}</p>

              {/* Milestones */}
              <div className="step-milestones-section">
                <span className="section-label">Milestones & Checklist:</span>
                <div className="milestones-checklist">
                  {step.milestones.map((m, mIdx) => {
                    const isChecked = !!completedMilestones[`${sIdx}-${mIdx}`];
                    return (
                      <label key={mIdx} className={`milestone-item ${isChecked ? "checked" : ""}`}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleMilestone(sIdx, mIdx)}
                        />
                        <div className="checkbox-custom">
                          {isChecked && <Check size={13} />}
                        </div>
                        <span className="milestone-text">{m}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Resources */}
              {step.resources && (
                <div className="step-resources-section">
                  <span className="section-label">Recommended Resources:</span>
                  <div className="resources-pills">
                    {step.resources.map((r, rIdx) => (
                      <div key={rIdx} className="resource-pill">
                        <BookOpen size={13} />
                        <span className="resource-name">{r.name}</span>
                        <span className="resource-type">{r.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
