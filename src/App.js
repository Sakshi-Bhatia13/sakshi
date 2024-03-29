import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import ExperienceSection from "./components/Experience";
import Footer from "./components/footer";

function App() {
  const [activeComponent, setActiveComponent] = useState("home");

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      {activeComponent === "home" && <Home />}
      {/* {activeComponent === "about" && <About />} */}
      {activeComponent === "technologies" && <Technologies />}
      {activeComponent === "project" && <Projects />}
      {activeComponent === "contact" && <Contact />}
      {activeComponent === "experience" && <ExperienceSection />}
      <Footer/>
    </div>
  );
}

export default App;
