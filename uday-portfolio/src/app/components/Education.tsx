import React, { useEffect, useRef, useState } from 'react';
import EducationCard from './EducationCard';

const Education = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeadingVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            cardsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        cardsObserver.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          cardsObserver.unobserve(card);
        }
      });
    };
  }, []);

  const educationDetails = [
    {
      degree: "Master of Science in Computer Science",
      university: "California State University, Fullerton",
      dates: "2024 - Present",
      location: "Fullerton, CA",
      logo: "/icons/csuf.png", // Replace with the path to your logo
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      university: "Symbiosis International University",
      dates: "2017 - 2021",
      location: "Pune, India",
      logo: "/icons/SIT.png", // Replace with the path to your logo
    },
  ];

  return (
    <section id="education" className="py-5">
      {/* Animated Education Heading */}
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 ${
          isHeadingVisible ? 'animate-fadeInSlideUp' : 'opacity-0'
        }`}
      >
        Education
      </h2>
      
      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationDetails.map((edu, index) => (
         <div
         key={index}
         ref={(el: HTMLDivElement | null) => {
           cardsRef.current[index] = el;
         }}
         data-index={index}
         className={`${
           visibleCards[index] ? 'animate-fadeInSlideUp' : 'opacity-0'
         }`}
       >
            <EducationCard
              key={index}
              degree={edu.degree}
              university={edu.university}
              dates={edu.dates}
              location={edu.location}
              logo={edu.logo} // Pass the logo here
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
