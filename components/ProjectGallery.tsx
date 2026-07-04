"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";

type ProjectGalleryProps = {
  screenshots: string[];
  projectTitle: string;
};

function ScreenshotThumbnail({
  projectTitle,
  src,
  index,
  onOpen,
}: {
  projectTitle: string;
  src: string;
  index: number;
  onOpen: () => void;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-surfaceLight text-left transition duration-300 hover:scale-[1.01] hover:border-primary hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Open ${projectTitle} screenshot ${index + 1}`}
    >
      {hasError ? (
        <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            Screenshot Placeholder
          </p>
          <p className="text-sm text-muted">{src}</p>
        </div>
      ) : (
        <Image
          src={src}
          alt={`${projectTitle} screenshot ${index + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
          onError={() => setHasError(true)}
        />
      )}

      <span className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary">
          <ZoomIn className="h-5 w-5" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}

export function ProjectGallery({
  screenshots,
  projectTitle,
}: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <ScreenshotThumbnail
            key={screenshot}
            projectTitle={projectTitle}
            src={screenshot}
            index={index}
            onOpen={() => openLightbox(index)}
          />
        ))}
      </div>

      <Lightbox
        images={screenshots}
        initialIndex={selectedIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
