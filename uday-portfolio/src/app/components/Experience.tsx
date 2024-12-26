import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  // Intersection Observer for heading animation
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

  // Intersection Observer for timeline items animation
  useEffect(() => {
    const itemsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            itemsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item, index) => {
      if (item) {
        itemsObserver.observe(item);
      }
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) {
          itemsObserver.unobserve(item);
        }
      });
    };
  }, []);

  // Experience data array
  const experiences = [
    {
      title: 'Student Assistant to IT Consultant',
      company: 'California State University, Fullerton',
      dates: 'Oct 2024 – Present',
      responsibilities: [
        'Develop and maintain applications to support university operations.',
        'Collaborate with team members to translate user requirements into functional solutions.',
        'Create automated test scripts to improve testing efficiency and reliability.',
        'Contribute to Agile processes through coding, debugging, and documentation.',
        'Engage in troubleshooting to ensure smooth application functionality.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Holtec Asia',
      dates: '2021 – 2024',
      responsibilities: [
        'Designed and implemented software solutions for energy systems.',
        'Collaborated with cross-functional teams to improve system performance.',
        'Managed code repositories and conducted code reviews.',
      ],
    },
    {
      title: 'Web Developer Intern',
      company: 'Agri10x',
      dates: 'Dec 2019 – Apr 2020',
      responsibilities: [
        'Developed an ERP software using the MEAN stack (MongoDB, Express.js, Angular, Node.js).',
        'Designed, implemented, and deployed the ERP system.',
        'Collaborated with the team to deliver solutions aligned with business needs.',
      ],
    },
    {
      title: 'Android App Developer Intern',
      company: 'Bee Logical',
      dates: 'Nov 2017 – Jan 2018',
      responsibilities: [
        'Developed a Question Paper Generator application using Android Studio and SQL.',
        'Implemented features like user authentication and question bank management.',
        'Reduced exam preparation time by 30 hours per month.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-5">
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 ${isHeadingVisible ? 'animate-fadeInSlideUp' : 'opacity-0'}`}
      >
        Experience
      </h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            data-index={index}
            className={`timeline-item ${visibleItems[index] ? 'animate-fadeInSlideUp' : 'opacity-0'}`}
          >
            <div className="timeline-date">{exp.dates}</div>
            <div className="timeline-line">
              <span className="timeline-dot"></span>
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.title}</h3>
              <p className="timeline-company">{exp.company}</p>
              <ul className="timeline-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
