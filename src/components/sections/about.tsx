import { ShopSign } from "@/components/shop-sign";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
        <div>
          <p className="font-serif text-lg text-royal italic">01 — The shop</p>
          <h2
            id="about-heading"
            className="font-display mt-2 text-4xl font-extrabold tracking-wide text-balance text-pole-red sm:text-5xl"
          >
            A family shop, not a salon.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
            <p>
              Frisco Barber Shop is a classic, family-owned barbershop on
              Technology Drive. We’re in the CubeSmart Self Storage complex —
              suite #114 — and the vibe is neighborhood, not luxury lobby.
            </p>
            <p>
              The outdoor sign says it plainly: Gentleman’s Choice of Style.
              Cut to Approval. Men &amp; Boys. Quality cuts, appointments that
              actually mean something, and conversation that isn’t forced.
            </p>
            <p>
              We’re USMC veteran-owned. We’re proud of that. We don’t hang it
              on every wall. We just keep the chairs honest and the work clean.
            </p>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <dt className="font-serif text-royal italic">Owned by</dt>
              <dd className="mt-1 font-medium text-zinc-900">
                Family-owned · USMC veteran-owned
              </dd>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <dt className="font-serif text-royal italic">Where</dt>
              <dd className="mt-1 font-medium text-zinc-900">
                6201 Technology Dr #114, Frisco
              </dd>
            </div>
          </dl>
        </div>
        <figure>
          <ShopSign />
          <figcaption className="mt-3 text-center text-xs tracking-[0.14em] text-zinc-500 uppercase">
            The sign on Technology Drive
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
