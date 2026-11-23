"use client";

import type { PointerEvent, ReactNode } from "react";
import { useFinePointer, useReducedMotion } from "@/lib/use-media-query";

type TiltCardProps = {
  className?: string;
  children: ReactNode;
};

/** Poster card that tilts towards the pointer on fine-pointer devices. */
const TiltCard = ({ className, children }: TiltCardProps) => {
  const hasFinePointer = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const canTilt = hasFinePointer && !prefersReducedMotion;

  const handleMove = (event: PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(0)`;
  };

  const handleLeave = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <article
      className={className}
      onPointerMove={canTilt ? handleMove : undefined}
      onPointerLeave={canTilt ? handleLeave : undefined}
    >
      {children}
    </article>
  );
};

export { TiltCard };
