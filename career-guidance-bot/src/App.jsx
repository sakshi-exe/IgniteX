import React, { useState, useMemo } from "react";
import { Sidebar } from "./components/Sidebar";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { DiscoveryScreen } from "./components/DiscoveryScreen";
import { AnalysisScreen } from "./components/AnalysisScreen";
import { ResultsScreen } from "./components/ResultsScreen";
import { CareerDetailScreen } from "./components/CareerDetailScreen";
import { AIAssistantDrawer } from "./components/AIAssistantDrawer";
import { ComparisonModal } from "./components/ComparisonModal";
import { HowItWorksModal, AboutModal } from "./components/InfoModals";
import { ProfileView } from "./components/ProfileView";
import { MyRoadmapView } from "./components/MyRoadmapView";
import {
  CAREER_DATABASE,
  DISCOVERY_QUESTIONS,
  calculateCareerMatches
} from "./data/careerData";
import "./App.css";

// Initial default answers for seamless first-time discovery and fallbacks
const INITIAL_ANSWERS = {
  interests: ["technology", "problem_solving"],
  strengths: ["analytical_thinking", "problem_solving_strength"],
  subjects: ["mathematics", "computer_science"],
  workPreferences: ["building_technology", "analyzing_data"]
};

function App() {
  // Navigation View State
  const [currentView, setCurrentView] = useState("welcome"); // welcome | discovery | analysis | results | career-detail | profile-interests | profile-skills | my-roadmap
  
  // Discovery Questionnaire State
  const [discoveryStep, setDiscoveryStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState(INITIAL_ANSWERS);

  // Selected Career for Detail View
  const [selectedCareer, setSelectedCareer] = useState(null);
  
  // Saved Careers
  const [savedCareerIds, setSavedCareerIds] = useState(["ml-engineer"]);

  // Modals & Assistant State
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Calculate dynamic matches whenever userAnswers change
  const matches = useMemo(() => {
    return calculateCareerMatches(userAnswers);
  }, [userAnswers]);

  // Handle Option Toggle in Discovery Questionnaire
  const handleToggleOption = (questionId, optionId, maxSelections) => {
    setUserAnswers((prev) => {
      const currentList = prev[questionId] || [];
      if (currentList.includes(optionId)) {
        return {
          ...prev,
          [questionId]: currentList.filter((id) => id !== optionId)
        };
      } else {
        if (currentList.length >= maxSelections) {
          // Replace last selection if max reached
          return {
            ...prev,
            [questionId]: [...currentList.slice(1), optionId]
          };
        }
        return {
          ...prev,
          [questionId]: [...currentList, optionId]
        };
      }
    });
  };

  // Discovery Navigation Handlers
  const handleStartDiscovery = () => {
    setDiscoveryStep(0);
    setCurrentView("discovery");
  };

  const handleNextStep = () => {
    if (discoveryStep < DISCOVERY_QUESTIONS.length - 1) {
      setDiscoveryStep((prev) => prev + 1);
    } else {
      // Transition to AI Analysis Screen
      setCurrentView("analysis");
    }
  };

  const handleBackStep = () => {
    if (discoveryStep > 0) {
      setDiscoveryStep((prev) => prev - 1);
    } else {
      setCurrentView("welcome");
    }
  };

  const handleAnalysisComplete = () => {
    setCurrentView("results");
  };

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    setCurrentView("career-detail");
  };

  const handleToggleSave = (careerId) => {
    setSavedCareerIds((prev) =>
      prev.includes(careerId)
        ? prev.filter((id) => id !== careerId)
        : [...prev, careerId]
    );
  };

  const handleResetDiscovery = () => {
    setDiscoveryStep(0);
    setCurrentView("discovery");
  };

  // Sidebar navigation handler
  const handleSidebarNavigate = (view) => {
    if (view === "advisor") {
      if (currentView === "career-detail" || currentView === "results" || currentView === "analysis" || currentView === "discovery") {
        // stay in current flow or welcome
      } else {
        setCurrentView("welcome");
      }
    } else {
      setCurrentView(view);
    }
  };

  // Active Career fallback (for detail & roadmap view)
  const activeCareer = selectedCareer || matches[0] || CAREER_DATABASE[0];

  return (
    <div className="careerpilot-layout">
      {/* Minimal Desktop 220px Sidebar */}
      <Sidebar
        currentView={currentView}
        onNavigate={handleSidebarNavigate}
        onResetDiscovery={handleResetDiscovery}
        matchesCount={matches.length}
      />

      {/* Main Content Workspace Container */}
      <div className="workspace-main-area">
        {currentView === "welcome" && (
          <WelcomeScreen
            onStartDiscovery={handleStartDiscovery}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
            onOpenAbout={() => setIsAboutOpen(true)}
            onOpenProfile={() => setCurrentView("profile-interests")}
          />
        )}

        {currentView === "discovery" && (
          <DiscoveryScreen
            currentStepIndex={discoveryStep}
            answers={userAnswers}
            onToggleOption={handleToggleOption}
            onNext={handleNextStep}
            onBack={handleBackStep}
          />
        )}

        {currentView === "analysis" && (
          <AnalysisScreen onComplete={handleAnalysisComplete} />
        )}

        {currentView === "results" && (
          <ResultsScreen
            matches={matches}
            userAnswers={userAnswers}
            onSelectCareer={handleSelectCareer}
            onOpenComparison={() => setIsComparisonOpen(true)}
            onRetake={handleResetDiscovery}
          />
        )}

        {currentView === "career-detail" && (
          <CareerDetailScreen
            career={activeCareer}
            onBackToResults={() => setCurrentView("results")}
            onOpenComparison={() => setIsComparisonOpen(true)}
            onStartRoadmap={(career) => {
              setSelectedCareer(career);
              setCurrentView("my-roadmap");
            }}
            isSaved={savedCareerIds.includes(activeCareer.id)}
            onToggleSave={handleToggleSave}
          />
        )}

        {currentView === "profile-interests" && (
          <ProfileView
            userAnswers={userAnswers}
            activeTab="interests"
            onRetake={handleResetDiscovery}
            onExploreCareer={handleSelectCareer}
            matches={matches}
          />
        )}

        {currentView === "profile-skills" && (
          <ProfileView
            userAnswers={userAnswers}
            activeTab="skills"
            onRetake={handleResetDiscovery}
            onExploreCareer={handleSelectCareer}
            matches={matches}
          />
        )}

        {currentView === "my-roadmap" && (
          <MyRoadmapView
            activeCareer={activeCareer}
            onExploreCareer={handleSelectCareer}
            onRetake={handleResetDiscovery}
          />
        )}
      </div>

      {/* Floating AI Assistant Drawer */}
      <AIAssistantDrawer
        isOpen={isAiDrawerOpen}
        onToggle={() => setIsAiDrawerOpen((prev) => !prev)}
        activeCareer={activeCareer}
        userAnswers={userAnswers}
      />

      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        matches={matches}
        onSelectCareer={handleSelectCareer}
      />

      {/* How It Works & About Modals */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
        onStartDiscovery={handleStartDiscovery}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}

export default App;