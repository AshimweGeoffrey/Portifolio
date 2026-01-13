import { ProjectCardTemplate } from "./project-card";

const mockProjects = [
  {
    title: "The Daily Grind",
    description:
      "The Daily Grind is a responsive eCommerce website for specialty coffee. It features product catalogs, subscription boxes, cart & wishlist systems, and promotional highlights. Built with a clean modern UI, it demonstrates practical online store functionality with focus on usability and customer experience.",
    image:
      "https://images.unsplash.com/photo-1758358563517-92d11dbb6e04?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [
      "React",
      "TypeScript",
      "CSS",
      "Java",
      "Spring Boot",
      "MySQL",
    ],
    liveUrl: "https://coffeegrind-x.netlify.app/",
    codeUrl: "https://github.com/AshimweGeoffrey/The-Daily-Grind",
    date: "May 2025",
  },
  {
    title: "VolunteerSync",
    description:
      "VolunteerSync is a community-driven platform connecting volunteers with organizations across Rwanda. It features project listings, dashboards, and real-time stats on active, completed, and upcoming initiatives. The platform empowers individuals to find opportunities matching their skills while helping NGOs and communities collaborate for lasting impact.",
    image:
      "https://images.unsplash.com/photo-1758359365074-25152ffb6a1b?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [
      "C#",
      "React",
      "MySQL",
      "MongoDB",
      "ASP.NET",
      "Css",
      "TypeScript",
    ],
    liveUrl: "https://volunteersync.netlify.app/",
    codeUrl: "https://github.com/AshimweGeoffrey/Volunteer_sync",
    date: "March 2025",
  },
  {
    title: "Fungi Finders",
    description:
      "Fungi Finders is an educational web project introducing users to the world of mushroom foraging. It highlights outdoor exploration, botanical knowledge, and culinary uses through an engaging, content-rich interface. This project was built as a learning exercise referenced from a Frontend Masters course, showcasing my ability to translate educational material into a polished, interactive website.",
    image:
      "https://images.unsplash.com/photo-1758360415548-06bc71b40659?q=80&w=1140&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Css", "JavaScript", "Node.js"],
    liveUrl: "https://fungicss.netlify.app/",
    codeUrl: "https://github.com/AshimweGeoffrey/Ce_frontendmasters_Css",
    date: "Oct 2024",
  },
  {
    title: "Nisr Food Security",
    description:
      "Research-oriented system for mapping and predicting district-level child malnutrition risk in Rwanda. This project combines geospatial analysis, statistical profiling, and machine-learning modelling using official NISR datasets to produce actionable, district-level risk scores and interactive visualizations.",
    image:
      "https://images.unsplash.com/vector-1768258383679-548ba2ab0963?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: [
      "Python",
      "React",
      "Node.js",
      "TypeScript",
      "FastAPI",
      "ArcGis",
    ],
    liveUrl: "https://nisrmalnutrution.vercel.app//",
    codeUrl:
      "https://github.com/AshimweGeoffrey/Child-malnutrition-geospatial-rwanda",
    date: "Oct 2025",
  },
];
export default function ProjectCard() {
  return (
    <div className="projects-grid">
      {mockProjects.map((project) => (
        <ProjectCardTemplate key={project.title} project={project} />
      ))}
    </div>
  );
}
