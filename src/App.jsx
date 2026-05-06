import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const services = [
  { title: "Website Development", icon: "code" },
  { title: "App Development", icon: "app" },
  { title: "Website Hosting", icon: "cloud" },
];

const skills = ["HTML5", "CSS", "JavaScript", "React", "Node.js", "Git", "GitHub"];

const projects = [
  {
    title: "Portfolio Website",
    tags: ["React", "CSS", "Vite"],
    description:
      "A personal website that documents my programming journey, highlights practical projects, and gives visitors a clear way to reach me.",
    visual: "portfolio",
  },
  {
    title: "Movie Titles API",
    tags: ["JavaScript", "API", "Async"],
    description:
      "A browser-based API project that searches movie data, renders results dynamically, and keeps the interface responsive while requests load.",
    visual: "movies",
  },
  {
    title: "JavaScript Calculator",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "A clean calculator built to practise state management, input validation, reusable functions, and small interaction details.",
    visual: "calculator",
  },
  {
    title: "Learning Lab",
    tags: ["Notes", "Git", "Frontend"],
    description:
      "A growing collection of experiments, notes, and mini builds where I test ideas and turn lessons into working interfaces.",
    visual: "terminal",
  },
];

function ServiceIcon({ type }) {
  if (type === "code") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M18 17 10 24l8 7M30 17l8 7-8 7M27 13 21 35" />
        <rect x="5" y="8" width="38" height="30" rx="4" />
      </svg>
    );
  }

  if (type === "app") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="14" y="5" width="20" height="38" rx="4" />
        <path d="M20 11h8M22 37h4M18 19h12M18 25h12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M16 34h19a8 8 0 0 0 1-15 12 12 0 0 0-22-3A9 9 0 0 0 16 34Z" />
      <path d="M17 25h14M22 20l-5 5 5 5M30 20l5 5-5 5" />
    </svg>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="visual-window">
        {type === "movies" && (
          <>
            <span className="poster poster-dark" />
            <span className="poster poster-warm" />
          </>
        )}
        {type === "calculator" && (
          <div className="calc-grid">
            {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((key) => (
              <span key={key}>{key}</span>
            ))}
          </div>
        )}
        {type === "terminal" && (
          <div className="terminal-lines">
            <span>$ npm run build</span>
            <span>optimizing modules...</span>
            <span>rendering portfolio...</span>
            <span>done in 1.4s</span>
          </div>
        )}
        {type === "portfolio" && (
          <div className="site-preview">
            <span />
            <strong>Edwin Lim</strong>
            <p>Frontend portfolio</p>
            <i />
          </div>
        )}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="timeline">
        {services.map((service) => (
          <div className="service" key={service.title}>
            <span className="service-dot" />
            <div className="service-icon">
              <ServiceIcon type={service.icon} />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="about-copy">
        <p className="section-kicker">About me</p>
        <h2>Building my way from curiosity to craft.</h2>
        <p>
          I started this portfolio to document my programming journey as I grow from small
          experiments into polished frontend projects. I enjoy turning ideas into interfaces,
          learning by building, and improving the details that make a website feel clear and alive.
        </p>
        <div className="stats">
          <div>
            <strong>10<span>+</span></strong>
            <p>Practice builds</p>
          </div>
          <div>
            <strong>7</strong>
            <p>Core tools</p>
          </div>
          <div>
            <strong>100<span>%</span></strong>
            <p>Learning mindset</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected work</h2>
        <span />
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className="project-actions">
                <a className="button button-primary" href="#contact">
                  View GitHub
                </a>
                <a className="text-link" href="#contact">
                  View project
                  <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>
            <ProjectVisual type={project.visual} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="section-kicker">Contacts</p>
        <h2>
          Have a project?
          <span>Let's talk.</span>
        </h2>
      </div>

      <form className="contact-form">
        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" rows="4" />
        </label>
        <button className="button button-primary" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>Edwin Lim</strong>
      <p>Designed and built with React, curiosity, and plenty of iteration.</p>
      <div className="social-links" aria-label="Social links">
        <a href="mailto:hello@example.com" aria-label="Email">
          @
        </a>
        <a href="https://github.com/" aria-label="GitHub">
          GH
        </a>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn">
          in
        </a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <div className="skill-strip" aria-label="Technology stack">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
