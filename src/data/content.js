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
    tag: "AI Code Review Assistant",
    categories: ["ai", "fullstack"],
    stat: { label: "Focus", value: "Streaming LLM UX" },
    desc: "A full-stack AI code-mentor web app that streams AI-generated code reviews (bugs, security, performance, refactoring) via Server-Sent Events using the Cerebras API. Rate limiting, CORS allow-listing, prompt-injection defenses.",
    stack: ["React", "TypeScript", "Flask", "Docker", "Cerebras API"],
    links: [{ label: "GitHub", url: "https://github.com/Hammadtanveer/CodeSage.ai" }],
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
  { group: "Languages", items: ["Python", "Java", "Kotlin", "TypeScript", "SQL"] },
  { group: "AI / GenAI", items: ["LangChain", "OpenAI API", "Gemini API", "RAG", "Prompt Engineering", "AI Agents", "NLP"] },
  { group: "Backend", items: ["FastAPI", "Flask", "Django", "REST APIs", "Clean Architecture"] },
  { group: "Mobile App Development", items: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Hilt", "Android Studio"] },
  { group: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { group: "Cloud & Tools", items: ["Docker", "GitHub Actions CI/CD", "Render", "Vercel", "Git"] },
];

export const experience = [
  {
    role: "Software Developer Intern",
    org: "Nestor Vision Pvt. Ltd.",
    period: "Feb 2026 — Present",
    points: [
      "Progressed from an earlier Web Development Intern role (Jun–Aug 2025) into a 6-month Software Developer internship.",
      "Executing development tasks and collaborating on problem-solving and project delivery.",
    ],
  },
  {
    role: "Open Source Contributor",
    org: "AnkiDroid (10M+ installs, Apache-2.0)",
    period: "2026",
    points: [
      "Shipped 3 merged pull requests (#20564, #20485, #20474) fixing bugs and improving UI.",
      "A dialog-string/UI fix was adopted verbatim by a maintainer in a later PR with explicit credit.",
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
    detail: "\u201cCampus Connect: A Smart Android Platform to Boost Student Engagement and Resource Sharing on Campus\u201d — ICTEM 2.0, MIT Moradabad (Mar 2026)",
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
