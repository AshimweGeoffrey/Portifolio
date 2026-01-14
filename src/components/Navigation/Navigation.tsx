import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

interface NavigationProps {
  onContactClick?: () => void;
}

function Navigation({ onContactClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation-component">
      <Link to="/">
        <img src="/test.png" alt="Portfolio Logo" />
      </Link>
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <a href="/#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <Link to="/articles" onClick={() => setIsOpen(false)}>
              Articles
            </Link>
          </li>
          <li>
            <button
              className="nav-contact-btn"
              onClick={() => {
                setIsOpen(false);
                onContactClick?.();
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
