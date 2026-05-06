import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const skills = ["Python", "Java", "R", "Machine Learning", "Finance"];

const highlights = [
  {
    metric: "82%",
    label: "Directional accuracy",
    detail: "Regime-switching research on NATGAS futures signals",
  },
  {
    metric: "29K+",
    label: "Company records",
    detail: "Feature engineering and model benchmarking for NUS Data-thon",
  },
  {
    metric: "95%+",
    label: "Fraud model accuracy",
    detail: "Logistic regression model for transaction anomaly detection",
  },
];

const experience = [
  {
    role: "Data Analyst Intern",
    org: "Monetary Authority of Singapore",
    period: "Jan 2026 - Present",
    summary:
      "Working across survey analytics, market intelligence, financial data enrichment, and LLM-powered company summaries.",
  },
  {
    role: "Quantitative Research Lead",
    org: "NUS Investment Society",
    period: "Aug 2025 - Present",
    summary:
      "Leading research on weather-derived features, futures data, and regime-switching models for commodity market direction.",
  },
  {
    role: "Machine Learning Analyst",
    org: "NUS FinTech Society",
    period: "Jan 2026 - Present",
    summary:
      "Building volatility forecasting and portfolio risk signals with HMM and EGARCH models for dynamic rebalancing.",
  },
];

const projects = [
  {
    title: "ML-Powered Smart Portfolio Rebalancer",
    eyebrow: "Finance ML",
    description:
      "Researched Hidden Markov Model regime detection and EGARCH volatility modelling to produce risk signals for a downstream rebalancing engine.",
    tags: ["HMM", "EGARCH", "Portfolio Risk"],
  },
  {
    title: "SCIS: Strategic Company Intelligence System",
    eyebrow: "Datathon",
    description:
      "Built a Streamlit intelligence platform for 8,500+ companies with peer benchmarking, geographic context, and Gemini-generated company summaries.",
    tags: ["Streamlit", "Gemini AI", "Cosine Similarity"],
  },
  {
    title: "POLARIS Review Inference System",
    eyebrow: "NLP",
    description:
      "Designed an NLP pipeline using Llama 3.2 and pseudo-labeling to classify policy-aligned reviews, improving accuracy by 15% over baseline.",
    tags: ["Llama 3.2", "Pseudo-labeling", "Classification"],
  },
  {
    title: "Corporate Structure Classifier",
    eyebrow: "NUS Data-thon",
    description:
      "Developed an XGBoost multi-class classifier on 29,000+ companies, reaching 77% accuracy, 0.77 F1-score, and 0.91 AUC.",
    tags: ["XGBoost", "Feature Engineering", "Model Benchmarking"],
  },
];

function SkillBar() {
  return (
    <section className="skill-bar" aria-label="Core skills">
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </section>
  );
}

function Highlights() {
  return (
    <section className="highlights" aria-label="Selected measurable outcomes">
      {highlights.map((item) => (
        <article className="highlight-card" key={item.metric}>
          <strong>{item.metric}</strong>
          <h3>{item.label}</h3>
          <p>{item.detail}</p>
        </article>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div>
        <p className="section-label">About</p>
        <h2>Data science with a finance-first lens.</h2>
      </div>
      <div className="about-copy">
        <p>
          I am a Data Science & Analytics undergraduate at the National University of
          Singapore, with a second major in Computer Science. My work sits at the intersection
          of markets, machine learning, and product-minded analytics.
        </p>
        <p>
          I am especially interested in building systems that help people understand financial
          data faster: market intelligence tools, risk signals, forecasting workflows, and
          decision support dashboards that turn raw data into practical insight.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Where I am applying the craft.</h2>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.role}-${item.org}`}>
            <span>{item.period}</span>
            <div>
              <h3>{item.role}</h3>
              <p className="org">{item.org}</p>
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Selected data science work.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p>{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <span className="project-line" />
            <p>{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="section-label">Contact</p>
        <h2>Let&apos;s talk data, markets, or product ideas.</h2>
      </div>
      <div className="contact-actions">
        <a className="button button-primary" href="mailto:edwinlim0314@gmail.com">
          Email me
        </a>
        <a className="button button-secondary" href="/edwin_lim_resume.pdf" target="_blank" rel="noreferrer">
          View resume
        </a>
        <a href="https://www.linkedin.com/in/edwin-ljx" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/edwin-ljx" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>Edwin Lim</strong>
      <span>Data Scientist focused on finance, machine learning, and technology.</span>
    </footer>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <SkillBar />
        <Highlights />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
