import type { MetadataRoute } from "next";

const getSiteUrl = () => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!configuredUrl) return undefined;
  return configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;
};

const robots = (): MetadataRoute.Robots => {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
};

export default robots;
