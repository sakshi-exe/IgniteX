import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Brain,
  BarChart3,
  Binary,
  Cpu,
  Bookmark,
  Share2,
  Clock,
  TrendingUp,
  DollarSign,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowLeftRight
} from "lucide-react";

// Icon lookup for "Why it matches"
const FIT_ICONS = {
  Brain,
  BarChart3,
  Binary,
  Cpu,
  Sparkles,
  TrendingUp
};

export function CareerDetailScreen({
  career,
  onBackToResults,
  onOpenComparison,
  onStartRoadmap,
  isSaved,
  onToggleSave
}) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [completedMilestones, setCompletedMilestones] = useState({});
  const [roadmapStarted, setRoadmapStarted] = useState(false);

  const toggleMilestone = (stepIdx, mIdx) => {
    const key = `${stepIdx}-${mIdx}`;
    setCompletedMilestones(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleStartRoadmap = () => {
    setRoadmapStarted(true);
    if (onStartRoadmap) {
      onStartRoadmap(career);
    }
  };

  // Calculate completion percentage across all milestones
  let totalMilestones = 0;
  let finishedCount = 0;
  career.roadmap.forEach((step, sIdx) => {
    step.milestones.forEach((_, mIdx) => {
      totalMilestones++;
      if (completedMilestones[`${sIdx}-${mIdx}`]) finishedCount++;
    });
  });
  const overallProgress = totalMilestones > 0 ? Math.round((finishedCount / totalMilestones) * 100) : 0;

  return (
    <div className="career-detail-container animate-fade-in">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="detail-top-nav">
        <button className="btn-back-link" onClick={onBackToResults}>
          <ArrowLeft size={16} />
          <span>Back to Matches</span>
        </button>

        <div className="detail-action-buttons">
          <button
            className={`btn-icon-pill ${isSaved ? "saved" : ""}`}
            onClick={() => onToggleSave(career.id)}
            title="Save Career"
          >
            <Bookmark size={15} className={isSaved ? "fill-current" : ""} />
            <span>{isSaved ? "Saved in Profile" : "Save Career"}</span>
          </button>

          <button className="btn-icon-pill" onClick={onOpenComparison} title="Compare careers">
            <ArrowLeftRight size={15} />
            <span>Compare Career</span>
          </button>
        </div>
      </div>

      {/* Main 2-Column Desktop Layout */}
      <div className="detail-two-column-layout">
        {/* LEFT COLUMN: Career Fit, Insights & Skills */}
        <div className="detail-left-column">
          {/* Main Title & Match Header */}
          <div className="detail-header-card">
            <div className="match-pill-large">
              <Sparkles size={15} />
              <span>{career.matchPercentage}% Match</span>
            </div>

            <h1 className="detail-career-title">{career.title}</h1>
            <p className="detail-career-lead">{career.tagline}</p>

            {/* Quick Metrics Bar */}
            <div className="detail-metrics-row">
              <div className="metric-item">
                <DollarSign size={16} className="metric-icon" />
                <div>
                  <span className="metric-label">Estimated Salary</span>
                  <span className="metric-val">{career.salaryRange}</span>
                </div>
              </div>

              <div className="metric-item">
                <TrendingUp size={16} className="metric-icon" />
                <div>
                  <span className="metric-label">Industry Outlook</span>
                  <span className="metric-val">{career.outlook}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Why This Career Fits You */}
          <div className="detail-section-box">
            <div className="section-title-row">
              <Sparkles size={18} className="text-primary" />
              <h2>Why this career fits you</h2>
            </div>

            <div className="why-fit-cards-grid">
              {career.whyItMatches ? (
                career.whyItMatches.map((item, idx) => {
                  const IconComp = FIT_ICONS[item.icon] || Sparkles;
                  return (
                    <div key={idx} className="why-fit-card">
                      <div className="why-fit-icon">
                        <IconComp size={18} />
                      </div>
                      <div className="why-fit-text">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>High correlation with your interests and strengths.</p>
              )}
            </div>
          </div>

          {/* Section: Skills to Develop */}
          <div className="detail-section-box">
            <div className="section-title-row">
              <Layers size={18} className="text-primary" />
              <h2>Skills to develop</h2>
            </div>

            <div className="skills-chips-matrix">
              {career.skills.map((skill, idx) => (
                <div key={idx} className="skill-matrix-chip">
                  <span className="skill-chip-name">{skill.name}</span>
                  {skill.level && (
                    <span className={`skill-chip-level ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Vertical Personalized Roadmap */}
        <div className="detail-right-column">
          <div className="roadmap-panel-card">
            {/* Roadmap Header */}
            <div className="roadmap-header">
              <div>
                <span className="roadmap-eyebrow">STEP-BY-STEP GUIDE</span>
                <h2>Your Personalized Roadmap</h2>
              </div>

              {roadmapStarted && (
                <div className="roadmap-progress-badge">
                  <span>{overallProgress}% Completed</span>
                </div>
              )}
            </div>

            {/* Vertical Roadmap Stepper */}
            <div className="vertical-stepper">
              {career.roadmap.map((step, sIdx) => {
                const isExpanded = activeStepIndex === sIdx;
                const isFirst = sIdx === 0;
                const isLast = sIdx === career.roadmap.length - 1;

                return (
                  <div
                    key={sIdx}
                    className={`stepper-node ${isExpanded ? "node-active" : ""}`}
                  >
                    {/* Stepper Timeline Axis */}
                    <div className="stepper-axis">
                      <div className="step-number-circle">
                        {step.stepNumber}
                      </div>
                      {!isLast && <div className="step-connector-line"></div>}
                    </div>

                    {/* Step Card Content */}
                    <div className="step-body-card">
                      <div
                        className="step-header-clickable"
                        onClick={() => setActiveStepIndex(isExpanded ? -1 : sIdx)}
                      >
                        <div className="step-title-group">
                          <span className="step-duration-badge">
                            <Clock size={12} />
                            <span>{step.duration}</span>
                          </span>
                          <h3 className="step-heading">
                            {step.stepNumber} — {step.title}
                          </h3>
                          <span className="step-focus-text">{step.focus}</span>
                        </div>

                        <div className="step-expand-toggle">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>

                      {/* Expandable Step Details */}
                      {isExpanded && (
                        <div className="step-details-pane animate-fade-in">
                          <p className="step-narrative">{step.description}</p>

                          {/* Actionable Milestones */}
                          <div className="milestones-box">
                            <span className="milestones-heading">Key Milestones:</span>
                            <div className="milestones-checklist">
                              {step.milestones.map((milestone, mIdx) => {
                                const isChecked = !!completedMilestones[`${sIdx}-${mIdx}`];
                                return (
                                  <label
                                    key={mIdx}
                                    className={`milestone-item ${isChecked ? "checked" : ""}`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      onChange={() => toggleMilestone(sIdx, mIdx)}
                                    />
                                    <div className="checkbox-custom">
                                      {isChecked && <Check size={13} />}
                                    </div>
                                    <span className="milestone-text">{milestone}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>

                          {/* Recommended Learning Resources */}
                          {step.resources && step.resources.length > 0 && (
                            <div className="step-resources-box">
                              <span className="resources-heading">Curated Resources:</span>
                              <div className="resources-pills">
                                {step.resources.map((res, rIdx) => (
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
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="roadmap-footer-actions">
              <button
                className={`btn-start-roadmap ${roadmapStarted ? "active-learning" : ""}`}
                onClick={handleStartRoadmap}
              >
                <span>{roadmapStarted ? "Active in My Roadmap ✓" : "Start This Roadmap →"}</span>
                {!roadmapStarted && <ArrowRight size={17} />}
              </button>

              <button className="btn-secondary-compare" onClick={onOpenComparison}>
                Compare Another Career
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
