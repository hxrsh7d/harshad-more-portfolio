import "./PathTracker.css";

const NODES = [
  { label: "Diploma AI/ML", state: "done" },
  { label: "Personal Projects", state: "active" },
  { label: "Internship", state: "seeking" },
  { label: "B.E. / B.Tech", state: "next" },
  { label: "Engineering Career", state: "future" },
];

export default function PathTracker() {
  return (
    <div className="path-tracker" role="img" aria-label="Career path: Diploma completed, currently building personal projects, seeking an internship, next is B.E./B.Tech, with an engineering career ahead.">
      <p className="path-tracker__label mono">// current trajectory</p>
      <ol className="path-tracker__track">
        {NODES.map((node) => (
          <li key={node.label} className={`path-tracker__node path-tracker__node--${node.state}`}>
            <span className="path-tracker__dot" aria-hidden="true" />
            <span className="path-tracker__text">{node.label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
