import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setIsHeadingVisible(true);
            }
            if (entry.target === contentRef.current) {
              setIsContentVisible(true);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-5">
      {/* About Me Heading */}
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 ${
          isHeadingVisible ? 'animate-fadeInSlideUp' : 'opacity-0'
        }`}
      >
        About Me
      </h2>

      {/* About Me Content */}
      <p
        ref={contentRef}
        className={`text-lg text-gray-300 ${
          isContentVisible ? 'animate-fadeInSlideUp' : 'opacity-0'
        }`}
      >
      With over three years of experience in full-stack development, specializing in .NET Core, C#, SQL, React, Next.js, Angular, and Node.js. 
      I excel at optimizing applications for performance, leading teams, and delivering high-quality, scalable solutions. 
      Currently pursuing a Master’s in Computer Science at California State University, Fullerton, I am expanding my expertise in software development while exploring my passion for artificial intelligence and its applications in solving real-world challenges.
      </p>
    </section>
  );
};

export default About;
