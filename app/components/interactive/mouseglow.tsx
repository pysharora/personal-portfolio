"use client";

import { useEffect, useRef } from "react";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const supportsHoverPointer = window.matchMedia(FINE_POINTER_QUERY).matches;
    if (!supportsHoverPointer) return;

    const handlePointerMove = ({ clientX, clientY }: PointerEvent) => {
      glow.style.left = `${clientX}px`;
      glow.style.top = `${clientY}px`;
      glow.dataset.visible = "true";
    };

    const hideGlow = () => {
      glow.dataset.visible = "false";
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("blur", hideGlow);
    document.documentElement.addEventListener("pointerleave", hideGlow);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideGlow);
      document.documentElement.removeEventListener("pointerleave", hideGlow);
    };
  }, []);

  return (
    <div ref={glowRef} className="mouse-glow" aria-hidden="true">
      <span className="mouse-dot" />
    </div>
  );
};

export { MouseGlow };
