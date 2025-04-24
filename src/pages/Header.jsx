import React, { useState } from "react";
import Aj from "../assets/Aj-2.png";
import { SiCodefactor } from "react-icons/si";
import useScrollPosition from "../hooks/useScrollPosition";
import ThemeToggle from "../hooks/useDarkTheme";
import { FaRegCopyright } from "react-icons/fa6";
import { LiaHandPointLeftSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const Header = () => {
  const activeSection = useScrollPosition();
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="w-[100%] h-[12vh] px-20 flex justify-between items-center bg-white shadow-sm shadow-slate-400 sticky top-0 z-30 max-lg:px-10 max-sm:px-5 dark:bg-clr-dark">
        <div className="w-[70px]">
          <img src={Aj} alt="logo" className="w-[100%]" />
        </div>
        <div className="flex gap-10 text-xl text-[#0275a4] font-semibold px-10 max-lg:hidden">
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              key={section}
              className={`relative cursor-pointer py-1 group ${
                activeSection === section
                  ? "text-clr-red"
                  : "hover:text-clr-red"
              }`}
            >
              {section}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-clr-blue transition-all duration-300 ${
                  activeSection === section ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </Link>
          ))}
          <div className="flex justify-between items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div
          className="hidden text-xl text-clr-red max-lg:block"
          onClick={() => setNav(!nav)}
        >
          <SiCodefactor />
        </div>
        <div
          className={`w-[100%] h-auto hidden text-xl font-semibold text-[#0275a4] px-8 py-6 max-sm:flex flex-col gap-6 bg-white z-10 fixed top-36 shadow-lg shadow-gray-500 transition-all ease-linear duration-500 dark:bg-clr-dark ${
            nav === true ? "right-0" : "-right-[100%]"
          }`}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
            <Link
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              key={section}
              className={`relative flex justify-between items-center cursor-pointer py-1 group ${
                activeSection === section && "text-clr-red"
              }`}
              onClick={() => setNav(!nav)}
            >
              {section} {activeSection === section && <LiaHandPointLeftSolid />}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-clr-blue transition-all duration-300 ${
                  activeSection === section ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </Link>
          ))}
          <div className="flex justify-between items-center gap-2">
            <ThemeToggle />
          </div>
          <div className="pt-32 flex justify-center items-center gap-3 text-[16px]">
            <img src={Aj} alt="" className="w-[30px] h-[30px]" />
            <p className="flex items-center gap-1">
              <FaRegCopyright />
              2024
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-clr-red fixed scroll-watcher"></div>
    </>
  );
};

export default Header;
