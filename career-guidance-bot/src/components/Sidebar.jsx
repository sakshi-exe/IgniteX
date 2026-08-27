import React from 'react';
import { Compass, Sparkles, Target, Map, User, RefreshCw, Layers } from 'lucide-react';

export default function Sidebar({ currentView, onNavigate, onRetake, completedDiscovery }) {
  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-brand" onClick={() => onNavigate('welcome')}>
        <div className="brand-logo-icon">
          <Compass size={20} strokeWidth={2.4} />
        </div>
        <div className="brand-text-container">
          <span className="brand-name">LUNARC Compass</span>
          <span className="brand-tagline">AI Career Guidance</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="nav-section-title">Navigation</span>
          <ul className="nav-list">
            <li>
              <button
                className={`nav-item ${currentView === 'welcome' || currentView === 'discovery' || currentView === 'simulation-intro' || currentView === 'simulation' || currentView === 'analysis' ? 'active' : ''}`}
                onClick={() => onNavigate(completedDiscovery ? 'results' : 'welcome')}
              >
                <Compass size={18} className="nav-icon" />
                <span>Discover</span>
                {!completedDiscovery && <span className="nav-badge">Start</span>}
              </button>
            </li>
            <li>
              <button
                className={`nav-item ${currentView === 'results' || currentView === 'career-detail' ? 'active' : ''}`}
                onClick={() => onNavigate('results')}
              >
                <Target size={18} className="nav-icon" />
                <span>Career Matches</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item ${currentView === 'thirty-day-roadmap' ? 'active' : ''}`}
                onClick={() => onNavigate('thirty-day-roadmap')}
              >
                <Map size={18} className="nav-icon" />
                <span>Skill Roadmap</span>
              </button>
            </li>
            <li>
              <button
                className={`nav-item ${currentView.startsWith('profile') ? 'active' : ''}`}
                onClick={() => onNavigate('profile-interests')}
              >
                <User size={18} className="nav-icon" />
                <span>My Profile</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar Footer */}
      <div className="sidebar-footer">
        <button className="retake-button" onClick={onRetake} title="Start questionnaire again">
          <RefreshCw size={14} />
          <span>Retake Discovery</span>
        </button>

        <div className="ai-status-indicator">
          <span className="status-dot">
            <span className="status-ping"></span>
          </span>
          <span className="status-text">LUNARC AI Online</span>
        </div>

        <div className="hackathon-tag-pill">
          <span>Built for LUNARC 2.0</span>
        </div>
      </div>
    </aside>
  );
}
