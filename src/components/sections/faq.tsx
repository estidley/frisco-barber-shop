import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-zinc-200 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-serif text-lg text-royal italic">
            05 — Before you call
          </p>
          <h2
            id="faq-heading"
            className="font-display mt-2 text-4xl font-extrabold tracking-wide text-pole-red sm:text-5xl"
          >
            Common questions
          </h2>
          <p className="mt-4 text-zinc-700">
            Straight answers from what we know. Hours and prices still go
            through the phone.
          </p>
        </div>

        <dl className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <dt>
                <h3 className="font-display text-2xl font-bold tracking-wide text-royal">
                  {faq.question}
                </h3>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-zinc-700 sm:text-base">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
