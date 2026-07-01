"use client";

import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const categoryOrder = [
  "Languages",
  "Frameworks & Libraries",
  "Tools & Platforms",
  "Concepts",
];

const learningBadges = [
  "Agile Project Management (Atlassian)",
  "Agile Foundations",
  "Python Essential Training",
  "Business Analytics Fundamentals",
];

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

const groupedSkills = categoryOrder.map((category) => ({
  category,
  skills: skills.filter((skill) => skill.category === category),
}));

export function Skills() {
  return (
    <section id="skills" className="relative isolate overflow-hidden py-16 md:py-24">
      <InteractiveBackground variant="grid" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="02. Skills"
          title="Tools & Technologies"
          description="A practical toolkit shaped by mobile apps, full-stack web projects, and steady software engineering fundamentals."
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {groupedSkills.map(({ category, skills }) => (
            <motion.div key={category} variants={cardVariants}>
              <Card className="h-full transition-colors hover:border-primary/70">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-primary">
                  {category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge
                      key={skill.id}
                      className="transition duration-200 hover:scale-105 hover:border-primary hover:text-foreground"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-muted">
            Currently Learning / Recently Certified
          </p>
          <div className="flex flex-wrap gap-3">
            {learningBadges.map((label) => (
              <Badge
                key={label}
                className={cn(
                  "border-accent/40 bg-accent/10 text-accent",
                  "transition duration-200 hover:scale-105 hover:border-accent hover:bg-accent/15",
                )}
              >
                {label}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
