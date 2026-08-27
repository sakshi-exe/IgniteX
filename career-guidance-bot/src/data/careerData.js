// CareerPilot Knowledge Base & Career Matching Engine

export const DISCOVERY_QUESTIONS = [
  {
    id: "interests",
    step: 1,
    title: "What are you naturally curious about?",
    subtitle: "Choose up to 3 areas you enjoy exploring.",
    maxSelections: 3,
    minSelections: 1,
    timeRemaining: "About 2 minutes remaining",
    options: [
      {
        id: "technology",
        title: "Technology",
        description: "Coding, AI & building things",
        icon: "Code",
        category: "tech"
      },
      {
        id: "design",
        title: "Design",
        description: "Creativity, visuals & experiences",
        icon: "Palette",
        category: "creative"
      },
      {
        id: "science",
        title: "Science",
        description: "Research, experiments & discovery",
        icon: "Microscope",
        category: "research"
      },
      {
        id: "business",
        title: "Business",
        description: "Strategy, leadership & entrepreneurship",
        icon: "TrendingUp",
        category: "business"
      },
      {
        id: "people",
        title: "People",
        description: "Communication, psychology & social impact",
        icon: "Users",
        category: "social"
      },
      {
        id: "problem_solving",
        title: "Problem Solving",
        description: "Logic, puzzles & analytical thinking",
        icon: "Brain",
        category: "logic"
      }
    ]
  },
  {
    id: "strengths",
    step: 2,
    title: "What are your strongest qualities?",
    subtitle: "Select up to 3 qualities that define how you think and work.",
    maxSelections: 3,
    minSelections: 1,
    timeRemaining: "About 1.5 minutes remaining",
    options: [
      {
        id: "problem_solving_strength",
        title: "Problem Solving",
        description: "Breaking down tricky challenges",
        icon: "Sparkles"
      },
      {
        id: "creativity",
        title: "Creativity",
        description: "Thinking outside the box",
        icon: "Lightbulb"
      },
      {
        id: "communication",
        title: "Communication",
        description: "Explaining ideas clearly",
        icon: "MessageSquare"
      },
      {
        id: "leadership",
        title: "Leadership",
        description: "Guiding others and driving direction",
        icon: "Compass"
      },
      {
        id: "analytical_thinking",
        title: "Analytical Thinking",
        description: "Working with data & structured logic",
        icon: "BarChart3"
      },
      {
        id: "teamwork",
        title: "Teamwork",
        description: "Collaborating smoothly in groups",
        icon: "HeartHandshake"
      },
      {
        id: "fast_learning",
        title: "Fast Learning",
        description: "Picking up new concepts quickly",
        icon: "Zap"
      },
      {
        id: "attention_to_detail",
        title: "Attention to Detail",
        description: "Spotting nuances and maintaining precision",
        icon: "CheckCircle2"
      }
    ]
  },
  {
    id: "subjects",
    step: 3,
    title: "Which subjects do you enjoy?",
    subtitle: "Choose all that spark your interest.",
    maxSelections: 6,
    minSelections: 1,
    timeRemaining: "About 1 minute remaining",
    options: [
      { id: "mathematics", title: "Mathematics", description: "Calculus, statistics, algebra", icon: "Binary" },
      { id: "computer_science", title: "Computer Science", description: "Programming, algorithms, systems", icon: "Terminal" },
      { id: "science", title: "Science", description: "Physics, chemistry, biology", icon: "Atom" },
      { id: "business_sub", title: "Business", description: "Management, marketing, finance", icon: "Briefcase" },
      { id: "economics", title: "Economics", description: "Markets, behavior, quantitative policy", icon: "Coins" },
      { id: "languages", title: "Languages", description: "Linguistics, writing, storytelling", icon: "BookOpen" },
      { id: "arts_design", title: "Arts & Design", description: "Visual arts, UI/UX, multimedia", icon: "PenTool" },
      { id: "psychology", title: "Psychology", description: "Human behavior, cognitive sciences", icon: "Smile" }
    ]
  },
  {
    id: "work_preferences",
    step: 4,
    title: "What kind of work sounds most exciting?",
    subtitle: "Select up to 2 areas where you'd love to make an impact.",
    maxSelections: 2,
    minSelections: 1,
    timeRemaining: "Final step · 30 seconds",
    options: [
      { id: "building_technology", title: "Building technology", description: "Creating apps, AI models & software", icon: "Cpu" },
      { id: "analyzing_data", title: "Analyzing data", description: "Extracting insights and predicting trends", icon: "PieChart" },
      { id: "creating_designs", title: "Creating designs", description: "Crafting beautiful interfaces & user journeys", icon: "Layout" },
      { id: "leading_projects", title: "Leading projects", description: "Steering teams and managing product roadmaps", icon: "Workflow" },
      { id: "research_discovery", title: "Research & discovery", description: "Investigating frontier science and tech", icon: "Search" },
      { id: "helping_people", title: "Helping people", description: "Improving lives, mentoring and social good", icon: "Heart" },
      { id: "running_business", title: "Running a business", description: "Launching startups and scaling products", icon: "Rocket" },
      { id: "solving_real_world", title: "Solving real-world problems", description: "Tackling climate, healthcare & automation", icon: "Globe" }
    ]
  }
];

