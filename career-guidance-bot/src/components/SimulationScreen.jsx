import React from "react";
import { ArrowLeft, ArrowRight, Check, Sparkles, Building2, ShieldAlert, Puzzle } from "lucide-react";
import { SIMULATION_SCENARIOS } from "../data/careerData";

export function SimulationScreen({
  currentScenarioIndex,
  simulationAnswers,
  onSelectOption,
  onNext,
  onBack
}) {
  const scenario = SIMULATION_SCENARIOS[currentScenarioIndex] || SIMULATION_SCENARIOS[0];
  const totalScenarios = SIMULATION_SCENARIOS.length;
  const progressPercent = ((currentScenarioIndex + 1) / totalScenarios) * 100;

  const currentSelection = simulationAnswers[scenario.id];
  const isSelected = !!currentSelection;

  const handleCardClick = (optionId) => {
    onSelectOption(scenario.id, optionId);
  };

  return (
    <div className="simulation-container animate-fade-in">
      {/* Top Header & Progress */}
      <div className="discovery-header-card">
        <div className="discovery-meta-row">
          <div className="meta-left">
            <span className="discovery-label">Career Simulation</span>
            <span className="step-badge">Scenario {currentScenarioIndex + 1} of {totalScenarios}</span>
          </div>
          <div className="meta-right">
            <span className="time-indicator">Behavioral Instincts</span>
          </div>
        </div>

        <div className="progress-track" role="progressbar" aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Scenario Card Box */}
      <div className="scenario-content-box">
        <div className="scenario-header">
          <span className="scenario-context-tag">{scenario.contextLabel}</span>
          <h1 className="scenario-title">{scenario.title}</h1>
          <p className="scenario-desc">{scenario.scenarioDesc}</p>
        </div>

        <div className="scenario-question-prompt">
          <h3>{scenario.question}</h3>
        </div>

        {/* 3 Large Selectable Cards (A, B, C) */}
        <div className="simulation-cards-stack">
          {scenario.options.map((opt) => {
            const isOptSelected = currentSelection === opt.id;

            return (
              <div
                key={opt.id}
                role="button"
                tabIndex={0}
                className={`simulation-option-card ${isOptSelected ? "selected" : ""}`}
                onClick={() => handleCardClick(opt.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(opt.id);
                  }
                }}
              >
                <div className="sim-card-left">
                  <div className={`choice-key-badge ${isOptSelected ? "key-active" : ""}`}>
                    {opt.key}
                  </div>
                  <div className="sim-card-text">
                    <h3 className="sim-opt-title">{opt.title}</h3>
                    <p className="sim-opt-desc">{opt.desc}</p>
                  </div>
                </div>

                <div className={`sim-select-circle ${isOptSelected ? "checked" : ""}`}>
                  {isOptSelected && <Check size={14} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="discovery-footer-nav">
        <button className="btn-back" onClick={onBack}>
          <ArrowLeft size={17} />
          <span>Back</span>
        </button>

        <button
          className={`btn-continue ${isSelected ? "active" : "disabled"}`}
          disabled={!isSelected}
          onClick={onNext}
        >
          <span>
            {currentScenarioIndex === totalScenarios - 1
              ? "Analyze Career Profile"
              : "Next Scenario"}
          </span>
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
