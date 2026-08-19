import Reveal from "../components/Reveal";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Testimonials</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>What others say</h2>
          </Reveal>
        </div>

        <Reveal delay={100} className="empty-state testimonials__empty">
          <p className="empty-title">Coming soon</p>
          <p>Testimonials will appear here as I gain professional experience and collaborate on more projects.</p>
        </Reveal>
      </div>
    </section>
  );
}
