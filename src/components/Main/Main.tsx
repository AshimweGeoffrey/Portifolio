import "./Main.css";
import liveDemoIcon from "../../assets/liveDemoIcon.svg";
import ProfileCard from "./ProfileCard";
function Main() {
  return (
    <div className="main-hero">
      <div className="main-hero-content">
        <h1>Ashimwe Geoffrey</h1>
        <p>
          Passionate about building scalable web applications that drive
          operational efficiency. Experienced in delivering custom solutions
          across multiple sectors with a focus on performance optimization and
          clean code.
        </p>
        <div className="main-hero-buttons">
          <button className="main-hero-resume-btn">Resume</button>
          <button className="main-hero-live-demo-btn">
            <img
              src={liveDemoIcon}
              alt="Live Demo"
              className="main-hero-live-demo-icon"
            />
            Live Demo Latest Project
          </button>
        </div>
        <div className="main-hero-description">
          <h4>Descrption</h4>
          <p>
            I'm a <span>Software Engineer</span> from Kigali, Rwanda, with
            experience in full-stack development and a passion for solving
            real-world problems through technology. My journey includes a BEng
            in Software Engineering from AUCA and hands-on experience through
            the ALx apprenticeship program. What drives me is building scalable
            solutions that make a difference - like reducing database queries by
            40% or helping businesses streamline operations. I thrive in
            collaborative environments and believe in writing clean,
            maintainable code that grows with business needs.
          </p>
        </div>
      </div>
      <ProfileCard />
    </div>
  );
}
export default Main;
