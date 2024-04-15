import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SingleSkill from "./components/SingleSkill";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-khaliq-green-1000 mt-16">
      <Navbar />
      <Hero />
      <Skills />
    <Projects/>
    </div>
  );
}

export default App;
