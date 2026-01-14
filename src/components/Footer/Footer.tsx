import "./footer.css";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  onContactClick?: () => void;
}

function Footer({ onContactClick }: FooterProps) {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h1>Ashimwe Geoffrey</h1>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/articles">Articles</a>
            </li>
            <li>
              <button
                className="nav-contact-btn"
                onClick={() => {
                  onContactClick?.();
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          Email:{" "}
          <a href="mailto:ashimwegeoffrey@gmail.com">
            ashimwegeoffrey@gmail.com
          </a>
        </div>
      </div>
      <div className="socials-footer">
        <a
          href="https://github.com/AshimweGeoffrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/ashimwegeoffrey "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/geoffreyashimwe"
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
