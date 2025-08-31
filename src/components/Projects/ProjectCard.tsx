import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card fade-in">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" className="project-link">
            Live Demo <ExternalLink size={16} />
          </a>
          <a href={project.githubUrl} target="_blank" className="project-link">
            GitHub <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
