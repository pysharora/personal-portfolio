import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { KindWords } from "@/components/KindWords";
import { Work } from "@/components/Work";

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Piyush Arora",
    jobTitle: "Full-stack product engineer",
    description:
      "Full-stack engineer and MBA graduate building web products people actually use, from first idea to launch.",
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
      "Postgres",
      "Product delivery",
      "IT project management",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Wrapped so the mode gate can make this `inert` while it's up,
          without hiding the real content from crawlers via `display: none`.
          The inline script in app/layout.tsx sets `inert` before React
          hydrates, same as the body classList mutations there. */}
      <div id="site-content" suppressHydrationWarning>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          <Hero />
          <Work />
          <Experience />
          <KindWords />
          <Contact />
        </main>
        <SiteFooter />
      </div>
      <ScrollReveal />
    </>
  );
};

export default Home;
