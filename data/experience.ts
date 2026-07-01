import type { Experience } from "@/types";

// TODO: Add internship/work experience entries here once available, using type: 'work'.
export const experience: Experience[] = [
  {
    id: "cert-atlassian-agile",
    role: "Atlassian Agile Project Management Professional Certificate",
    organization: "LinkedIn Learning",
    startDate: "2026",
    type: "certification",
    description:
      "Completed a professional certificate covering Agile project management, Scrum, Kanban, and Jira workflows.",
  },
  {
    id: "cert-python",
    role: "Python Essential Training",
    organization: "LinkedIn Learning",
    startDate: "2026",
    type: "certification",
    description:
      "Completed hands-on training covering Python fundamentals and practical programming exercises.",
  },
  {
    id: "cert-agile-foundations",
    role: "Agile Foundations",
    organization: "LinkedIn Learning",
    startDate: "2025",
    type: "certification",
    description: "Completed foundational training in Agile principles and practices.",
  },
  {
    id: "education-degree",
    role: "BSc (Hons) in Software Engineering",
    // TODO - replace with actual university name.
    organization: "University",
    // TODO - confirm actual start year.
    startDate: "2022",
    // TODO - confirm actual/expected graduation year.
    endDate: "2026",
    type: "education",
    description:
      "Undergraduate degree focused on software engineering, including a final-year project (MindPrint) covering mobile development, AI/NLP integration, and system design.",
  },
];
