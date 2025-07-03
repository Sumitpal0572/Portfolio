import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";

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
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </p>

          {/* button for resume  */}

          <a
            href="https://drive.google.com/file/d/1ihGzt9SnbxJabBYi6wv9EFEOUrYZzBuO/view?usp=sharing"
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

        {/* right side  */}

        <div className="md:w-1/2 flex justify-center md:justify-end ml-4 md:ml-8 ">
          <Tilt
            className="w-48 h-48 sm:w-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full "
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src="https://avatars.githubusercontent.com/u/148610135?v=4"
              alt="Profile image"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
