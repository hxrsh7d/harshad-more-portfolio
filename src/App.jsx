import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Exploring from "./sections/Exploring";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Testimonials from "./sections/Testimonials";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Exploring />
        <Experience />
        <Certifications />
        <Achievements />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
