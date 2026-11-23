import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { DEV_SITE_URL, getSiteUrl } from "@/lib/site-url";
import { modeInitScript, siteInertScript } from "@/lib/mode-init-scripts";
import { ModeGate } from "@/components/ModeGate";
import { ModeProvider } from "@/context/ModeContext";
import "@/styles/globals.css";
import "@/styles/motion.css";
import "@/styles/safari.css";
import "@/styles/responsive.css";

const poster = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poster",
  fallback: ["Impact", "Haettenschweiler", "sans-serif"],
});

const body = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  fallback: ["system-ui", "sans-serif"],
});

const title = "Piyush Arora – Full-stack product engineer";
const description =
  "Web products people actually use, from first idea to launch.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl() ?? DEV_SITE_URL),
  title: {
    default: title,
    template: "%s | Piyush Arora",
  },
  description,
  keywords: [
    "Piyush Arora",
    "full-stack engineer",
    "product engineer",
    "React engineer",
    "Next.js engineer",
    "IT project management",
  ],
  authors: [{ name: "Piyush Arora" }],
  creator: "Piyush Arora",
  publisher: "Piyush Arora",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    title,
    description,
    firstName: "Piyush",
    lastName: "Arora",
    username: "pysharora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className={`${poster.variable} ${body.variable}`}>
      {/* The inline script below adds classes to <body> before paint. */}
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: modeInitScript }} />
        <ModeGate />
        <ModeProvider>{children}</ModeProvider>
        <script dangerouslySetInnerHTML={{ __html: siteInertScript }} />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
