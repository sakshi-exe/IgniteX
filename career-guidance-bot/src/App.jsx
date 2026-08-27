import Sidebar from "./components/Sidebar";
import WelcomeScreen from "./components/WelcomeScreen";
import DiscoveryScreen from "./components/DiscoveryScreen";
import SimulationIntroScreen from "./components/SimulationIntroScreen";
import SimulationScreen from "./components/SimulationScreen";
import AnalysisScreen from "./components/AnalysisScreen";
import ResultsScreen from "./components/ResultsScreen";
import { CareerDetailScreen } from "./components/CareerDetailScreen";
import ThirtyDayRoadmapScreen from "./components/ThirtyDayRoadmapScreen";
import AIAssistantDrawer from "./components/AIAssistantDrawer";
import { ComparisonModal } from "./components/ComparisonModal";
import { HowItWorksModal, AboutModal } from "./components/InfoModals";
import ProfileView from "./components/ProfileView";
import {
  CAREER_DATABASE,
  DISCOVERY_QUESTIONS,
  SIMULATION_SCENARIOS,
  calculateCareerMatches
} from "./data/careerData";
import "./App.css";

// Initial seed answers for natural first-load states
const INITIAL_ANSWERS = {
  interests: ["technology", "problem_solving"],
  strengths: ["analytical_thinking", "problem_solving_strength"],
  subjects: ["mathematics", "computer_science"],
  workPreferences: ["building_technology", "analyzing_data"]
};

const INITIAL_SIMULATION_ANSWERS = {
  scenario_1: "analyze_data",
  scenario_2: "train_ai_model",
  scenario_3: "break_down_problem"
};

