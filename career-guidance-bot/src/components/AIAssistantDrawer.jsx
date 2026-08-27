import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, User } from "lucide-react";
import { AI_KNOWLEDGE_BASE } from "../data/careerData";

export function AIAssistantDrawer({
  isOpen,
  onToggle,
  activeCareer,
  userAnswers,
  simulationAnswers = {}
}) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm CareerPilot AI. 👋 I've analyzed your questionnaire, your simulation choices, and your skill gaps. Ask me anything about your 30-day plan, math requirements, or career comparison!",
      timestamp: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "I'm weak at maths. Should I still choose ML?",
    "What should I learn first in Week 1?",
    "Recommend SQL resources",
    "Compare with Data Science",
    "Show my 30-day milestones"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes("math") || lowerQuery.includes("maths") || lowerQuery.includes("weak")) {
        botResponse = AI_KNOWLEDGE_BASE.math_question.response;
      } else if (lowerQuery.includes("week 1") || lowerQuery.includes("learn first") || lowerQuery.includes("start")) {
        botResponse = AI_KNOWLEDGE_BASE.first_step.response;
      } else if (lowerQuery.includes("course") || lowerQuery.includes("resource") || lowerQuery.includes("sql")) {
        botResponse = AI_KNOWLEDGE_BASE.courses.response;
      } else if (lowerQuery.includes("compare") || lowerQuery.includes("data science")) {
        botResponse = AI_KNOWLEDGE_BASE.compare.response;
      } else if (lowerQuery.includes("30") || lowerQuery.includes("roadmap") || lowerQuery.includes("milestone")) {
        botResponse = AI_KNOWLEDGE_BASE.default_roadmap.response;
      } else {
        botResponse = `Great question! Based on your simulation results and focus on **${
          activeCareer ? activeCareer.title : "Machine Learning Engineer"
        }**, your top priority this month is mastering Python and basic SQL. Would you like resource recommendations or project ideas?`;
      }

      const botMsg = {
        role: "assistant",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <button
        className={`floating-ai-trigger ${isOpen ? "open" : ""}`}
        onClick={onToggle}
        aria-label="Ask CareerPilot AI Assistant"
      >
        <div className="floating-sparkle-icon">
          <Sparkles size={18} />
        </div>
        <span className="floating-btn-text">Ask CareerPilot</span>
      </button>

      {/* Floating Chat Drawer Panel */}
      {isOpen && (
        <div className="ai-chat-drawer animate-fade-in">
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-brand-group">
              <div className="drawer-bot-avatar">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="drawer-title">CareerPilot AI</h3>
                <span className="drawer-subtitle">
                  {activeCareer ? `Context: ${activeCareer.title}` : "AI Career Counselor"}
                </span>
              </div>
            </div>

            <button className="drawer-close-btn" onClick={onToggle} title="Close Assistant">
              <X size={18} />
            </button>
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="quick-prompts-bar">
            <span className="quick-prompts-label">Suggested questions:</span>
            <div className="quick-prompts-scroll">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  className="prompt-chip"
                  onClick={() => handleSendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="drawer-messages-area">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message-row ${msg.role}`}>
                <div className={`message-avatar ${msg.role}`}>
                  {msg.role === "assistant" ? <Sparkles size={13} /> : <User size={13} />}
                </div>

                <div className="message-content-wrapper">
                  <div className="message-bubble">
                    <p style={{ whiteSpace: "pre-line" }}>{msg.text}</p>
                  </div>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row assistant">
                <div className="message-avatar assistant">
                  <Sparkles size={13} />
                </div>
                <div className="typing-indicator-bubble">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Box */}
          <div className="drawer-input-area">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="drawer-input-form"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about your 30-day plan, skills, math..."
                className="drawer-input-field"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`drawer-send-btn ${inputValue.trim() ? "active" : ""}`}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
