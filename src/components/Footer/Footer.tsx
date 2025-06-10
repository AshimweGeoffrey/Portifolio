function Footer() {
  return (
    <div>
      <div>
        <h1>Ashimwe Geoffrey</h1>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Articles</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          Email:{" "}
          <a href="mailto:ashimwegeoffrey@example.com">
            ashimwegeoffrey@example.com
          </a>
        </div>
      </div>
      <div className="socials">
        <h3>Follow Me</h3>
        <ul>
          <li>
            <a href="https://twitter.com/yourprofile">Twitter</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/yourprofile">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
