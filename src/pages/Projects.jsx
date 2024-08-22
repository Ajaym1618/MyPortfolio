import React, { useState, useEffect } from "react";
import career1 from "../assets/Career Images/1.png";
import career2 from "../assets/Career Images/2.png";
import career3 from "../assets/Career Images/3.png";
import career4 from "../assets/Career Images/4.png";
import career5 from "../assets/Career Images/5.png";
import career6 from "../assets/Career Images/6.png";
import career7 from "../assets/Career Images/7.png";
import career8 from "../assets/Career Images/8.png";
import career9 from "../assets/Career Images/9.png";
import career10 from "../assets/Career Images/10.png";

import swift1 from '../assets/Swift Images/1.png';
import swift2 from '../assets/Swift Images/2.png';
import swift3 from '../assets/Swift Images/3.png';
import swift4 from '../assets/Swift Images/4.png';
import swift5 from '../assets/Swift Images/5.png';
import swift6 from '../assets/Swift Images/6.png';
import swift7 from '../assets/Swift Images/7.png';

import mind1 from '../assets/LMS images/1.png';
import mind2 from '../assets/LMS images/2.png';
import mind3 from '../assets/LMS images/3.png';
import mind4 from '../assets/LMS images/4.png';
import mind5 from '../assets/LMS images/5.png';
import mind6 from '../assets/LMS images/6.png';
import mind7 from '../assets/LMS images/7.png';
import mind8 from '../assets/LMS images/8.png';
import mind9 from '../assets/LMS images/9.png';
import mind10 from '../assets/LMS images/10.png';
import mind11 from '../assets/LMS images/11.png';
import mind12 from '../assets/LMS images/12.png';
import mind13 from '../assets/LMS images/13.png';
import mind14 from '../assets/LMS images/14.png';

const projectsData = [
  {
    id: 1,
    title: "Resume Builder",
    description:
      "SwiftResume is a resume builder that helps you create professional resumes quickly and easily. Customize templates, add your details, and download your polished resume in minutes.",
    technologies: ["React", "Node.js", "Express Js", "MongoDB"],
    images: [
      swift1,
      swift2,
      swift3,
      swift4,
      swift5,
      swift6,
      swift7,
    ],
    liveLink: "https://swiftresume.vercel.app/",
    githubLink: "https://github.com/Ajaym1618/ResumeBuilder-Frontend",
  },
  {
    id: 2,
    title: "Job Listing Application",
    description:
      "CareerCraze is a job listing platform that helps you find and apply for the best job opportunities effortlessly. Discover your next career move with advanced search tools and a user-friendly experience.",
    technologies: ["React", "Node.js", "Express Js", "MongoDB"],
    images: [
      career1,
      career2,
      career3,
      career4,
      career5,
      career6,
      career7,
      career8,
      career9,
      career10,
    ],
    liveLink: "https://careercraze.vercel.app/",
    githubLink: "https://github.com/Ajaym1618/JobListing-frontend",
  },
  {
    id: 3,
    title: "Learning Management System",
    description:
      "MindSpark is a learning platform designed to empower educators and learners. Easily create, share, and access educational content, enhancing the learning experience for everyone.",
    technologies: ["React", "Node.js", "Express Js", "MongoDB"],
    images: [
      mind1,
      mind2,
      mind3,
      mind4,
      mind5,
      mind6,
      mind7,
      mind8,
      mind9,
      mind10,
      mind11,
      mind12,
      mind13,
      mind14,
    ],
    liveLink: "https://mindsparkpro.vercel.app/",
    githubLink: "https://github.com/Ajaym1618/MindSpark-frontend",
  },
];

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const images = projectsData[selectedProjectIndex].images;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedProjectIndex]);


  return (
    <section className="w-[100%] h-[88vh] py-8 px-6 max-xl:h-auto max-sm:px-2">
      <div className="w-full px-4 max-sm:px-0">
        <h1 className="text-5xl text-center mb-8 text-[#c12f2f] max-lg:text-3xl">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="bg-white shadow-slate-400 shadow-lg rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="w-full h-48 relative max-lg:h-auto">
                <img
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  className="w-[100%] h-auto object-contain"
                />
              </div>
              <div className="py-6 px-6">
                <h3 className="text-2xl font-semibold mb-2 text-[#c12f2f]">
                  {project.title}
                </h3>
                <p className="text-[#0275a4] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#c12f2f] text-white text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-white border-2 border-[#0275a4] bg-[#0275a4] rounded-md  transition-all duration-100 ease-linear hover:text-[#0275a4] hover:bg-white active:text-[#c12f2f] active:border-[#c12f2f]"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-white border-2 border-[#0275a4] bg-[#0275a4] rounded-md transition-all duration-100 ease-linear hover:text-[#0275a4] hover:bg-white active:text-[#c12f2f] active:border-[#c12f2f]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;