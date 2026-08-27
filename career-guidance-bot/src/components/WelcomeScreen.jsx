import React from 'react';
import { ArrowRight, Compass, Sparkles, Target, MapPin, User, Info, HelpCircle } from 'lucide-react';
import AbstractIllustration from './AbstractIllustration';

export default function WelcomeScreen({ onStartDiscovery, onOpenHowItWorks, onOpenAbout }) {
  return (
    <div className="welcome-page-container">
      {/* Top Header */}
      <header className="page-header">
        <div className="header-brand-pill">
          <Compass size={16} className="text-primary-600" />
          <span>LUNARC Compass · AI Career Guidance</span>
        </div>
        <div className="header-right">
          <button className="header-link" onClick={onOpenHowItWorks}>
            <HelpCircle size={15} />
            <span>How it Works</span>
          </button>
          <button className="header-link" onClick={onOpenAbout}>
            <Info size={15} />
            <span>About</span>
          </button>
          <div className="header-profile-btn">
            <span className="avatar-circle">
              <User size={14} />
            </span>
            <span className="profile-label">Student</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="sparkle-tag">
              <Compass size={14} /> LUNARC COMPASS
            </span>
            <span className="dot-divider">•</span>
            <span className="fast-tag">Find your direction. Build your future.</span>
          </div>

          <h1 className="hero-title">
            Find your direction.
          </h1>

          <h2 className="hero-supporting-title">
            AI-powered career guidance built around YOU.
          </h2>

          <p className="hero-subtitle">
            Explore careers that match your interests, strengths and goals — then get a personalized path to move forward.
          </p>

          <div className="hero-cta-group">
            <button className="btn-primary-large" onClick={onStartDiscovery}>
              <span>Start Career Discovery</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>
            <span className="cta-subtext">Takes about 2 minutes • No sign-up required</span>
          </div>

          {/* Quick Pillars Strip */}
          <div className="hero-stats-strip">
            <div className="stat-pill">
              <span className="stat-bullet"></span>
              <span>4 Simple Questions</span>
            </div>
            <div className="stat-pill">
              <span className="stat-bullet"></span>
              <span>Quick Career Simulation</span>
            </div>
            <div className="stat-pill">
              <span className="stat-bullet"></span>
              <span>Personalized 30-Day Path</span>
            </div>
          </div>
        </div>

        {/* Abstract Compass Hero Visual */}
        <div className="hero-visual-col">
          <AbstractIllustration />
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="benefits-section">
        <div className="benefits-header">
          <span className="section-eyebrow">DISCOVER • DIRECTION • GROWTH</span>
          <h2>How LUNARC Compass Guides You</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-number-pill">01</div>
            <div className="benefit-icon-wrapper benefit-lavender">
              <Compass size={22} />
            </div>
            <h3>Discover Your Interests</h3>
            <p>Answer a few quick questions about what sparks your curiosity, your favorite subjects, and your strengths.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-number-pill">02</div>
            <div className="benefit-icon-wrapper benefit-blue">
              <Target size={22} />
            </div>
            <h3>Find Your Direction</h3>
            <p>Test real-world career scenarios and receive explainable career matches with transparent match reasoning.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-number-pill">03</div>
            <div className="benefit-icon-wrapper benefit-mint">
              <MapPin size={22} />
            </div>
            <h3>Follow Your Path</h3>
            <p>Get a structured, week-by-week 30-day roadmap with actionable projects and curated learning resources.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
