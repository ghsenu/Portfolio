"use client";

import type { MouseEvent } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const target = document.querySelector(href);

  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(event) => handleLinkClick(event, "#hero")}
          className="inline-flex min-h-11 items-center rounded-md font-mono text-lg font-bold text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Scroll to hero section"
        >
          {"<Gihansa />"}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleLinkClick(event, item.href)}
                className="group relative inline-flex min-h-11 items-center rounded-md font-mono text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <Button
            variant="secondary"
            className="font-mono text-xs uppercase tracking-wide"
            onClick={() =>
              window.open("/resume.pdf", "_blank", "noopener,noreferrer")
            }
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex min-h-screen flex-col bg-background/95 px-6 backdrop-blur-md md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex h-20 items-center justify-between">
              <a
                href="#hero"
                onClick={(event) => handleLinkClick(event, "#hero")}
                className="inline-flex min-h-11 items-center rounded-md font-mono text-lg font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Scroll to hero section"
              >
                {"<Gihansa />"}
              </a>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleLinkClick(event, item.href)}
                  className="inline-flex min-h-11 items-center rounded-md font-mono text-2xl font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-3xl"
                >
                  {item.label}
                </a>
              ))}

              <Button
                variant="secondary"
                className="mt-4 font-mono text-xs uppercase tracking-wide"
                onClick={() =>
                  window.open("/resume.pdf", "_blank", "noopener,noreferrer")
                }
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Resume
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
