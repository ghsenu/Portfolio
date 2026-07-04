"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type ProjectDetailContentProps = {
  project: Project;
};

function openExternalLink(url?: string) {
  if (!url || url === "#") {
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const overview = project.longDescription ?? project.description;
  const paragraphs = overview.split(/\n\s*\n/).filter(Boolean);
  const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl !== "#");

  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-foreground md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Link
          href="/#projects"
          className="mb-10 inline-flex min-h-11 items-center gap-2 rounded-md font-mono text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </Link>

        <header>
          <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-5xl">
            {project.title}
          </h1>
          {project.role ? (
            <p className="mt-3 text-muted">{project.role}</p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.githubUrl ? (
              <Button
                variant="primary"
                onClick={() => openExternalLink(project.githubUrl)}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </Button>
            ) : null}
            {hasLiveDemo ? (
              <Button
                variant="secondary"
                onClick={() => openExternalLink(project.liveUrl)}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </Button>
            ) : null}
          </div>
        </header>

        {project.screenshots?.length ? (
          <section className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Screenshots
            </h2>
            <ProjectGallery
              screenshots={project.screenshots}
              projectTitle={project.title}
            />
          </section>
        ) : null}

        <section className="mt-14">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Overview</h2>
          <div className="space-y-5">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {project.features?.length ? (
          <section className="mt-14">
            <h2 className="mb-5 text-2xl font-bold text-foreground">
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-muted">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-none text-accent"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </motion.div>
    </main>
  );
}
