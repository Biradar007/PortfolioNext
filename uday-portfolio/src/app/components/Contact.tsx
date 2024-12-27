"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current && entry.isIntersecting) {
            setIsHeadingVisible(true);
          }
          if (entry.target === contentRef.current && entry.isIntersecting) {
            setIsContentVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    // Cleanup observer
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="contact" className="py-10">
      {/* Contact Heading */}
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 ${
          isHeadingVisible ? "animate-fadeInSlideUp" : "opacity-0"
        }`}
      >
        Contact
      </h2>

      {/* Contact Content */}
      <div
        ref={contentRef}
        className={`${
          isContentVisible ? "animate-fadeInSlideUp" : "opacity-0"
        }`}
      >
        <p className="text-lg text-gray-300 mb-6">
          Feel free to get in touch and let us have a discussion about how we can work together.
        </p>

        {/* Social Media Links */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Find me on social media
          </h3>
          <div className="flex space-x-4">
            <a
              href="mailto:ubiradar@csu.fullerton.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <FaEnvelope size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/uday-biradar-007/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Biradar007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Calendly Button */}
        <div className="mt-6">
          <a
            href="https://calendly.com/ubiradar-csu/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-moving-gradient"
          >
            Schedule a Meeting
          </a>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="/icons/UVBResume.pdf"
          download
          className="text-white px-6 py-3 rounded-full hover:scale-110 transition-all flex items-center space-x-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-moving-gradient"
          >
          <img
            src="/icons/download-4177.svg"
            alt="Download"
            className="w-5 h-5"
          />
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
