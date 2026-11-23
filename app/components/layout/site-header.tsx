import { ModeSwitch } from "./mode-switch";
import { PrintThemeName } from "./print-theme-name";

const navigation = [
  ["Kind words", "#words"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

const SiteHeader = () => {
  return (
    <header className="poster-header">
      <div className="poster-wrap poster-bar">
        <PrintThemeName />

        <nav className="poster-nav" aria-label="Sections">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <ModeSwitch />
      </div>
    </header>
  );
};

export { SiteHeader };
