/**
 * projects.js
 * ------------------------------------------------------------------
 * Add every new project here. The Projects section renders cards
 * automatically from this array — you never need to touch the
 * ProjectCard component itself.
 *
 * Field reference:
 *   title       (string, required)  Project name
 *   description (string, required)  1-2 sentence summary
 *   github      (string, optional)  Repo URL. Leave "" to hide the button.
 *   demo        (string, optional)  Live demo URL. Leave "" to hide the button.
 *   tags        (string[], optional) Technology / category tags
 *   image       (string, optional)  Path under /public, e.g. "/images/projects/xyz.png"
 *   status      (string, optional)  e.g. "Completed", "In Progress"
 *   featured    (boolean, optional) Highlights the card with an accent badge
 * ------------------------------------------------------------------
 * HOW TO ADD A NEW PROJECT
 * 1. Create the GitHub repository.
 * 2. Copy the object below, fill in the fields, add a comma above it.
 * 3. Commit & push — GitHub Pages rebuilds and the card appears automatically.
 *
 * {
 *   title: "My New Project",
 *   description: "What the project does, in one or two sentences.",
 *   github: "https://github.com/hxrsh7d/my-new-project",
 *   demo: "",
 *   tags: ["Python", "AI"],
 *   image: "",
 *   status: "Completed",
 *   featured: false,
 * }
 * ------------------------------------------------------------------
 */

const projects = [
  {
    title: "Free API Directory",
    description:
      "A practical directory designed to help developers and learners discover useful free APIs in one place.",
    github: "https://github.com/hxrsh7d/api-directory",
    demo: "",
    tags: ["Directory", "Web", "Developer Tools"],
    image: "",
    status: "Completed",
    featured: true,
  },
];

export default projects;