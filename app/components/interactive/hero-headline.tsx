"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { heroHeadline, heroHeadlineLead, type HeadlineLine } from "@/data/hero";
import type { Mode } from "@/lib/mode";
import { useMode } from "../layout/mode-provider";

/** Splits copy into letters so they can rise in and stretch near the pointer. */
const letters = (text: string, keyPrefix: string, offset: number) =>
  Array.from(text).map((character, index) => (
    <span
      className="hero-char"
      key={`${keyPrefix}-${index}`}
      style={{ "--char-index": offset + index } as CSSProperties}
    >
      {character === " " ? " " : character}
    </span>
  ));

const lineLength = (line: HeadlineLine) =>
  (line.before?.length ?? 0) +
  (line.highlight?.length ?? 0) +
  (line.after?.length ?? 0);

const lineContent = (line: HeadlineLine, keyPrefix: string, offset: number) => {
  const highlightOffset = offset + (line.before?.length ?? 0);
  const afterOffset = highlightOffset + (line.highlight?.length ?? 0);

  return [
    ...(line.before ? letters(line.before, `${keyPrefix}-before`, offset) : []),
    ...(line.highlight
      ? [
          <mark key={`${keyPrefix}-mark`}>
            {letters(line.highlight, `${keyPrefix}-highlight`, highlightOffset)}
          </mark>,
        ]
      : []),
    ...(line.after
      ? letters(line.after, `${keyPrefix}-after`, afterOffset)
      : []),
  ];
};

const HeroVariant = ({ variant }: { variant: Mode }) => {
  const { lines } = heroHeadline[variant];
  const offsets = lines.map((_, index) =>
    lines
      .slice(0, index)
      .reduce(
        (total, line) => total + lineLength(line),
        heroHeadlineLead.length,
      ),
  );

  return (
    <span className={`hero-variant hero-variant-${variant}`} aria-hidden="true">
      {lines.map((line, index) => (
        <span className="hero-line" key={`${variant}-${index}`}>
          {lineContent(line, `${variant}-${index}`, offsets[index])}
        </span>
      ))}
    </span>
  );
};

const HeroHeadline = () => {
  const { mode } = useMode();
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const characters = Array.from(
      headline.querySelectorAll<HTMLElement>(".hero-char"),
    );

    const stretch = (event: globalThis.PointerEvent) => {
      for (const character of characters) {
        const bounds = character.getBoundingClientRect();
        if (!bounds.width) continue;
        const distance = Math.hypot(
          event.clientX - (bounds.left + bounds.width / 2),
          event.clientY - (bounds.top + bounds.height / 2),
        );
        const scale = 1 + 0.22 * Math.max(0, 1 - distance / 180);
        character.style.transform =
          scale > 1.001 ? `scaleY(${scale.toFixed(3)})` : "";
      }
    };

    const reset = () => {
      for (const character of characters) character.style.transform = "";
    };

    headline.addEventListener("pointermove", stretch);
    headline.addEventListener("pointerleave", reset);

    return () => {
      headline.removeEventListener("pointermove", stretch);
      headline.removeEventListener("pointerleave", reset);
      reset();
    };
  }, []);

  return (
    <h1
      className="poster-display hero-headline"
      id="hero-title"
      ref={headlineRef}
      aria-label={heroHeadline[mode].label}
    >
      <span className="hero-line" aria-hidden="true">
        {letters(heroHeadlineLead, "lead", 0)}
      </span>
      <span className="hero-swap">
        <HeroVariant variant="engineer" />
        <HeroVariant variant="pm" />
      </span>
    </h1>
  );
};

export { HeroHeadline };
