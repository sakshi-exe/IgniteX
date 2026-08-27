import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, X, Send, Bot, User, ArrowRight, CornerDownLeft } from "lucide-react";
import { AI_KNOWLEDGE_BASE } from "../data/careerData";

export function AIAssistantDrawer({ isOpen, onToggle, activeCareer, userAnswers }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I'm CareerPilot AI. 👋 Ask me anything about skills, learning roadmaps, overcoming weaknesses, or comparing careers!",
      timestamp: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "I'm weak at maths. Can I still choose this career?",
    "What should I learn first?",
    "Recommend courses",
    "Compare careers",
    "Show beginner roadmap"
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

    // Formulate response based on knowledge base & context
    setTimeout(() => {
      let botResponse = "";
      const lowerQuery = query.toLowerCase();

      if (lowerQuery.includes("math") || lowerQuery.includes("calculus") || lowerQuery.includes("weak")) {
        botResponse = AI_KNOWLEDGE_BASE.math_question.response;
      } else if (lowerQuery.includes("learn first") || lowerQuery.includes("first step") || lowerQuery.includes("start")) {
        botResponse = activeCareer
          ? `For **${activeCareer.title}**, start with **Step 1: ${activeCareer.roadmap[0].focus}**! Spend 2–3 weeks building core fundamentals before diving into complex tooling.`
          : AI_KNOWLEDGE_BASE.first_step.response;
      } else if (lowerQuery.includes("course") || lowerQuery.includes("resource") || lowerQuery.includes("free")) {
        botResponse = AI_KNOWLEDGE_BASE.courses.response;
      } else if (lowerQuery.includes("compare") || lowerQuery.includes("vs")) {
        botResponse = AI_KNOWLEDGE_BASE.compare.response;
      } else if (lowerQuery.includes("roadmap") || lowerQuery.includes("timeline")) {
        botResponse = activeCareer
          ? `Your personalized roadmap for **${activeCareer.title}** has 5 structured phases spanning ~16–20 weeks. Check the right column on the career page to view each step!`
          : AI_KNOWLEDGE_BASE.default_roadmap.response;
      } else {
        // Context-aware dynamic reply
        botResponse = `Great question! Based on your curiosity in **${
          activeCareer ? activeCareer.title : "tech and problem solving"
        }**, the most important thing is consistent hands-on practice. Focus on building small projects that solve real problems and keep iterating on your roadmap step-by-step.`;
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

      {/* Floating Chat Drawer / Popover Panel */}
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
                    <p>{msg.text}</p>
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
                placeholder="Ask about careers, skills, roadmaps..."
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
