function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Hello<span>.</span></p>
        <h1>I'm Edwin Lim</h1>
        <h2>Frontend Developer</h2>
        <p className="hero-summary">
          I am building a portfolio around my programming journey, from first experiments to
          polished React projects that solve real problems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Got a project?
          </a>
          <a className="button button-secondary" href="#projects">
            My work
          </a>
        </div>
      </div>

      <div className="hero-portrait" aria-label="Stylized portrait illustration">
        <span className="orbit orbit-large" />
        <span className="orbit orbit-small" />
        <div className="portrait-card">
          <div className="avatar-head" />
          <div className="avatar-body" />
          <div className="avatar-laptop">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
