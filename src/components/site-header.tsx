"use client";

import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { LogoMark } from "@/components/logo-mark";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-sm sm:px-6">
          <address className="not-italic text-zinc-700">
            <a href="#visit" className="hover:text-royal hover:underline">
              {site.address.full}
            </a>
          </address>
          <a
            href={site.phoneHref}
            className="font-medium text-pole-red hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          <LogoMark />
          <span className="min-w-0">
            <span className="font-display block text-[clamp(0.95rem,3.4vw,1.35rem)] leading-none font-extrabold tracking-wide text-pole-red">
              FRISCO BARBER SHOP
            </span>
            <span className="mt-0.5 block truncate font-serif text-[clamp(0.68rem,2.2vw,0.82rem)] leading-tight text-royal italic">
              Gentleman’s Choice of Style
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-royal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden h-10 rounded-md bg-pole-red px-4 text-sm text-white hover:bg-pole-red/90 sm:inline-flex",
            )}
          >
            <Phone className="size-4" />
            Call to book
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl font-extrabold tracking-wide text-pole-red">
                  FRISCO BARBER SHOP
                </SheetTitle>
                <p className="font-serif text-royal italic">
                  Gentleman’s Choice of Style
                </p>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-2 py-3 text-base font-medium text-zinc-800 hover:bg-zinc-100"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="px-4 pt-2">
                <p className="mb-3 text-sm text-zinc-600">{site.address.full}</p>
                <a
                  href={site.phoneHref}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 w-full rounded-md bg-pole-red text-base text-white hover:bg-pole-red/90",
                  )}
                >
                  <Phone className="size-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        </div>
      </div>
    </header>
  );
}
