"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "5+", label: "Certifications" },
  { value: "2", label: "Tech Stacks: Web + Mobile" },
  { value: "1", label: "Featured App" },
];

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-16 md:py-24">
      <InteractiveBackground variant="none" />
      <motion.div
        className="relative z-10 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionHeading eyebrow="01. About" title="A bit about me" />

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5 text-muted">
            <p className="leading-relaxed">
              I am a software engineering undergraduate focused on turning what
              I learn into useful, working products. I enjoy building across the
              stack, especially when a project has a clear real-world problem to
              solve.
            </p>
            <p className="leading-relaxed">
              One of my key projects is MindPrint, an AI-powered mobile app for
              Sri Lankan undergraduate students. I built it with Flutter,
              Firebase, and NLP APIs to support mood and wellness tracking in a
              practical, student-friendly way.
            </p>
            <p className="leading-relaxed">
              I am still growing, and I like that part. I keep strengthening my
              skills through certifications, independent projects, and steady
              practice, with the goal of contributing meaningfully in a software
              engineering internship.
            </p>
          </div>

          <Card className="self-start">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-md border border-border bg-background/40 p-4"
                >
                  <p className="font-mono text-3xl font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
