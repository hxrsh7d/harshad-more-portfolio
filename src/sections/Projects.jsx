import projects from "../data/projects";
import portfolio from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Projects</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Things I&rsquo;ve built</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-lede">
              A growing collection — more repositories are on the way as I keep learning and building.
            </p>
          </Reveal>
        </div>

        {projects.length > 0 ? (
          <div className="projects__grid">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="empty-title">More projects coming soon</p>
            <p>New builds are added regularly — check back soon.</p>
          </div>
        )}

        <Reveal delay={160} className="projects__footer-cta">
          <p>
            Interested in collaborating?{" "}
            <a href="#contact" className="projects__footer-link">
              Let&rsquo;s connect.
            </a>
          </p>
          <a href={portfolio.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
