import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted md:flex-row">
        <p className="font-mono">
          &copy; {year} Gihansa Senukie. Built with Next.js.
        </p>

        <div className="flex items-center gap-4">
          {/* TODO: add GitHub URL */}
          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* TODO: add LinkedIn URL */}
          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* TODO: add email address */}
          <a
            href="#"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
