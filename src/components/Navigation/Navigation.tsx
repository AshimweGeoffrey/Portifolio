import "./Navigation.css";
function Navigation() {
  return (
    <nav className="navigation-component">
      <img src="/test.png" alt="Portfolio Logo" />
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
