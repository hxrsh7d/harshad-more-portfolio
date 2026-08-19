import exploring from "../data/exploring";
import Reveal from "../components/Reveal";
import "./Exploring.css";

export default function Exploring() {
  return (
    <section id="exploring" className="section exploring">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Focus Areas</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>What I&rsquo;m exploring</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-lede">
              Active areas of hands-on learning right now — not professional services.
            </p>
          </Reveal>
        </div>

        <div className="exploring__grid">
          {exploring.map((item, i) => (
            <Reveal as="div" key={item.title} delay={i * 70} className="exploring__card card">
              <span className="exploring__index mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="exploring__title">{item.title}</h3>
              <p className="exploring__desc">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
