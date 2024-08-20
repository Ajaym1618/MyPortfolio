import React from "react";
// import logo from '../assets/favicon.png'
import Aj from "../assets/Aj.png";
import { SiCodefactor } from "react-icons/si";


const Header = () => {
  return (
    <div className="w-[100%] h-[12vh] px-20 flex justify-between items-center bg-white shadow-sm shadow-slate-400 sticky top-0 max-lg:px-10 max-sm:px-5">
      <div className="w-[70px]">
        <img src={Aj} alt="logo" className="w-[100%]" />
      </div>
      <div className="flex gap-10 text-xl text-[#0275a4] font-semibold px-10 max-lg:hidden">
        <h1 className="relative cursor-pointer py-1 group hover:text-[#c12f2f]">
          Home
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0275a4] transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="relative cursor-pointer py-1 group hover:text-[#c12f2f]">
          About
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0275a4] transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="relative cursor-pointer py-1 group hover:text-[#c12f2f]">
          Skills
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0275a4] transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="relative cursor-pointer py-1 group hover:text-[#c12f2f]">
          Projects
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0275a4] transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
        <h1 className="relative cursor-pointer py-1 group hover:text-[#c12f2f]">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0275a4] transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </h1>
      </div>
      <div className="hidden text-xl text-[#c12f2f] max-lg:block">
        <SiCodefactor />
      </div>
    </div>
  );
};

export default Header;
