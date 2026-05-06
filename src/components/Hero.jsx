function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="hero-kicker">Data Scientist</p>
        <h1>Edwin Lim</h1>
        <p className="hero-summary">
          I build machine learning and analytics systems for finance and technology, with a
          focus on market intelligence, portfolio risk signals, and decision-ready data products.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View projects
          </a>
          <a className="button button-secondary" href="/edwin_lim_resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>

      <div className="portrait-stage" aria-label="Profile photo of Edwin Lim">
        <div className="portrait-orbit portrait-orbit-one" />
        <div className="portrait-orbit portrait-orbit-two" />
        <div className="portrait-card">
          <img src="/profile-picture-2026.png" alt="Edwin Lim" />
          <div className="portrait-caption">
            <span>Finance ML</span>
            <strong>Signals into decisions</strong>
          </div>
        </div>
        <div className="floating-chip chip-python">Python</div>
        <div className="floating-chip chip-finance">Finance</div>
      </div>
    </section>
  );
}

export default Hero;
