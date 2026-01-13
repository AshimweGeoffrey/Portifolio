import { useState } from "react";
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
      <img src="/test.png" alt="Portfolio Logo" />
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
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="/articles" onClick={() => setIsOpen(false)}>
              Articles
            </a>
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
