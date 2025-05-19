import React from "react";
import { projects } from "../../Constants";

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[#12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* section title  */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A Showcase of the Projects, I have Worked on, Highlighting my skill
          and Experiences in various Technology.
        </p>
      </div>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={projects.id}
            className="border border-white bg:gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-trasnlate-y-2 transititon-transform duration-200"
          >
            <div>
              {" "}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rouned-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
