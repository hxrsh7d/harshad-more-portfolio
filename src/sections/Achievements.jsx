import achievements from "../data/achievements";
import Reveal from "../components/Reveal";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Milestones</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Milestones &amp; Progress</h2>
          </Reveal>
        </div>

        <ul className="achievements__list">
          {achievements.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70} className="achievement-item">
              <span className="achievement-item__check" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <span>{item}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
