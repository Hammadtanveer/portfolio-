export const socials = {
  github: "https://github.com/Hammadtanveer",
  linkedin: "https://www.linkedin.com/in/hammad-tanveer-",
  email: "hammadtanveer247@gmail.com",
  whatsapp: "https://wa.me/917599625122",
  phoneDisplay: "+91 75996 25122",
};

export const projects = [
  {
    id: "campus-connect",
    name: "Campus Connect",
    tag: "Android · Kotlin · Firebase",
    categories: ["android"],
    stat: { label: "Status", value: "Live on Play Store" },
    desc: "A full-stack Android app (MVVM + Clean Architecture) solving campus resource-sharing and event-discovery gaps. Google Sign-In, email verification, Firestore security rules. First-author research paper presented at ICTEM 2.0.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Hilt"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.hammadtanveer.campusconnect" },
    ],
  },
  {
    id: "hirelens",
    name: "HireLens",
    tag: "AI Resume Screener",
    categories: ["ai", "fullstack"],
    stat: { label: "Type", value: "Explainable AI" },
    desc: "An explainable resume-screening web app that ranks PDF/DOCX/TXT resumes against job descriptions using TF-IDF cosine similarity and skill-taxonomy matching — built for transparent match rationale, not a black box.",
    stack: ["Python", "Flask", "scikit-learn", "TF-IDF", "NLP"],
    links: [
      { label: "Live Demo", url: "https://hirelens-b0wn.onrender.com/" },
      { label: "GitHub", url: "https://github.com/Hammadtanveer/HireLens" },
    ],
  },
  {
    id: "team-task-manager",
    name: "Team Task Manager",
    tag: "Full-Stack · Dockerized",
    categories: ["fullstack"],
    stat: { label: "Deploy", value: "Render + Vercel" },
    desc: "A full-stack task-management app with a FastAPI + MySQL REST backend and a JavaScript frontend, containerized with Docker and deployed as a live web service.",
    stack: ["FastAPI", "MySQL", "JavaScript", "Docker"],
    links: [
      { label: "Live Demo", url: "https://team-task-manager-glpl.onrender.com/login" },
      { label: "GitHub", url: "https://github.com/Hammadtanveer/team-task-manager" },
    ],
  },
  {
    id: "haryana-roadways",
    name: "Haryana Roadways",
    tag: "Interactive Web · Liquid Glass",
    categories: ["fullstack"],
    stat: { label: "Aesthetic", value: "Liquid Glass" },
    desc: "An interactive cinematic radio website designed with an Apple-inspired Liquid Glass glassmorphic UI. Syncs track metadata from YouTube's API, features interactive map seek controls, and streams audio smoothly.",
    stack: ["JavaScript", "HTML5", "CSS3", "YouTube API", "Glassmorphism"],
    links: [
      { label: "Live Demo", url: "https://haryana-roadways-lake.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Hammadtanveer/HARYANA-ROADWAYS" },
    ],
  },
  {
    id: "codesage",
    name: "CodeSage.ai",
    tag: "Generative AI Code Reviewer",
    categories: ["ai", "fullstack"],
    stat: { label: "Focus", value: "Streaming LLM UX" },
    desc: "An LLM-powered code review app integrating the Google Gemini API to analyze pasted code and GitHub files using review-specific prompts. Streams bug, security, performance, and refactoring feedback via Server-Sent Events with stream error handling and GitHub Actions CI.",
    stack: ["Python", "Google Gemini API", "Server-Sent Events", "GitHub Actions"],
    links: [{ label: "GitHub", url: "https://github.com/Hammadtanveer/CodeSage.ai" }],
  },
  {
    id: "unloop",
    name: "Unloop",
    tag: "Android · KMP · In Development",
    categories: ["android"],
    stat: { label: "Status", value: "In Development" },
    desc: "A focus and app-blocking app built with Kotlin Multiplatform and Compose Multiplatform. Uses an Android foreground service and UsageStatsManager to detect selected apps, show a blocking overlay, and require a 30-second countdown plus typed confirmation before exiting a session early.",
    stack: ["Kotlin Multiplatform", "Compose Multiplatform", "StateFlow", "UsageStatsManager"],
    links: [],
  },
  {
    id: "heart-disease",
    name: "Heart Disease Prediction",
    tag: "Machine Learning",
    categories: ["ml"],
    stat: { label: "Accuracy", value: "85%+" },
    desc: "A machine learning classifier that predicts heart disease risk from patient data, built and evaluated in a Jupyter Notebook pipeline with scikit-learn.",
    stack: ["Python", "scikit-learn", "Pandas", "Jupyter"],
    links: [{ label: "GitHub", url: "https://github.com/Hammadtanveer/Heart-disease-prediction-system-using-machine-learning-" }],
  },
  {
    id: "jarvis-ai",
    name: "Jarvis AI Assistant",
    tag: "Python · NLP",
    categories: ["ai"],
    stat: { label: "Type", value: "Voice Assistant" },
    desc: "A voice-controlled desktop assistant that understands natural-language commands and automates everyday desktop tasks.",
    stack: ["Python", "NLP", "Speech Recognition"],
    links: [{ label: "GitHub", url: "https://github.com/Hammadtanveer/Jarvis-AI-Virtual-Assistant" }],
  },
  {
    id: "ai-autoreply",
    name: "AI AutoReply Bot",
    tag: "Python · NLTK",
    categories: ["ai"],
    stat: { label: "Type", value: "Intent Pipeline" },
    desc: "An intent-based auto-reply pipeline that classifies incoming messages and generates contextually relevant responses automatically.",
    stack: ["Python", "NLTK", "NLP"],
    links: [{ label: "GitHub", url: "https://github.com/Hammadtanveer/AI-AutoReply-Bot" }],
  },
  {
    id: "time-announcer",
    name: "Time Announcer",
    tag: "Android · Kotlin",
    categories: ["android"],
    stat: { label: "Type", value: "Background Service" },
    desc: "A lightweight Android app that announces the current time immediately after you unlock your phone — runs as a foreground service and starts on boot.",
    stack: ["Kotlin", "Android", "Foreground Service"],
    links: [{ label: "GitHub", url: "https://github.com/Hammadtanveer/TimeAnnouncer" }],
  },
];

