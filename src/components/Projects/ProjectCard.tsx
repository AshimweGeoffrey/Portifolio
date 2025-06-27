import { useState, useEffect } from "react";
import GitHubRepoCards from "./GitHubRepoCards";
import { fetchAllRepositories } from "./data.js";

function ProjectCard() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchAllRepositories().then(setRepos);
  }, []);

  return (
    <div className="projects-grid">
      {repos.map((repo, index) => (
        <GitHubRepoCards key={index} repo={repo} />
      ))}
    </div>
  );
}

export default ProjectCard;
