import type { MetadataRoute } from "next";

const siteUrl = "https://tedbramsy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${siteUrl}/experience`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/skills`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.7 },
  ];
}
