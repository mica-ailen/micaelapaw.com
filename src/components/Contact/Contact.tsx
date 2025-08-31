import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out if you'd like to work together!
          </p>
          <div className="contact-links">
            <a href={personalInfo.github} className="contact-link">
              <Github size={20} />
              GitHub
            </a>
            <a href={personalInfo.linkedin} className="contact-link">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
