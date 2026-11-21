import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.127"],
  experimental: {
    agentUpgrade: "security",
  },
  logging: {
    incomingRequests: true,
    browserToTerminal: true,
    fetches: {
      fullUrl: false,
      hmrRefreshes: true,
    },
  },
};

export default nextConfig;
