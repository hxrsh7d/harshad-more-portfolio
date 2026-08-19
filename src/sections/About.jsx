import portfolio from "../data/portfolio";
import Reveal from "../components/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">About</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Getting to know me</h2>
          </Reveal>
        </div>

        <div className="about__grid">
          <div className="about__copy">
            {portfolio.about.paragraphs.map((para, i) => (
              <Reveal as="p" key={para.slice(0, 24)} delay={i * 70} className="about__para">
                {para}
              </Reveal>
            ))}
          </div>

          <Reveal className="about__facts" delay={120}>
            {portfolio.about.quickFacts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <span className="about__fact-value gradient-text mono">{fact.value}</span>
                <span className="about__fact-label">{fact.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
