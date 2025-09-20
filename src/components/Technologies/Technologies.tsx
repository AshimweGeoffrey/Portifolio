import "./technologies.css";
import type { ComponentProps } from "react";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiAmazon,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiTensorflow,
  SiKubernetes,
  SiPostman,
  SiFigma,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiRedis,
  SiSupabase,
  SiGit,
  SiC,
  SiCplusplus,
  SiSharp,
} from "react-icons/si";

type Tech = {
  id: string;
  label: string;
  sub?: string;
};

type TechCategory = {
  id: string;
  label: string;
  items: Tech[];
};

const CATEGORIES: TechCategory[] = [
  {
    id: "ml",
    label: "Machine Learning",
    items: [
      { id: "python", label: "Python" },
      { id: "tf", label: "TensorFlow" },
      { id: "numpy", label: "NumPy" },
      { id: "pandas", label: "Pandas" },
      { id: "sklearn", label: "scikit-learn" },
      { id: "jupyter", label: "Jupyter" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { id: "node", label: "Node.js" },
      { id: "django", label: "Django" },
      { id: "flask", label: "Flask" },
      { id: "fastapi", label: "FastAPI" },
      { id: "postgres", label: "PostgreSQL" },
      { id: "mongo", label: "MongoDB" },
      { id: "redis", label: "Redis" },
      { id: "s3", label: "Amazon S3" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { id: "react", label: "React / TSX" },
      { id: "ts", label: "TypeScript" },
      { id: "javascript", label: "JavaScript" },
    ],
  },
  {
    id: "uiux",
    label: "UI / UX",
    items: [{ id: "figma", label: "Figma" }],
  },
  {
    id: "devops",
    label: "DevOps",
    items: [
      { id: "docker", label: "Docker" },
      { id: "k8s", label: "Kubernetes" },
      { id: "aws", label: "AWS" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    items: [
      { id: "c", label: "C" },
      { id: "cpp", label: "C++" },
      { id: "csharp", label: "C#" },
      { id: "java", label: "Java" },
      { id: "flutter", label: "Flutter" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { id: "github", label: "GitHub" },
      { id: "git", label: "Git" },
      { id: "vscode", label: "VS Code" },
      { id: "postman", label: "Postman" },
      { id: "supabase", label: "Supabase" },
    ],
  },
];

export default function Technologies() {
  return (
    <div className="parent">
      <h2 className="section-title">Technologies</h2>
      <section className="technologies-root" aria-labelledby="tech-heading">
        <div className="techs-wrapper">
          {CATEGORIES.map((cat) => (
            <section key={cat.id} className="tech-category">
              <h3 className="tech-category-title">{cat.label}</h3>
              <div className="techs" role="list">
                {cat.items.map((t) => (
                  <div
                    key={t.id}
                    role="listitem"
                    className={`tech-tag tech-${t.id}`}
                    aria-label={t.label}
                    tabIndex={0}
                  >
                    <div className="icon" aria-hidden>
                      {renderIconFor(t.id)}
                    </div>
                    <div className="label">{t.label}</div>
                    {t.sub ? <div className="sub">{t.sub}</div> : null}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}

function renderIconFor(id: string) {
  const props: ComponentProps<typeof SiPython> = {
    size: 20,
    "aria-hidden": true,
  };

  switch (id) {
    case "python":
      return <SiPython {...props} />;
    case "javascript":
      return <SiJavascript {...props} />;
    case "react":
      return <SiReact {...props} />;
    case "ts":
    case "typescript":
      return <SiTypescript {...props} />;
    case "node":
      return <SiNodedotjs {...props} />;
    case "docker":
      return <SiDocker {...props} />;
    case "aws":
      return <SiAmazon {...props} />;
    case "graphql":
      return <SiGraphql {...props} />;
    case "postgres":
      return <SiPostgresql {...props} />;
    case "mongo":
    case "mongodb":
      return <SiMongodb {...props} />;
    case "numpy":
      return <SiNumpy {...props} />;
    case "pandas":
      return <SiPandas {...props} />;
    case "sklearn":
    case "scikit-learn":
      return <SiScikitlearn {...props} />;
    case "jupyter":
      return <SiJupyter {...props} />;
    case "django":
      return <SiDjango {...props} />;
    case "flask":
      return <SiFlask {...props} />;
    case "fastapi":
      return <SiFastapi {...props} />;
    case "redis":
      return <SiRedis {...props} />;
    case "s3":
      return <SiAmazon {...props} />;
    case "supabase":
      return <SiSupabase {...props} />;
    case "github":
      return <SiGithub {...props} />;
    case "git":
      return <SiGit {...props} />;
    case "c":
      return <SiC {...props} />;
    case "cpp":
    case "c++":
      return <SiCplusplus {...props} />;
    case "csharp":
    case "c#":
      return <SiSharp {...props} />;
    case "java":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2s-1 2 2 4c0 0-3 1-2 5 0 0 1 2 3 2s3-1 3-1-1 3-4 4-6 1-6 1 2-1 3-3c0 0-3 0-3-2 0 0 1-1 3-2 0 0-2-2-1-5 0 0 2-2 4-3z"
            fill="currentColor"
            opacity="0.14"
          />
        </svg>
      );
    case "flutter":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 13l8-8 6 6-8 8-6-6z" fill="currentColor" opacity="0.12" />
          <path
            d="M11 3l6 6"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tf":
    case "tensorflow":
      return <SiTensorflow {...props} />;
    case "k8s":
    case "kubernetes":
      return <SiKubernetes {...props} />;
    case "vscode":
    case "vs code":
    case "visualstudio":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4.5L11 12 2 19.5V4.5Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M11 12L22 4.5V19.5L11 12Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    case "postman":
      return <SiPostman {...props} />;
    case "figma":
      return <SiFigma {...props} />;
    default:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <rect
            width="24"
            height="24"
            rx="4"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M6 12h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
