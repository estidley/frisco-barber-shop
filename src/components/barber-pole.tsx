"use client";

import { useId } from "react";

import { cn } from "cn";

type BarberPoleProps = {
  className?: string;
};

export function BarberPole({ className }: BarberPoleProps) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 72 280"
      className={cn(
        "aspect-[72/280] h-auto w-[clamp(1.35rem,6.2vw,3.15rem)] shrink-0",
        className,
      )}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern
          id={`pole-stripes-${id}`}
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-48)"
        >
          <rect width="16" height="16" fill="#ffffff" />
          <rect width="16" height="6" fill="#c51d2e" />
          <rect y="10" width="16" height="6" fill="#1e4bb8" />
        </pattern>
      </defs>
      <circle cx="36" cy="22" r="18" fill="#1e4bb8" />
      <circle cx="29" cy="16" r="6" fill="#ffffff" opacity="0.28" />
      <rect x="28" y="38" width="16" height="12" rx="1" fill="#1e4bb8" />
      <rect
        x="18"
        y="48"
        width="36"
        height="186"
        fill={`url(#pole-stripes-${id})`}
        stroke="#1e4bb8"
        strokeWidth="5"
      />
      <rect x="16" y="232" width="40" height="30" rx="3" fill="#1e4bb8" />
      <rect x="22" y="262" width="28" height="8" rx="1" fill="#1e4bb8" />
    </svg>
  );
}

export function BarberStripe({ className }: { className?: string }) {
  return (
    <div
      className={cn("barber-stripe h-2 w-full", className)}
      aria-hidden="true"
    />
  );
}
