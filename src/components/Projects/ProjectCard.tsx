function ProjectCard({
  Project,
}: {
  Project: { name: string; description: string; url: string; img: string };
}) {
  return (
    <div>
      <img src={Project.img} alt="Project Image" />
      <h3>{Project.name}</h3>
      <p>{Project.description}</p>
      <a href={Project.url}>Live Demo</a>
    </div>
  );
}

export default ProjectCard;
