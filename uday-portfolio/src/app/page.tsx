"use client";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Your Name at the Top Center */}
      <motion.div
        className="absolute top-8 left-[45%] transform -translate-x-1/2 text-3xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        Uday Biradar
      </motion.div>

      {/* Main Content */}
      <Navbar />
      <main className="container mx-auto p-8 space-y-20 pt-24 relative z-10">
        <About />
        <Education />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
