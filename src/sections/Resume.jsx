import { useEffect, useState } from "react";
import portfolio from "../data/portfolio";
import Reveal from "../components/Reveal";
import "./Resume.css";

export default function Resume() {
  const [available, setAvailable] = useState(portfolio.hasResume);

  useEffect(() => {
    if (!portfolio.hasResume) return;
    let cancelled = false;
    fetch(portfolio.resumePath, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <Reveal className="resume__card card">
          <div className="resume__text">
            <p className="eyebrow">Resume</p>
            <h2>Resume / CV</h2>
            <p className="section-lede">
              {available
                ? "Download a copy of my resume for a full overview of my background."
                : "My resume will be available for download here shortly."}
            </p>
          </div>

          <div className="resume__actions">
            {available ? (
              <>
                <a href={portfolio.resumePath} className="btn btn-primary" download>
                  Download My CV
                </a>
                <a href={portfolio.resumePath} className="btn btn-outline" target="_blank" rel="noreferrer">
                  View Resume
                </a>
              </>
            ) : (
              <span className="resume__pending mono">CV coming soon</span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
