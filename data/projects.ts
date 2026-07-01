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
  },
  // TODO: replace with real project.
  {
    id: "project-3",
    title: "Project Three",
    description: "Placeholder description - replace with a real project.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    featured: false,
  },
];
