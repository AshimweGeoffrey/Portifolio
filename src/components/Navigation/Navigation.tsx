import "./Navigation.css";
function Navigation() {
  return (
    <nav className="navigation-component">
      <img src="/test.png" alt="Portfolio Logo" />
      <div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
