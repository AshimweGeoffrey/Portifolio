import "./App.css";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
import Socials from "./components/Socials/Socials";
import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

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
          <Navigation onContactClick={openContact} />
        </div>
        <div>
          <Socials />
        </div>
        <Main onContactClick={openContact} />
        <Skills />
        <Projects />
        <Technologies />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}

export default App;
