import "./Skills.css";
import SkillsCardML from "./SkillsCardML";
import SkillsCardSE from "./SkillsCardSE";

function Skills() {
  return (
    <div className="parent">
      <h1 className="section-title">Skills</h1>
      <div className="skills-container">
        <SkillsCardML />
        <SkillsCardSE />
      </div>
    </div>
  );
}

export default Skills;
