import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/contact";
import ExperienceSection from "./components/Experience";
import Projects from "./components/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects/>
      <ExperienceSection />
      <Contact/>
      <SocialLinks />
    </div>
  );
}

export default App;
