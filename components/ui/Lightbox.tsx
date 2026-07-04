"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxProps = {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
};

export function Lightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentIndex];

  const showPrevious = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMultipleImages, isOpen, onClose, showNext, showPrevious]);

  return (
    <AnimatePresence>
      {isOpen && currentImage ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-16 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot lightbox"
        >
          <button
            type="button"
            onClick={onClose}
            className="fixed right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Close screenshot viewer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="fixed left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:left-6"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="fixed right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-surface text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:right-6"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </>
          ) : null}

          <div
            className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-lg border border-border bg-surface"
            onClick={(event) => event.stopPropagation()}
          >
            {failedImages[currentImage] ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                <p className="font-mono text-xs uppercase tracking-wide text-muted">
                  Screenshot Placeholder
                </p>
                <p className="max-w-md text-sm text-muted">{currentImage}</p>
              </div>
            ) : (
              <Image
                src={currentImage}
                alt={`Project screenshot ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                onError={() =>
                  setFailedImages((current) => ({
                    ...current,
                    [currentImage]: true,
                  }))
                }
              />
            )}
          </div>

          {hasMultipleImages ? (
            <p className="fixed bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs text-muted">
              {currentIndex + 1} / {images.length}
            </p>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