// REAL-WORLD CAREER SIMULATION SCENARIOS
export const SIMULATION_SCENARIOS = [
  {
    id: "scenario_1",
    stepNumber: 1,
    totalSteps: 3,
    contextLabel: "REAL-WORLD SCENARIO",
    title: "Your team has customer data from 100,000 users.",
    scenarioDesc: "The company wants to understand why customers are leaving.",
    question: "What would you rather do?",
    options: [
      {
        key: "A",
        id: "analyze_data",
        title: "Analyze the data",
        desc: "Find patterns and understand what is happening.",
        trait: "data_focus"
      },
      {
        key: "B",
        id: "build_product",
        title: "Build a better product",
        desc: "Create a technical solution to improve the experience.",
        trait: "engineering_focus"
      },
      {
        key: "C",
        id: "talk_customers",
        title: "Talk to customers",
        desc: "Understand their problems directly through conversations.",
        trait: "user_focus"
      }
    ]
  },
  {
    id: "scenario_2",
    stepNumber: 2,
    totalSteps: 3,
    contextLabel: "REAL-WORLD SCENARIO",
    title: "Your company wants to build an AI system that detects fraudulent transactions.",
    scenarioDesc: "A new security initiative is kicking off across multiple teams.",
    question: "What sounds most interesting?",
    options: [
      {
        key: "A",
        id: "train_ai_model",
        title: "Train the AI model",
        desc: "Work with data and improve prediction accuracy.",
        trait: "ai_focus"
      },
      {
        key: "B",
        id: "build_application",
        title: "Build the application",
        desc: "Turn the AI capability into a usable product.",
        trait: "software_focus"
      },
      {
        key: "C",
        id: "design_experience",
        title: "Design the user experience",
        desc: "Make the product simple and intuitive.",
        trait: "design_focus"
      }
    ]
  },
  {
    id: "scenario_3",
    stepNumber: 3,
    totalSteps: 3,
    contextLabel: "REAL-WORLD SCENARIO",
    title: "Your team gives you a difficult problem with no obvious solution.",
    scenarioDesc: "There are conflicting constraints and no established playbook.",
    question: "What would you naturally do first?",
    options: [
      {
        key: "A",
        id: "break_down_problem",
        title: "Break down the problem",
        desc: "Analyze it step-by-step and look for patterns.",
        trait: "analytical_approach"
      },
      {
        key: "B",
        id: "brainstorm_solutions",
        title: "Brainstorm creative solutions",
        desc: "Explore different ideas and approaches.",
        trait: "creative_approach"
      },
      {
        key: "C",
        id: "discuss_with_people",
        title: "Discuss it with people",
        desc: "Talk to others and understand different perspectives.",
        trait: "collaborative_approach"
      }
    ]
  }
];

