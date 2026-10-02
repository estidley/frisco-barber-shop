import { ScissorsMark } from "@/components/scissors-mark";
import { BarberStripe } from "@/components/barber-pole";
import { LogoMark } from "@/components/logo-mark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <BarberStripe />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <p className="font-display text-2xl font-extrabold tracking-wide text-pole-red sm:text-3xl">
              FRISCO BARBER SHOP
            </p>
          </div>
          <p className="mt-3 max-w-sm font-serif text-lg text-royal italic">
            Gentleman’s Choice of Style · Cut to Approval · Men &amp; Boys
          </p>
          <p className="mt-2 max-w-sm text-sm text-zinc-600">
            Family-owned barber shop in Frisco, Texas. Men’s and boys’
            haircuts, fades, and beard trims. Call to book.
          </p>
          <nav
            className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-royal"
            aria-label="Footer"
          >
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="text-sm">
          <p className="flex flex-wrap items-center gap-2 font-display text-lg font-bold tracking-[0.1em] text-royal">
            {site.footerLine}
            <ScissorsMark className="h-5 w-12" />
          </p>
          <a
            href={site.phoneHref}
            className="mt-1 inline-block font-display text-3xl font-bold tracking-wide text-pole-red hover:underline"
          >
            {site.phoneSign}
          </a>
          <address className="mt-2 not-italic text-zinc-600">
            {site.address.full}
          </address>
          <p className="mt-1 text-zinc-500">{site.address.complex}</p>
          <a
            href={site.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-royal hover:underline"
          >
            Google Maps directions
          </a>
          <p className="mt-4 text-xs text-zinc-400">
            © {site.copyrightYear} Frisco Barber Shop. Neighborhood chairs on
            Technology Drive.
          </p>
        </div>
      </div>
    </footer>
  );
}
