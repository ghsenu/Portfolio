"use client";

import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const stack = ["TypeScript", "React", "Next.js", "Flutter", "Firebase", "Python"];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center py-20 md:py-24"
    >
      <motion.div
        className="max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="mb-5 flex items-center gap-2 font-mono text-sm text-accent"
          variants={itemVariants}
        >
          $ whoami
          <span className="h-4 w-2 bg-accent animate-[cursor-blink_1s_steps(2)_infinite]" />
        </motion.p>

        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-bold tracking-normal text-foreground sm:text-5xl md:text-7xl">
            Gihansa Senukie
          </h1>
          <p className="mt-3 text-2xl font-semibold text-primary sm:text-3xl md:text-5xl">
            Software Engineer
          </p>
        </motion.div>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          variants={itemVariants}
        >
          Software engineering undergraduate building practical full-stack
          projects across web and mobile. I work with Flutter, Firebase, React,
          and Next.js, growing through hands-on projects and certifications
          while seeking software engineering internship opportunities.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          variants={itemVariants}
        >
          <Button variant="primary" onClick={() => scrollToSection("#projects")}>
            View Projects
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection("#contact")}>
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 flex max-w-2xl flex-wrap gap-3"
          variants={itemVariants}
        >
          {stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </motion.div>
      </motion.div>

      <ChevronDown
        className="absolute bottom-8 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-muted"
        aria-hidden="true"
      />
    </section>
  );
}
