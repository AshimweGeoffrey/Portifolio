import "./App.css";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    window.scrollTo({
      top: 95,
      behavior: "smooth", // change to "auto" if you want instant scroll
    });
  }, []);
  return (
    <>
      <div className="app-container">
        <div className="navigation">
          <Navigation />
        </div>
        <div>
          <Socials />
        </div>
        <Main />
        <Skills />
        <Projects />
        <Technologies />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
