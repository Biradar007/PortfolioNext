import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<(HTMLLIElement | null)[]>([]);

  const projectDetails = [
    'Fake News Classifier - A machine learning project to detect fake news.',
    'Student Hub - Created a web app for student profile management.',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              setIsHeadingVisible(true);
            } else {
              const index = Number(entry.target.getAttribute('data-index'));
              if (!visibleProjects[index]) {
                setVisibleProjects((prev) => {
                  const updated = [...prev];
                  updated[index] = true;
                  return updated;
                });
              }
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      projectsRef.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, [visibleProjects]);

  return (
    <section id="projects" className="py-20">
      {/* Projects Heading */}
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 ${
          isHeadingVisible ? 'animate-fadeInSlideUp' : 'opacity-0'
        }`}
      >
        Projects
      </h2>

      {/* Project List */}
      <ul className="space-y-4">
        {projectDetails.map((project, index) => (
          <li
            key={index}
            ref={(el: HTMLLIElement | null) => {
              projectsRef.current[index] = el;
            }}
            data-index={index}
            className={`${
              visibleProjects[index] ? 'animate-fadeInSlideUp' : 'opacity-0'
            }`}
          >
            <strong>{project.split(' - ')[0]}</strong> - {project.split(' - ')[1]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
