import { ProjectCardTemplate } from "./project-card";

const mockProjects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and customer insights. Built with modern React patterns and responsive design.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MzE3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Supabase",
    ],
    liveUrl: "#",
    codeUrl: "#",
    date: "Dec 2024",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Perfect for agile development teams.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MzE3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: [
      "Next.js",
      "React DnD",
      "Prisma",
      "PostgreSQL",
      "TailwindCSS",
    ],
    liveUrl: "#",
    codeUrl: "#",
    date: "Nov 2024",
  },
  {
    title: "Social Media Analytics",
    description:
      "Advanced analytics platform for social media marketers with interactive charts, performance tracking, and automated reporting capabilities.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4MzE3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    codeUrl: "#",
    date: "Oct 2024",
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
