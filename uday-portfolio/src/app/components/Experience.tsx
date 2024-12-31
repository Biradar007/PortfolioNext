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
      title: 'Student Assistant to IT Consultant',
      company: 'California State University, Fullerton',
      dates: 'Oct 2024 – Present',
      responsibilities: [
        'Develop and maintain applications using technologies like React, Next.js, and Node.js to support university operations.',
        'Provide technical support to professors, staff, and students, resolving issues promptly to ensure smooth operations.',
        'Maintain and manage labs and classrooms, ensuring all systems and equipment function effectively.',
        'Upgrade lab systems to enhance performance, usability, and reliability.',
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
                  <li className="list-disc" key={i}>{resp}</li>
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
