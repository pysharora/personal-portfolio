import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.127"],
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
