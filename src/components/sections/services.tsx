import { Phone } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { services, site } from "@/lib/site";
import { cn } from "cn";

const marks = ["01", "02", "03", "04"];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-serif text-lg text-royal italic">
              02 — Men &amp; Boys
            </p>
            <h2
              id="services-heading"
              className="font-display mt-2 text-4xl font-extrabold tracking-wide text-pole-red sm:text-5xl"
            >
              Men’s cuts, boys’ cuts, fades, beard trims.
            </h2>
            <p className="mt-4 max-w-xl text-zinc-700">
              Looking for a men’s haircut, boys’ cut, fade, or beard trim in
              Frisco? Cut to approval. We don’t list prices here — call the
              shop and we’ll get you squared away.
            </p>
          </div>
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-11 shrink-0 rounded-md border-royal/25 text-royal hover:bg-royal/5",
            )}
          >
            <Phone className="size-4" />
            Call for pricing
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-2xl border-zinc-200 bg-white py-6 shadow-none ring-zinc-200/80"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <h3 className="font-display text-3xl font-bold tracking-wide text-royal">
                  {service.title}
                </h3>
                <span className="font-serif text-lg text-pole-red italic">
                  {marks[index]}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {service.copy}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
