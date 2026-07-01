import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center text-foreground">
      <h1 className="font-mono text-2xl font-semibold text-primary">
        404 - Page not found
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Back home
      </Link>
    </main>
  );
}