export const CAREER_DATABASE = [
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    defaultMatch: 96,
    baselineMatch: 89,
    simulationBoost: 7,
    matchBadge: "Strong Match",
    tagline: "Build intelligent systems using data, machine learning and software engineering.",
    fitSummary: "Strong fit for your interest in AI, coding, mathematics and problem solving.",
    salaryRange: "$120,000 – $185,000 / yr",
    outlook: "Very High Growth (+38% by 2030)",
    difficulty: "Moderate-Advanced",
    profileBadges: ["AI & Tech", "Mathematics", "Problem Solving", "Coding"],
    explainableEvidence: [
      {
        type: "Interest",
        title: "Interest Alignment",
        text: "You selected Technology and AI as areas you enjoy exploring.",
        icon: "Code"
      },
      {
        type: "Strength",
        title: "Cognitive Strengths",
        text: "You identified analytical thinking and problem solving as your strongest qualities.",
        icon: "Brain"
      },
      {
        type: "Subject",
        title: "Subject Affinity",
        text: "You enjoy mathematics and computer science fundamentals.",
        icon: "Binary"
      },
      {
        type: "Behavior",
        title: "Simulation Behavior",
        text: "You consistently selected technical and data-driven approaches in the career simulation.",
        icon: "Cpu"
      }
    ],
    aiInsight: "Your answers suggest that you enjoy solving structured problems and working with technical systems. Your scenario choices strongly reinforced this pattern, which is why Machine Learning Engineering ranks highest.",
    confidenceLabel: "High",
    confidenceDesc: "Your questionnaire answers and simulation choices strongly align.",
    skillGap: [
      { skill: "Python", current: "Good", target: "Strong", priority: "High" },
      { skill: "Mathematics", current: "Developing", target: "Strong", priority: "High" },
      { skill: "SQL", current: "Beginner", target: "Strong", priority: "High" },
      { skill: "Machine Learning", current: "Beginner", target: "Advanced", priority: "High" },
      { skill: "Git", current: "Developing", target: "Intermediate", priority: "Medium" }
    ],
    bestStartingPoint: {
      title: "Start with Python + SQL",
      desc: "These skills will give you the strongest foundation for your next stage before entering complex ML pipelines."
    },
    thirtyDayRoadmap: {
      whyThisRoadmap: "Because Python and SQL are currently your biggest skill opportunities, we prioritize them before introducing machine learning.",
      weeks: [
        {
          weekNumber: 1,
          title: "Build your Python foundation",
          focus: "Python basics · Functions · Data structures · Problem solving",
          estimatedHours: "5–7 hours",
          goal: "Write small Python programs without relying on tutorials.",
          resources: [
            { name: "CS50P: Harvard Python", type: "Free Course" },
            { name: "Python.org Official Tutorial", type: "Docs" }
          ]
        },
        {
          weekNumber: 2,
          title: "Learn SQL fundamentals",
          focus: "SELECT · Filtering · Joins · Aggregations",
          estimatedHours: "4–6 hours",
          goal: "Query and analyze a small dataset.",
          resources: [
            { name: "SQLBolt Interactive Lessons", type: "Interactive" },
            { name: "Mode Analytics SQL Guide", type: "Hands-on" }
          ]
        },
        {
          weekNumber: 3,
          title: "Start statistics for ML",
          focus: "Mean / median · Probability basics · Distributions · Correlation",
          estimatedHours: "5–7 hours",
          goal: "Understand the statistics behind basic ML models.",
          resources: [
            { name: "Khan Academy Statistics & Probability", type: "Course" },
            { name: "StatQuest with Josh Starmer", type: "Visual Guide" }
          ]
        },
        {
          weekNumber: 4,
          title: "Build your first ML project",
          focus: "Student Performance Predictor · Dataset · Data cleaning · Simple model · Evaluation · README",
          estimatedHours: "6–10 hours",
          goal: "Build and publish your first machine learning project.",
          resources: [
            { name: "Scikit-Learn Getting Started", type: "Documentation" },
            { name: "Kaggle Tabular Playground Starter", type: "Project Template" }
          ]
        }
      ]
    },
    skills: [
      { name: "Python", category: "Core Language", level: "Essential" },
      { name: "Statistics & Probability", category: "Foundation", level: "Essential" },
      { name: "Machine Learning", category: "Domain", level: "Core" },
      { name: "Deep Learning (PyTorch)", category: "Advanced", level: "Specialized" },
      { name: "SQL & Data Pipelines", category: "Data", level: "Core" },
      { name: "Git & MLOps", category: "Tooling", level: "Practical" }
    ],
    roadmap: [
      {
        stepNumber: "01",
        title: "Build the foundation",
        focus: "Python + Programming",
        duration: "2–3 weeks",
        description: "Master clean Python syntax, data structures (lists, dicts, sets), OOP principles, and basic algorithmic problem solving.",
        milestones: [
          "Complete Python basics & data structures",
          "Solve 15-20 beginner algorithm problems on LeetCode/HackerRank",
          "Build a CLI tool or automated data scraper"
        ],
        resources: [
          { name: "CS50P: Harvard Python Course", type: "Free Course" },
          { name: "Python for Everybody (Coursera / YouTube)", type: "Free Guide" }
        ]
      },
      {
        stepNumber: "02",
        title: "Learn the fundamentals",
        focus: "Statistics + SQL",
        duration: "2–3 weeks",
        description: "Understand descriptive statistics, distributions, hypothesis testing, linear algebra basics, and relational database queries.",
        milestones: [
          "Master NumPy and Pandas for data manipulation",
          "Write complex SQL queries (joins, window functions, aggregates)",
          "Perform exploratory data analysis (EDA) on real Kaggle datasets"
        ],
        resources: [
          { name: "Khan Academy Statistics & Probability", type: "Interactive" },
          { name: "Mode Analytics SQL Tutorial", type: "Hands-on" }
        ]
      },
      {
        stepNumber: "03",
        title: "Enter Machine Learning",
        focus: "ML fundamentals + projects",
        duration: "4–6 weeks",
        description: "Learn supervised vs unsupervised learning, Scikit-Learn pipelines, regression, classification, clustering, and model evaluation metrics.",
        milestones: [
          "Implement linear/logistic regression and random forests",
          "Understand cross-validation, regularization, and overfitting",
          "Train and evaluate 3 classic ML models on Kaggle"
        ],
        resources: [
          { name: "Andrew Ng's Machine Learning Specialization", type: "Top Rated" },
          { name: "Hands-On Machine Learning (Aurélien Géron)", type: "Book" }
        ]
      },
      {
        stepNumber: "04",
        title: "Build your portfolio",
        focus: "2–3 real-world projects",
        duration: "4–6 weeks",
        description: "Develop end-to-end ML applications with interactive web demos (Streamlit/FastAPI), clean documentation, and model deployment.",
        milestones: [
          "Project 1: Predictive Analytics Web App (e.g. Housing/Health)",
          "Project 2: Computer Vision or NLP Classifier with PyTorch/HuggingFace",
          "Deploy model via FastAPI + Docker on Render or Hugging Face Spaces"
        ],
        resources: [
          { name: "FastAPI Official ML Deployment Guide", type: "Documentation" },
          { name: "Hugging Face Course", type: "Free Tutorial" }
        ]
      },
      {
        stepNumber: "05",
        title: "Become industry ready",
        focus: "Portfolio + internships",
        duration: "Ongoing",
        description: "Refine your GitHub portfolio, practice system design and coding interviews, contribute to open source, and apply for junior ML/AI roles.",
        milestones: [
          "Publish 3 clean GitHub repositories with live README demos",
          "Conduct 5 mock technical ML interviews",
          "Apply to 15+ student internships or entry-level AI teams"
        ],
        resources: [
          { name: "MLOps Zoomcamp", type: "Free Course" },
          { name: "Tech Interview Handbook", type: "Career Prep" }
        ]
      }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    defaultMatch: 91,
    baselineMatch: 86,
    simulationBoost: 5,
    matchBadge: "Strong Match",
    tagline: "Turn complex data into actionable insights, statistical models and strategic decisions.",
    fitSummary: "Strong fit for your analytical mindset, interest in mathematics, and curiosity about trends.",
    salaryRange: "$110,000 – $165,000 / yr",
    outlook: "High Growth (+32% by 2030)",
    difficulty: "Moderate",
    profileBadges: ["Data Analysis", "Mathematics", "Curiosity", "Storytelling"],
    explainableEvidence: [
      {
        type: "Interest",
        title: "Interest Alignment",
        text: "You enjoy analyzing data, spotting trends, and discovering patterns.",
        icon: "PieChart"
      },
      {
        type: "Strength",
        title: "Cognitive Strengths",
        text: "You highlighted analytical reasoning and curiosity.",
        icon: "BarChart3"
      },
      {
        type: "Subject",
        title: "Subject Affinity",
        text: "Mathematics and economics provide strong grounding for hypothesis testing.",
        icon: "Binary"
      },
      {
        type: "Behavior",
        title: "Simulation Behavior",
        text: "You prioritized customer analytics and investigative data breakdowns.",
        icon: "Search"
      }
    ],
    aiInsight: "Your analytical approach in Scenario 1 and 3 showed a strong desire to extract signals from noise before jumping into conclusions, aligning closely with Data Science.",
    confidenceLabel: "High",
    confidenceDesc: "Your scenario choices and subject preferences strongly align.",
    skillGap: [
      { skill: "Python / Pandas", current: "Good", target: "Strong", priority: "High" },
      { skill: "Statistical Inference", current: "Developing", target: "Strong", priority: "High" },
      { skill: "SQL", current: "Beginner", target: "Strong", priority: "High" },
      { skill: "Data Visualization", current: "Developing", target: "Good", priority: "Medium" },
      { skill: "A/B Testing", current: "Beginner", target: "Intermediate", priority: "Medium" }
    ],
    bestStartingPoint: {
      title: "Start with SQL + Exploratory Data Analysis",
      desc: "Master extracting data with SQL and summarizing distributions with Pandas visualizations."
    },
    thirtyDayRoadmap: {
      whyThisRoadmap: "Because SQL and data wrangling form the foundation of any exploratory data project, we focus on querying before predictive modeling.",
      weeks: [
        {
          weekNumber: 1,
          title: "SQL & Data Extraction",
          focus: "Joins · Subqueries · Aggregates · Filtering",
          estimatedHours: "5–6 hours",
          goal: "Extract and filter multi-table data using SQL."
        },
        {
          weekNumber: 2,
          title: "Pandas & Exploratory Data Analysis",
          focus: "Data cleaning · Handling nulls · Aggregations",
          estimatedHours: "5–7 hours",
          goal: "Perform full exploratory data analysis on a real dataset."
        },
        {
          weekNumber: 3,
          title: "Statistical Testing & Correlation",
          focus: "Hypothesis testing · p-values · Normal distribution",
          estimatedHours: "4–6 hours",
          goal: "Run a two-sample hypothesis test and interpret results."
        },
        {
          weekNumber: 4,
          title: "Interactive Data Dashboard Project",
          focus: "Streamlit / Seaborn · Visual narrative · GitHub publication",
          estimatedHours: "6–8 hours",
          goal: "Publish a data story answering a specific business question."
        }
      ]
    },
    skills: [
      { name: "Python / R", category: "Core Language", level: "Essential" },
      { name: "Statistics & Inference", category: "Foundation", level: "Essential" },
      { name: "SQL & Data Wrangling", category: "Data", level: "Core" },
      { name: "Data Visualization (Tableau/Seaborn)", category: "Communication", level: "Core" },
      { name: "Applied Machine Learning", category: "Modeling", level: "Practical" },
      { name: "A/B Testing", category: "Experimentation", level: "Practical" }
    ],
    roadmap: [
      {
        stepNumber: "01",
        title: "Build the foundation",
        focus: "Python, Pandas & Math",
        duration: "2–3 weeks",
        description: "Learn Python data analysis stack (Pandas, NumPy) and review core probability and calculus fundamentals.",
        milestones: [
          "Data cleaning and transformation with Pandas",
          "Basic descriptive statistics & distributions"
        ],
        resources: [{ name: "Python for Data Analysis by Wes McKinney", type: "Book" }]
      },
      {
        stepNumber: "02",
        title: "Learn the fundamentals",
        focus: "SQL & Storytelling Visuals",
        duration: "2–3 weeks",
        description: "Write advanced SQL queries and build interactive dashboards with Matplotlib, Seaborn, or Tableau.",
        milestones: [
          "Build 3 comprehensive EDA visual notebooks",
          "Create a Tableau public dashboard analyzing open datasets"
        ],
        resources: [{ name: "Kaggle Micro-courses: Data Visualization", type: "Interactive" }]
      },
      {
        stepNumber: "03",
        title: "Statistical Modeling & ML",
        focus: "Hypothesis Testing + Scikit-Learn",
        duration: "4–5 weeks",
        description: "Design A/B tests, run ANOVA / t-tests, and build predictive classification and regression models.",
        milestones: [
          "Formulate and evaluate a simulated A/B test",
          "Build churn prediction or customer segmentation model"
        ],
        resources: [{ name: "StatQuest with Josh Starmer", type: "YouTube Series" }]
      },
      {
        stepNumber: "04",
        title: "Portfolio & Case Studies",
        focus: "2 End-to-End Data Projects",
        duration: "4–5 weeks",
        description: "Produce actionable data case studies answering specific business or societal questions with clean summaries.",
        milestones: [
          "Write a Medium / Dev.to data story explaining insights",
          "Publish reproducible Jupyter notebooks on GitHub"
        ],
        resources: [{ name: "Kaggle Competitions (Beginner Track)", type: "Practice" }]
      },
      {
        stepNumber: "05",
        title: "Career & Interview Readiness",
        focus: "Case Interviews & Portfolio",
        duration: "Ongoing",
        description: "Practice data science case study interviews, business metrics, and SQL problem solving.",
        milestones: [
          "Ace SQL technical screens on StrataScratch",
          "Prepare 3 project walkthrough presentations"
        ],
        resources: [{ name: "Ace the Data Science Interview", type: "Book" }]
      }
    ]
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    defaultMatch: 86,
    baselineMatch: 82,
    simulationBoost: 4,
    matchBadge: "Good Match",
    tagline: "Design, build and maintain scalable software applications and modern digital systems.",
    fitSummary: "A strong option if you enjoy building technology, creating software, and solving logical problems.",
    salaryRange: "$105,000 – $160,000 / yr",
    outlook: "Steady High Demand (+25% by 2030)",
    difficulty: "Moderate",
    profileBadges: ["Programming", "System Design", "Problem Solving", "Collaboration"],
    explainableEvidence: [
      {
        type: "Interest",
        title: "Interest Alignment",
        text: "You enjoy coding and building interactive digital applications.",
        icon: "Cpu"
      },
      {
        type: "Strength",
        title: "Cognitive Strengths",
        text: "You excel at structured problem solving and fast learning.",
        icon: "Zap"
      },
      {
        type: "Subject",
        title: "Subject Affinity",
        text: "Computer science algorithms and architecture align with core engineering.",
        icon: "Terminal"
      },
      {
        type: "Behavior",
        title: "Simulation Behavior",
        text: "You showed a preference for building tangible product solutions.",
        icon: "Code"
      }
    ],
    aiInsight: "Your inclination toward turning ideas into working applications makes software engineering a reliable, high-growth path.",
    confidenceLabel: "High",
    confidenceDesc: "Your engineering instincts and problem solving match well.",
    skillGap: [
      { skill: "Data Structures & Algorithms", current: "Developing", target: "Strong", priority: "High" },
      { skill: "TypeScript / JavaScript", current: "Good", target: "Strong", priority: "High" },
      { skill: "Backend APIs & Databases", current: "Beginner", target: "Intermediate", priority: "Medium" },
      { skill: "Git & Version Control", current: "Developing", target: "Intermediate", priority: "Medium" }
    ],
    bestStartingPoint: {
      title: "Start with Data Structures + Fullstack CRUD",
      desc: "Build strong algorithmic intuition and connect React with a Node.js REST API."
    },
    thirtyDayRoadmap: {
      whyThisRoadmap: "Because algorithms and API design form the backbone of software engineering interviews and applications, we prioritize clean modular coding.",
      weeks: [
        {
          weekNumber: 1,
          title: "DSA Fundamentals",
          focus: "Arrays · Hash Maps · Two pointers · Big O",
          estimatedHours: "5–7 hours",
          goal: "Solve 15 essential LeetCode Easy problems."
        },
        {
          weekNumber: 2,
          title: "Fullstack Architecture",
          focus: "React state · REST endpoints · Express.js",
          estimatedHours: "6–8 hours",
          goal: "Connect a frontend interface to a working backend API."
        },
        {
          weekNumber: 3,
          title: "Database Integration",
          focus: "PostgreSQL · Prisma ORM · Relational schemas",
          estimatedHours: "5–7 hours",
          goal: "Persist and query relational data reliably."
        },
        {
          weekNumber: 4,
          title: "Deploy Production App",
          focus: "Authentication · Error handling · Vercel / Render deployment",
          estimatedHours: "6–10 hours",
          goal: "Deploy a live fullstack app with active users."
        }
      ]
    },
    skills: [
      { name: "JavaScript / TypeScript", category: "Core Language", level: "Essential" },
      { name: "Python / Java / C++", category: "Backend Language", level: "Core" },
      { name: "Data Structures & Algorithms", category: "Theory", level: "Essential" },
      { name: "React / Modern Web", category: "Frontend", level: "Core" },
      { name: "Git & GitHub", category: "Version Control", level: "Essential" },
      { name: "REST APIs & Databases", category: "System", level: "Core" }
    ],
    roadmap: [
      {
        stepNumber: "01",
        title: "Build the foundation",
        focus: "Programming + DSA Basics",
        duration: "2–3 weeks",
        description: "Master language basics, data types, control flow, loops, functions, and basic object-oriented design.",
        milestones: ["Write 20+ algorithmic exercises", "Understand Big O notation"],
        resources: [{ name: "The Odin Project / freeCodeCamp", type: "Free Platform" }]
      },
      {
        stepNumber: "02",
        title: "Learn Web & Systems",
        focus: "Frontend & Backend APIs",
        duration: "3–4 weeks",
        description: "Build interactive fullstack applications with React, Node.js/Express, and PostgreSQL.",
        milestones: ["Build a fullstack CRUD app with auth", "Design a relational database schema"],
        resources: [{ name: "Full Stack Open (University of Helsinki)", type: "Free Course" }]
      },
      {
        stepNumber: "03",
        title: "Software Architecture",
        focus: "System Design & Testing",
        duration: "3–4 weeks",
        description: "Write unit tests, implement CI/CD workflows, and learn clean code principles.",
        milestones: ["Write automated Jest tests", "Deploy to cloud (Vercel / AWS)"],
        resources: [{ name: "Clean Code & System Design Primer", type: "Resource" }]
      },
      {
        stepNumber: "04",
        title: "Major Project Build",
        focus: "Collaborative Web Platform",
        duration: "4–5 weeks",
        description: "Develop a feature-rich, high-performance web app with real-time updates and clean architecture.",
        milestones: ["Launch live production app with users", "Document API endpoints with Swagger/Postman"],
        resources: [{ name: "GitHub Open Source Good First Issues", type: "Community" }]
      },
      {
        stepNumber: "05",
        title: "Industry Preparation",
        focus: "Interview Prep & Networking",
        duration: "Ongoing",
        description: "Practice algorithmic interviews, behavioral STAR responses, and connect with engineers.",
        milestones: ["Solve 50 LeetCode Mediums", "Conduct peer mock interviews on Pramp"],
        resources: [{ name: "NeetCode 150", type: "Free Guide" }]
      }
    ]
  },
  {
    id: "product-designer",
    title: "AI Product Designer (UI/UX)",
    defaultMatch: 89,
    baselineMatch: 84,
    simulationBoost: 5,
    matchBadge: "Strong Match",
    tagline: "Design intuitive, delightful user experiences for AI-powered products and modern web apps.",
    fitSummary: "Great fit for your creative instincts, empathy for users, and passion for design & tech.",
    salaryRange: "$95,000 – $150,000 / yr",
    outlook: "Strong Demand (+20% by 2030)",
    difficulty: "Moderate",
    profileBadges: ["Design", "Empathy", "Visuals", "User Research"],
    explainableEvidence: [
      {
        type: "Interest",
        title: "Interest Alignment",
        text: "You enjoy visual aesthetics, design, and user psychology.",
        icon: "Palette"
      },
      {
        type: "Strength",
        title: "Cognitive Strengths",
        text: "You highlighted creativity and user empathy.",
        icon: "Lightbulb"
      },
      {
        type: "Subject",
        title: "Subject Affinity",
        text: "Arts, psychology, and design thinking guide intuitive UX.",
        icon: "PenTool"
      },
      {
        type: "Behavior",
        title: "Simulation Behavior",
        text: "You chose to understand customer needs and simplify user interfaces.",
        icon: "Layout"
      }
    ],
    aiInsight: "Your scenario choices in fraud detection and customer churn highlighted a natural instinct to solve problems from the user perspective first.",
    confidenceLabel: "High",
    confidenceDesc: "Creative instincts and user empathy align strongly.",
    skillGap: [
      { skill: "Figma Prototyping", current: "Good", target: "Strong", priority: "High" },
      { skill: "User Research & Testing", current: "Developing", target: "Strong", priority: "High" },
      { skill: "Design Systems", current: "Beginner", target: "Intermediate", priority: "High" },
      { skill: "AI Interaction Patterns", current: "Beginner", target: "Intermediate", priority: "Medium" }
    ],
    bestStartingPoint: {
      title: "Start with User Journeys + Figma Auto-Layout",
      desc: "Recreate real-world app interfaces and build reusable design component libraries."
    },
    thirtyDayRoadmap: {
      whyThisRoadmap: "Because Figma fluency and wireframing form the basis of all design evaluations, we begin with tactile prototyping before design system architecture.",
      weeks: [
        {
          weekNumber: 1,
          title: "Figma Vector & Layout Mastery",
          focus: "Auto-layout · Components · Spacing systems",
          estimatedHours: "4–6 hours",
          goal: "Replicate 3 production UI screens pixel-perfect."
        },
        {
          weekNumber: 2,
          title: "User Journey & Wireframing",
          focus: "User personas · Journey mapping · Low-fi wireframes",
          estimatedHours: "5–6 hours",
          goal: "Map a 5-step user journey solving onboarding friction."
        },
        {
          weekNumber: 3,
          title: "Interactive Prototyping",
          focus: "Micro-interactions · Smart animate · Variables",
          estimatedHours: "5–7 hours",
          goal: "Build a clickable mobile & desktop prototype."
        },
        {
          weekNumber: 4,
          title: "UX Case Study Project",
          focus: "AI App Redesign · Problem narrative · Published portfolio",
          estimatedHours: "6–8 hours",
          goal: "Publish a full UX case study on Behance/Framer."
        }
      ]
    },
    skills: [
      { name: "Figma & FigJam", category: "Tooling", level: "Essential" },
      { name: "User Research & Testing", category: "Methodology", level: "Core" },
      { name: "Design Systems & Tokens", category: "Craft", level: "Core" },
      { name: "Interactive Prototyping", category: "Craft", level: "Core" },
      { name: "Basic HTML/CSS", category: "Technical", level: "Practical" },
      { name: "AI UX Guidelines", category: "Specialization", level: "Practical" }
    ],
    roadmap: [
      {
        stepNumber: "01",
        title: "Build the foundation",
        focus: "Visual & UX Principles",
        duration: "2–3 weeks",
        description: "Master typography, color theory, spacing, hierarchy, and Figma vector tools.",
        milestones: ["Recreate 3 world-class UI screens in Figma", "Learn Figma auto-layout and components"],
        resources: [{ name: "Refactoring UI & Figma Tutorials", type: "Guide" }]
      },
      {
        stepNumber: "02",
        title: "User Research & Wireframing",
        focus: "User Journeys & Personas",
        duration: "2–3 weeks",
        description: "Conduct user interviews, map user flows, and sketch wireframes for solving real problems.",
        milestones: ["Create a 5-step user journey map", "Produce low-fidelity wireframes"],
        resources: [{ name: "Nielsen Norman Group UX Basics", type: "Articles" }]
      },
      {
        stepNumber: "03",
        title: "Interactive Prototyping",
        focus: "Micro-interactions & Systems",
        duration: "3–4 weeks",
        description: "Build responsive design systems with tokens, micro-animations, and clickable prototypes.",
        milestones: ["Build a reusable 20+ component design system", "Create an animated prototype in Figma"],
        resources: [{ name: "Figma Community Design Systems", type: "Resource" }]
      },
      {
        stepNumber: "04",
        title: "Case Study Portfolio",
        focus: "2 Polished UX Case Studies",
        duration: "4–5 weeks",
        description: "Write in-depth case studies articulating the problem, research, iterations, and final solution.",
        milestones: ["Publish portfolio website on Framer or Webflow", "Document problem-to-solution narrative"],
        resources: [{ name: "Cofolios (Student Design Portfolios)", type: "Inspiration" }]
      },
      {
        stepNumber: "05",
        title: "Design Industry Entry",
        focus: "Critiques & Pitching",
        duration: "Ongoing",
        description: "Practice design walkthroughs, join design communities, and apply for junior UX roles.",
        milestones: ["Do 3 portfolio reviews with senior mentors", "Apply for student design internships"],
        resources: [{ name: "ADPList Mentorship", type: "Free Mentoring" }]
      }
    ]
  }
];

