import { SiteFooter } from "./components/layout/site-footer";
import { SiteHeader } from "./components/layout/site-header";
import { MouseGlow } from "./components/interactive/mouseglow";
import { Contact } from "./components/sections/contact";
import { Experience } from "./components/sections/experience";
import { Hero } from "./components/sections/hero";
import { RecentWork } from "./components/sections/recent-work";
import { Skills } from "./components/sections/skills";
import { Testimonials } from "./components/sections/testimonials";

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Arora",
    jobTitle: "Product-minded Full-stack Engineer",
    description:
      "Product-minded full-stack engineer and MBA graduate building thoughtful web products, reliable systems, and clear user experiences.",
    email: "mailto:arorapiyush.arora@gmail.com",
    sameAs: [
      "https://github.com/pysharora",
      "https://www.linkedin.com/in/pysharora/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Product development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
