import portfolio from "../data/portfolio";
import Reveal from "../components/Reveal";
import ProfilePhoto from "../components/ProfilePhoto";
import PathTracker from "../components/PathTracker";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal className="status-pill hero__status">
            <span className="status-dot" aria-hidden="true" />
            {portfolio.status.toUpperCase()}
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow hero__eyebrow">Portfolio / {portfolio.location}</p>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="hero__name">{portfolio.name}</h1>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="hero__role">
              {portfolio.title} <span className="hero__divider">|</span>{" "}
              <span className="gradient-text">{portfolio.subtitle}</span>
            </h2>
          </Reveal>

          <Reveal delay={260}>
            <p className="hero__supporting section-lede">{portfolio.heroSupportingText}</p>
          </Reveal>

          <Reveal delay={320} className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            {portfolio.hasResume ? (
              <a
                href={portfolio.resumePath}
                className="btn btn-outline"
                download
              >
                Download CV
              </a>
            ) : (
              <span className="btn btn-outline btn-unavailable" aria-disabled="true">
                CV Coming Soon
              </span>
            )}
            <a
              href={portfolio.github}
              className="btn btn-ghost hero__github"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> GitHub
            </a>
          </Reveal>

          <Reveal delay={380} className="hero__quick-contact">
            <a href={`mailto:${portfolio.email}`} className="hero__quick-link">
              <MailIcon /> Email Me
            </a>
            <a href={`tel:${portfolio.phone}`} className="hero__quick-link">
              <PhoneIcon /> Call Me
            </a>
          </Reveal>
        </div>

        <Reveal delay={160} className="hero__side">
          <ProfilePhoto size="lg" />
        </Reveal>
      </div>

      <Reveal className="container hero__path-wrap" delay={120}>
        <PathTracker />
      </Reveal>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15 0 1.56-.02 2.81-.02 3.19 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
