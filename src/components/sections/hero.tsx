import { MapPin, Phone, Star } from "lucide-react";

import { ShopSign } from "@/components/shop-sign";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export function Hero() {
  return (
    <section
      id="top"
      className="relative border-b border-zinc-200 bg-white"
      aria-labelledby="shop-name"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <p className="mb-6 text-center font-serif text-royal italic">
          Neighborhood chairs on Technology Drive · Suite #114
        </p>

        <ShopSign />

        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-zinc-700 sm:text-lg">
          Family-owned barber shop in Frisco, Texas. Men’s haircuts, boys’
          cuts, fades, and beard trims — quality work, appointments that stick,
          and conversation that isn’t a sales pitch. Regulars book ahead. You
          should too.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 rounded-md bg-pole-red px-6 text-base text-white hover:bg-pole-red/90",
            )}
          >
            <Phone className="size-4" />
            Call {site.phoneDisplay}
          </a>
          <a
            href="#visit"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-md border-royal/25 bg-white px-6 text-base text-royal hover:bg-royal/5",
            )}
          >
            <MapPin className="size-4" />
            Find the shop
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-lg border border-zinc-200 bg-white px-4 py-3">
            <span
              className="flex items-center gap-0.5 text-pole-red"
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <p className="text-sm font-medium text-zinc-800">
              <span className="font-semibold">{site.rating} stars</span> on{" "}
              {site.ratingSource} · ~{site.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
