import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import BlurBlow from "./BlurBlob";

const App = () => {
  return (
    <div className="bg-[#050414] relative overflow-x-hidden">
      {/* Navbar must be outside of other effects */}
      <Navbar />

      {/* Background effect 1: Blur Blob */}
      <BlurBlow
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Background effect 2: Grid lines */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content below navbar */}
      <div className="relative pt-20">
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
};

export default App;
