# Harshad More — Portfolio

Personal portfolio website for **Harshad More**, a Diploma in Artificial Intelligence & Machine Learning graduate and aspiring AI/ML & Engineering professional. Built to be honest, maintainable, and easy to keep growing as new projects, certifications, and experience are added.

Live goal: recruiters, internship providers, colleges, and collaborators should immediately understand who Harshad is, what he's built, and how to reach him — without a single fabricated claim.

---

## 1. About the Portfolio

A fully static, single-page React site with 13 sections (Hero, About, Skills, Education, Projects, What I'm Exploring, Experience, Certifications, Achievements, Testimonials, Resume, Contact, Footer). All personal content lives in centralized data files under `src/data/`, so updating the site never requires touching component code.

Key principles baked into the build:

- **No fabricated content.** Sections with missing info (Experience, Certifications, Testimonials, CV, photo) show tasteful, honest empty states instead of placeholder lies.
- **No fake skill percentages.** Skills use plain-language levels ("Basic Knowledge", "Exploring") instead of invented progress bars.
- **No backend required.** The contact form uses a `mailto:` link — fully compatible with GitHub Pages, no server, no third-party form service.
- **Add-a-project workflow is trivial.** One data file, one object, no component edits.

---

## 2. Technology Stack

- **React 19** + **Vite** — fast dev server, small production bundle, no server-side requirements
- **Plain CSS** with CSS custom properties (design tokens) — no CSS framework, so the design stays intentional and lightweight
- **No backend, no database, no third-party form service** — contact form uses browser-native `mailto:`
- **GitHub Actions** — automated build & deploy to GitHub Pages

No unnecessary dependencies were added. The full dependency list is in `package.json`.

---

## 3. Run Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` (Vite's default) with hot reload.

---

## 4. Build

```bash
npm run build
```

Outputs a production build to `dist/`. To preview the production build locally:

```bash
npm run preview
```

---

## 5. GitHub Pages Deployment

This repo ships with an automated workflow at `.github/workflows/deploy.yml`. It:

1. Installs dependencies
2. Detects your repository name and computes the correct Vite `base` path automatically (so it works whether the repo is `hxrsh7d.github.io` or any other project repo name)
3. Builds the site
4. Deploys the `dist/` folder to GitHub Pages via GitHub's official Pages actions

### One-time setup

1. Push this repository to GitHub.
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to the `main` branch (or run the workflow manually from the **Actions** tab).
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` (or `https://<your-username>.github.io/` if the repo is named `<username>.github.io`).

No manual base-path configuration is needed — the workflow handles it.

---

## 6. Add a New Project

Open `src/data/projects.js` and add a new object to the array:

```js
{
  title: "My New Project",
  description: "What the project does, in one or two sentences.",
  github: "https://github.com/hxrsh7d/my-new-project",
  demo: "",
  tags: ["Python", "AI"],
  image: "",
  status: "Completed",
  featured: false,
}
```

Field notes:
- `github` — leave `""` to hide the GitHub button (never invent a repo URL)
- `demo` — leave `""` to hide the Live Demo button
- `image` — optional path under `public/`, e.g. `/images/projects/my-project.png`; a styled placeholder shows automatically if omitted
- `featured` — set `true` to show a "Featured" badge

Then:

```bash
git add src/data/projects.js
git commit -m "Add My New Project"
git push
```

GitHub Actions rebuilds and deploys automatically — the new card appears with no other code changes.

---

## 7. Add Your Profile Photo

1. Place your photo at `public/images/profile/profile.jpg` (see `public/images/profile/README.md`).
2. Open `src/data/portfolio.js` and set:
   ```js
   hasProfilePhoto: true,
   ```
3. Commit and push.

If the photo fails to load for any reason, the site gracefully falls back to the initials placeholder instead of a broken image icon.

---

## 8. Add Your CV

1. Place your resume PDF at `public/resume/Harshad-More-CV.pdf` (see `public/resume/README.md`).
2. Open `src/data/portfolio.js` and set:
   ```js
   hasResume: true,
   ```
3. Commit and push.

The Resume section and the Hero "Download CV" button automatically activate once the file exists.

---

## 9. Add LinkedIn Later

Open `src/data/portfolio.js` and set:

```js
linkedin: "https://www.linkedin.com/in/your-actual-profile/",
```

The link will automatically appear in the footer once populated. Nothing else needs to change.

---

## 10. Add Certifications

Open `src/data/certifications.js` and add an object to the array:

```js
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  date: "Month Year",
  url: "" // optional link to the credential
}
```

The empty-state message disappears automatically once the array has entries.

---

## 11. Update Skills

Open `src/data/skills.js`. Use honest levels only: `"Basic Knowledge"`, `"Learning"`, `"Working Knowledge"`, or `"Exploring"` — never a percentage.

```js
programming: [
  { name: "Python", level: "Working Knowledge" },
  { name: "JavaScript", level: "Learning" },
],
```

---

## 12. Update Achievements

Open `src/data/achievements.js` — it's a plain array of strings. Add a new line for each genuine milestone.

---

## 13. Update Education

Open `src/data/education.js`. Add institution names, dates, or grades only once you're ready to share them — leave fields as `""` until then.

---

## 14. Update About / Experience / Hero Copy

All of this lives in `src/data/portfolio.js` — name, title, tagline, contact details, About paragraphs, quick facts, and the Experience empty-state copy.

---

## Project Structure

```
portfolio/
├── public/
│   ├── images/profile/     ← profile photo goes here
│   ├── resume/              ← CV PDF goes here
│   └── favicon/
├── src/
│   ├── components/          ← reusable UI (Navbar, ProjectCard, ProfilePhoto, Footer, ...)
│   ├── sections/             ← one file per page section
│   ├── data/                 ← ALL editable content lives here
│   │   ├── portfolio.js      (identity, contact, about, experience)
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── education.js
│   │   ├── certifications.js
│   │   ├── achievements.js
│   │   └── exploring.js
│   ├── hooks/                 (useTheme, useReveal)
│   ├── utils/mailto.js        (mailto URL builder + email validation)
│   └── styles/                (design tokens + global styles)
├── .github/workflows/deploy.yml
└── vite.config.js
```

---

## Important GitHub Pages Configuration Notes

- **Base path** is computed automatically by the deploy workflow from your repository name — you don't need to hardcode it.
- **No client-side routing** is used (single-page, anchor-link navigation only), so there's no SPA-fallback/404 configuration to worry about.
- **Profile photo and resume asset references** use `import.meta.env.BASE_URL`, while the favicon uses Vite's `%BASE_URL%` replacement in `index.html`, so assets resolve correctly on GitHub Pages project sites.

---

## Final QA Checklist

- [ ] Desktop, laptop, tablet, and mobile layouts checked
- [ ] Mobile hamburger menu opens/closes, links scroll to the right section
- [ ] All nav links and CTA buttons work
- [ ] `mailto:` and `tel:` links open correctly
- [ ] Contact form: empty-field validation, invalid-email validation, special characters encode correctly in the generated `mailto:` link
- [ ] Adding a 2nd and 3rd project to `projects.js` renders correctly with no code changes
- [ ] GitHub / demo buttons hide correctly when a project has no `github`/`demo` value
- [ ] Dark mode and light mode both look intentional; theme choice persists on reload
- [ ] Keyboard navigation reaches every interactive element with a visible focus state
- [ ] Images have meaningful alt text; heading hierarchy is semantic (one `h1`, ordered `h2`/`h3`)
- [ ] `prefers-reduced-motion` disables animations
- [ ] Production build (`npm run build`) completes with no errors
- [ ] Hero shows `CV Coming Soon` instead of a broken CV link until the real PDF is added
- [ ] Site loads correctly at the deployed GitHub Pages URL, including images/resume paths
- [ ] No fabricated information anywhere on the site

---

Built with intent, not exaggeration.
