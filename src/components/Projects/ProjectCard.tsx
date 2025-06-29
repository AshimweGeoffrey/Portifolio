import { useState, useEffect } from "react";
import GitHubRepoCards from "./GitHubRepoCards";
import { fetchAllRepositories } from "./data";

interface GitHubRepo {
  name: string;
  githubUrl?: string;
  demoUrl?: string | null;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
  updated?: string;
}

export default function ProjectCard() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetchAllRepositories().then((data) => {
      setRepos(data);
    });
  }, []);

  return (
    <div className="projects-grid">
      {repos.map((repo) => (
        <GitHubRepoCards key={repo.name} repo={repo} />
      ))}
    </div>
  );
}