function App() {
  // Navigation View State
  const [currentView, setCurrentView] = useState("welcome"); // welcome | discovery | simulation-intro | simulation | analysis | results | thirty-day-roadmap | career-detail | profile-interests | profile-skills | my-roadmap
  
  // Questionnaire & Simulation State
  const [discoveryStep, setDiscoveryStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState(INITIAL_ANSWERS);

  const [simulationStep, setSimulationStep] = useState(0);
  const [simulationAnswers, setSimulationAnswers] = useState(INITIAL_SIMULATION_ANSWERS);

  // Selected Career for Detail / 30-Day Roadmap View
  const [selectedCareer, setSelectedCareer] = useState(null);
  
  // Saved Careers
  const [savedCareerIds, setSavedCareerIds] = useState(["ml-engineer"]);

  // Modals & Assistant State
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Calculate dynamic matches based on both questionnaire + simulation choices
  const matches = useMemo(() => {
    return calculateCareerMatches(userAnswers, simulationAnswers);
  }, [userAnswers, simulationAnswers]);

  // Active Career fallback
  const activeCareer = selectedCareer || matches[0] || CAREER_DATABASE[0];

  // Discovery Questionnaire Handlers
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

  const handleStartDiscovery = () => {
    setDiscoveryStep(0);
    setCurrentView("discovery");
  };

  const handleNextDiscoveryStep = () => {
    if (discoveryStep < DISCOVERY_QUESTIONS.length - 1) {
      setDiscoveryStep((prev) => prev + 1);
    } else {
      // Transition to Simulation Intro Screen
      setCurrentView("simulation-intro");
    }
  };

  const handleBackDiscoveryStep = () => {
    if (discoveryStep > 0) {
      setDiscoveryStep((prev) => prev - 1);
    } else {
      setCurrentView("welcome");
    }
  };

  // Simulation Handlers
  const handleStartSimulation = () => {
    setSimulationStep(0);
    setCurrentView("simulation");
  };

  const handleSelectSimulationOption = (scenarioId, optionId) => {
    setSimulationAnswers((prev) => ({
      ...prev,
      [scenarioId]: optionId
    }));
  };

  const handleNextSimulationStep = () => {
    if (simulationStep < SIMULATION_SCENARIOS.length - 1) {
      setSimulationStep((prev) => prev + 1);
    } else {
      // Transition to Analysis Screen
      setCurrentView("analysis");
    }
  };

  const handleBackSimulationStep = () => {
    if (simulationStep > 0) {
      setSimulationStep((prev) => prev - 1);
    } else {
      setCurrentView("simulation-intro");
    }
  };

  const handleAnalysisComplete = () => {
    setCurrentView("results");
  };

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    setCurrentView("career-detail");
  };

  const handleBuildRoadmap = (career) => {
    setSelectedCareer(career);
    setCurrentView("thirty-day-roadmap");
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
    setSimulationStep(0);
    setCurrentView("discovery");
  };

  // Sidebar navigation handler
  const handleSidebarNavigate = (view) => {
    if (view === "advisor") {
      if (
        currentView === "career-detail" ||
        currentView === "results" ||
        currentView === "analysis" ||
        currentView === "simulation" ||
        currentView === "simulation-intro" ||
        currentView === "discovery" ||
        currentView === "thirty-day-roadmap"
      ) {
        // stay in current flow
      } else {
        setCurrentView("welcome");
      }
    } else if (view === "my-roadmap") {
      setCurrentView("thirty-day-roadmap");
    } else {
      setCurrentView(view);
    }
  };

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
        {/* Screen 1: Welcome / Landing */}
        {currentView === "welcome" && (
          <WelcomeScreen
            onStartDiscovery={handleStartDiscovery}
            onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
            onOpenAbout={() => setIsAboutOpen(true)}
            onOpenProfile={() => setCurrentView("profile-interests")}
          />
        )}

        {/* Screen 2: Discovery Questionnaire */}
        {currentView === "discovery" && (
          <DiscoveryScreen
            currentStepIndex={discoveryStep}
            answers={userAnswers}
            onToggleOption={handleToggleOption}
            onNext={handleNextDiscoveryStep}
            onBack={handleBackDiscoveryStep}
          />
        )}

        {/* Screen 2.2: Simulation Intro */}
        {currentView === "simulation-intro" && (
          <SimulationIntroScreen
            onStartSimulation={handleStartSimulation}
          />
        )}

        {/* Screen 2.5: Career Simulation (3 Scenarios) */}
        {currentView === "simulation" && (
          <SimulationScreen
            currentScenarioIndex={simulationStep}
            simulationAnswers={simulationAnswers}
            onSelectOption={handleSelectSimulationOption}
            onNext={handleNextSimulationStep}
            onBack={handleBackSimulationStep}
          />
        )}

        {/* Screen 3: AI Analysis Transition */}
        {currentView === "analysis" && (
          <AnalysisScreen onComplete={handleAnalysisComplete} />
        )}

        {/* Screen 4: Explainable Career Results + Skill Gap */}
        {currentView === "results" && (
          <ResultsScreen
            matches={matches}
            userAnswers={userAnswers}
            onSelectCareer={handleSelectCareer}
            onBuildRoadmap={handleBuildRoadmap}
            onOpenComparison={() => setIsComparisonOpen(true)}
            onRetake={handleResetDiscovery}
          />
        )}

        {/* Screen 4.5: Personalized 30-Day Roadmap */}
        {currentView === "thirty-day-roadmap" && (
          <ThirtyDayRoadmapScreen
            career={activeCareer}
            onBackToResults={() => setCurrentView("results")}
            onOpenAiAssistant={() => setIsAiDrawerOpen(true)}
            onExploreFullCareer={() => setCurrentView("career-detail")}
          />
        )}

        {/* Screen 5: Full Career Detail & Deep Roadmap */}
        {currentView === "career-detail" && (
          <CareerDetailScreen
            career={activeCareer}
            onBackToResults={() => setCurrentView("results")}
            onOpenComparison={() => setIsComparisonOpen(true)}
            onStartRoadmap={(career) => {
              setSelectedCareer(career);
              setCurrentView("thirty-day-roadmap");
            }}
            isSaved={savedCareerIds.includes(activeCareer.id)}
            onToggleSave={handleToggleSave}
          />
        )}

        {/* Profile Tabs */}
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
      </div>

      {/* Floating Context-Aware AI Assistant Drawer */}
      <AIAssistantDrawer
        isOpen={isAiDrawerOpen}
        onToggle={() => setIsAiDrawerOpen((prev) => !prev)}
        activeCareer={activeCareer}
        userAnswers={userAnswers}
        simulationAnswers={simulationAnswers}
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