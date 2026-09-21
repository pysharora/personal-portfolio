import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Arora — Product-minded Full-stack Engineer",
  description:
    "Product-minded full-stack engineer and MBA graduate building thoughtful products, systems, and experiences for the real world.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
