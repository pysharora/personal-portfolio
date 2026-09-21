const Hero = () => {
  return (
    <section className="hero" aria-labelledby="intro">
      <p className="eyebrow">
        <span className="dot" /> FULL-STACK ENGINEER · MBA GRADUATE · INDIA
      </p>

      <h1 id="intro">
        I build software
        <br />
        <span className="accent">that connects product thinking with engineering.</span>
      </h1>

      <div className="intro-row">
        <p className="index">01 / INTRODUCTION</p>

        <div className="intro-copy">
          <p>
            I’m Piyush Arora — a full-stack engineer with a product mindset and
            an MBA lens, building digital experiences that are useful, clear, and
            designed to work in the real world.
          </p>

          <p className="muted">
            My work sits at the overlap of engineering, UX, and business logic:
            shipping thoughtful interfaces, reliable systems, and tools that make
            teams move faster.
          </p>

          <a className="text-link" href="https://github.com/pysharora">
            Explore my GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Hero };
