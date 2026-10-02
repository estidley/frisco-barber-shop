import { BarberPole } from "@/components/barber-pole";
import { ScissorsMark } from "@/components/scissors-mark";
import { site } from "@/lib/site";

export function ShopSign() {
  return (
    <div className="shop-sign-frame mx-auto w-full max-w-5xl bg-metal p-[clamp(0.45rem,1.4vw,0.75rem)] shadow-[0_22px_55px_rgba(0,0,0,0.22)]">
      <div className="shop-sign-panel relative overflow-hidden bg-white px-[clamp(0.65rem,3.2vw,2.5rem)] py-[clamp(1.1rem,3.4vw,2.75rem)]">
        <div className="flex items-stretch gap-[clamp(0.35rem,1.6vw,1.75rem)]">
          <BarberPole className="shop-sign-pole h-[clamp(3.75rem,22vw,16.5rem)] w-auto max-h-full self-center" />

          <div className="min-w-0 flex-1">
            <h1
              id="shop-name"
              className="font-display text-center text-[clamp(1.05rem,4.8vw,3.55rem)] font-extrabold leading-[0.95] tracking-[0.04em] text-pole-red text-balance"
            >
              FRISCO BARBER SHOP
            </h1>

            <div className="mt-[clamp(0.7rem,2vw,1.1rem)] grid items-end gap-[clamp(0.55rem,1.6vw,1.5rem)] md:grid-cols-[minmax(0,1fr)_auto]">
              <p className="flex flex-col items-center gap-0.5 text-center md:items-start md:text-left">
                {site.taglines.map((line) => (
                  <span
                    key={line}
                    className="font-serif text-[clamp(0.82rem,2.5vw,1.7rem)] leading-snug font-medium text-royal italic"
                  >
                    {line}
                  </span>
                ))}
              </p>
              <a
                href={site.phoneHref}
                className="font-display text-center text-[clamp(1.35rem,5vw,3.65rem)] font-bold leading-none tracking-wide text-pole-red hover:underline md:text-right"
              >
                {site.phoneSign}
              </a>
            </div>

            <div className="mt-[clamp(0.7rem,1.8vw,1.25rem)] flex flex-wrap items-center justify-center gap-x-[clamp(0.4rem,1.2vw,0.75rem)] gap-y-1 md:justify-start">
              <p className="font-display text-[clamp(0.95rem,2.8vw,1.7rem)] font-bold tracking-[0.12em] text-royal">
                {site.footerLine}
              </p>
              <ScissorsMark className="h-[clamp(1.1rem,2.8vw,1.75rem)] w-[clamp(2.6rem,7vw,4rem)]" />
            </div>
          </div>

          <BarberPole className="shop-sign-pole h-[clamp(3.75rem,22vw,16.5rem)] w-auto max-h-full self-center" />
        </div>
      </div>
    </div>
  );
}
