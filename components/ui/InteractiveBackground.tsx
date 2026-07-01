"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type InteractiveBackgroundProps = {
  variant: "spotlight" | "grid" | "dots" | "none";
  className?: string;
};

export function InteractiveBackground({
  variant,
  className,
}: InteractiveBackgroundProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    if (variant !== "spotlight") {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const element = layerRef.current;

      if (!element) {
        return;
      }

      const bounds = element.getBoundingClientRect();
      const isWithinSection =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!isWithinSection) {
        return;
      }

      setPosition({
        x: `${event.clientX - bounds.left}px`,
        y: `${event.clientY - bounds.top}px`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [variant]);

  if (variant === "none") {
    return null;
  }

  if (variant === "spotlight") {
    return (
      <div
        ref={layerRef}
        className={cn("absolute inset-0 -z-10 pointer-events-none", className)}
        style={
          {
            "--x": position.x,
            "--y": position.y,
            background:
              "radial-gradient(600px circle at var(--x) var(--y), rgba(99, 102, 241, 0.08), transparent 40%)",
          } as CSSProperties
        }
        aria-hidden="true"
      />
    );
  }

  if (variant === "grid") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 pointer-events-none",
          className,
        )}
        style={{
          backgroundImage:
            "linear-gradient(rgba(39, 39, 46, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(39, 39, 46, 0.03) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 pointer-events-none opacity-50",
        className,
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(228, 228, 231, 0.1) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
      aria-hidden="true"
    />
  );
}
