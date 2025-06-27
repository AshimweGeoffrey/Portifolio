// data.js - Repository configuration data

// Configuration options
export const config = {
  defaultOwner: "AshimweGeoffrey", // Default GitHub username if not specified in repo data
  enableCache: true, // Enable caching of GitHub API responses (future feature)
  refreshInterval: 300000, // 5 minutes in milliseconds (future feature)
};

// Repository data
export const repositoriesData = [
  {
    name: "ideal-adventure",
    githubUrl: "https://github.com/AshimweGeoffrey/ideal-adventure",
    demoUrl: "https://your-demo-url.com", // Replace with actual demo URL or set to null
    description:
      "An innovative web application demonstrating modern development practices with clean architecture and responsive design.", // Optional: will be fetched from GitHub if not provided
  },
  {
    name: "AgriMart_Web_Tech_Exam",
    githubUrl: "https://github.com/AshimweGeoffrey/AgriMart_Web_Tech_Exam",
    demoUrl: "x", // Replace with actual demo URL if available
    description:
      "E-commerce application with Spring Boot and Thymeleaf, designed for scalable and maintainable online shopping experiences. Implements modern web tech exam requirements with a clean architecture.",
  },
  {
    name: "AirBnB_clone",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone",
    demoUrl: null, // Replace with actual demo URL if available
    description:
      "A foundational clone of the AirBnB platform, demonstrating core concepts in backend and frontend integration. Built for robust, modular, and extensible application development.",
  },
  {
    name: "AirBnB_clone_v2",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone_v2",
    demoUrl: null, // Replace with actual demo URL if available
    description:
      "Enhanced AirBnB clone utilizing Python with advanced features and improved codebase structure. Focuses on high performance, maintainability, and scalable service-oriented architecture.",
  },
  {
    name: "AirBnB_clone_v3",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone_v3",
    demoUrl: null, // Replace with actual demo URL if available
    description:
      "Third iteration of AirBnB clone focusing on API-centric design with Python, enabling seamless integration, optimized data handling, and high-end system extensibility.",
  },
  {
    name: "AirBnB_clone_v4",
    githubUrl: "https://github.com/AshimweGeoffrey/AirBnB_clone_v4",
    demoUrl: null, // Replace with actual demo URL if available
    description:
      "Latest version of the AirBnB clone, engineered for maximum efficiency and flexibility. Incorporates advanced Python techniques and delivers a robust, production-grade backend.",
  },
];
// Optimal date formatting utility with accurate time calculations
export const formatDate = (dateString) => {
  if (!dateString) return "Unknown";

  try {
    // Parse repository update date
    const date = new Date(dateString);
    // Use current date (not hardcoded)
    const now = new Date();

    // Calculate difference in milliseconds
    const diffMs = now.getTime() - date.getTime();

    // Convert to different time units with precise calculations
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    // More accurate week/month/year calculations
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30.4375); // More precise average days in month
    const diffYears = Math.floor(diffDays / 365.25); // Account for leap years

    // Format based on most appropriate time unit
    if (diffSecs < 60) return "Just now";
    if (diffMins < 60)
      return `${diffMins} ${diffMins === 1 ? "minute" : "minutes"} ago`;
    if (diffHours < 24)
      return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
    if (diffDays < 7)
      return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
    if (diffWeeks < 4)
      return `${diffWeeks} ${diffWeeks === 1 ? "week" : "weeks"} ago`;
    if (diffMonths < 12)
      return `${diffMonths} ${diffMonths === 1 ? "month" : "months"} ago`;

    return `${diffYears} ${diffYears === 1 ? "year" : "years"} ago`;
  } catch (error) {
    console.error("Date formatting error:", error);
    return "Unknown";
  }
};

// Optimized GitHub repository data fetching
export const fetchGitHubRepoData = async (repo) => {
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
