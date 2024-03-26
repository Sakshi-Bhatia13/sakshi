import Navbar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Contact from "./components/contact";
import ExperienceSection from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <ExperienceSection />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
