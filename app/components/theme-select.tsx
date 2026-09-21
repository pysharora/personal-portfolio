"use client";

import * as Select from "@radix-ui/react-select";
import {
  Check,
  ChevronDown,
  Contrast,
  MonitorSmartphone,
  MoonStar,
  SunMedium,
} from "lucide-react";
import { useTheme, type ThemeMode } from "./theme-provider";

const THEME_OPTIONS = [
  { value: "system", label: "System", icon: MonitorSmartphone },
  { value: "light", label: "Light", icon: SunMedium },
  { value: "dark", label: "Dark", icon: MoonStar },
  { value: "grayscale", label: "Grayscale", icon: Contrast },
] as const;

const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  const selectedOption =
    THEME_OPTIONS.find((option) => option.value === theme) ?? THEME_OPTIONS[0];
  const SelectedIcon = selectedOption.icon;

  return (
    <div className="theme-picker">
      <span className="theme-picker-label">Theme</span>

      <Select.Root
        value={theme}
        onValueChange={(value) => setTheme(value as ThemeMode)}
      >
        <Select.Trigger
          className="theme-select-trigger"
          aria-label="Choose site theme"
        >
          <span className="theme-select-value">
            <SelectedIcon size={14} aria-hidden="true" />
            <Select.Value placeholder="System" />
          </span>
          <Select.Icon className="theme-select-icon">
            <ChevronDown size={14} aria-hidden="true" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="theme-select-content"
            position="popper"
            sideOffset={8}
          >
            <Select.Viewport className="theme-select-viewport">
              {THEME_OPTIONS.map((option) => {
                const Icon = option.icon;

                return (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    className="theme-select-item"
                  >
                    <span className="theme-select-item-label">
                      <Icon size={14} aria-hidden="true" />
                      <Select.ItemText>{option.label}</Select.ItemText>
                    </span>
                    <Select.ItemIndicator className="theme-select-item-indicator">
                      <Check size={14} aria-hidden="true" />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export { ThemeSelect };
