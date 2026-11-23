import type { MetadataRoute } from "next";
import { DEV_SITE_URL, getSiteUrl } from "@/lib/site-url";

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: getSiteUrl() ?? DEV_SITE_URL,
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
