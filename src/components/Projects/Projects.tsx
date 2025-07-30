import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolio";
import "./Projects.css";

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
