import React from "react";
import cherry from "../assets/cherry.png";

const About = () => {
  return (
    <div className="w-[100%] h-[88vh] flex flex-col items-center py-8 max-xl:py-4 max-sm:h-auto max-sm:py-0 max-sm:pb-4">
      <h1 className="text-5xl text-[#c12f2f] max-lg:text-3xl">About Me</h1>
      <div className="w-full h-full flex max-sm:flex-col-reverse">
        <div className="w-full h-full flex justify-center items-center max-lg:w-[70%] max-sm:w-full">
          <div className="w-[300px] max-lg:w-[200px] max-sm:pt-4 max-sm:w-[150px]">
            <img src={cherry} alt="about" className="w-[100%]"/>
          </div>
        </div>
        <div className="w-full h-full flex items-center">
          <div className="w-[90%] text-2xl text-[#0275a4] flex flex-col gap-5 justify-center pr-6 max-xl:text-xl max-xl:items-center max-lg:text-lg max-lg:gap-2 max-lg:w-full max-sm:px-4 max-sm:text-sm max-sm:pt-4">
            <p className="indent-6">
              I am a full-stack web developer with a strong foundation in
              Computer Science and Engineering, specializing in MERN stack
              development.
            </p>

            <p>
              Throughout my journey, I have mastered HTML, CSS, JavaScript,
              React, Node.js, and MongoDB, enabling me to create engaging and
              dynamic user experiences.
            </p>

            <p>
              Now, I am actively seeking a permanent role where I can apply my
              expertise in MERN stack development to drive innovation. I thrive
              at the intersection of technology and creativity, always eager to
              embrace new challenges and push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;