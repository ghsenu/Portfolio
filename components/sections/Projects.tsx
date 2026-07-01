"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const featuredProject = projects.find((project) => project.featured);
const standardProjects = projects.filter((project) => !project.featured);

function ProjectLinks({
  githubUrl,
  liveUrl,
}: {
  githubUrl?: string;
  liveUrl?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="View project on GitHub"
        >
          <Github className="h-5 w-5" aria-hidden="true" />
        </a>
      ) : null}
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="View live project"
        >
          <ExternalLink className="h-5 w-5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative isolate overflow-hidden py-16 md:py-24">
      <InteractiveBackground variant="dots" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03. Projects"
          title="Things I've Built"
          description="A growing collection of mobile and web projects, with MindPrint as the current flagship case study."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {featuredProject ? (
            <motion.div variants={cardVariants}>
              <Card className="transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div className="aspect-video overflow-hidden rounded-md border border-border bg-surfaceLight">
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                      <p className="font-mono text-xs uppercase tracking-wide text-muted">
                        Project Preview
                      </p>
                      <p className="max-w-sm text-sm text-muted">
                        Add the image later at{" "}
                        <span className="font-mono text-foreground">
                          {featuredProject.imageUrl}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <Badge className="border-accent/40 bg-accent/10 text-accent">
                      Featured
                    </Badge>
                    <h3 className="mt-5 text-2xl font-bold text-foreground md:text-4xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                      {featuredProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {featuredProject.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          className="transition duration-200 hover:scale-105 hover:border-primary hover:text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8">
                      <ProjectLinks
                        githubUrl={featuredProject.githubUrl}
                        liveUrl={featuredProject.liveUrl}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ) : null}

          <motion.div
            className="mt-6 grid gap-6 md:grid-cols-2"
            variants={containerVariants}
          >
            {standardProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants}>
                <Card className="flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          className="transition duration-200 hover:scale-105 hover:border-primary hover:text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <ProjectLinks
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
