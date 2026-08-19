import education from "../data/education";
import Reveal from "../components/Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Education</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Academic path</h2>
          </Reveal>
        </div>

        <ol className="edu-timeline">
          {education.map((item, i) => (
            <Reveal as="li" key={item.degree} delay={i * 100} className="edu-item">
              <div className="edu-item__marker" aria-hidden="true">
                <span className="edu-item__dot" />
                {i < education.length - 1 && <span className="edu-item__line" />}
              </div>
              <div className="edu-item__card card">
                <span className={`tag ${item.status.includes("Completed") ? "tag-accent" : ""}`}>
                  {item.status}
                </span>
                <h3 className="edu-item__degree">{item.degree}</h3>
                {item.institution ? (
                  <p className="edu-item__institution">{item.institution}</p>
                ) : (
                  <p className="edu-item__institution edu-item__institution--placeholder">
                    Institution name — add when ready
                  </p>
                )}
                {item.description && <p className="edu-item__desc">{item.description}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
