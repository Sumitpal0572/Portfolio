import React from "react";
import { experiences } from "../../Constants";

const Experience = () => {
  return (
    <section
      id={experiences}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient "
    >
      {/* section experiences  */}
      <div className="text-center mb-16 ">
        <h2 className="text-4xl font-bold text-white"> EXPERIENCES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-5 text-gray-400 text-lg font-semibold">
          The Collection of my Work Experiences and the roleS I have taken in
          various Organizations.
        </p>
      </div>
{/* experiences  */}


    </section>
  );
};

export default Experience;
