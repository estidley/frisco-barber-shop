import { MapPin, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export function LocalArea() {
  return (
    <section
      id="location"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <p className="font-serif text-lg text-royal italic">
            Neighborhood barber · Frisco, Texas
          </p>
          <h2
            id="location-heading"
            className="font-display mt-2 text-4xl font-extrabold tracking-wide text-pole-red sm:text-5xl"
          >
            A barber shop in Frisco, TX
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
            <p>
              Frisco Barber Shop sits at 6201 Technology Drive, suite 114 —
              inside the CubeSmart Self Storage complex in Frisco, Texas 75033.
              It is easy to miss if you are looking for a strip-mall salon.
              Look for the outdoor sign and suite #114.
            </p>
            <p>
              This is a family-owned neighborhood shop for men’s haircuts,
              boys’ cuts, fades, and beard trims. If you live or work near
              Technology Drive and want a regular barber — not a luxury lobby —
              call and book the chair.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="font-serif text-royal italic">Find us</p>
          <address className="mt-3 not-italic">
            <p className="font-display text-2xl font-bold tracking-wide text-royal">
              {site.name}
            </p>
            <p className="mt-2 text-zinc-800">{site.address.street}</p>
            <p className="text-zinc-800">
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              {site.address.complex}. {site.address.suiteNote}.
            </p>
          </address>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-md bg-pole-red text-white hover:bg-pole-red/90",
              )}
            >
              <Phone className="size-4" />
              Call {site.phoneDisplay}
            </a>
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-md border-royal/25 text-royal hover:bg-royal/5",
              )}
            >
              <MapPin className="size-4" />
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
