// data.ts - Repository configuration and types

export interface Config {
  defaultOwner: string;
  enableCache: boolean;
  refreshInterval: number;
}

export const config: Config = {
  defaultOwner: "AshimweGeoffrey",
  enableCache: true,
  refreshInterval: 300000, // 5 minutes
};

export interface RepositoryData {
  name: string;
  githubUrl?: string;
  demoUrl?: string | null;
  description?: string;
}

export const repositoriesData: RepositoryData[] = [
  {
    name: "ideal-adventure",
    githubUrl: "https://github.com/AshimweGeoffrey/ideal-adventure",
    demoUrl: "https://your-demo-url.com",
    description:
      "An innovative web application demonstrating modern development practices with clean architecture and responsive design.",
  },
  {
    name: "AgriMart_Web_Tech_Exam",
    githubUrl: "https://github.com/AshimweGeoffrey/AgriMart_Web_Tech_Exam",
    demoUrl: "x",
    description:
      "E-commerce application with Spring Boot and Thymeleaf, designed for scalable and maintainable online shopping experiences. Implements modern web tech exam requirements with a clean architecture.",
  },
  {
    name: "AirBnB_clone",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone",
    demoUrl: null,
    description:
      "A foundational clone of the AirBnB platform, demonstrating core concepts in backend and frontend integration. Built for robust, modular, and extensible application development.",
  },
  {
    name: "AirBnB_clone_v2",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone_v2",
    demoUrl: null,
    description:
      "Enhanced AirBnB clone utilizing Python with advanced features and improved codebase structure. Focuses on high performance, maintainability, and scalable service-oriented architecture.",
  },
  {
    name: "AirBnB_clone_v3",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone_v3",
    demoUrl: null,
    description:
      "Third iteration of AirBnB clone focusing on API-centric design with Python, enabling seamless integration, optimized data handling, and high-end system extensibility.",
  },
  {
    name: "AirBnB_clone_v4",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone_v4",
    demoUrl: null,
    description:
      "Latest version of the AirBnB clone, engineered for maximum efficiency and flexibility. Incorporates advanced Python techniques and delivers a robust, production-grade backend.",
  },
];

// Date formatting utility
export const formatDate = (dateString: string) => {
  if (!dateString) return "Unknown";
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30.4375);
    const diffYears = Math.floor(diffDays / 365.25);

    if (diffSecs < 60) return "Just now";
    if (diffMins < 60)
      return `${diffMins} minute${diffMins === 1 ? "" : "s"} ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
    if (diffWeeks < 4)
      return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
    if (diffMonths < 12)
      return `${diffMonths} month${diffMonths === 1 ? "" : "s"} ago`;
    return `${diffYears} year${diffYears === 1 ? "" : "s"} ago`;
  } catch (error) {
    console.error("Date formatting error:", error);
    return "Unknown";
  }
};

// GitHub data fetch
export const fetchGitHubRepoData = async (repo: RepositoryData) => {
  try {
    const repoPath = repo.githubUrl
      ? repo.githubUrl.replace("https://github.com/", "")
      : `${config.defaultOwner}/${repo.name}`;

    const response = await fetch(`https://api.github.com/repos/${repoPath}`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);

    const apiData = await response.json();

    return {
      ...repo,
      description:
        repo.description || apiData.description || "No description available",
      language: apiData.language ? apiData.language.toLowerCase() : "unknown",
      stars: apiData.stargazers_count || 0,
      forks: apiData.forks_count || 0,
      updated: formatDate(apiData.updated_at),
      githubUrl: apiData.html_url || repo.githubUrl,
    };
  } catch (error) {
    console.error(`Error fetching data for ${repo.name}:`, error);
    return {
      ...repo,
      description: repo.description || "No description available",
      language: "unknown",
      stars: 0,
      forks: 0,
      updated: "Unknown",
      githubUrl: repo.githubUrl || "#",
    };
  }
};

export const fetchAllRepositories = async () => {
  try {
    return await Promise.all(
      repositoriesData.map((repo) => fetchGitHubRepoData(repo))
    );
  } catch (error) {
    console.error("Failed to fetch repositories:", error);
    return repositoriesData;
  }
};
