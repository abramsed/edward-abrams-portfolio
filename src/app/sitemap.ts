import type { MetadataRoute } from "next";

const siteUrl = "https://edward-abrams-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${siteUrl}/experience`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/skills`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.8 },
  ];
}
