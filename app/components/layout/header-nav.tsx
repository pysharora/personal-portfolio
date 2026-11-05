"use client";

import { useEffect, useState } from "react";

const navigation = [
  ["About", "#intro"],
  ["Skills", "#skills"],
  ["Work", "#recent-work"],
  ["Experience", "#experience"],
  ["Kind words", "#testimonials"],
  ["Contact", "#contact"],
] as const;

const HeaderNav = () => {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    type NavSection = { href: string; element: Element };

    const sections: NavSection[] = [];
    for (const [, href] of navigation) {
      const target = document.querySelector(href);
      if (target)
        sections.push({ href, element: target.closest("section") ?? target });
    }

    if (sections.length === 0) return;

    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        }

        const topmost = sections
          .filter((section) => visible.has(section.element))
          .sort(
            (a, b) =>
              a.element.getBoundingClientRect().top -
              b.element.getBoundingClientRect().top,
          )[0];

        if (topmost) setActiveHref(topmost.href);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach(({ element }) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="header-nav" aria-label="Primary navigation">
      {navigation.map(([label, href]) => (
        <a
          key={href}
          href={href}
          aria-current={activeHref === href ? "true" : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export { HeaderNav };