export const skills = [
  {
    group: "Android & Multiplatform",
    items: [
      "Kotlin", "Java", "Jetpack Compose", "Material 3", "Kotlin Multiplatform",
      "Compose Multiplatform", "Coroutines", "Flow", "MVVM", "MVI", "Hilt", "Koin", "WorkManager",
    ],
  },
  {
    group: "Applied AI & ML",
    items: [
      "Python", "Google Gemini API", "LLM Integration", "Prompt Design",
      "Server-Sent Events", "scikit-learn", "LangChain", "RAG",
    ],
  },
  {
    group: "Backend",
    items: [
      "Ktor", "REST APIs", "Firebase (Auth, Firestore, Cloud Functions)",
      "JWT", "SQL", "FastAPI", "Flask",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "Testing & Tools",
    items: ["Kotlin Test", "Git", "Gradle", "GitHub Actions", "Google Play Console", "Docker"],
  },
];

export const experience = [
  {
    role: "Freelance Android / Kotlin Multiplatform Developer",
    org: "Confidential Client · Carpooling App",
    period: "Aug 2026 — Present",
    tags: ["KMP", "Ktor", "Mutex JWT", "177 Tests"],
    points: [
      "Delivered the Android build and configured the iOS target; built ride publishing, route search, and seat booking in a shared Kotlin Multiplatform codebase.",
      "Integrated ride and booking REST APIs using Ktor, with multi-seat single-request bookings, idempotency key reuse on retries, and mutex-coordinated JWT refresh in encrypted Android storage.",
      "Recorded 177 passing Android host tests across 17 suites covering booking, retry handling, authentication, and route handling.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Nestor Vision Pvt. Ltd.",
    period: "Feb 2026 — Aug 2026",
    tags: ["Engineering", "Web Design Intern '25"],
    points: [
      "Contributed to assigned development tasks and project delivery with the engineering team.",
      "Previously completed a Web Design Intern stint (Jun — Aug 2025), improving website layouts and building responsive web components.",
    ],
  },
  {
    role: "Generative AI Virtual Internship",
    org: "IBM Skills Network · FutureSkills Prime",
    period: "Jun 2026 — Aug 2026",
    tags: ["GenAI", "LLMs"],
    points: [
      "Completed the FutureSkills Prime program with hands-on Generative AI exercises and mini-projects.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "AnkiDroid (10M+ installs, Apache-2.0)",
    period: "Feb 2026 — Mar 2026",
    tags: ["Kotlin", "API 36", "3 Merged PRs"],
    points: [
      "Shipped 3 merged Kotlin PRs (#20485, #20564, #20474): replaced free-text Learn Ahead and Timebox settings with validated stepper dialogs tested on an API 36 emulator.",
      "Removed unused imports across 18 Kotlin files, passed lint and ktlint checks, and cleaned up redundant Kotlin constructs.",
    ],
  },
];

export const certifications = [
  { name: "CS50: Intro to Programming with Python", org: "Harvard University" },
  { name: "Machine Learning (12-week)", org: "Ducat / ShapeMySkills" },
  { name: "The Complete Android 14 & Kotlin Development Masterclass", org: "Udemy" },
  { name: "Generative AI Essentials", org: "TCS iON" },
  { name: "Foundations of Cybersecurity", org: "Google (Coursera)" },
  { name: "AI & Cybersecurity Awareness", org: "TCS iON" },
  { name: "Python Essentials 1", org: "Cisco / OpenEDG Python Institute" },
  { name: "PCAP: Programming Essentials in Python", org: "Cisco / OpenEDG Python Institute" },
  { name: "Manage Security Risks", org: "Google" },
  { name: "Exploratory Data Analysis (Gold)", org: "NASSCOM" },
  { name: "Developing Soft Skills and Personality", org: "NPTEL, IIT Kanpur" },
  { name: "Digital 101 Journey", org: "NASSCOM FutureSkills Prime" },
  { name: "Web Designing (HTML/CSS)", org: "Technoledge Eduresearch" },
];

export const achievements = [
  {
    title: "First-Author Research Publication",
    detail: "\u201cCampusConnect: A Smart Android Platform to Boost Student Engagement and Resource Sharing on Campus\u201d — IJERT, ICTEM 2.0 issue (May 2026) · Paper ID: IJERTCONV14IS040076",
  },
  {
    title: "Top 10 — Hack with Uttar Pradesh 2025",
    detail: "Open Innovation Track, Chandigarh University Technology Business Incubator",
  },
  {
    title: "FutureStack GenAI Hackathon 2025",
    detail: "Built a deep learning solution with Meta LLaMA models and Cerebras inference, containerized with Docker",
  },
];

export const services = [
  { title: "Web Development", desc: "Fast, responsive websites and web apps — React frontends, FastAPI/Flask backends." },
  { title: "Android App Development", desc: "Native Android apps in Kotlin + Jetpack Compose, MVVM architecture, Firebase backend." },
  { title: "GenAI & LLM Integration", desc: "RAG pipelines, AI agents, and LLM-powered features using LangChain, OpenAI, and Gemini APIs." },
  { title: "AI Chatbots & Automation", desc: "Custom chatbots and workflow automation tied into your existing tools and data." },
  { title: "API Development", desc: "Clean, documented REST APIs with FastAPI/Flask, containerized and deployment-ready." },
];

export const education = {
  school: "Moradabad Institute of Technology (AKTU)",
  degree: "B.Tech, Computer Science and Engineering",
  period: "2022 — 2026",
  note: "First Division · AKTU Tuition Fee Waiver Scholarship — merit-based, top 5% of intake batch",
};
