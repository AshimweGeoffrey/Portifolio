import React from "react";

interface Repo {
  name?: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
  updated?: string;
  githubUrl?: string;
  demoUrl?: string | null;
}

interface GitHubRepoCardsProps {
  repo?: Repo;
}

const GitHubRepoCards: React.FC<GitHubRepoCardsProps> = ({ repo }) => {
  const languageNames: { [key: string]: string } = {
    javascript: "JavaScript",
    python: "Python",
    html: "HTML",
    css: "CSS",
    react: "React",
    typescript: "TypeScript",
    java: "Java",
    cpp: "C++",
    c: "C",
  };

  const languageName =
    repo?.language?.toLowerCase() && languageNames[repo.language.toLowerCase()]
      ? languageNames[repo.language.toLowerCase()]
      : repo?.language || "Unknown";

  const repoData = {
    name: repo?.name || "Unknown Repository",
    description: repo?.description || "No description available",
    language: repo?.language?.toLowerCase() || "unknown",
    stars: repo?.stars || 0,
    forks: repo?.forks || 0,
    updated: repo?.updated || "Unknown",
    githubUrl: repo?.githubUrl || "#",
    demoUrl: repo?.demoUrl || null,
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <a
          href={repoData.githubUrl}
          className="project-title"
          target="_blank"
          rel="noopener noreferrer"
        >
          {repoData.name}
        </a>
        <a
          href={repoData.githubUrl}
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <p className="project-description">{repoData.description}</p>

      <div className="project-meta">
        <div className="meta-item">
          <span>⭐</span>
          <span>{repoData.stars}</span>
        </div>
        <div className="meta-item">
          <span>🍴</span>
          <span>{repoData.forks}</span>
        </div>
        <div className="meta-item">
          <span>📅</span>
          <span>Updated {repoData.updated}</span>
        </div>
      </div>

      <div className={`language-tag lang-${repoData.language}`}>
        <div className="language-dot"></div>
        <span>{languageName}</span>
      </div>

      <div className="project-links">
        {repoData.demoUrl && (
          <a
            href={repoData.demoUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
        <a
          href={repoData.githubUrl}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default GitHubRepoCards;
