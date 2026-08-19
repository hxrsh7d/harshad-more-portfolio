import portfolio from "../data/portfolio";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__cta card">
          <div>
            <h3>Have an opportunity or project idea?</h3>
            <p>Get in touch — I&rsquo;m always open to internships, projects, and collaborations.</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>

        <div className="footer__bottom">
          <p className="footer__brand mono">{portfolio.name}</p>
          <div className="footer__links">
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            <a href={portfolio.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {portfolio.linkedin && (
              <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </div>
          <p className="footer__copy">© {year} {portfolio.name}. Built with intent, not exaggeration.</p>
        </div>
      </div>
    </footer>
  );
}
