import certifications from "../data/certifications";
import Reveal from "../components/Reveal";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Certifications</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Certifications</h2>
          </Reveal>
        </div>

        {certifications.length > 0 ? (
          <div className="certifications__grid">
            {certifications.map((cert, i) => (
              <Reveal as="div" key={cert.name} delay={i * 80} className="cert-card card">
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">
                  {cert.issuer} {cert.date && `· ${cert.date}`}
                </p>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noreferrer" className="cert-card__link">
                    View credential →
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="empty-state">
            <p className="empty-title">More certifications coming soon</p>
            <p>Currently focused on expanding my technical skills and building practical projects.</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
