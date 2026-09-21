"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "system" | "light" | "dark" | "grayscale";

type ThemeContextValue = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
const THEME_STORAGE_KEY = "portfolio-theme";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const applyTheme = (theme: ThemeMode) => {
  const root = document.documentElement;
  root.dataset.theme = theme;
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;
  root.style.colorScheme = resolvedTheme === "dark" ? "dark" : "light";
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("system");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {
      // Storage may be unavailable; system mode remains usable.
    }
    const initialTheme =
      savedTheme === "system" ||
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "grayscale"
        ? savedTheme
        : "system";

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    applyTheme(theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Keep the selected theme working for this session.
    }
  }, [theme, isLoaded]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
