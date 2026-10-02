import { About } from "@/components/sections/about";
import { Crew } from "@/components/sections/crew";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { LocalArea } from "@/components/sections/local-area";
import { Reviews } from "@/components/sections/reviews";
import { Services } from "@/components/sections/services";
import { Visit } from "@/components/sections/visit";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BarberStripe } from "@/components/barber-pole";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-royal"
      >
        Skip to content
      </a>
      <BarberStripe className="h-2.5" />
      <SiteHeader />
      <main id="main" className="flex-1 pb-24 md:pb-0">
        <Hero />
        <About />
        <LocalArea />
        <Services />
        <Crew />
        <Reviews />
        <Faq />
        <Visit />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  );
}
