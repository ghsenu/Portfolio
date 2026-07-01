"use client";

import { motion, type Variants } from "framer-motion";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function formatDateRange(startDate: string, endDate?: string) {
  return endDate ? `${startDate} - ${endDate}` : startDate;
}

function getTypeLabel(type: "work" | "education" | "certification") {
  if (type === "education") {
    return "Education";
  }

  if (type === "certification") {
    return "Certification";
  }

  return "Work";
}

export function Experience() {
  return (
    <section id="experience" className="relative isolate overflow-hidden py-16 md:py-24">
      <InteractiveBackground variant="none" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="04. Experience"
          title="Education & Certifications"
          description="A timeline of formal learning, certifications, and software engineering growth."
        />

        <motion.div
          className="relative ml-3 space-y-10 border-l-2 border-border pl-6 sm:ml-4 sm:pl-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item) => {
            const isEducation = item.type === "education";

            return (
              <motion.article
                key={item.id}
                className="relative"
                variants={itemVariants}
              >
                <span
                  className={cn(
                    "absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-background sm:-left-[41px]",
                    isEducation ? "bg-primary" : "bg-accent",
                  )}
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-muted">
                    {formatDateRange(item.startDate, item.endDate)}
                  </p>
                  <Badge
                    className={cn(
                      "px-2.5 py-0.5 text-[11px]",
                      isEducation
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-accent/40 bg-accent/10 text-accent",
                    )}
                  >
                    {getTypeLabel(item.type)}
                  </Badge>
                </div>

                <h3 className="mt-3 text-lg font-bold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.organization}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
