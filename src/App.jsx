import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Hero />
      <About /> {/* Add the About Me section here */}
      <ProjectsSection /> {/* Add the About Me section here */}
      <Experience /> {/* Add the About Me section here */}
      <Contact />
    </div>
  );
}

export default App;
