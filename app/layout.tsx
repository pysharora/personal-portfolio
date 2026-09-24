import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "./components/theme-provider";
import "./fonts.css";
import "./tailwind.css";
import "./globals.css";
import "./testimonials.css";
import "./motion.css";
import "./safari.css";
import "./responsive.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Piyush Arora — Product-minded Full-stack Engineer",
  description:
    "Product-minded full-stack engineer and MBA graduate building thoughtful products, systems, and experiences for the real world.",
};

const themeInitScript = `
(function () {
  try {
    var key = "portfolio-theme";
    var savedTheme = localStorage.getItem(key);
    var theme =
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "grayscale" ||
      savedTheme === "system"
        ? savedTheme
        : "system";
    var root = document.documentElement;
    var resolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.dataset.theme = theme;
    root.style.colorScheme = resolvedTheme === "dark" ? "dark" : "light";
  } catch (_) {}
})();
`;

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <head>
        <link
          rel="preload"
          href="/fonts/bricolage-grotesque-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/instrument-serif-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/instrument-serif-italic-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
