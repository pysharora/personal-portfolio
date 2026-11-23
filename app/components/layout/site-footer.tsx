import {
  calendlyHref,
  contactHref,
  engineerCvHref,
  githubHref,
  linkedinHref,
  pmCvHref,
} from "@/data/contact";
import { ChangeViewButton } from "./change-view-button";

const SiteFooter = () => {
  return (
    <footer className="poster-footer">
      <div className="poster-wrap">
        <p className="poster-display footer-mark">
          Piyush Arora<span aria-hidden="true">.</span>
        </p>

        <div className="footer-columns">
          <nav className="footer-column" aria-label="Elsewhere">
            <p className="footer-label">Elsewhere</p>
            <a href={linkedinHref} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={githubHref} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={calendlyHref} target="_blank" rel="noreferrer">
              Calendly
            </a>
          </nav>

          <nav className="footer-column" aria-label="CV downloads">
            <p className="footer-label">CV</p>
            <a href={engineerCvHref} download>
              Engineer CV
            </a>
            <a href={pmCvHref} download>
              PM CV
            </a>
          </nav>

          <div className="footer-column">
            <p className="footer-label">Say hello</p>
            <a href={contactHref}>Email me</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Piyush Arora</span>
          <ChangeViewButton />
          <span className="poster-hint">
            There&apos;s a third theme. Tap my name three times.
          </span>
        </div>
      </div>
    </footer>
  );
};

export { SiteFooter };
