import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import "./App.css";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
