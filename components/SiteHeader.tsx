import { ModeSwitch } from "./ui/ModeSwitch";
import { PrintThemeName } from "./PrintThemeName";

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
