"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { modeBackground, printBackground, type Mode } from "@/lib/mode";
import {
  commitMode,
  commitPrint,
  getIsPrint,
  getMode,
  getServerIsPrint,
  getServerMode,
  subscribeToMode,
} from "@/lib/mode-store";

type ModeContextValue = {
  mode: Mode;
  isPrint: boolean;
  switchMode: (mode: Mode, origin?: HTMLElement | null) => void;
  togglePrint: () => void;
};

const ModeContext = createContext<ModeContextValue | undefined>(undefined);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ModeProvider = ({ children }: { children: ReactNode }) => {
  const mode = useSyncExternalStore(subscribeToMode, getMode, getServerMode);
  const isPrint = useSyncExternalStore(
    subscribeToMode,
    getIsPrint,
    getServerIsPrint,
  );
  const wipeRef = useRef<HTMLDivElement>(null);
  const isWipingRef = useRef(false);

  /** Circular colour wipe out of the clicked button, then swap the theme. */
  const switchMode = useCallback(
    (next: Mode, origin?: HTMLElement | null) => {
      if (next === mode || isWipingRef.current) return;

      const wipe = wipeRef.current;

      if (
        !wipe ||
        typeof wipe.animate !== "function" ||
        prefersReducedMotion()
      ) {
        commitMode(next);
        return;
      }

      const bounds = origin?.getBoundingClientRect();
      const x = bounds ? bounds.left + bounds.width / 2 : window.innerWidth / 2;
      const y = bounds ? bounds.top + bounds.height / 2 : 0;

      wipe.style.background = isPrint ? printBackground : modeBackground[next];
      wipe.style.display = "block";
      wipe.style.opacity = "1";
      isWipingRef.current = true;

      const reveal = wipe.animate(
        [
          { clipPath: `circle(0px at ${x}px ${y}px)` },
          { clipPath: `circle(150vmax at ${x}px ${y}px)` },
        ],
        { duration: 550, easing: "cubic-bezier(.7,0,.2,1)" },
      );

      reveal.onfinish = () => {
        commitMode(next);
        const fade = wipe.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 350,
        });
        fade.onfinish = () => {
          wipe.style.display = "none";
          isWipingRef.current = false;
        };
      };
    },
    [isPrint, mode],
  );

  const togglePrint = useCallback(() => {
    commitPrint(!getIsPrint());
  }, []);

  const value = useMemo(
    () => ({ mode, isPrint, switchMode, togglePrint }),
    [isPrint, mode, switchMode, togglePrint],
  );

  return (
    <ModeContext.Provider value={value}>
      <div className="mode-wipe" ref={wipeRef} aria-hidden="true" />
      {children}
    </ModeContext.Provider>
  );
};

const useMode = () => {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }

  return context;
};

export { ModeProvider, useMode };
