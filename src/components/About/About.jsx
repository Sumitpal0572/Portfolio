import React from "react";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between item-center">
        {/* left side */}

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greeting  */}

          <h1 className="text-3xl sm:text-5xl md:text-6xlfont-bold leading-tight text-white mb-2">
            Hi, I am
          </h1>
          {/* name  */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sumit Pal
          </h2>

          {/* skills headings with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white ">I am a </span>
            <ReactTypingEffect
              text={["Full Stack Developer", "UX/UI Designer", "Programmer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => {
                <span className="text-[#8245ec]">{cursor}</span>;
              }}
            ></ReactTypingEffect>
          </h3>

          {/* about me */}

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            officia distinctio eaque eum odit obcaecati architecto error
            consequuntur atque doloribus labore vitae laboriosam fugiat, magni
            aperiam, sequi harum rerum eligendi.
          </p>

          {/* button for resume  */}

          <a
            href="https://drive.google.com/file/d/1g_BMWXz4IH4DrtnzpRNRJJBC-pFLv70F/view?usp=sharing"
            target="_blank"
            rel="noopener norefferrer"
            className="inline-block text-white px-8 py-3 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 "
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
