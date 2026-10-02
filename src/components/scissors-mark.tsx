import { cn } from "cn";

export function ScissorsMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 28"
      className={cn("h-7 w-16 text-royal", className)}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="7" r="5" />
        <circle cx="10" cy="21" r="5" />
        <path d="M14.2 9.4 62 6.2" />
        <path d="M14.2 18.6 62 21.8" />
        <path d="M14 14h10" />
      </g>
    </svg>
  );
}
