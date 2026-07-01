import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "mindprint",
    title: "MindPrint",
    description:
      "An AI-powered mobile wellness app built for Sri Lankan undergraduate students, using text and voice analysis to track mood patterns. Features an offline-first architecture with a rule-based mood prediction engine, built as a final-year software engineering project.",
    techStack: [
      "Flutter",
      "Firebase",
      "Riverpod",
      "GoRouter",
      "HuggingFace API",
      "AssemblyAI API",
    ],
    // TODO: add the actual project image at public/images/projects/mindprint.png.
    imageUrl: "/images/projects/mindprint.png",
    // TODO: add the real GitHub URL.
    githubUrl: "#",
    liveUrl: undefined,
    featured: true,
    longDescription:
      "MindPrint was designed to support student mental wellness tracking for Sri Lankan undergraduate students. The project focuses on making mood reflection more accessible by combining mobile-first journaling with text and voice analysis, helping students notice patterns in how they feel over time.\n\nThe technical approach uses an offline-first Flutter architecture so core app flows can continue even when connectivity is limited. Mood prediction is handled through a rule-based engine, while richer text and voice signals are processed through a pipeline that integrates HuggingFace and AssemblyAI APIs for NLP and transcription support.\n\nThe outcome is a final-year software engineering project that brings together mobile development, AI/NLP integration, Firebase-backed persistence, and practical system design around a real student wellness problem.",
    // TODO: placeholder paths - add real screenshots to public/images/projects/.
    screenshots: [
      "/images/projects/mindprint-1.png",
      "/images/projects/mindprint-2.png",
      "/images/projects/mindprint-3.png",
    ],
    features: [
      "Offline-first architecture for uninterrupted use",
      "Voice and text-based mood analysis",
      "Rule-based mood prediction engine",
      "Built with Flutter for cross-platform mobile support",
    ],
    role: "Solo Developer (Final Year Project)",
  },
  // TODO: replace with real project.
  {
    id: "project-2",
    title: "Project Two",
    description:
      "Placeholder description - replace with a real project (e.g. a web app, API, or tool you've built).",
    techStack: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "#",
    featured: false,
    longDescription:
      "TODO: Replace this placeholder with a fuller write-up for a real project. Describe the problem, the technical approach, and what the project demonstrates.",
    screenshots: [
      "/images/projects/project-2-1.png",
      "/images/projects/project-2-2.png",
    ],
    features: [
      "TODO: Replace with a real project feature",
      "TODO: Replace with a technical highlight",
      "TODO: Replace with a measurable outcome",
    ],
    role: "TODO: Add role",
  },
  // TODO: replace with real project.
  {
    id: "project-3",
    title: "Project Three",
    description: "Placeholder description - replace with a real project.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    featured: false,
    longDescription:
      "TODO: Replace this placeholder with a real project overview. Include the goal, architecture, tools used, and what you learned from building it.",
    screenshots: [
      "/images/projects/project-3-1.png",
      "/images/projects/project-3-2.png",
    ],
    features: [
      "TODO: Replace with a real feature",
      "TODO: Replace with a UI or engineering highlight",
      "TODO: Replace with deployment or performance notes",
    ],
    role: "TODO: Add role",
  },
];
