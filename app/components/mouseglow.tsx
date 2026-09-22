"use client";

import { useEffect, useRef } from "react";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const VISIBLE_STATE = {
  hidden: "false",
  visible: "true",
} as const;

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const supportsHoverPointer = window.matchMedia(FINE_POINTER_QUERY).matches;
    if (!supportsHoverPointer) return;

    let animationFrame = 0;

    const setGlowVisibility = (isVisible: boolean) => {
      glow.dataset.visible = isVisible
        ? VISIBLE_STATE.visible
        : VISIBLE_STATE.hidden;
    };

    const setGlowPosition = (x: number, y: number) => {
      glow.style.setProperty("--mouse-x", `${x}px`);
      glow.style.setProperty("--mouse-y", `${y}px`);
      setGlowVisibility(true);
    };

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setGlowPosition(clientX, clientY);
      });
    };

    const hideGlow = () => {
      cancelAnimationFrame(animationFrame);
      setGlowVisibility(false);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("blur", hideGlow);
    document.documentElement.addEventListener("pointerleave", hideGlow);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideGlow);
      document.documentElement.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return (
    <div ref={glowRef} className="mouse-glow" aria-hidden="true">
      <span className="mouse-spark">✦</span>
    </div>
  );
};

export { MouseGlow };
