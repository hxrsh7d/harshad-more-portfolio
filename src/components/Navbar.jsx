import { useEffect, useState } from "react";
import portfolio from "../data/portfolio";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <span className="navbar__mark mono">{portfolio.initials}</span>
          <span className="navbar__brand-text">{portfolio.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm navbar__cta">
            Let&rsquo;s Connect
          </a>
          <button
            type="button"
            className={`hamburger ${open ? "hamburger--open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} id="mobile-menu">
        <nav aria-label="Mobile Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="mobile-menu__link" onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary mobile-menu__cta" onClick={handleLinkClick}>
          Let&rsquo;s Connect
        </a>
      </div>
    </header>
  );
}
