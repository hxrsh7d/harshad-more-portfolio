/**
 * portfolio.js
 * ------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH for all personal information on the site.
 * Update your name, contact details, links, photo, and CV here —
 * every component reads from this file, so you never have to hunt
 * through the codebase to change something.
 * ------------------------------------------------------------------
 */

// Vite injects the correct base path (e.g. "/your-repo-name/") for GitHub
// Pages project sites. Public-folder assets must be prefixed with it so
// links keep working no matter what the repository is named.
const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const portfolio = {
  // Basic identity
  name: "Harshad More",
  fullName: "Harshad Hanmant More",
  initials: "HM",
  title: "Diploma in AI & ML Graduate",
  subtitle: "Aspiring AI/ML & Engineering Professional",
  tagline: "Learning. Building. Growing.",
  heroSupportingText:
    "Building practical projects, exploring AI, and using technology to work smarter.",
  status: "Open to Internships & Opportunities",
  location: "Kalyan, Maharashtra, India",

  // Contact — used to build mailto: / tel: links across the site
  email: "moreharshad175@gmail.com",
  phone: "+917039205874",
  phoneDisplay: "+91 70392 05874",

  // Social / external links
  github: "https://github.com/hxrsh7d",
  githubUsername: "hxrsh7d",
  // Leave blank until a real LinkedIn profile exists.
  // Add the URL here later — the whole site will pick it up automatically.
  linkedin: "",

  // Profile photo — drop a real photo at public/images/profile/profile.jpg
  // to replace the placeholder everywhere on the site (see README "Add
  // Profile Photo"), then flip hasProfilePhoto to true.
  profilePhoto: withBase("/images/profile/profile.jpg"),
  hasProfilePhoto: false,

  // Resume / CV — drop a PDF at public/resume/Harshad-More-CV.pdf
  // (see README "Add CV"), then flip hasResume to true.
  resumePath: withBase("/resume/Harshad-More-CV.pdf"),
  hasResume: false,

  // About section copy
  about: {
    paragraphs: [
      "Hi, I'm Harshad More, a recently graduated Diploma student in Artificial Intelligence and Machine Learning. I'm passionate about technology, AI, automation, and finding smarter ways to solve problems.",
      "I enjoy experimenting with AI tools, building useful projects, learning new technologies, and using AI to improve my own productivity.",
      "I'm currently looking forward to pursuing a B.E./B.Tech degree and gaining practical experience through internships, projects, and opportunities where I can learn, contribute, and grow.",
    ],
    quickFacts: [
      { label: "Years of Professional Experience", value: "0+" },
      { label: "Diploma", value: "AI & ML" },
      { label: "Personal Projects", value: "2+" },
      { label: "Focus Area", value: "AI-Powered Productivity" },
    ],
  },

  // Experience — fresher empty state
  experience: {
    heading: "Fresher / Aspiring Engineering Professional",
    description:
      "Currently seeking opportunities to gain real-world experience through internships, projects, collaboration, and engineering opportunities.",
  },
};

export default portfolio;
