import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./App.css";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import HeroSection from "./Components/HeroSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