// Dynamic matching calculator based on questionnaire + simulation answers
export function calculateCareerMatches(userAnswers = {}, simulationAnswers = {}) {
  const { interests = [], strengths = [], subjects = [], workPreferences = [] } = userAnswers;

  const scoredCareers = CAREER_DATABASE.map(career => {
    let score = career.baselineMatch || 85;
    let boost = 0;
    const behaviorReasons = [];

    // Evaluate interests
    if (interests.includes("technology") && ["ml-engineer", "software-engineer", "data-scientist"].includes(career.id)) {
      score += 4;
    }
    if (interests.includes("problem_solving")) {
      score += 3;
    }
    if (interests.includes("design") && career.id === "product-designer") {
      score += 6;
    }

    // Evaluate Simulation Behavior
    if (simulationAnswers.scenario_1 === "analyze_data") {
      if (["ml-engineer", "data-scientist"].includes(career.id)) {
        boost += 3;
        behaviorReasons.push("Prioritized analytical data breakdown in Scenario 1");
      }
    } else if (simulationAnswers.scenario_1 === "build_product") {
      if (["software-engineer", "ml-engineer"].includes(career.id)) {
        boost += 3;
        behaviorReasons.push("Prioritized technical product engineering in Scenario 1");
      }
    } else if (simulationAnswers.scenario_1 === "talk_customers") {
      if (career.id === "product-designer") {
        boost += 4;
        behaviorReasons.push("Prioritized qualitative customer discovery in Scenario 1");
      }
    }

    if (simulationAnswers.scenario_2 === "train_ai_model") {
      if (career.id === "ml-engineer") {
        boost += 4;
        behaviorReasons.push("Chosen AI model training focus in Scenario 2");
      }
    } else if (simulationAnswers.scenario_2 === "build_application") {
      if (career.id === "software-engineer") {
        boost += 4;
        behaviorReasons.push("Chosen software deployment focus in Scenario 2");
      }
    } else if (simulationAnswers.scenario_2 === "design_experience") {
      if (career.id === "product-designer") {
        boost += 4;
        behaviorReasons.push("Chosen user experience focus in Scenario 2");
      }
    }

    if (simulationAnswers.scenario_3 === "break_down_problem") {
      if (["ml-engineer", "data-scientist"].includes(career.id)) {
        boost += 2;
        behaviorReasons.push("Systematic problem decomposition approach in Scenario 3");
      }
    }

    // Default simulation boost if not filled
    const finalBoost = boost > 0 ? boost : (career.simulationBoost || 5);
    const finalScore = Math.min(98, Math.max(80, score + finalBoost));

    return {
      ...career,
      matchPercentage: finalScore,
      simulationBoost: finalBoost,
      behaviorReasons
    };
  });

  // Sort descending by match percentage
  scoredCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return scoredCareers;
}

