import { Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.06)] md:hidden"
      role="region"
      aria-label="Call to book"
    >
      <a
        href={site.phoneHref}
        className={cn(
          buttonVariants({ size: "lg" }),
          "h-12 w-full rounded-md bg-pole-red text-base text-white hover:bg-pole-red/90",
        )}
      >
        <Phone className="size-4" />
        Call {site.phoneDisplay} to book
      </a>
    </div>
  );
}
