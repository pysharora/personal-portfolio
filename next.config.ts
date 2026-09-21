import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
