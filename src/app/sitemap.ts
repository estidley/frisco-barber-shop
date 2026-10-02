import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: "2026-09-15",
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}${site.shopSignSrc}`],
    },
  ];
}
