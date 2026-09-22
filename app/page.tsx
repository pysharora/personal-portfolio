import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { Skills } from "./components/skills";
import { MouseGlow } from "./components/mouseglow";
import { RecentWork } from "./components/recent-work";
import { Testimonials } from "./components/testimonials";

const Home = () => {
  return (
    <>
      <MouseGlow />
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Skills />
        <RecentWork />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
};

export default Home;
