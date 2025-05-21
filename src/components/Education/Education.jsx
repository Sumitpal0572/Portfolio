import React from "react";
import { education } from "../../Constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Timeline items */}
        {education.map((edu, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative mb-20 flex flex-col sm:flex-row ${
                isEven ? "sm:justify-start" : "sm:justify-end"
              } items-center`}
            >
              {/* Connector circle image */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-[#8245ec] rounded-full overflow-hidden z-10 flex justify-center items-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card container */}
              <div
                className={`w-full sm:w-[45%] mt-20 sm:mt-0 ${
                  isEven
                    ? "sm:mr-auto sm:pr-10 text-right"
                    : "sm:ml-auto sm:pl-10 text-left"
                }`}
              >
                <div className="bg-gray-900 border border-white rounded-xl p-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <h4 className="text-md text-gray-300 mt-1">{edu.school}</h4>
                  <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                  <p className="text-gray-400 mt-4 font-bold">
                    Grade: {edu.grade}
                  </p>
                  <p className="text-gray-400 mt-2">{edu.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
