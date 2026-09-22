import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
