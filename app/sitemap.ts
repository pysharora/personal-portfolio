import type { MetadataRoute } from "next";

const getSiteUrl = () => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!configuredUrl) return "http://localhost:3000";
  return configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;
};

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: getSiteUrl(),
    changeFrequency: "monthly",
    priority: 1,
  },
];

export default sitemap;
