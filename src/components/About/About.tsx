import React from "react";
import { personalInfo } from "../../data/portfolio";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content fade-in">
          <p>{personalInfo.about}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
