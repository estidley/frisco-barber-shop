import { cn } from "cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        "h-[clamp(2rem,5.5vw,2.75rem)] w-[clamp(1.35rem,3.6vw,1.9rem)]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute top-0 left-1/2 h-[22%] w-[36%] -translate-x-1/2 rounded-full bg-royal" />
      <span className="barber-pole-mini absolute top-[18%] bottom-[12%] left-1/2 w-[40%] -translate-x-1/2 overflow-hidden border-[clamp(1.5px,0.35vw,2.5px)] border-royal bg-white" />
      <span className="absolute bottom-0 left-1/2 h-[10%] w-[58%] -translate-x-1/2 rounded-[1px] bg-royal" />
    </span>
  );
}
