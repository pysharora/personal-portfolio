import { Hero } from "./components/hero";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { Skills } from "./components/skills";

const Home = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Skills />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
