// import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import js from "../assets/javascript.png";
// import react from "../assets/react.png";
// import tail from "../assets/tailwind.png";
// import node from "../assets/node.png";
// import ex from "../assets/express.png";
// import mongo from "../assets/mongo.png";

// const Skills = () => {
//   return (
//     <div className="w-[100%] h-[88vh] py-12 max-lg:h-auto" id="Skills">
//       <h1 className="w-full text-[#c12f2f] text-5xl text-center max-lg:text-4xl">Skills</h1>
//       <div className="w-full h-full flex py-4 max-lg:flex-col">
//         <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6 max-lg:px-2">
//           <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold max-sm:text">
//             <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">FrontEnd</span>
//           </h1>
//           {/* html */}
//           <div className="w-[80%] py-1 px-3 flex flex-col gap-5 rounded-lg shadow-lg shadow-slate-500 max-sm:w-full">
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() =>
//                 window.open("https://en.wikipedia.org/wiki/HTML", "_blank")
//               }
//             >
//               <div className="font-bold text-gray-800 flex ">
//                 <img src={html} alt="html" className="w-[70px]" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between items-end pt-4">
//                   <h1 className="text-xl">HTML</h1>
//                   <p>90%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#e44d26] h-1 rounded-full html"></div>
//                 </div>
//               </div>
//             </div>
//             {/* css */}
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() =>
//                 window.open("https://www.w3.org/Style/CSS/", "_blank")
//               }
//             >
//               <div className="font-bold text-gray-800 flex items-end">
//                 <img src={css} alt="html" className="w-[70px]" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between pt-4">
//                   <h1 className="text-xl">CSS</h1>
//                   <p>70%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#039be5] h-1 rounded-full css"></div>
//                 </div>
//               </div>
//             </div>
//             {/* Js */}
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() =>
//                 window.open("https://www.javascript.com/", "_blank")
//               }
//             >
//               <div className="font-bold text-gray-800 flex items-end">
//                 <img src={js} alt="html" className="w-[70px]" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between pt-4"> 
//                   <h1 className="text-xl">JavaScript</h1>
//                   <p>80%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#f7df1e] h-1 rounded-full js"></div>
//                 </div>
//               </div>
//             </div>
//             {/* react */}
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() => window.open("https://react.dev/", "_blank")}
//             >
//               <div className="font-bold text-gray-800 flex items-end">
//                 <img src={react} alt="html" className="w-[60px]" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between pt-4">
//                   <h1 className="text-xl pl-1">ReactJS</h1>
//                   <p>80%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#53c1de] h-1 rounded-full react"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* frameworks */}
//         <div className="w-full pt-4 flex flex-col items-center gap-4 px-6 rounded-lg max-lg:px-2">
//           <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold">
//           <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">Framework</span>
//           </h1>
//           <div
//             className="w-[80%] flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer shadow-lg shadow-slate-500 max-sm:w-full"
//             onClick={() => window.open("https://tailwindcss.com/", "_blank")}
//           >
//             <div className="font-bold text-gray-800 flex items-end">
//               <img src={tail} alt="html" className="w-[70px]" />
//             </div>
//             <div className="w-full">
//               <div className="w-full flex justify-between pt-4">
//                 <h1 className="text-xl pl-1">Tailwind css</h1>
//                 <p>80%</p>
//               </div>
//               <div className="w-full bg-gray-300 rounded-full h-1">
//                 <div className="bg-[#00acc1] h-1 rounded-full tailwind"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* backend */}
//         <div className="w-full h-full flex flex-col items-center gap-4 pt-4 px-6 max-lg:px-2">
//           <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold">
//           <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">BackEnd</span>
//           </h1>
//           {/* node */}
//           <div className="w-[80%] py-1 px-3 flex flex-col gap-5 rounded-lg shadow-lg shadow-slate-500 max-sm:w-full">
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() => window.open("https://nodejs.org/en", "_blank")}
//             >
//               <div className="font-bold text-gray-800 flex items-end">
//                 <img src={node} alt="html" className="w-[60px]" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between pt-4">
//                   <h1 className="text-xl">NodeJS</h1>
//                   <p>70%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#4caf50] h-1 rounded-full node"></div>
//                 </div>
//               </div>
//             </div>
//             {/* express */}
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() => window.open("https://expressjs.com/", "_blank")}
//             >
//               <div className="font-bold text-gray-800 flex items-end">
//                 <img src={ex} alt="html" className="w-[60px]" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between pt-4">
//                   <h1 className="text-xl pl-1">ExpressJS</h1>
//                   <p>70%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#333333] h-1 rounded-full exp"></div>
//                 </div>
//               </div>
//             </div>
//             {/* mongo */}
//             <div
//               className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
//               onClick={() => window.open("https://www.mongodb.com/", "_blank")}
//             >
//               <div className="font-bold text-gray-800 flex items-end">
//                 <img src={mongo} alt="html" className="w-[60px] mix-blend-normal" />
//               </div>
//               <div className="w-full">
//                 <div className="w-full flex justify-between pt-4">
//                   <h1 className="text-xl pl-1">MongoDB</h1>
//                   <p>70%</p>
//                 </div>
//                 <div className="w-full bg-gray-300 rounded-full h-1">
//                   <div className="bg-[#81c784] h-1 rounded-full mongo"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;



