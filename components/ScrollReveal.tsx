"use client";

import { useEffect } from "react";

/**
 * Reveals every `.reveal` element once it scrolls into view. Mounted once per
 * page so static sections can stay Server Components.
 */
const ScrollReveal = () => {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-revealed)"),
    );

    if (targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      for (const target of targets) target.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    for (const target of targets) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return null;
};

export { ScrollReveal };
