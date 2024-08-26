import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Aboutme from "./components/Aboutme";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contact-form" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const hash = new URLSearchParams(location.search).get("section");

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div>
      <div id="Inicio">
        <Hero />
      </div>
      <div id="habilidades">
        <div id="sobremi">
          <Aboutme />
        </div>
      </div>
      <div id="proyectos">
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}

export default App;
