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
