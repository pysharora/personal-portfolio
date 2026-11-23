"use client";

import { useRef, useState, type ReactNode } from "react";
import { useIsHydrated } from "@/lib/use-is-hydrated";

type ExperienceItemProps = {
  role: string;
  meta: string;
  year: string;
  panelId: string;
  children: ReactNode;
};

/** Collapsible experience entry with a height animation and a scaling year. */
const ExperienceItem = ({
  role,
  meta,
  year,
  panelId,
  children,
}: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  // Without JavaScript the panels stay open, so `inert` is only applied once
  // the collapse behaviour is actually running.
  const isInteractive = useIsHydrated();
  const panelRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const toggle = () => {
    const panel = panelRef.current;
    const next = !isOpen;

    setIsOpen(next);
    if (next) setIsPanelVisible(true);

    if (!panel) {
      setIsPanelVisible(next);
      return;
    }

    animationRef.current?.cancel();
    animationRef.current = null;

    const from = `${panel.getBoundingClientRect().height}px`;
    const to = next ? `${panel.scrollHeight}px` : "0px";

    const finish = () => {
      panel.style.height = next ? "auto" : "0px";
      if (!next) setIsPanelVisible(false);
    };

    if (
      typeof panel.animate !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finish();
      return;
    }

    panel.style.height = to;
    const animation = panel.animate([{ height: from }, { height: to }], {
      duration: 420,
      easing: "cubic-bezier(.2,.7,.2,1)",
    });
    animationRef.current = animation;
    animation.onfinish = finish;
  };

  return (
    <div className={`xp-item${isOpen ? " is-open" : ""}`}>
      <h3 className="xp-item-heading">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggle}
        >
          <span className="xp-heading">
            <span className="xp-role">{role}</span>
            <span className="xp-meta">
              {meta} · <span className="xp-year">{year}</span>
            </span>
          </span>
          <span className="xp-plus" aria-hidden="true">
            +
          </span>
        </button>
      </h3>
      <div
        className="xp-panel"
        id={panelId}
        ref={panelRef}
        inert={isInteractive && !isPanelVisible}
      >
        <div className="xp-panel-inner">{children}</div>
      </div>
    </div>
  );
};

export { ExperienceItem };
