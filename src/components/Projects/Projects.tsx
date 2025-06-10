import ProjectCard from "./ProjectCard";
const project_data = {
  projects: [
    {
      name: "Project A",
      description: "Description of Project A",
      url: "https://example.com/project-a",
      img: "https://example.com/project-a-image.jpg",
    },
    {
      name: "Project B",
      description: "Description of Project B",
      url: "https://example.com/project-b",
      img: "https://example.com/project-b-image.jpg",
    },
  ],
};
function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="Projetcs-Grid">
        {project_data.projects.map((project, index) => (
          <ProjectCard
            key={index}
            Project={{
              name: project.name,
              description: project.description,
              url: project.url,
              img: project.img,
            }}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
