"use client";

import React from "react";
// import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiPostman,
  SiMongodb,
  SiFirebase,
  SiDotnet,
  SiJquery,
  // SiCsharp
} from "react-icons/si";
const Skills = ({ scrollSpeed = 10, reverse = false }) => {
  const skills = [
    { icon: <SiPython color="#ffde57" />, name: "Python" },
    { icon: <SiPython color="#512BD4" />, name: "C#" },
    { icon: <SiDotnet color="#512BD4" />, name: ".NET" },
    { icon: <img src="/Icons/EF.png" alt="EntityFranework" className="w-full h-full" />, name: "EntityFranework" },
    { icon: <img src="/Icons/linq.png" alt="LINQ" className="w-full h-full" />, name: "LINQ" },
    { icon: <img src="/Icons/Dapper.jpeg" alt="Dapper" className="w-full h-full" />, name: "Dapper" },
    { icon: <img src="/Icons/AJAXRed.png" alt="AJAX" className="w-full h-full" />, name: "AJAX" },
    { icon: <SiJquery color="#0769AD" />, name: "jQuery" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React.js" },
    { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
    { icon: <FaDatabase color="#4479A1" />, name: "SQL" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    { icon: <FaGit color="#F05032" />, name: "Git" },
    { icon: <FaGithub color="#181717" />, name: "GitHub" },
    //{ icon: <FaDocker color="#2496ED" />, name: "Docker" },
    { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
    { icon: <FaNodeJs color="#000000" />, name: "NodeJS" },
  ];

  return (

    <section id="skills" className="relative w-full py-5 px-4 overflow-hidden scroll-margin-top-16">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
      Skills
    </h2>
      {/* Faded overlays */}
    <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-900 via-transparent to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-900 via-transparent to-transparent z-10 pointer-events-none"></div>

      <motion.div
        className="flex space-x-4 py-4"
        initial={{ x: reverse ? 0 : -1000 }}
        animate={{ x: reverse ? -1000 : 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollSpeed,
          ease: "linear",
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
          key={index}
          className="flex items-center space-x-3 px-5 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600/40 shadow-md 
                    hover:scale-105 transition-transform duration-300 ease-in-out max-500:px-3 max-500:py-2 max-500:space-x-2 max-500:text-xs"
        >
          <div className="w-6 h-6 flex justify-center items-center max-500:w-5 max-500:h-5">
            {skill.icon}
          </div>
          <span className="font-medium">{skill.name}</span>
        </div>
      ))}
      </motion.div>
    </section>
  );
};

export default Skills;
