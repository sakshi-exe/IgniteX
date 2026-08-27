import React from 'react';
import { ArrowLeft, ArrowRight, Check, Compass } from 'lucide-react';
import { SIMULATION_SCENARIOS } from '../data/careerData';

export default function SimulationScreen({
  currentScenarioIndex,
  simulationAnswers,
  onSelectOption,
  onNext,
  onBack
}) {
  const scenario = SIMULATION_SCENARIOS[currentScenarioIndex];
  const selectedOptionId = simulationAnswers[scenario.id];
  const isSelected = !!selectedOptionId;
  const isLast = currentScenarioIndex === SIMULATION_SCENARIOS.length - 1;
  const progressPercent = ((currentScenarioIndex + 1) / SIMULATION_SCENARIOS.length) * 100;

  return (
    <div className="simulation-container">
      {/* Simulation Meta Header */}
      <div className="discovery-header-card">
        <div className="discovery-meta-row">
          <div className="meta-left">
            <span className="discovery-label">LUNARC COMPASS · Career Simulation</span>
            <span className="step-badge">
              Scenario {scenario.stepNumber} of {scenario.totalSteps}
            </span>
          </div>
          <span className="time-indicator">About 1 minute</span>
        </div>

        {/* Progress bar */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Scenario Context & Question Prompt */}
      <div className="scenario-content-box">
        <div className="scenario-header">
          <span className="scenario-context-tag">{scenario.contextLabel}</span>
          <h2 className="scenario-title">{scenario.title}</h2>
          <p className="scenario-desc">{scenario.scenarioDesc}</p>
        </div>

        <div className="scenario-question-prompt">
          <h3>{scenario.question}</h3>
        </div>

        {/* 3 Selectable Option Cards (A, B, C) */}
        <div className="simulation-cards-stack">
          {scenario.options.map(opt => {
            const active = selectedOptionId === opt.id;
            return (
              <div
                key={opt.id}
                className={`simulation-option-card ${active ? 'selected' : ''}`}
                onClick={() => onSelectOption(scenario.id, opt.id)}
              >
                <div className="sim-card-left">
                  <span className={`choice-key-badge ${active ? 'key-active' : ''}`}>
                    {opt.key}
                  </span>
                  <div className="sim-card-text">
                    <h4 className="sim-opt-title">{opt.title}</h4>
                    <p className="sim-opt-desc">{opt.desc}</p>
                  </div>
                </div>

                <div className={`sim-select-circle ${active ? 'checked' : ''}`}>
                  {active && <Check size={14} strokeWidth={3} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="discovery-footer-nav">
        <button className="btn-back" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>{currentScenarioIndex === 0 ? 'Intro' : 'Previous'}</span>
        </button>

        <button
          className={`btn-continue ${isSelected ? 'active' : 'disabled'}`}
          onClick={isSelected ? onNext : undefined}
          disabled={!isSelected}
        >
          <span>{isLast ? 'Calculate Direction' : 'Next Scenario'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
