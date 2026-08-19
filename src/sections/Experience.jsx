import portfolio from "../data/portfolio";
import Reveal from "../components/Reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Experience</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Professional experience</h2>
          </Reveal>
        </div>

        <Reveal delay={100} className="experience__card card">
          <div className="experience__icon" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 2 3 7l9 5 9-5-9-5Z" />
              <path d="M3 12l9 5 9-5" />
              <path d="M3 17l9 5 9-5" />
            </svg>
          </div>
          <h3 className="experience__heading">{portfolio.experience.heading}</h3>
          <p className="experience__desc">{portfolio.experience.description}</p>
          <a href="#contact" className="btn btn-outline btn-sm experience__cta">
            Have an opportunity? Let&rsquo;s talk
          </a>
        </Reveal>
      </div>
    </section>
  );
}
