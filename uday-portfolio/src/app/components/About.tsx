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
      Full-Stack Software Developer with 3+ years of experience building scalable web applications using .NET Core, C#, SQL, React, Next.js, Angular, and Node.js. Experienced in designing high-performance systems, optimizing application architecture, and leading development efforts across the full software lifecycle. Recently completed a Master’s in Computer Science from California State University, Fullerton. Passionate about building AI-native applications and leveraging artificial intelligence to solve real-world problems, including developing platforms that integrate modern AI capabilities into practical products.
      </p>
    </section>
  );
};

export default About;
