import { Star } from "lucide-react";

import { reviews, site } from "@/lib/site";

export function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-serif text-lg text-royal italic">
            04 — From the chair
          </p>
          <h2
            id="reviews-heading"
            className="font-display mt-2 text-4xl font-extrabold tracking-wide text-pole-red sm:text-5xl"
          >
            Neighbors said it better.
          </h2>
          <p className="mt-4 text-zinc-700">
            {site.rating} stars across ~{site.reviewCount} {site.ratingSource}{" "}
            reviews. A handful of the ones that sound like the shop:
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name + review.quote}
              className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <div
                className="mb-4 flex gap-0.5 text-pole-red"
                aria-label="5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-xl leading-relaxed text-zinc-800 italic">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-5 text-sm font-semibold tracking-[0.08em] text-royal uppercase">
                {review.name}
                <span className="ml-2 font-sans text-xs font-medium tracking-normal text-zinc-400 normal-case">
                  Google review
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
