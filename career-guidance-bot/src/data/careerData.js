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

export const CAREER_DATABASE = [
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    defaultMatch: 94,
    tagline: "Build intelligent systems using data, machine learning and software engineering.",
    fitSummary: "Strong fit for your interest in AI, coding, mathematics and problem solving.",
    salaryRange: "$120,000 – $185,000 / yr",
    outlook: "Very High Growth (+38% by 2030)",
    difficulty: "Moderate-Advanced",
    profileBadges: ["AI & Tech", "Mathematics", "Problem Solving", "Coding"],
    whyItMatches: [
      {
        title: "AI Interest",
        desc: "You enjoy exploring artificial intelligence and computational models.",
        icon: "Brain"
      },
      {
        title: "Analytical Thinking",
        desc: "You enjoy structured logic, mathematics and problem solving.",
        icon: "BarChart3"
      },
      {
        title: "Mathematics",
        desc: "You are comfortable with quantitative concepts and statistics.",
        icon: "Binary"
      },
      {
        title: "Building",
        desc: "You enjoy creating technology and deploying working solutions.",
        icon: "Cpu"
      }
    ],
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
    tagline: "Turn complex data into actionable insights, statistical models and strategic decisions.",
    fitSummary: "Strong fit for your analytical mindset, interest in mathematics, and curiosity about trends.",
    salaryRange: "$110,000 – $165,000 / yr",
    outlook: "High Growth (+32% by 2030)",
    difficulty: "Moderate",
    profileBadges: ["Data Analysis", "Mathematics", "Curiosity", "Storytelling"],
    whyItMatches: [
      {
        title: "Analytical Mindset",
        desc: "You enjoy finding patterns in complex information and numbers.",
        icon: "BarChart3"
      },
      {
        title: "Mathematical Comfort",
        desc: "You like working with probabilities, charts and quantitative logic.",
        icon: "Binary"
      },
      {
        title: "Business Value",
        desc: "You are motivated by answering 'why' and helping teams make smarter choices.",
        icon: "TrendingUp"
      },
      {
        title: "Scientific Inquiry",
        desc: "You form hypotheses, test assumptions, and derive grounded conclusions.",
        icon: "Microscope"
      }
    ],
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
    tagline: "Design, build and maintain scalable software applications and modern digital systems.",
    fitSummary: "A strong option if you enjoy building technology, creating software, and solving logical problems.",
    salaryRange: "$105,000 – $160,000 / yr",
    outlook: "Steady High Demand (+25% by 2030)",
    difficulty: "Moderate",
    profileBadges: ["Programming", "System Design", "Problem Solving", "Collaboration"],
    whyItMatches: [
      {
        title: "Builder Instinct",
        desc: "You enjoy turning abstract ideas into tangible, working software.",
        icon: "Cpu"
      },
      {
        title: "Logical Problem Solving",
        desc: "You enjoy finding optimal ways to structure code and algorithms.",
        icon: "Brain"
      },
      {
        title: "Technology Curiosity",
        desc: "You like exploring how digital systems, APIs and apps communicate.",
        icon: "Code"
      },
      {
        title: "Fast Iteration",
        desc: "You like learning new tools, frameworks and refining workflows.",
        icon: "Zap"
      }
    ],
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
    tagline: "Design intuitive, delightful user experiences for AI-powered products and modern web apps.",
    fitSummary: "Great fit for your creative instincts, empathy for users, and passion for design & tech.",
    salaryRange: "$95,000 – $150,000 / yr",
    outlook: "Strong Demand (+20% by 2030)",
    difficulty: "Moderate",
    profileBadges: ["Design", "Empathy", "Visuals", "User Research"],
    whyItMatches: [
      {
        title: "Visual Creativity",
        desc: "You have an eye for aesthetics, typography, and intuitive layouts.",
        icon: "Palette"
      },
      {
        title: "User Empathy",
        desc: "You enjoy understanding human psychology and simplifying friction.",
        icon: "Users"
      },
      {
        title: "Product Vision",
        desc: "You connect user needs with real-world product solutions.",
        icon: "Lightbulb"
      },
      {
        title: "AI Interaction",
        desc: "You are excited to design new paradigms for AI chatbots and interfaces.",
        icon: "Sparkles"
      }
    ],
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
  },
  {
    id: "ai-pm",
    title: "AI Product Manager",
    defaultMatch: 88,
    tagline: "Lead cross-functional teams to define, build and launch impactful AI products.",
    fitSummary: "Great match for leadership, business strategy, communication, and tech curiosity.",
    salaryRange: "$115,000 – $175,000 / yr",
    outlook: "High Growth (+30% by 2030)",
    difficulty: "Moderate-Advanced",
    profileBadges: ["Leadership", "Strategy", "Communication", "Tech Sense"],
    whyItMatches: [
      {
        title: "Leadership & Direction",
        desc: "You enjoy setting goals, coordinating people, and driving results.",
        icon: "Compass"
      },
      {
        title: "Communication",
        desc: "You bridge conversations between engineers, designers, and customers.",
        icon: "MessageSquare"
      },
      {
        title: "Strategic Thinking",
        desc: "You prioritize high-leverage problems that create maximum value.",
        icon: "TrendingUp"
      },
      {
        title: "Tech Enthusiasm",
        desc: "You understand what AI can achieve and how to apply it ethically.",
        icon: "Brain"
      }
    ],
    skills: [
      { name: "Product Strategy & Roadmaps", category: "Core", level: "Essential" },
      { name: "User Research & PRDs", category: "Documentation", level: "Essential" },
      { name: "Metrics & Analytics", category: "Data", level: "Core" },
      { name: "AI / Tech Literacy", category: "Technical", level: "Core" },
      { name: "Agile & Scrum", category: "Workflow", level: "Practical" }
    ],
    roadmap: [
      {
        stepNumber: "01",
        title: "Product Foundations",
        focus: "Customer Discovery & PRDs",
        duration: "2–3 weeks",
        description: "Learn how to define problem statements, customer personas, and write clear Product Requirements Documents (PRDs).",
        milestones: ["Write 2 PRDs for real-world apps", "Map customer value propositions"],
        resources: [{ name: "Lenny's Newsletter & Product School", type: "Articles" }]
      },
      {
        stepNumber: "02",
        title: "Tech & AI Literacy",
        focus: "AI Capabilities & APIs",
        duration: "2–3 weeks",
        description: "Understand LLMs, APIs, data pipelines, latency, and feasibility trade-offs.",
        milestones: ["Build a prototype using OpenAI / Gemini APIs and No-Code tools", "Understand unit economics of AI"],
        resources: [{ name: "AI for Everyone (Andrew Ng)", type: "Course" }]
      },
      {
        stepNumber: "03",
        title: "Execution & Roadmapping",
        focus: "Prioritization Frameworks",
        duration: "3–4 weeks",
        description: "Master RICE scoring, sprint planning, backlog grooming, and North Star metric tracking.",
        milestones: ["Create an end-to-end product roadmap with Jira/Notion", "Define key success metrics (OKRs)"],
        resources: [{ name: "Inspired: How to Create Tech Products (Marty Cagan)", type: "Book" }]
      },
      {
        stepNumber: "04",
        title: "Product Teardowns & Projects",
        focus: "2 Comprehensive Teardowns",
        duration: "4 weeks",
        description: "Publish thorough product case studies analyzing growth, retention loops, and feature proposals.",
        milestones: ["Publish a deep teardown of an AI app", "Lead a hackathon project as Product Lead"],
        resources: [{ name: "Product Hunt & Hacker News Case Studies", type: "Analysis" }]
      },
      {
        stepNumber: "05",
        title: "APM Preparation",
        focus: "Product Sense Interviews",
        duration: "Ongoing",
        description: "Prepare for Associate Product Manager (APM) programs at top tech companies.",
        milestones: ["Practice 15 product design interview questions", "Apply to APM cohorts"],
        resources: [{ name: "Decode and Conquer by Lewis Lin", type: "Book" }]
      }
    ]
  },
  {
    id: "bioinformatics-researcher",
    title: "Computational Biologist",
    defaultMatch: 87,
    tagline: "Apply computational algorithms, machine learning, and data science to biological discovery.",
    fitSummary: "Ideal fit if you love science, biology, research, mathematics, and computing.",
    salaryRange: "$95,000 – $155,000 / yr",
    outlook: "Strong Growth (+28% by 2030)",
    difficulty: "Advanced",
    profileBadges: ["Science", "Research", "Algorithms", "Discovery"],
    whyItMatches: [
      {
        title: "Scientific Curiosity",
        desc: "You love exploring genetic code, molecular biology, and disease cures.",
        icon: "Atom"
      },
      {
        title: "Data & Algorithms",
        desc: "You enjoy analyzing complex biological sequencing datasets with code.",
        icon: "Binary"
      },
      {
        title: "High Impact",
        desc: "Your work directly accelerates healthcare, drug discovery, and genomics.",
        icon: "Heart"
      },
      {
        title: "Research Rigor",
        desc: "You appreciate deep inquiry, controlled experiments, and hypotheses.",
        icon: "Microscope"
      }
    ],
    skills: [
      { name: "Python / R (Bioconductor)", category: "Language", level: "Essential" },
      { name: "Genomics & Molecular Biology", category: "Domain", level: "Essential" },
      { name: "Statistical Genetics", category: "Mathematics", level: "Core" },
      { name: "Bioinformatics Pipelines (Nextflow)", category: "Tooling", level: "Core" },
      { name: "Structural Biology (AlphaFold)", category: "Advanced", level: "Specialized" }
    ],
    roadmap: [
      {
        stepNumber: "01",
        title: "Biology & Python Basics",
        focus: "Molecular Bio + BioPython",
        duration: "3 weeks",
        description: "Learn DNA/RNA sequence manipulation, protein structures, and basic computational genetics.",
        milestones: ["Parse FASTA files with BioPython", "Understand central dogma of molecular biology"],
        resources: [{ name: "Rosalind.info (Bioinformatics Algorithms)", type: "Platform" }]
      },
      {
        stepNumber: "02",
        title: "Genomic Data Analysis",
        focus: "R, Bioconductor & Statistics",
        duration: "3–4 weeks",
        description: "Perform differential expression analysis on RNA-Seq data using DESeq2 and R.",
        milestones: ["Analyze a public GEO dataset from NCBI", "Create heatmaps and volcano plots"],
        resources: [{ name: "HarvardX: Data Analysis for Life Sciences", type: "Course" }]
      },
      {
        stepNumber: "03",
        title: "AI in Life Sciences",
        focus: "Machine Learning & AlphaFold",
        duration: "4–6 weeks",
        description: "Explore protein structure prediction, molecular property prediction with PyTorch Geometric.",
        milestones: ["Run molecular docking simulations", "Fine-tune a biological language model (ESM)"],
        resources: [{ name: "Deep Learning for the Life Sciences (O'Reilly)", type: "Book" }]
      },
      {
        stepNumber: "04",
        title: "Research Project",
        focus: "Open Science Publication",
        duration: "4–6 weeks",
        description: "Conduct an original computational analysis on open cancer or single-cell datasets.",
        milestones: ["Publish code on GitHub with reproducible Docker container", "Draft a research preprint"],
        resources: [{ name: "Kaggle Tabular Playground Biological Sets", type: "Challenge" }]
      },
      {
        stepNumber: "05",
        title: "Academic & Industry Entry",
        focus: "Biotech / Lab Research",
        duration: "Ongoing",
        description: "Connect with university research labs, biotech startups, and genomics teams.",
        milestones: ["Join an academic research lab as undergraduate researcher", "Attend bioinformatics seminars"],
        resources: [{ name: "ISCB (International Society for Computational Biology)", type: "Society" }]
      }
    ]
  }
];

