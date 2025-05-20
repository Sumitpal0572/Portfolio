import React from "react";
import { projects } from "../../Constants";
import { useState } from "react";

const Work = () => {
  const [selectedProject, setselectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setselectedProject(project);
  };

  const handleCloseModel = (project) => {
    setselectedProject(null);
  };

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
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg:gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-trasnlate-y-2 transititon-transform duration-200"
          >
            <div className="p-4">
              {" "}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rouned-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3 ">
                {project.description}
              </p>
              <div className="mb-4 ">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2  "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Model container  */}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div>
              <button
                onClick={handleCloseModel}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-conatin rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
