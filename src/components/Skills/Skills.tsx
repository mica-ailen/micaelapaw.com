import React from "react";
import { techStack } from "../../data/portfolio";
import "./Skills.css";

const Skills: React.FC = () => {
  const categories = ["frontend", "backend", "database", "tools"] as const;

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-categories">
          {categories.map((category) => (
            <div key={category} className="tech-category fade-in">
              <h3 className="category-title">{category}</h3>
              <div className="tech-items">
                {techStack
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <div key={tech.name} className="tech-item">
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
