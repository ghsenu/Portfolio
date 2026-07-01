import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectDetailContent } from "./ProjectDetailContent";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | Gihansa Senukie",
    };
  }

  return {
    title: `${project.title} | Gihansa Senukie`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
