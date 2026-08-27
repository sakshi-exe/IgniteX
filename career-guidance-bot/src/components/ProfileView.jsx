import React from "react";
import { User, Heart, Award, Sparkles, Check, ArrowRight, RotateCcw, Brain } from "lucide-react";
import { generateProfileSummary, DISCOVERY_QUESTIONS } from "../data/careerData";

export function ProfileView({ userAnswers, activeTab = "interests", onRetake, onExploreCareer, matches = [] }) {
  const profileSummary = generateProfileSummary(userAnswers);

  // Map user answers to full objects
  const qInterests = DISCOVERY_QUESTIONS[0].options.filter(o => (userAnswers.interests || []).includes(o.id));
  const qStrengths = DISCOVERY_QUESTIONS[1].options.filter(o => (userAnswers.strengths || []).includes(o.id));
  const qSubjects = DISCOVERY_QUESTIONS[2].options.filter(o => (userAnswers.subjects || []).includes(o.id));
  const qWork = DISCOVERY_QUESTIONS[3].options.filter(o => (userAnswers.workPreferences || []).includes(o.id));

  // Extract skills across matches
  const topCareer = matches[0];
  const allSkills = topCareer ? topCareer.skills : [];

  return (
    <div className="profile-page-container animate-fade-in">
      {/* Header */}
      <div className="profile-header-card">
        <div className="profile-avatar-large">
          <User size={32} />
        </div>
        <div className="profile-title-group">
          <div className="profile-badge-row">
            <span className="badge-student">Student Profile</span>
            <span className="badge-ai-active">Active Discovery</span>
          </div>
          <h1>{activeTab === "interests" ? "My Interests & Qualities" : "My Skills & Competencies"}</h1>
          <p className="profile-summary-line">{profileSummary.persona} • {profileSummary.tags}</p>
        </div>

        <button className="btn-retake-discovery" onClick={onRetake}>
          <RotateCcw size={15} />
          <span>Retake Discovery</span>
        </button>
      </div>

      {activeTab === "interests" ? (
        <div className="profile-sections-grid">
          {/* Interests Category */}
          <div className="profile-category-card">
            <div className="category-header">
              <Heart size={18} className="text-primary" />
              <h3>Areas of Curiosity</h3>
            </div>
            <div className="profile-tags-list">
              {qInterests.length > 0 ? (
                qInterests.map(item => (
                  <div key={item.id} className="profile-item-tag">
                    <span className="item-tag-title">{item.title}</span>
                    <span className="item-tag-desc">{item.description}</span>
                  </div>
                ))
              ) : (
                <p className="empty-state-text">No interests selected yet. Take the discovery questionnaire to customize!</p>
              )}
            </div>
          </div>

          {/* Strengths Category */}
          <div className="profile-category-card">
            <div className="category-header">
              <Sparkles size={18} className="text-primary" />
              <h3>Core Strengths</h3>
            </div>
            <div className="profile-tags-list">
              {qStrengths.length > 0 ? (
                qStrengths.map(item => (
                  <div key={item.id} className="profile-item-tag">
                    <span className="item-tag-title">{item.title}</span>
                    <span className="item-tag-desc">{item.description}</span>
                  </div>
                ))
              ) : (
                <p className="empty-state-text">Take the discovery questionnaire to reveal your core strengths.</p>
              )}
            </div>
          </div>

          {/* Enjoyed Subjects */}
          <div className="profile-category-card">
            <div className="category-header">
              <Brain size={18} className="text-primary" />
              <h3>Favorite Subjects</h3>
            </div>
            <div className="profile-tags-list">
              {qSubjects.length > 0 ? (
                qSubjects.map(item => (
                  <div key={item.id} className="profile-item-tag">
                    <span className="item-tag-title">{item.title}</span>
                    <span className="item-tag-desc">{item.description}</span>
                  </div>
                ))
              ) : (
                <p className="empty-state-text">Select your favorite subjects during discovery.</p>
              )}
            </div>
          </div>

          {/* Work Preferences */}
          <div className="profile-category-card">
            <div className="category-header">
              <Award size={18} className="text-primary" />
              <h3>Work Preferences</h3>
            </div>
            <div className="profile-tags-list">
              {qWork.length > 0 ? (
                qWork.map(item => (
                  <div key={item.id} className="profile-item-tag">
                    <span className="item-tag-title">{item.title}</span>
                    <span className="item-tag-desc">{item.description}</span>
                  </div>
                ))
              ) : (
                <p className="empty-state-text">Set your work preferences in discovery.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Skills Tab */
        <div className="profile-skills-view">
          <div className="skills-overview-card">
            <div className="skills-overview-header">
              <div>
                <h2>Recommended Skill Focus</h2>
                <p>Curated competencies based on your top career match: <strong>{topCareer?.title || "Machine Learning Engineer"}</strong></p>
              </div>
              {topCareer && (
                <button className="btn-explore-skills-career" onClick={() => onExploreCareer(topCareer)}>
                  <span>View Full Roadmap</span>
                  <ArrowRight size={15} />
                </button>
              )}
            </div>

            <div className="skills-breakdown-grid">
              {allSkills.map((skill, index) => (
                <div key={index} className="skill-detail-card">
                  <div className="skill-card-top">
                    <h4>{skill.name}</h4>
                    <span className={`skill-level-badge ${skill.level?.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                  <span className="skill-category-label">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
