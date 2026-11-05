import { Briefcase, FileText, Link2, Mail } from "lucide-react";
import Link from "next/link";
import { contactHref, cvHref } from "@/data/contact";
import { HeaderNav } from "./header-nav";
import { MobileMenu } from "./mobile-menu";
import { ThemeSelect } from "./theme-select";

const SiteHeader = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <Link className="wordmark" href="/" aria-label="Piyush Arora home">
          piyush<span>.</span>
        </Link>
        <p>Full-stack product engineer</p>
      </div>

      <HeaderNav />

      <div className="header-actions">
        <ThemeSelect />
        <a
          className="header-pill"
          href={cvHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Piyush Arora's CV PDF in a new tab"
        >
          <FileText size={14} aria-hidden="true" />
          CV PDF
        </a>
        <nav className="social-links" aria-label="Social links">
          <a
            className="icon-link"
            href="https://github.com/pysharora"
            target="_blank"
            rel="noreferrer"
            aria-label="Piyush Arora on GitHub"
          >
            <Link2 size={16} aria-hidden="true" />
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/pysharora/"
            target="_blank"
            rel="noreferrer"
            aria-label="Piyush Arora on LinkedIn"
          >
            <Briefcase size={16} aria-hidden="true" />
          </a>
        </nav>
        <a className="contact-link" href={contactHref}>
          <Mail size={14} aria-hidden="true" />
          Let’s talk
          <span className="text-symbol" aria-hidden="true">
            {"↗\uFE0E"}
          </span>
        </a>
      </div>
      <MobileMenu />
    </header>
  );
};

export { SiteHeader };
