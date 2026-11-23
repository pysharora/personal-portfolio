import type { Metadata } from "next";
import { Anton, Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { DEFAULT_MODE, PRINT_STORAGE_KEY } from "@/lib/mode";
import { DEV_SITE_URL, getSiteUrl } from "@/lib/site-url";
import { ModeGate } from "./components/layout/mode-gate";
import { ModeProvider } from "./components/layout/mode-provider";
import "@/styles/tailwind.css";
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

/**
 * Resolves the engineer/PM mode and the hidden print theme before the first
 * paint. The \`?mode=\` query param is the only source for mode — never
 * localStorage, and never the hash (the header nav's section links are hash
 * anchors, so a mode-in-hash scheme would get overwritten the moment
 * someone clicks one). The param is explicit and visible: it sits in the
 * address bar and survives a copy-pasted link, rather than being silently
 * remembered behind the scenes.
 *
 * The boot loader and "Pick your build" gate play on every visit — it is
 * the site's intro, not a one-time onboarding step. A ?mode=pm or
 * ?mode=engineer param is the one bypass: sharing a link with that param
 * drops someone straight into that mode with no gate at all.
 */
const modeInitScript = `
(function () {
  try {
    var body = document.body;
    body.classList.add("js");

    var params = new URLSearchParams(window.location.search);
    var modeParam = params.get("mode");
    var hasParam = modeParam === "pm" || modeParam === "engineer";
    var mode = hasParam ? modeParam : ${JSON.stringify(DEFAULT_MODE)};

    if (mode === "pm") body.classList.add("pm");
    // Named "gating", not "gate" — the gate's own halves element is
    // literally class="gate" (design-reference/gate.html), and a body-level
    // flag with the same name would match that selector too.
    if (!hasParam) {
      body.classList.add("gating");
      // A leftover section hash (someone clicked a nav link, then refreshed)
      // would otherwise make the browser scroll straight to that section —
      // invisible for now since the opaque gate covers everything, but it's
      // also the reason ModeGate's finish() does its own final reset: the
      // browser's native scroll-to-fragment can still land after this point,
      // and that reset (at the moment the gate actually goes away) is what
      // makes it correct for the one moment it's visible. A genuine ?mode=
      // deep link keeps its hash untouched, since that combination is an
      // intentional deep link.
      if (window.location.hash) {
        try {
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
        } catch (_) {}
      }
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      } catch (_) {}
    }

    try {
      if (localStorage.getItem(${JSON.stringify(PRINT_STORAGE_KEY)}))
        body.classList.add("print");
    } catch (_) {}
  } catch (_) {}
})();
`;

/**
 * Runs after `#site-content` exists in the HTML stream (it's placed below
 * that element) so it can make the real page `inert` the instant the gate
 * is up — never `display: none`, so crawlers still see full content.
 */
const siteInertScript = `
(function () {
  try {
    if (document.body.classList.contains("gating")) {
      var content = document.getElementById("site-content");
      if (content) content.inert = true;
    }
  } catch (_) {}
})();
`;

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
