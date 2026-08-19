import { useState } from "react";
import portfolio from "../data/portfolio";
import Reveal from "../components/Reveal";
import { buildMailtoUrl, isValidEmail } from "../utils/mailto";
import "./Contact.css";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!isValidEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFeedback("");
      return;
    }

    const mailtoUrl = buildMailtoUrl({ to: portfolio.email, ...form });
    window.location.href = mailtoUrl;
    setFeedback("Your email app should now open with your message pre-filled. If nothing happens, please email me directly.");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={60}>
            <h2>Let&rsquo;s connect</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="section-lede">
              Recruiter, mentor, or fellow builder — I&rsquo;d love to hear from you. Reach out
              directly or send a message below.
            </p>
          </Reveal>
        </div>

        <div className="contact__grid">
          <Reveal className="contact__info" delay={80}>
            <a href={`mailto:${portfolio.email}`} className="contact__info-item card">
              <span className="contact__info-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">{portfolio.email}</p>
              </div>
            </a>

            <a href={`tel:${portfolio.phone}`} className="contact__info-item card">
              <span className="contact__info-icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-value">{portfolio.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={portfolio.github}
              target="_blank"
              rel="noreferrer"
              className="contact__info-item card"
            >
              <span className="contact__info-icon" aria-hidden="true">
                <GithubIcon />
              </span>
              <div>
                <p className="contact__info-label">GitHub</p>
                <p className="contact__info-value">github.com/{portfolio.githubUsername}</p>
              </div>
            </a>

            <div className="contact__info-item card contact__info-item--static">
              <span className="contact__info-icon" aria-hidden="true">
                <PinIcon />
              </span>
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">{portfolio.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="contact__form-wrap card">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span className="contact__error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="contact__error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" value={form.subject} onChange={handleChange("subject")} />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span className="contact__error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary contact__submit">
                Send Message
              </button>

              <p className="contact__note">
                This opens your default email app with the message pre-filled — no data is sent
                or stored by this website.
              </p>

              {feedback && (
                <p className="contact__feedback" role="status">
                  {feedback}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15 0 1.56-.02 2.81-.02 3.19 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
