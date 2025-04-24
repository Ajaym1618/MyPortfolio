import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram   } from "react-icons/fa";
import home from "../assets/Home-3.png";
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
    <>
    <div className="w-[100%] h-[88vh] bg-white py-4 flex max-sm:flex-col max-sm:justify-center dark:bg-clr-dark dark:text-white max-sm:gap-8 max-sm:h-[85vh]" id="Home">
      <div className="w-[100%] h-full pl-32 flex flex-col gap-8 justify-center items-start text-clr-blue max-lg:pl-10 max-sm:py-0 max-sm:gap-4 max-sm:pl-6 max-sm:h-auto">
        <h1 className="text-5xl font-light max-lg:text-4xl">Hi,</h1>
        <h1 className="text-8xl max-lg:text-6xl max-sm:text-5xl">
          I'm <span className="text-clr-red">Ajay</span>
        </h1>
        <h1 className="text-5xl font-light text-clr-red max-lg:text-2xl max-sm:text-xl">
          I am a <span ref={el} className="text-clr-blue"></span>
        </h1>
        <p className="text-2xl font-light max-lg:text-xl max-sm:text-[16px]">
          An expert in web design and responsive web applications!
        </p>
        <div className="flex items-center gap-6 text-4xl max-sm:text-2xl">
        <a href="https://github.com/Ajaym1618" target="_blank" className="hover:text-clr-red transition-all duration-200 ease-in-out"><FaGithub /></a>
        <a href="https://linkedin.com/in/-ajay-m" target="_blank" className="hover:text-clr-red transition-all duration-200 ease-in-out"><FaLinkedin /></a>
        <a href="https://www.instagram.com/invites/contact/?igsh=1f8df7maooea8&utm_content=40j1e77" target="_blank" className="hover:text-clr-red transition-all duration-200 ease-in-out"><FaInstagram /></a>
        </div>
      </div>
      <div className="w-[100%] h-full flex justify-center items-center max-sm:items-start max-sm:h-auto">
        <div className="w-[70%] max-sm:w-[90%]">
          <img src={home} alt="coding" className="w-[100%] fade-in" />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Main;
