"use client";

import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // Set initial theme on mount
  useEffect(() => {
    // const savedTheme = localStorage.getItem("theme");
    // if (savedTheme === "dark") {
    //   setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    // }
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg z-50 flex items-center justify-between w-auto transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
      style={{
        backdropFilter: "blur(10px)", // Optional blur effect for modern UI
        outline: "2px solid #ffffff", // Default white outline for Navbar
      }}
    >
      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-accent-color cursor-pointer transition-all"
        >
          About
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          className="hover:text-accent-color cursor-pointer transition-all"
        >
          Education
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:text-accent-color cursor-pointer transition-all"
        >
          Skills
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="hover:text-accent-color cursor-pointer transition-all"
        >
          Experience
        </Link>
        <Link
          to="certifications"
          smooth={true}
          duration={500}
          className="hover:text-accent-color cursor-pointer transition-all"
        >
          Certifications
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-accent-color cursor-pointer transition-all"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
