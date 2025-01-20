"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      document.documentElement.classList.add("dark");
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile (md = 768px in Tailwind)
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isMobile ? (
        // Hamburger Menu for Mobile View
        <>
          {/* Hamburger Menu Icon */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md flex items-center justify-center px-4 h-16">

            <button
              onClick={toggleSidebar}
              className="absolute left-4 text-white focus:outline-none"
              >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isSidebarOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
            <span
    className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold border-2 border-white"
    style={{
      fontFamily: "'Poppins', sans-serif", // Apply stylish font
    }}
  >
    UB
  </span>           
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg z-40 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            {/* Profile Image */}
            <div className="justify-center p-4 flex items-center space-x-4 border-b border-gray-700">
              <span className="text-lg font-semibold">Menu</span>
            </div>

            {/* Navigation Links */}
            <div className="p-4 space-y-4">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="justify-center flex items-center space-x-2 hover:text-accent-color cursor-pointer transition-all"
              >
                <span>About</span>
              </Link>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="justify-center flex items-center space-x-2 hover:text-accent-color cursor-pointer transition-all"
              >
                <span>Education</span>
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="justify-center flex items-center space-x-2 hover:text-accent-color cursor-pointer transition-all"
              >
                <span>Skills</span>
              </Link>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="justify-center flex items-center space-x-2 hover:text-accent-color cursor-pointer transition-all"
              >
                <span>Experience</span>
              </Link>
              <Link
                to="certifications"
                smooth={true}
                duration={500}
                className="justify-center flex items-center space-x-2 hover:text-accent-color cursor-pointer transition-all"
              >
                <span>Certifications</span>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="justify-center flex items-center space-x-2 hover:text-accent-color cursor-pointer transition-all"
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Backdrop */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              onClick={toggleSidebar}
            ></div>
          )}
        </>
      ) : (
        // Existing Navbar for Larger Screens
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg z-50 flex items-center justify-between w-auto transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
        style={{
          backdropFilter: "blur(10px)", // Optional blur effect for modern UI
          outline: "2px solid #ffffff", // Default white outline for Navbar
        }}
        >
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
      )}
    </>
  );
};

export default Navbar;
