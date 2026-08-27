import React from "react";
import { ArrowRight, Compass, Sparkles, Map, User, HelpCircle, Info } from "lucide-react";
import { AbstractIllustration } from "./AbstractIllustration";

export function WelcomeScreen({ onStartDiscovery, onOpenHowItWorks, onOpenAbout, onOpenProfile }) {
  return (
    <div className="welcome-page-container animate-fade-in">
      {/* Minimal Top Header */}
      <header className="page-header">
        <div className="header-left">
          <div className="header-brand-pill">
            <Sparkles size={16} className="text-primary" />
            <span className="pill-title">AI Career Discovery</span>
          </div>
        </div>

        <div className="header-right">
          <button className="header-link" onClick={onOpenHowItWorks}>
            <HelpCircle size={15} />
            <span>How it works</span>
          </button>
          <button className="header-link" onClick={onOpenAbout}>
            <Info size={15} />
            <span>About</span>
          </button>
          <button className="header-profile-btn" onClick={onOpenProfile} title="View your profile">
            <div className="avatar-circle">
              <User size={15} />
            </div>
            <span className="profile-label">Student</span>
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="hero-main-layout">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="sparkle-tag">✦ Personalized Guidance</span>
              <span className="dot-divider">•</span>
              <span className="fast-tag">Takes ~2 min</span>
            </div>

            <h1 className="hero-title">
              Find a career path that fits you.
            </h1>

            <p className="hero-subtitle">
              Answer a few simple questions about your interests and strengths. Our AI will help you explore careers that match your profile.
            </p>

            {/* Primary Action Button */}
            <div className="hero-cta-group">
              <button className="btn-primary-large" onClick={onStartDiscovery}>
                <span>Start Career Discovery</span>
                <ArrowRight size={18} className="btn-arrow" />
              </button>
              <span className="cta-subtext">Takes about 2 minutes · No sign up required</span>
            </div>

            {/* Trust Badges / Highlights */}
            <div className="hero-stats-strip">
              <div className="stat-pill">
                <span className="stat-bullet"></span>
                <span>Tailored for students</span>
              </div>
              <div className="stat-pill">
                <span className="stat-bullet"></span>
                <span>Actionable learning roadmap</span>
              </div>
              <div className="stat-pill">
                <span className="stat-bullet"></span>
                <span>Instant AI advice</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Pastel Vector Illustration */}
          <div className="hero-visual-col">
            <AbstractIllustration />
          </div>
        </div>

        {/* Three Simple Benefits Section */}
        <section className="benefits-section">
          <div className="benefits-header">
            <span className="section-eyebrow">HOW CAREERPILOT HELPS</span>
            <h2>Three simple steps to your next chapter.</h2>
          </div>

          <div className="benefits-grid">
            {/* Benefit 01 */}
            <div className="benefit-card">
              <div className="benefit-number-pill">01</div>
              <div className="benefit-icon-wrapper benefit-lavender">
                <Compass size={22} />
              </div>
              <h3>Discover</h3>
              <p>Understand what careers fit your interests, natural strengths, and preferred subjects.</p>
            </div>

            {/* Benefit 02 */}
            <div className="benefit-card">
              <div className="benefit-number-pill">02</div>
              <div className="benefit-icon-wrapper benefit-blue">
                <Sparkles size={22} />
              </div>
              <h3>Compare</h3>
              <p>Explore your strongest career matches with clear percentage scores and reasoning.</p>
            </div>

            {/* Benefit 03 */}
            <div className="benefit-card">
              <div className="benefit-number-pill">03</div>
              <div className="benefit-icon-wrapper benefit-mint">
                <Map size={22} />
              </div>
              <h3>Plan</h3>
              <p>Get a personalized learning roadmap with step-by-step milestones and free resources.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
