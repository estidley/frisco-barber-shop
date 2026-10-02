import { crewNames } from "@/lib/site";

export function Crew() {
  return (
    <section
      id="crew"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
      aria-labelledby="crew-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div>
          <p className="font-serif text-lg text-royal italic">
            03 — Barber stylists
          </p>
          <h2
            id="crew-heading"
            className="font-display mt-2 text-4xl font-extrabold tracking-wide text-pole-red sm:text-5xl"
          >
            The crew you’ll hear about.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
            <p>
              Regulars don’t talk about “stylists” the way a salon does. They
              talk about the person in their chair. Names that come up again
              and again on Google: Long, Thomas, Phia, and Tommy.
            </p>
            <p>
              That’s how customers tell the story — not an official staff
              roster. What is official: this shop books up, the work is
              consistent, and if you want a specific chair, call ahead.
            </p>
            <p>
              Military folks are welcome here. Veteran-owned doesn’t have to
              mean a speech. It means you get a good cut and a straight
              conversation.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {crewNames.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <h3 className="font-display text-3xl font-bold tracking-wide text-royal">
                {person.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{person.note}</p>
            </li>
          ))}
          <li className="rounded-2xl border-2 border-pole-red/80 bg-white p-5 sm:col-span-2">
            <p className="font-display text-3xl font-extrabold tracking-wide text-pole-red">
              Book the chair.
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              They fill up with regulars. A phone call beats a guess at the
              door.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
