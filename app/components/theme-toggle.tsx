"use client";

import { useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark" | "grayscale";

type ThemeOption = {
  value: ThemeMode;
  label: string;
  icon: string;
};

const THEME_OPTIONS: ThemeOption[] = [
  { value: "system", label: "System", icon: "◐" },
  { value: "light", label: "Light", icon: "☀" },
  { value: "dark", label: "Dark", icon: "☾" },
  { value: "grayscale", label: "Grayscale", icon: "◍" },
];

const applyTheme = (theme: ThemeMode) => {
  const root = document.documentElement;
  root.dataset.theme = theme;

  if (theme === "dark") {
    root.style.colorScheme = "dark";
    return;
  }

  if (theme === "light" || theme === "grayscale") {
    root.style.colorScheme = "light";
    return;
  }

  root.style.colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme =
      savedTheme && THEME_OPTIONS.some((option) => option.value === savedTheme)
        ? (savedTheme as ThemeMode)
        : "system";

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextTheme = event.target.value as ThemeMode;
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const selectedOption =
    THEME_OPTIONS.find((option) => option.value === theme) ?? THEME_OPTIONS[0];

  return (
    <label className="theme-picker" htmlFor="theme-select">
      <span className="theme-picker-label">Theme</span>

      <div className="theme-select-wrap">
        <select
          id="theme-select"
          className="theme-select"
          value={theme}
          onChange={handleThemeChange}
          aria-label="Choose site theme"
        >
          {THEME_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="theme-select-visual" aria-hidden="true">
          <span className="theme-select-icon">{selectedOption.icon}</span>
          <span className="theme-select-caret">▾</span>
        </span>
      </div>
    </label>
  );
};

export { ThemeToggle };
