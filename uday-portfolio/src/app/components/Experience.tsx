import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

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

    itemsRef.current.forEach((item) => {
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
      title: 'Software Developer Intern',
      company: 'Holtec International',
      dates: 'June 2025 – July 2025',
      responsibilities: [
        'Designed, optimized, and deployed an iOS inventory management app using .NET MAUI, enabling factory teams to digitize manual workflows and increase process speed by 30%.',
        'Implemented Single Sign-On (SSO) authentication and delivered critical UI enhancements to prepare the app for production release.',
        'Architected and deployed a malware scanning system leveraging Azure Blob Storage and antivirus integrations, ensuring secure vendor file uploads.',
        'Collaborated with product managers and engineers in a fast-paced, iterative environment to deliver user-facing features with production-ready updates every two weeks.',
      ],
    },
    {
      title: 'Student Assistant to IT Consultant',
      company: 'California State University, Fullerton',
      dates: 'Oct 2024 – Dec 2025',
      responsibilities: [
        'Developed and maintained applications using technologies like React, Next.js, and Node.js to support university operations.',
        'Provided technical support to professors, staff, and students, resolving issues promptly to ensure smooth operations.',
        'Maintained and managed labs and classrooms, ensuring all systems and equipment function effectively.',
        'Upgraded lab systems to enhance performance, usability, and reliability.',
        'Engage in troubleshooting to ensure smooth application functionality.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Holtec Asia',
      dates: 'July 2021 – July 2024',
      responsibilities: [
        'Developed new modules from scratch using React, .NET Core, C#, and MS SQL, reducing processing time by 20% and increasing efficiency.',
        'Enhanced multiple applications, improving performance by 30% and boosting productivity.',
        'Integrated Single Sign-On (SSO) for thousands of users, enhancing security.',
        'Deployed and monitored production applications, achieving 99.9% uptime and minimizing disruptions.',
        'Led a team of developers, completing projects 10% ahead of schedule and saving over 200 development hours.',
        'Built Web API services, improving data retrieval by 20% and boosting user engagement.',
        'Integrated Kinetics for real-time data synchronization, reducing processing time by 35% and saving ~$50,000 annually.',
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

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section id="experience" className="py-5">
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 ${isHeadingVisible ? 'animate-fadeInSlideUp' : 'opacity-0'}`}
      >
        Experience
      </h2>

      <div className="timeline-container">
        {experiences.map((exp, index) => {
          const isExpanded = !!expandedItems[index];

          return (
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
              <h3 className="timeline-title hidden md:block">{exp.title}</h3>
              <p className="timeline-company hidden md:block">{exp.company}</p>

              {/* Desktop/tablet: always show full content */}
              <ul className="timeline-responsibilities hidden md:block">
                {exp.responsibilities.map((resp, i) => (
                  <li className="list-disc" key={i}>{resp}</li>
                ))}
              </ul>

              {/* Mobile: show heading + company + dates, then first bullet with View more / View less */}
              <div className="md:hidden">
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-mobile-dates">{exp.dates}</p>
                <ul className="timeline-responsibilities">
                  {(isExpanded ? exp.responsibilities : exp.responsibilities.slice(0, 1)).map((resp, i) => (
                    <li className="list-disc" key={i}>{resp}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => toggleExpanded(index)}
                  className="timeline-toggle-btn"
                >
                  {isExpanded ? 'View less' : 'View more'}
                </button>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
