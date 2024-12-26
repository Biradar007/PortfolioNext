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
        With over three years of experience in full-stack development, I have a
        solid foundation in both front-end and back-end technologies, excelling
        at optimizing applications and leading development teams. My technical
        expertise spans the MEAN stack, .NET Core, C#, and SQL, along with a
        proven ability to deliver high-quality solutions through robust coding
        practices and effective project management. Currently pursuing a
        Master’s in Computer Science at California State University, Fullerton,
        I am broadening my technical and problem-solving skills further.
      </p>
    </section>
  );
};

export default About;
