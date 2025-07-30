import React from "react";
import { ChevronRight } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import "./Hero.css";

interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick, onContactClick }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{personalInfo.name}</h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={onProjectsClick}>
            View Projects <ChevronRight size={20} />
          </button>
          <button className="btn btn-secondary" onClick={onContactClick}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
