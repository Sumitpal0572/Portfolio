import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
function App() {
  return (
    <div className="bg-[#050414]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px, transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]bg-[size:14px_24px][mask"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
