# CareerPilot — AI Career Guidance Platform

> **Discover → Understand → Match → Plan**  
> A professional, modern, and interactive AI-powered career counseling platform designed specifically for students, university career centers, and hackathons.

---

## 🌟 Core Philosophy & Design Principles

The first-time user understands the product within **5 seconds**:
1. **What is this?** — AI-powered career guidance.
2. **What do I need to do?** — Answer a few simple questions (~2 minutes).
3. **What will I get?** — Personalized career matches with clear percentage scores and a step-by-step learning roadmap.

### Aesthetic & UX Highlights
- **Palette**: Soft Lavender (`#7C3AED`, `#EDE9FE`), Muted Blue (`#4F46E5`, `#E0E7FF`), Soft Mint Green (`#10B981`, `#D1FAE5`), Warm White (`#FAFAFD`), and Deep Navy (`#0F172A`).
- **Typography**: Inter & Plus Jakarta Sans via Google Fonts.
- **Desktop-First Layout**: Optimized for `1440 × 900`, `1366 × 768`, max width `1320px` with a minimal `220px` sidebar.
- **Progressive Disclosure**: Single question at a time — no overwhelming multi-page forms.

---

## 🚀 Key Features

### 1. Screen 1 — Welcome & Landing
- Confident headline: *"Find a career path that fits you."*
- Abstract SVG illustration depicting career pathways, orbital growth trajectories, and an AI compass node.
- Three clear benefit cards: **01 Discover**, **02 Compare**, **03 Plan**.

### 2. Screen 2 — Interactive Career Discovery (1-Question-at-a-Time)
- Step progress bar, time estimate indicator, and validation feedback.
- **Q1: Interests** (Technology, Design, Science, Business, People, Problem Solving).
- **Q2: Strengths** (Problem Solving, Creativity, Communication, Leadership, Analytical Thinking, Teamwork, Fast Learning, Attention to Detail).
- **Q3: Subjects** (Mathematics, Computer Science, Science, Business, Economics, Languages, Arts & Design, Psychology).
- **Q4: Work Preferences** (Building technology, Analyzing data, Creating designs, Leading projects, Research & discovery, Helping people, Running a business, Solving real-world problems).

### 3. Screen 3 — AI Analysis State
- Elegant transitional screen with an animated neural pulse avatar.
- 3-step live checklist:
  - ✓ Understanding your interests
  - ✓ Identifying your strengths
  - ● Finding your best matches

### 4. Screen 4 — Career Match Results
- Dynamic **Profile Summary Card** (e.g. `Technology • Problem Solving • Mathematics • AI`).
- Three horizontal match cards (e.g., **Machine Learning Engineer (94%)**, **Data Scientist (91%)**, **Software Engineer (86%)**) with custom SVG circular percentage rings.
- "Why it matches" bullet points and key skills chips.

### 5. Screen 5 — Two-Column Career Detail & Personalized Roadmap
- **Left Column**: Career title, match badge, estimated salary, industry growth outlook, 4 "Why this career fits you" cards, and categorized skills matrix.
- **Right Column**: Interactive vertical roadmap (01 Foundation, 02 Fundamentals, 03 Specialization, 04 Portfolio, 05 Industry Ready) with milestone checkboxes, timeframes, and curated free resources.

### 6. Interactive Floating AI Assistant
- Floating bottom-right trigger: **"Ask CareerPilot"**.
- Context-aware drawer with quick prompts:
  - *"I'm weak at maths. Can I still choose this career?"*
  - *"What should I learn first?"*
  - *"Recommend courses"*
  - *"Compare careers"*
  - *"Show beginner roadmap"*

### 7. Comparison Modal & Profile Views
- **Comparison Modal**: Side-by-side comparison of top matches (Skills, Salary, Timeline, Growth).
- **Profile Navigation**: "My Interests" and "My Skills" inventory accessible from the sidebar.
- **My Roadmap**: Direct milestone checklist tracker.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti, CSS Keyframe Animations & Transitions
- **Styling**: Vanilla CSS with modern custom properties (tokens) and glassmorphic elevation

---

## 📦 Running Locally

```bash
# 1. Navigate to directory
cd career-guidance-bot

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build production bundle
npm run build
```