// Dynamic matching calculator based on user selections
export function calculateCareerMatches(userAnswers) {
  const { interests = [], strengths = [], subjects = [], workPreferences = [] } = userAnswers;

  // Score each career
  const scoredCareers = CAREER_DATABASE.map(career => {
    let score = 70; // baseline
    const matchReasons = [];

    // Check interests
    if (interests.includes("technology")) {
      if (["ml-engineer", "software-engineer", "data-scientist", "ai-pm"].includes(career.id)) {
        score += 8;
        matchReasons.push("Strong affinity for coding and building technology");
      }
    }
    if (interests.includes("problem_solving")) {
      score += 6;
      matchReasons.push("Excellent fit for logic and structured problem solving");
    }
    if (interests.includes("design")) {
      if (career.id === "product-designer") {
        score += 18;
        matchReasons.push("Direct alignment with creative visual design");
      }
      if (career.id === "ai-pm") score += 5;
    }
    if (interests.includes("science")) {
      if (career.id === "bioinformatics-researcher" || career.id === "ml-engineer") {
        score += 12;
        matchReasons.push("Strong match for scientific curiosity and discovery");
      }
      if (career.id === "data-scientist") score += 6;
    }
    if (interests.includes("business")) {
      if (career.id === "ai-pm") {
        score += 14;
        matchReasons.push("Aligned with strategic leadership and business goals");
      }
      if (career.id === "data-scientist") score += 5;
    }
    if (interests.includes("people")) {
      if (career.id === "product-designer" || career.id === "ai-pm") {
        score += 10;
        matchReasons.push("High alignment with user empathy and communication");
      }
    }

    // Check strengths
    if (strengths.includes("analytical_thinking") || strengths.includes("problem_solving_strength")) {
      if (["ml-engineer", "data-scientist", "software-engineer", "bioinformatics-researcher"].includes(career.id)) {
        score += 8;
      }
    }
    if (strengths.includes("creativity") && career.id === "product-designer") {
      score += 10;
    }
    if (strengths.includes("leadership") && career.id === "ai-pm") {
      score += 10;
    }
    if (strengths.includes("fast_learning")) {
      score += 4;
    }

    // Check subjects
    if (subjects.includes("mathematics")) {
      if (["ml-engineer", "data-scientist", "bioinformatics-researcher"].includes(career.id)) {
        score += 7;
        matchReasons.push("Mathematics background enhances quantitative edge");
      }
    }
    if (subjects.includes("computer_science")) {
      if (["ml-engineer", "software-engineer", "data-scientist"].includes(career.id)) {
        score += 8;
      }
    }
    if (subjects.includes("arts_design") && career.id === "product-designer") {
      score += 10;
    }
    if (subjects.includes("science") && career.id === "bioinformatics-researcher") {
      score += 10;
    }

    // Check work preferences
    if (workPreferences.includes("building_technology") && ["ml-engineer", "software-engineer"].includes(career.id)) {
      score += 8;
    }
    if (workPreferences.includes("analyzing_data") && ["data-scientist", "ml-engineer"].includes(career.id)) {
      score += 8;
    }
    if (workPreferences.includes("creating_designs") && career.id === "product-designer") {
      score += 12;
    }
    if (workPreferences.includes("leading_projects") && career.id === "ai-pm") {
      score += 10;
    }
    if (workPreferences.includes("research_discovery") && ["bioinformatics-researcher", "ml-engineer"].includes(career.id)) {
      score += 8;
    }

    // Cap at 98%
    const finalScore = Math.min(98, Math.max(78, score));

    return {
      ...career,
      matchPercentage: finalScore,
      customReasons: matchReasons.slice(0, 3)
    };
  });

  // Sort descending by match score
  scoredCareers.sort((a, b) => b.matchPercentage - a.matchPercentage);

  return scoredCareers;
}

