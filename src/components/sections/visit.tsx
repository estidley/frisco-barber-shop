import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "cn";

export function Visit() {
  return (
    <section
      id="visit"
      className="scroll-mt-24 bg-white"
      aria-labelledby="visit-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-serif text-lg text-royal italic">06 — Pull up</p>
          <h2
            id="visit-heading"
            className="font-display mt-2 text-4xl font-extrabold tracking-wide text-pole-red sm:text-5xl"
          >
            Come see us. Call first.
          </h2>
          <p className="mt-4 text-zinc-700">
            {site.address.complex}. {site.address.suiteNote}. If the storage
            lot throws you off, you’re still in the right place — the shop is
            in that complex.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="flex items-center gap-2 font-serif text-royal italic">
                <MapPin className="size-4 text-pole-red" />
                Address
              </p>
              <address className="not-italic">
                <p className="font-display mt-3 text-2xl font-bold tracking-wide text-royal">
                  {site.name}
                </p>
                <p className="mt-2 font-display text-3xl font-bold tracking-wide text-royal">
                  {site.address.street}
                </p>
                <p className="text-lg text-zinc-700">
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>
              </address>
              <p className="mt-2 text-sm text-zinc-500">
                Plus code: {site.address.plusCode}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 rounded-md border-royal/25 text-royal hover:bg-royal/5",
                  )}
                >
                  <Navigation className="size-4" />
                  Open in Google Maps
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
                  Directions
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="flex items-center gap-2 font-serif text-royal italic">
                <Phone className="size-4 text-pole-red" />
                Book a chair
              </p>
              <a
                href={site.phoneHref}
                className="font-display mt-3 inline-block text-4xl font-bold tracking-wide text-pole-red hover:underline"
              >
                {site.phoneSign}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Tap to call. Appointments recommended — this shop books up with
                people who already know the chairs.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-royal/30 bg-white p-6">
              <p className="flex items-center gap-2 font-serif text-royal italic">
                <Clock className="size-4" />
                Hours — confirm when you call
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                We don’t post a full schedule here because it can change.
                Google has shown a lunch break around 1–3 PM, and some
                neighbors mention weekday visits. Treat both as something to
                confirm — the phone is the source of truth.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
            <iframe
              title="Map of Frisco Barber Shop at 6201 Technology Dr #114, Frisco, TX"
              src={site.mapsEmbedUrl}
              className="h-[28rem] w-full min-h-[28rem] border-0 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
