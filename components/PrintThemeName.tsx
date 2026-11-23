"use client";

import { useEffect, useRef } from "react";
import { useMode } from "@/context/ModeContext";

const TAP_WINDOW = 700;

/** The wordmark. Three taps in a row reveal the hidden print theme. */
const PrintThemeName = () => {
  const { isPrint, togglePrint } = useMode();
  const tapsRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClick = () => {
    tapsRef.current += 1;

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      tapsRef.current = 0;
    }, TAP_WINDOW);

    if (tapsRef.current >= 3) {
      tapsRef.current = 0;
      togglePrint();
    }
  };

  return (
    <button
      type="button"
      className="poster-name"
      onClick={handleClick}
      aria-pressed={isPrint}
      aria-label="Piyush Arora. Tap three times for a hidden theme"
    >
      Piyush Arora
    </button>
  );
};

export { PrintThemeName };
