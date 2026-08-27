import React from "react";
import { Compass, Sparkles, Map, Heart, Award, ArrowRight, RotateCcw } from "lucide-react";

export function Sidebar({ currentView, onNavigate, onResetDiscovery, matchesCount = 0 }) {
  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand" onClick={() => onNavigate("welcome")}>
        <div className="brand-logo-icon">
          <Sparkles className="icon-sparkle" size={18} />
        </div>
        <div className="brand-text-container">
          <span className="brand-name">CareerPilot</span>
          <span className="brand-tagline">AI Career Guidance</span>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="sidebar-nav">
        {/* Section: Discover */}
        <div className="nav-section">
          <span className="nav-section-title">Discover</span>
          <ul className="nav-list">
            <li>
              <button
                className={`nav-item ${
                  currentView === "welcome" ||
                  currentView === "discovery" ||
                  currentView === "analysis" ||
                  currentView === "career-detail"
                    ? "active"
                    : ""
                }`}
                onClick={() => onNavigate("advisor")}
              >
                <Compass size={17} className="nav-icon" />
                <span>Career Advisor</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item ${currentView === "results" ? "active" : ""}`}
                onClick={() => onNavigate("results")}
              >
                <Sparkles size={17} className="nav-icon" />
                <span>My Matches</span>
                {matchesCount > 0 && (
                  <span className="nav-badge">{matchesCount}</span>
                )}
              </button>
            </li>
            <li>
              <button
                className={`nav-item ${currentView === "my-roadmap" ? "active" : ""}`}
                onClick={() => onNavigate("my-roadmap")}
              >
                <Map size={17} className="nav-icon" />
                <span>My Roadmap</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Section: Profile */}
        <div className="nav-section">
          <span className="nav-section-title">Profile</span>
          <ul className="nav-list">
            <li>
              <button
                className={`nav-item ${currentView === "profile-interests" ? "active" : ""}`}
                onClick={() => onNavigate("profile-interests")}
              >
                <Heart size={17} className="nav-icon" />
                <span>My Interests</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item ${currentView === "profile-skills" ? "active" : ""}`}
                onClick={() => onNavigate("profile-skills")}
              >
                <Award size={17} className="nav-icon" />
                <span>My Skills</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer Area: AI Online & Retake Discovery */}
      <div className="sidebar-footer">
        <button
          className="retake-button"
          onClick={onResetDiscovery}
          title="Restart career questionnaire"
        >
          <RotateCcw size={14} />
          <span>Retake Discovery</span>
        </button>

        <div className="ai-status-indicator">
          <span className="status-dot">
            <span className="status-ping"></span>
          </span>
          <span className="status-text">AI Online</span>
        </div>
      </div>
    </aside>
  );
}
