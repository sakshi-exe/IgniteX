import React from 'react';
import { User, Sparkles, Compass, Target, RefreshCw, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { generateProfileSummary, DISCOVERY_QUESTIONS } from '../data/careerData';

export default function ProfileView({ userAnswers, onRetakeDiscovery, onNavigateToResults }) {
  const profileSummary = generateProfileSummary(userAnswers);

  const getAnswersForCategory = (categoryId) => {
    const question = DISCOVERY_QUESTIONS.find(q => q.id === categoryId);
    if (!question) return [];
    const selectedIds = userAnswers[categoryId] || [];
    return question.options.filter(opt => selectedIds.includes(opt.id));
  };

  const selectedInterests = getAnswersForCategory('interests');
  const selectedStrengths = getAnswersForCategory('strengths');
  const selectedSubjects = getAnswersForCategory('subjects');
  const selectedPreferences = getAnswersForCategory('work_preferences');

  return (
    <div className="profile-page-container">
      {/* Profile Header */}
      <div className="profile-header-card">
        <div className="profile-avatar-large">
          <Compass size={32} />
        </div>
        <div className="profile-title-group">
          <div className="profile-badge-row">
            <span className="badge-student">
              <Compass size={12} /> Student Profile
            </span>
            <span className="badge-ai-active">● Active Guidance</span>
          </div>
          <h1 className="results-main-title" style={{ fontSize: '2rem' }}>Your Discovery Profile</h1>
          <p className="profile-summary-line">{profileSummary.tags} · {profileSummary.persona}</p>
        </div>

        <button className="btn-retake-discovery" onClick={onRetakeDiscovery}>
          <RefreshCw size={14} />
          <span>Retake Discovery</span>
        </button>
      </div>

      {/* Grid of Selected Traits */}
      <div className="profile-sections-grid">
        {/* Interests */}
        <div className="profile-category-card">
          <div className="category-header">
            <Compass size={18} className="text-primary-600" />
            <h3>Your Selected Interests</h3>
          </div>
          <div className="profile-tags-list">
            {selectedInterests.length > 0 ? (
              selectedInterests.map(item => (
                <div key={item.id} className="profile-item-tag">
                  <span className="item-tag-title">{item.title}</span>
                  <span className="item-tag-desc">{item.description}</span>
                </div>
              ))
            ) : (
              <div className="profile-item-tag">
                <span className="item-tag-title">Technology & AI</span>
                <span className="item-tag-desc">Coding, AI & building intelligent systems</span>
              </div>
            )}
          </div>
        </div>

        {/* Strengths */}
        <div className="profile-category-card">
          <div className="category-header">
            <Target size={18} className="text-mint-600" />
            <h3>Your Core Strengths</h3>
          </div>
          <div className="profile-tags-list">
            {selectedStrengths.length > 0 ? (
              selectedStrengths.map(item => (
                <div key={item.id} className="profile-item-tag">
                  <span className="item-tag-title">{item.title}</span>
                  <span className="item-tag-desc">{item.description}</span>
                </div>
              ))
            ) : (
              <div className="profile-item-tag">
                <span className="item-tag-title">Analytical Thinking</span>
                <span className="item-tag-desc">Structured reasoning and data-driven problem solving</span>
              </div>
            )}
          </div>
        </div>

        {/* Favorite Subjects */}
        <div className="profile-category-card">
          <div className="category-header">
            <BookOpen size={18} className="text-secondary-600" />
            <h3>Favorite Academic Subjects</h3>
          </div>
          <div className="profile-tags-list">
            {selectedSubjects.length > 0 ? (
              selectedSubjects.map(item => (
                <div key={item.id} className="profile-item-tag">
                  <span className="item-tag-title">{item.title}</span>
                  <span className="item-tag-desc">{item.description}</span>
                </div>
              ))
            ) : (
              <div className="profile-item-tag">
                <span className="item-tag-title">Mathematics & Computer Science</span>
                <span className="item-tag-desc">Quantitative modeling and software engineering</span>
              </div>
            )}
          </div>
        </div>

        {/* Work Preferences */}
        <div className="profile-category-card">
          <div className="category-header">
            <Sparkles size={18} className="text-primary-600" />
            <h3>Impact & Work Style</h3>
          </div>
          <div className="profile-tags-list">
            {selectedPreferences.length > 0 ? (
              selectedPreferences.map(item => (
                <div key={item.id} className="profile-item-tag">
                  <span className="item-tag-title">{item.title}</span>
                  <span className="item-tag-desc">{item.description}</span>
                </div>
              ))
            ) : (
              <div className="profile-item-tag">
                <span className="item-tag-title">Building Technology & AI</span>
                <span className="item-tag-desc">Developing scalable algorithms and software products</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="thirty-day-footer-strip">
        <div className="footer-left-info">
          <Compass size={18} className="text-primary-600" />
          <span>Ready to see your recommended career direction?</span>
        </div>
        <button className="btn-primary-large" style={{ padding: '10px 24px', fontSize: '0.92rem' }} onClick={onNavigateToResults}>
          <span>View Career Matches</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
