import ProjectCard from "./ProjectCard";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects parent" id="projects">
      <h2 className="section-title">Projects</h2>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}
export default Projects;
