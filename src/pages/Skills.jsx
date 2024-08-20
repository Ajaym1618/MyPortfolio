import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tail from "../assets/tailwind.png";
import node from "../assets/node.png";
import ex from "../assets/express.png";
import mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div className="w-[100%] h-[88vh] py-8 max-lg:h-auto">
      <h1 className="w-full text-[#c12f2f] text-5xl text-center max-lg:text-4xl">Skills</h1>
      <div className="w-full h-full flex py-4 max-lg:flex-col">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6 max-lg:px-2">
          <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold max-sm:text">
            <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">FrontEnd</span>
          </h1>
          {/* html */}
          <div className="w-[80%] py-1 px-3 flex flex-col gap-5 rounded-lg shadow-lg shadow-slate-500 max-sm:w-full">
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() =>
                window.open("https://en.wikipedia.org/wiki/HTML", "_blank")
              }
            >
              <div className="font-bold text-gray-800 flex ">
                <img src={html} alt="html" className="w-[70px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between items-end pt-4">
                  <h1 className="text-xl">HTML</h1>
                  <p>90%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#e44d26] w-[90%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* css */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() =>
                window.open("https://www.w3.org/Style/CSS/", "_blank")
              }
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={css} alt="html" className="w-[70px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl">CSS</h1>
                  <p>80%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#039be5] w-[80%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Js */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() =>
                window.open("https://www.javascript.com/", "_blank")
              }
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={js} alt="html" className="w-[70px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl">JavaScript</h1>
                  <p>80%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#f7df1e] w-[80%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* react */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://react.dev/", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={react} alt="html" className="w-[60px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl pl-1">ReactJS</h1>
                  <p>80%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#53c1de] w-[80%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* frameworks */}
        <div className="w-full pt-8 flex flex-col items-center gap-4 px-6 rounded-lg max-lg:px-2">
          <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold">
          <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">Framework</span>
          </h1>
          <div
            className="w-[80%] flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer shadow-lg shadow-slate-500 max-sm:w-full"
            onClick={() => window.open("https://tailwindcss.com/", "_blank")}
          >
            <div className="font-bold text-gray-800 flex items-end">
              <img src={tail} alt="html" className="w-[70px]" />
            </div>
            <div className="w-full">
              <div className="w-full flex justify-between pt-4">
                <h1 className="text-xl pl-1">Tailwind css</h1>
                <p>80%</p>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-1">
                <div className="bg-[#00acc1] w-[70%] h-1 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        {/* backend */}
        <div className="w-full h-full flex flex-col items-center gap-4 pt-8 px-6 max-lg:px-2">
          <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold">
          <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">BackEnd</span>
          </h1>
          {/* node */}
          <div className="w-[80%] py-1 px-3 flex flex-col gap-5 rounded-lg shadow-lg shadow-slate-500 max-sm:w-full">
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://nodejs.org/en", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={node} alt="html" className="w-[60px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl">NodeJS</h1>
                  <p>70%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#4caf50] w-[70%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* express */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://expressjs.com/", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={ex} alt="html" className="w-[60px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl pl-1">ExpressJS</h1>
                  <p>70%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#333333] w-[70%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* mongo */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://www.mongodb.com/", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={mongo} alt="html" className="w-[60px] mix-blend-normal" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl pl-1">MongoDB</h1>
                  <p>70%</p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-[#81c784] w-[70%] h-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