import React, { useEffect, useRef, useState } from "react";
// Import images
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import react from "../assets/react.png";
import tail from "../assets/tailwind.png";
import node from "../assets/node.png";
import ex from "../assets/express.png";
import mongo from "../assets/mongo.png";

const Skills = () => {
  const skillsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const skillBars = document.querySelectorAll(".skill-bar");
            const skillPercentages = document.querySelectorAll(".skill-percentage");

            skillBars.forEach((bar, index) => {
              const endValue = parseInt(bar.dataset.skillLevel, 10);
              let startValue = 0;
              const duration = 3000; // Duration of animation in milliseconds
              const increment = endValue / (duration / 16); // 16ms is roughly one frame
              const percentageElement = skillPercentages[index];

              const animate = (timestamp) => {
                if (!bar.startTimestamp) bar.startTimestamp = timestamp;
                const progress = timestamp - bar.startTimestamp;
                startValue += increment;
                if (progress < duration) {
                  bar.style.width = `${Math.min(startValue, endValue)}%`;
                  percentageElement.textContent = `${Math.round(Math.min(startValue, endValue))}%`;
                  window.requestAnimationFrame(animate);
                } else {
                  bar.style.width = `${endValue}%`;
                  percentageElement.textContent = `${endValue}%`;
                }
              };

              window.requestAnimationFrame(animate);
            });
          }
        });
      },
      { threshold: 0.6 } // Trigger animation when 40% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      className="w-[100%] h-[88vh] py-12 max-lg:h-auto"
      id="Skills"
      ref={skillsRef}
    >
      <h1 className="w-full text-[#c12f2f] text-5xl text-center max-lg:text-4xl">
        Skills
      </h1>
      <div className="w-full h-full flex py-4 max-lg:flex-col">
        {/* FrontEnd */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-4 px-6 max-lg:px-2">
          <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold max-sm:text">
            <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">
              FrontEnd
            </span>
          </h1>
          <div className="w-[80%] py-1 px-3 flex flex-col gap-5 rounded-lg shadow-lg shadow-slate-500 max-sm:w-full">
            {/* HTML */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() =>
                window.open("https://en.wikipedia.org/wiki/HTML", "_blank")
              }
            >
              <div className="font-bold text-gray-800 flex">
                <img src={html} alt="html" className="w-[70px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between items-end pt-4">
                  <h1 className="text-xl text-[#e44d26]">HTML</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="90"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#e44d26] h-1 rounded-full skill-bar"
                    data-skill-level="90%"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() =>
                window.open("https://www.w3.org/Style/CSS/", "_blank")
              }
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={css} alt="css" className="w-[70px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl text-[#039be5]">CSS</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="70"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#039be5] h-1 rounded-full skill-bar"
                    data-skill-level="70%"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
            </div>
            {/* JavaScript */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() =>
                window.open("https://www.javascript.com/", "_blank")
              }
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={js} alt="js" className="w-[70px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl text-[#fcdc00]">JavaScript</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="80"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#f7df1e] h-1 rounded-full skill-bar"
                    data-skill-level="80%"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
            </div>
            {/* React */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://react.dev/", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={react} alt="react" className="w-[60px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl pl-1 text-[#53c1de]">ReactJS</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="80"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#53c1de] h-1 rounded-full skill-bar"
                    data-skill-level="80%"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Frameworks */}
        <div className="w-full pt-4 flex flex-col items-center gap-4 px-6 rounded-lg max-lg:px-2">
          <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold">
            <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">
              Framework
            </span>
          </h1>
          <div
            className="w-[80%] flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer shadow-lg shadow-slate-500 max-sm:w-full"
            onClick={() => window.open("https://tailwindcss.com/", "_blank")}
          >
            <div className="font-bold text-gray-800 flex items-end">
              <img src={tail} alt="tailwind" className="w-[70px]" />
            </div>
            <div className="w-full">
              <div className="w-full flex justify-between pt-4">
                <h1 className="text-xl pl-1 text-[#00acc1]">Tailwind CSS</h1>
                <p
                  className="skill-percentage"
                  data-skill-percentage="80"
                >
                  0%
                </p>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-1">
                <div
                  className="bg-[#00acc1] h-1 rounded-full skill-bar"
                  data-skill-level="80%"
                  style={{ width: 0 }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Backend */}
        <div className="w-full h-full flex flex-col items-center gap-4 pt-4 px-6 max-lg:px-2">
          <h1 className="w-full text-center pt-4 text-3xl text-[#0275a4] font-semibold">
            <span className="max-w-fit min-w-fit border-b-2 border-[#c12f2f] border-dashed">
              BackEnd
            </span>
          </h1>
          <div className="w-[80%] py-1 px-3 flex flex-col gap-5 rounded-lg shadow-lg shadow-slate-500 max-sm:w-full">
            {/* NodeJS */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://nodejs.org/en", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={node} alt="node" className="w-[60px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl text-[#4caf50]">NodeJS</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="70"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#4caf50] h-1 rounded-full skill-bar"
                    data-skill-level="70%"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
            </div>
            {/* ExpressJS */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://expressjs.com/", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={ex} alt="express" className="w-[60px]" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl pl-1 text-[#333333]">ExpressJS</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="70"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#333333] h-1 rounded-full skill-bar"
                    data-skill-level="70%"
                    style={{ width: 0 }}
                  ></div>
                </div>
              </div>
            </div>
            {/* MongoDB */}
            <div
              className="w-full flex py-3 px-3 rounded-md bg-white hover:bg-[#f0f0f0] hover:scale-110 duration-150 transition-all ease-in-out cursor-pointer"
              onClick={() => window.open("https://www.mongodb.com/", "_blank")}
            >
              <div className="font-bold text-gray-800 flex items-end">
                <img src={mongo} alt="mongo" className="w-[60px] mix-blend-normal" />
              </div>
              <div className="w-full">
                <div className="w-full flex justify-between pt-4">
                  <h1 className="text-xl pl-1 text-[#81c784]">MongoDB</h1>
                  <p
                    className="skill-percentage"
                    data-skill-percentage="70"
                  >
                    0%
                  </p>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div
                    className="bg-[#81c784] h-1 rounded-full skill-bar"
                    data-skill-level="70%"
                    style={{ width: 0 }}
                  ></div>
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
