function SkillsCardML() {
  return (
    <div className="skills-card">
      <img src="/pngwing.com.png" alt="Machine Learning" />
      <div className="skills-card-content">
        <div className="skills-card-text">
          <h3>ML Engineer</h3>
          <p>
            Building foundational skills in applied machine learning with
            experience in data preprocessing, feature engineering, and training
            baseline models using Python and scikit-learn. Currently working on
            applying ML to public-sector datasets (health, geospatial, and
            socioeconomic data) and integrating predictive components into
            analytical dashboards.
          </p>
        </div>
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </button>
      </div>
    </div>
  );
}

export default SkillsCardML;
