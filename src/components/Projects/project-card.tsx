import { Calendar, Code, ExternalLink } from "lucide-react";

interface Project {
  image: string;
  title: string;
  liveUrl: string;
  codeUrl: string;
  date: string;
  description: string;
  technologies: string[];
}

export function ProjectCardTemplate({ project }: { project: Project }) {
  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`${project.title} demo`}
          className="project-image"
        />
        <div className="image-overlay">
          <div className="overlay-buttons">
            <a
              href={project.liveUrl}
              className="overlay-btn btn-live"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.codeUrl}
              className="overlay-btn btn-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code size={16} />
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        {/* Header with title and date */}
        <div className="project-header">
          <h2 className="project-title">{project.title}</h2>
          <div className="project-date">
            <Calendar size={16} />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="project-technologies project-techs">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className={`project-tech-tag project-lang-${tech.toLowerCase()}`}
            >
              <span className="project-language-dot"></span>
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <a
            href={project.liveUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={16} />
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
