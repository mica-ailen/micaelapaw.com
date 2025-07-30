import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Section } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const sectionsRef = useRef<{ [key in Section]?: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = [
        "home",
        "about",
        "skills",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: Section) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />

      <div
        ref={(el) => {
          sectionsRef.current.home = el;
        }}
      >
        <Hero
          onProjectsClick={() => scrollToSection("projects")}
          onContactClick={() => scrollToSection("contact")}
        />
      </div>

      <div
        ref={(el) => {
          sectionsRef.current.about = el;
        }}
      >
        <About />
      </div>

      <div
        ref={(el) => {
          sectionsRef.current.skills = el;
        }}
      >
        <Skills />
      </div>

      <div
        ref={(el) => {
          sectionsRef.current.projects = el;
        }}
      >
        <Projects />
      </div>

      <div
        ref={(el) => {
          sectionsRef.current.contact = el;
        }}
      >
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