export function generateProfileSummary(userAnswers) {
  const { interests = [], strengths = [], subjects = [] } = userAnswers;
  
  const interestMap = {
    technology: "Technology",
    design: "Design",
    science: "Science",
    business: "Business",
    people: "People",
    problem_solving: "Problem Solving"
  };

  const strengthMap = {
    problem_solving_strength: "Problem Solver",
    creativity: "Creative",
    communication: "Articulate",
    leadership: "Leader",
    analytical_thinking: "Analytical",
    teamwork: "Collaborative",
    fast_learning: "Fast Learner",
    attention_to_detail: "Detail-Oriented"
  };

  const selectedInterests = interests.map(i => interestMap[i] || i).slice(0, 3);
  const selectedStrengths = strengths.map(s => strengthMap[s] || s).slice(0, 3);

  const displayTags = [...selectedInterests];
  if (subjects.includes("mathematics") && !displayTags.includes("Mathematics")) {
    displayTags.push("Mathematics");
  }
  if (interests.includes("technology") && !displayTags.includes("AI")) {
    displayTags.push("AI");
  }

  const personaWords = selectedStrengths.length > 0
    ? selectedStrengths.join(" · ")
    : "Analytical · Curious · Builder";

  return {
    tags: displayTags.slice(0, 4).join(" • ") || "Technology • Problem Solving • Mathematics • AI",
    persona: personaWords
  };
}

