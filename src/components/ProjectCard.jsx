import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const { title, description, github, demo, tags = [], image, status, featured } = project;

  return (
    <article className={`project-card card ${featured ? "project-card--featured" : ""}`}>
      {featured && <span className="project-card__badge tag-accent tag">Featured</span>}

      <div className="project-card__media">
        {image ? (
          <img src={image} alt={`${title} preview`} loading="lazy" />
        ) : (
          <div className="project-card__media-placeholder mono" aria-hidden="true">
            {title
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <h3 className="project-card__title">{title}</h3>
          {status && <span className="tag project-card__status">{status}</span>}
        </div>

        <p className="project-card__desc">{description}</p>

        {tags.length > 0 && (
          <ul className="project-card__tags">
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="project-card__actions">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
              View on GitHub
            </a>
          ) : (
            <span className="project-card__pending mono">Repository link coming soon</span>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
