/**
 * Deployment URL used for metadata, robots and the sitemap.
 * Resolution order: explicit config, production domain, then preview domain.
 */
export const getSiteUrl = () => {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!configuredUrl) return undefined;

  return configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;
};

export const DEV_SITE_URL = "http://localhost:3000";
