import { useState } from "react";
import "./App.css";

const questions = [
  "What subjects or topics do you enjoy the most?",
  "What are your biggest strengths?",
  "What kind of work would you enjoy doing?"
];

function App() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey! I'm CareerPilot 👋\nI'll help you discover career paths that actually fit you."
    },
    {
      role: "bot",
      text: questions[0]
    }
  ]);

  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input
    };

    setMessages((prev) => [...prev, userMessage]);

    if (step < questions.length - 1) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: questions[step + 1]
          }
        ]);
        setStep(step + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: "Perfect! 🧠 I have enough information to analyze your career profile."
          },
          {
            role: "bot",
            text: "Your personalized career recommendations will appear here soon."
          }
        ]);
      }, 500);
    }

    setInput("");
  };

  const quickReply = (text) => {
    setInput(text);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <div className="logoIcon">✦</div>
          <div>
            <h1>CareerPilot</h1>
            <span>AI Career Guidance</span>
          </div>
        </div>

        <div className="status">
          <span className="statusDot"></span>
          AI Online
        </div>
      </header>

      <main className="chatContainer">
        <div className="welcome">
          <div className="botAvatar">✦</div>
          <h2>Discover your path.</h2>
          <p>
            Tell me about yourself and I'll help you find careers,
            skills and learning paths that match your strengths.
          </p>
        </div>

        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`messageRow ${message.role}`}
            >
              {message.role === "bot" && (
                <div className="smallAvatar">✦</div>
              )}

              <div className="message">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {step === 0 && (
          <div className="quickReplies">
            <button onClick={() => quickReply("Technology and coding")}>
              💻 Technology
            </button>
            <button onClick={() => quickReply("Design and creativity")}>
              🎨 Design
            </button>
            <button onClick={() => quickReply("Business and leadership")}>
              📈 Business
            </button>
            <button onClick={() => quickReply("Science and research")}>
              🔬 Science
            </button>
          </div>
        )}

        <div className="inputArea">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Tell me about yourself..."
          />

          <button className="sendButton" onClick={sendMessage}>
            ↑
          </button>
        </div>

        <p className="disclaimer">
          CareerPilot provides AI-powered guidance. Explore multiple
          options before making career decisions.
        </p>
      </main>
    </div>
  );
}

export default App;