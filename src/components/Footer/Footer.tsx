import "./footer.css";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1>Ashimwe Geoffrey</h1>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-contact">
          Email:{" "}
          <a href="mailto:ashimwegeoffrey@example.com">
            ashimwegeoffrey@example.com
          </a>
        </div>
      </div>
      <div className="socials-footer">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
