import React, { useEffect, useRef } from "react";
// import coding from "../assets/Mod-coding.gif";
import home from "../assets/Home.png";
import Typed from "typed.js";

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MERN Stack Developer", "Tech Enthusiast"],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-[100%] h-[88vh] bg-white flex max-sm:flex-col max-sm:justify-center max-sm:h-[88vh]">
      <div className="w-[100%] h-full pl-32 flex flex-col gap-8 justify-center items-start text-[#0275a4] max-lg:pl-10 max-sm:py-0 max-sm:gap-4 max-sm:pl-6 max-sm:h-auto">
        <h1 className="text-5xl font-light max-lg:text-4xl">Hi,</h1>
        <h1 className="text-8xl max-lg:text-6xl max-sm:text-5xl">
          I'm <span className="text-[#c12f2f]">Ajay</span>
        </h1>
        <h1 className="text-5xl font-light text-[#c12f2f] max-lg:text-2xl max-sm:text-xl">
          I am a <span ref={el} className="text-[#0275a4]"></span>
        </h1>
        <p className="text-2xl font-light max-lg:text-xl max-sm:text-[16px]">
          An expert in web design and responsive web applications!
        </p>
      </div>
      <div className="w-[100%] h-full flex justify-center items-center max-sm:items-start max-sm:pt-6 max-sm:h-auto">
        <div className="w-[70%] max-sm:w-[90%]">
          <img src={home} alt="coding" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Main;
