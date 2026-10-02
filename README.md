# Frisco Barber Shop

> **Marketing demo** built for outreach. Not affiliated with Frisco Barber Shop unless/until the shop adopts this site. Contact info on the page matches the real shop for demo accuracy.

Marketing site for **Frisco Barber Shop**, a family-owned neighborhood barbershop at 6201 Technology Dr #114, Frisco, TX 75033.

Clean white site inspired by the shop’s outdoor sign: crimson shop name and phone, royal-blue italic taglines, flanking barber poles with blue caps and bases, and a dark metal frame on the hero sign.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

Production URL used for canonical tags, Open Graph, JSON-LD, robots, and the sitemap:

`NEXT_PUBLIC_SITE_URL` (set on Railway to the live `*.up.railway.app` URL until a custom domain is adopted)

Override it at build time if the live domain is different:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 43123 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Stack

Next.js (App Router, statically rendered), TypeScript, Tailwind CSS, and shadcn/ui.

## Contact used on the site

- **Name:** Frisco Barber Shop
- **Address:** 6201 Technology Dr #114, Frisco, TX 75033 (CubeSmart complex, suite #114)
- **Phone:** [(972) 335-9104](tel:+19723359104)
- **Google:** 4.8 stars, ~180 reviews (verified 2026-10-02 via Google-labeled aggregator)
- **Hours / prices:** not listed as fact — the site asks visitors to call to confirm. JSON-LD does **not** include `openingHoursSpecification` or `priceRange`.

There is no booking backend. The primary CTA is click-to-call.

## Deploy notes

- `npm start` binds `0.0.0.0` and uses `PORT` (Railway-compatible). Local demo: `npm run dev` on `127.0.0.1:43123`.
- Railway: min resources (0.25 vCPU / 0.25 GB, serverless sleep) for this lead demo.
