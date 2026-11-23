"use client";

import type { MouseEvent } from "react";
import type { Mode } from "@/lib/mode";
import { EngineerIcon, PmIcon } from "../ui/icons";
import { useMode } from "./mode-provider";

/**
 * Two-button switch; the pill follows the body class, so CSS slides it.
 * Each button pairs a universal icon with its label; the label hides at
 * phone widths and the icon alone still carries the meaning.
 */
const ModeSwitch = () => {
  const { mode, switchMode } = useMode();

  const handleClick =
    (next: Mode) => (event: MouseEvent<HTMLButtonElement>) => {
      switchMode(next, event.currentTarget);
    };

  return (
    <div className="mode-switch" role="group" aria-label="Show me as">
      <span className="mode-switch-pill" aria-hidden="true" />
      <button
        type="button"
        aria-pressed={mode === "engineer"}
        aria-label="Engineer"
        onClick={handleClick("engineer")}
      >
        <EngineerIcon className="mode-switch-icon" aria-hidden="true" />
        <span className="mode-switch-text" aria-hidden="true">
          Engineer
        </span>
      </button>
      <button
        type="button"
        aria-pressed={mode === "pm"}
        aria-label="PM"
        onClick={handleClick("pm")}
      >
        <PmIcon className="mode-switch-icon" aria-hidden="true" />
        <span className="mode-switch-text" aria-hidden="true">
          PM
        </span>
      </button>
    </div>
  );
};

export { ModeSwitch };