// Generate dynamic user profile summary tags
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

// Pre-packaged AI Assistant responses for common student questions
export const AI_KNOWLEDGE_BASE = {
  math_question: {
    triggers: ["math", "maths", "weak at math", "calculus", "scared of math"],
    response: "Yes, absolutely! You do not need a degree in advanced pure mathematics to succeed in ML or Software Engineering. You can start with basic statistics and practical Python libraries (NumPy, Scikit-Learn). As you build real projects, you will gradually pick up the essential linear algebra and probability concepts along the way!"
  },
  first_step: {
    triggers: ["learn first", "what should i learn", "beginner", "where to start", "first step"],
    response: "Start with **Python fundamentals**! Focus on basic data structures (lists, dictionaries) and writing simple scripts. Spend 2 weeks doing hands-on exercises before diving into heavy math or frameworks. Building momentum early is key."
  },
  courses: {
    triggers: ["course", "recommend courses", "free courses", "certifications", "tutorials"],
    response: "Here are the 3 best free beginner resources:\n1. **CS50P (Harvard's Python)** — Free on YouTube/edX.\n2. **Kaggle Micro-Courses** — Interactive 15-minute Python & ML tutorials.\n3. **Andrew Ng's Machine Learning Specialization** — The gold standard for intuitive machine learning."
  },
  compare: {
    triggers: ["compare", "difference", "data scientist vs ml", "software engineer vs"],
    response: "Here is the key distinction:\n• **ML Engineer**: Focuses on building, training, and deploying AI models into production software.\n• **Data Scientist**: Focuses on analyzing data, finding business patterns, and statistical experiments.\n• **Software Engineer**: Focuses on overall application architecture, APIs, frontend, and backend systems."
  },
  default_roadmap: {
    triggers: ["roadmap", "timeline", "how long", "schedule"],
    response: "A solid beginner-to-internship roadmap takes about **16 to 24 weeks** at 8–10 hours per week: 4 weeks for programming foundations, 4 weeks for fundamentals & data, 6 weeks for core specialization, and 6 weeks for 2 real-world portfolio projects."
  }
};