// AI Knowledge Base
export const AI_KNOWLEDGE_BASE = {
  math_question: {
    triggers: ["math", "maths", "weak at math", "calculus", "scared of math"],
    response: "Yes. Your profile shows strong interest in AI and problem solving. Instead of trying to master advanced mathematics immediately, start with basic statistics alongside Python and gradually build your mathematics foundation."
  },
  first_step: {
    triggers: ["learn first", "what should i learn", "beginner", "where to start", "week 1"],
    response: "In **Week 1 of your 30-Day Plan**, focus on **Python fundamentals**: basic syntax, variables, lists, dictionaries, and functions. Spend 5–7 hours writing small scripts without relying on tutorial copy-pasting."
  },
  courses: {
    triggers: ["course", "recommend courses", "free courses", "certifications", "tutorials", "resource"],
    response: "Here are the top free resources tailored for your 30-day plan:\n1. **CS50P (Harvard Python)** — Comprehensive beginner coding.\n2. **SQLBolt** — Hands-on interactive browser SQL.\n3. **Khan Academy Statistics** — Clear visual probability & distributions.\n4. **StatQuest with Josh Starmer** — Step-by-step ML intuition."
  },
  compare: {
    triggers: ["compare", "difference", "data science", "data scientist vs ml"],
    response: "• **Machine Learning Engineer (96% Match)**: Focuses on engineering AI models into production code and scalable systems.\n• **Data Scientist (91% Match)**: Focuses on analyzing historical datasets, finding statistical trends, and driving business decisions."
  },
  default_roadmap: {
    triggers: ["roadmap", "timeline", "30 day", "plan"],
    response: "Your **30-Day Plan** breaks down into:\n• **Week 1**: Python Foundation (5–7 hrs)\n• **Week 2**: SQL Fundamentals (4–6 hrs)\n• **Week 3**: Statistics for ML (5–7 hrs)\n• **Week 4**: Student Performance Predictor ML Project (6–10 hrs)."
  }
};
