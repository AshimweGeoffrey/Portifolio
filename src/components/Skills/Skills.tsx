import "./Skills.css";
import SkillsCardML from "./SkillsCardML";
import SkillsCardSE from "./SkillsCardSE";

function Skills() {
  return (
    <div>
      <div className="corner-brackets">
        <h1 className="rounded-accents">Skills</h1>
      </div>
      <div className="skills-container">
        <SkillsCardML />
        <SkillsCardSE />
      </div>
    </div>
  );
}

export default Skills;
