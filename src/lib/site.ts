export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://friscobarbershop.com"
).replace(/\/$/, "");

export const site = {
  name: "Frisco Barber Shop",
  shortName: "Frisco Barber",
  url: siteUrl,
  title: "Frisco Barber Shop | Men's Haircuts in Frisco, TX",
  ogTitle: "Frisco Barber Shop — Men's Haircuts in Frisco, TX",
  tagline: "Gentleman's Choice of Style",
  taglines: [
    "Gentleman's Choice of Style",
    "Cut to Approval",
    "Men & Boys",
  ] as const,
  footerLine: "BARBER STYLISTS",
  description:
    "Family-owned barber shop in Frisco, TX. Men's and boys' haircuts, fades, and beard trims at 6201 Technology Dr #114. Call (972) 335-9104 to book.",
  keywords: [
    "Frisco Barber Shop",
    "barber shop Frisco TX",
    "men's haircuts Frisco",
    "boys haircuts Frisco",
    "beard trim Frisco",
    "fades Frisco",
    "Technology Drive barber",
  ],
  phoneDisplay: "(972) 335-9104",
  phoneSign: "972-335-9104",
  phoneHref: "tel:+19723359104",
  telephoneE164: "+19723359104",
  telephoneSchema: "+1-972-335-9104",
  address: {
    street: "6201 Technology Dr #114",
    city: "Frisco",
    state: "TX",
    zip: "75033",
    full: "6201 Technology Dr #114, Frisco, TX 75033",
    complex: "Inside the CubeSmart Self Storage complex",
    suiteNote: "Look for suite #114",
    plusCode: "5559+H8 Frisco, Texas",
  },
  geo: {
    latitude: 33.15897,
    longitude: -96.83121,
  },
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=6201+Technology+Dr+%23114%2C+Frisco%2C+TX+75033",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=6201%20Technology%20Dr%20%23114%2C%20Frisco%2C%20TX%2075033&z=16&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=6201+Technology+Dr+%23114%2C+Frisco%2C+TX+75033",
  rating: 4.8,
  reviewCount: 180,
  ratingSource: "Google",
  shopSignSrc: "/opengraph-image",
  shopSignAlt:
    "Outdoor sign for Frisco Barber Shop at 6201 Technology Dr #114 in Frisco, Texas: Gentleman's Choice of Style, Cut to Approval, Men & Boys, 972-335-9104",
  copyrightYear: 2026,
  locale: "en_US",
  language: "en-US",
  nav: [
    { href: "#about", label: "The shop" },
    { href: "#services", label: "Services" },
    { href: "#crew", label: "The crew" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#visit", label: "Visit" },
  ],
} as const;

export const services = [
  {
    id: "mens-cuts",
    title: "Men's cuts",
    copy: "Everyday men's haircuts, clean-ups, and the kind of cut you can get again next time without explaining it twice.",
  },
  {
    id: "boys-cuts",
    title: "Boys' cuts",
    copy: "Boys' haircuts are welcome. Keep it simple, keep it sharp, get them in and out without the salon runaround.",
  },
  {
    id: "fades",
    title: "Fades",
    copy: "Skin, low, mid, or high fades — blended the way a barber shop should, not a trend factory.",
  },
  {
    id: "beard-trim",
    title: "Beard trim",
    copy: "Line-ups and beard trims that regulars keep coming back for. Call if you want that chair.",
  },
] as const;

export const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Yes — call ahead. Frisco Barber Shop books up with regulars, so an appointment is recommended rather than guessing at the door. Call (972) 335-9104 to book a chair.",
  },
  {
    question: "Do you cut men's and boys' hair?",
    answer:
      "Yes. This is a classic barber shop for men and boys: men's cuts, boys' cuts, fades, and beard trims, cut to approval.",
  },
  {
    question: "Where is Frisco Barber Shop located?",
    answer:
      "6201 Technology Dr #114, Frisco, TX 75033, inside the CubeSmart Self Storage complex. Look for suite #114.",
  },
  {
    question: "What are your hours and prices?",
    answer:
      "Call (972) 335-9104 to confirm hours and pricing. We don't post a full schedule here because it can change. Google has shown a lunch break around 1–3 PM; treat that as something to confirm when you call.",
  },
] as const;

export const reviews = [
  {
    name: "Mike B.",
    quote:
      "Fantastic shop. Long is amazing at a beard trim, and the conversations are always fun.",
  },
  {
    name: "Taylor F.",
    quote:
      "Best in the metroplex. A real family establishment, and the work is meticulous.",
  },
  {
    name: "Vinny",
    quote: "Felt like family on the first visit.",
  },
  {
    name: "Michael B.",
    quote: "Thomas gives a great haircut. Long and Phia are nice.",
  },
  {
    name: "Gregory K.",
    quote:
      "The owner greeted me by name. Family owned and USMC veteran owned.",
  },
  {
    name: "Tommy L.",
    quote:
      "Neighborhood barber shop in Frisco. Quick, quality, and well priced.",
  },
] as const;

export const crewNames = [
  { name: "Long", note: "Beard work that gets called out by name" },
  { name: "Thomas", note: "The haircut regulars recommend" },
  { name: "Phia", note: "Also spelled Pia in reviews" },
  { name: "Tommy", note: "A name you'll hear around the shop" },
] as const;
