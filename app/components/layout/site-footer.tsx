import { Briefcase, FileText, Link2, Mail } from "lucide-react";
import { contactHref, cvHref } from "@/data/contact";

const SiteFooter = () => {
  return (
    <footer>
      <div className="footer-card">
        <div className="footer-copy">
          <p className="footer-kicker">End of page. Start of conversation?</p>
          <p>
            If the work feels aligned, send context. If you only have a messy
            idea, that is usually enough to start.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          <a href={contactHref}>
            <Mail size={15} aria-hidden="true" />
            Email
          </a>
          <a href={cvHref} target="_blank" rel="noreferrer">
            <FileText size={15} aria-hidden="true" />
            CV PDF
          </a>
          <a
            href="https://github.com/pysharora"
            target="_blank"
            rel="noreferrer"
          >
            <Link2 size={15} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pysharora/"
            target="_blank"
            rel="noreferrer"
          >
            <Briefcase size={15} aria-hidden="true" />
            LinkedIn
          </a>
        </nav>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Piyush Arora</p>
          <p aria-label="Built with accessible HTML, React, and Next.js">
            ACCESSIBLE HTML · REACT · NEXT.JS
          </p>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
