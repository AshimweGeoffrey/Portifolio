import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTimes } from "react-icons/fa";
import "./Contact.css";

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

function Contact({ isOpen, onClose }: ContactProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="contact-modal-backdrop" onClick={handleBackdropClick}>
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes />
        </button>

        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:ashimwegeoffrey@gmail.com">ashimwegeoffrey@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-socials">
            <h4>Connect with me</h4>
            <div className="social-links">
              <a
                href="https://github.com/AshimweGeoffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ashimwegeoffrey"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/geoffreyashimwe"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <FaTwitter size={24} />
                <span>Twitter/X</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>Ashimwe Geoffrey • Software Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
