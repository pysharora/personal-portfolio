const About = () => {
  return (
    <section
      className="portfolio-section about-section"
      aria-labelledby="about-title"
    >
      <p className="index">
        02 / WHO IS
        <br />
        THIS GUY?
      </p>

      <div className="section-copy">
        <h2 id="about-title" className="section-title">
          Full-stack engineer.
          <span> Product-brained </span>
          human.
        </h2>
        <p>
          Hi, I'm Piyush! I work where messy requirements, real users, and slightly
          dramatic interfaces meet. Mostly that means React, Next.js, Node,
          Python, auth, APIs, and the judgment to ask: should this even exist in
          this shape?
        </p>
      </div>
    </section>
  );
};

export { About };
