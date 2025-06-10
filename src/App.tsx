import "./App.css";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="app-container">
        <Navigation />
        <Main />
        <Skills />
        <Projects />
        <Testimonials />
        <Technologies />
      </div>
      <Footer />
    </>
  );
}

export default App;
