import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, Compass, ArrowRight, CornerDownLeft } from 'lucide-react';
import { AI_KNOWLEDGE_BASE } from '../data/careerData';

const QUICK_PROMPTS = [
  "I'm weak at maths. Should I still choose ML?",
  "What should I learn first in Week 1?",
  "Recommend free SQL courses",
  "Compare with Data Science",
  "Show my 30-day path"
];

export default function AIAssistantDrawer({
  isOpen,
  onToggle,
  userProfile,
  activeCareer,
  simulationAnswers
}) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: "Hello! I'm LUNARC AI, your career guidance assistant. Ask me anything about your career direction, skill gaps, or your 30-day roadmap.",
      timestamp: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAIResponse = (userQuery) => {
    const qLower = userQuery.toLowerCase();

    if (qLower.includes("math")) {
      return AI_KNOWLEDGE_BASE.math_question.response;
    }
    if (qLower.includes("first") || qLower.includes("week 1") || qLower.includes("start")) {
      return AI_KNOWLEDGE_BASE.first_step.response;
    }
    if (qLower.includes("course") || qLower.includes("learn") || qLower.includes("resource") || qLower.includes("sql")) {
      return AI_KNOWLEDGE_BASE.courses.response;
    }
    if (qLower.includes("compare") || qLower.includes("data science") || qLower.includes("difference")) {
      return AI_KNOWLEDGE_BASE.compare.response;
    }
    if (qLower.includes("path") || qLower.includes("roadmap") || qLower.includes("30 day")) {
      return AI_KNOWLEDGE_BASE.default_roadmap.response;
    }

    return `Based on your LUNARC Compass profile and scenario choices, focusing on **${activeCareer?.title || 'Machine Learning Engineering'}** gives you high career leverage. Start with your Week 1 foundation goals and build momentum one step at a time!`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAIResponse(text);
      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        className={`floating-ai-trigger ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        aria-label="Open LUNARC AI Assistant"
      >
        <Compass size={18} className="floating-sparkle-icon" />
        <span className="floating-btn-text">Ask LUNARC AI</span>
      </button>

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div className="ai-chat-drawer">
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-brand-group">
              <div className="drawer-bot-avatar">
                <Compass size={16} />
              </div>
              <div>
                <h4 className="drawer-title">LUNARC Compass AI</h4>
                <span className="drawer-subtitle">Career Direction & Roadmap Guidance</span>
              </div>
            </div>
            <button className="drawer-close-btn" onClick={onToggle}>
              <X size={16} />
            </button>
          </div>

          {/* Quick Action Prompt Chips */}
          <div className="quick-prompts-bar">
            <span className="quick-prompts-label">Suggested Questions:</span>
            <div className="quick-prompts-scroll">
              {QUICK_PROMPTS.map((prompt, idx) => (
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

          {/* Messages Area */}
          <div className="drawer-messages-area">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`chat-message-row ${msg.sender === 'user' ? 'user' : 'assistant'}`}
              >
                <div className={`message-avatar ${msg.sender}`}>
                  {msg.sender === 'assistant' ? <Compass size={14} /> : <User size={14} />}
                </div>
                <div className="message-content-wrapper">
                  <div className="message-bubble">
                    <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                  </div>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-message-row assistant">
                <div className="message-avatar assistant">
                  <Compass size={14} />
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

          {/* Input Area */}
          <div className="drawer-input-area">
            <form
              className="drawer-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                className="drawer-input-field"
                placeholder="Ask about your direction, skills or roadmaps..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="submit"
                className={`drawer-send-btn ${inputText.trim() ? 'active' : ''}`}
                disabled={!inputText.trim()}
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
