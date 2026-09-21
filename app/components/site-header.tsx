import { ThemeSelect } from "./theme-select";

const SiteHeader = () => {
  return (
    <header className="header">
      <a className="wordmark" href="/" aria-label="Piyush Arora home">
        piyush<span>.</span>
      </a>

      <div className="header-actions">
        <ThemeSelect />
        <a className="contact-link" href="mailto:arorapiyush.arora@gmail.com">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
};

export { SiteHeader };
