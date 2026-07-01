"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setForm(initialFormState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <SectionHeading eyebrow="05. Contact" title="Let's Connect" />

        <p className="mb-8 text-muted">
          I&apos;m actively looking for software engineering internship
          opportunities - feel free to reach out if you&apos;d like to connect
          or collaborate.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs uppercase tracking-wide text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell me what you'd like to build or discuss."
              className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={status === "loading"}
            className="w-full sm:w-auto"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" ? (
            <p className="flex items-center gap-2 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Message sent! I&apos;ll get back to you soon.
            </p>
          ) : null}

          {status === "error" ? (
            <p className="flex items-center gap-2 text-sm text-red-400">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              Something went wrong - please try again or email me directly.
            </p>
          ) : null}
        </form>
      </motion.div>
    </section>
  );
}
