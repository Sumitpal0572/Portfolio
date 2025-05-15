import React from "react";
import { SkillsInfo } from "../../Constants";

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient "
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white ">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-automt-2"></div>
        <p className="text-gray-400 text-lg mt-4 font-semibold">
          A Collection of Technical Skills and expertise honed through various
          projects ad experinces
        </p>
      </div>

      {/* //skills categories */}

    </section>
  );
};

export default Skill;
