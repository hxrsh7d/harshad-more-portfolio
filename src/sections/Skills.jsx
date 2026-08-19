import skills from "../data/skills";
import Reveal from "../components/Reveal";
import "./Skills.css";

function SkillGroup({ title, items, delay }) {
  return (
    <Reveal className="skill-group card" delay={delay}>
      <h3 className="skill-group__title">{title}</h3>
      <ul className="skill-group__list">
        {items.map((item) => (
          <li key={item.name} className="skill-chip">
            <span className="skill-chip__name">{item.name}</span>
            <span className="skill-chip__level tag tag-accent">{item.level}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Skills</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>What I work with</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-lede">
              Honest, current skill levels — no inflated percentages. Areas marked
              &ldquo;Exploring&rdquo; are active practice, not expertise.
            </p>
          </Reveal>
        </div>

        <div className="skills__grid">
          <SkillGroup title="Programming" items={skills.programming} delay={0} />
          <SkillGroup title="AI &amp; Productivity" items={skills.aiAndProductivity} delay={80} />

          <Reveal className="skill-group card skill-group--strengths" delay={160}>
            <h3 className="skill-group__title">Personal Strengths</h3>
            <ul className="skill-group__strength-list">
              {skills.strengths.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
