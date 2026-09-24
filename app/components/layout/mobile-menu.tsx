"use client";

import { Briefcase, FileText, Link2, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactHref, cvHref } from "@/data/contact";
import { ThemeSelect } from "./theme-select";

const navigation = [
  ["About", "#intro"],
  ["Skills", "#skills"],
  ["Work", "#recent-work"],
  ["Experience", "#experience"],
  ["Kind words", "#testimonials"],
  ["Contact", "#contact"],
] as const;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="mobile-menu">
      <ThemeSelect />
      <button
        className="mobile-menu-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {isOpen ? (
        <div className="mobile-menu-panel" id="mobile-navigation">
          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {navigation.map(([label, href]) => (
              <a href={href} key={href} onClick={closeMenu}>
                {label}
                <span className="text-symbol" aria-hidden="true">
                  {"↘\uFE0E"}
                </span>
              </a>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a href={contactHref} onClick={closeMenu}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>
            <a href={cvHref} target="_blank" rel="noreferrer">
              <FileText size={16} aria-hidden="true" />
              CV PDF
            </a>
            <a
              href="https://github.com/pysharora"
              target="_blank"
              rel="noreferrer"
            >
              <Link2 size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pysharora/"
              target="_blank"
              rel="noreferrer"
            >
              <Briefcase size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { MobileMenu };
