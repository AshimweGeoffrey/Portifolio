import "./App.css";
import Layout from "./components/layout";
import HomeContent from "./components/Home";
import Contact from "./components/Contact/Contact";
import Articles from "./components/Articles";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

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
      <Layout onContactClick={openContact}>
        <Routes>
          <Route
            path="/"
            element={<HomeContent onContactClick={openContact} />}
          />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Layout>

      <Contact isOpen={isContactOpen} onClose={closeContact} />
    </>
  );
}

export default App;
