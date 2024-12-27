import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Certifications = () => {
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [visibleCertifications, setVisibleCertifications] = useState<boolean[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const certificationsRef = useRef<(HTMLDivElement | null)[]>([]);

  const certifications = [
    {
      title: 'Introduction to Generative AI Path',
      platform: 'Google Cloud',
      icon: '/icons/google-cloud.svg',
    },
    {
      title: 'Machine Learning Engineer Learning Path',
      platform: 'Google Cloud',
      icon: '/icons/google-cloud.svg',
    },
    {
      title: 'Building RAG Agents with LLMs',
      platform: 'NVIDIA',
      icon: '/icons/nvidia-logo-svgrepo-com.svg',
    },
    {
      title: 'The Basics of Scrum',
      platform: 'Project Management Institute',
      icon: '/icons/PMI.svg',
    },
    {
      title: 'Basics of Disciplined Agile™',
      platform: 'Project Management Institute',
      icon: '/icons/PMI.svg',
    },
    {
      title: 'Generative AI Overview for Project Managers',
      platform: 'Project Management Institute',
      icon: '/icons/PMI.svg',
    },
    {
      title: 'Introduction of FinOps',
      platform: 'FinOps Foundation',
      icon: '/Icons/FinOpsLogo.jpg',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current && entry.isIntersecting) {
            setIsHeadingVisible(true);
          } else {
            const index = Number(entry.target.getAttribute('data-index'));
            if (entry.isIntersecting && !visibleCertifications[index]) {
              setVisibleCertifications((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          }
        });
      },
      { threshold: 0.3 } // Trigger animation when 30% of the element is visible
    );

    if (headingRef.current) observer.observe(headingRef.current);

    certificationsRef.current.forEach((cert) => {
      if (cert) observer.observe(cert);
    });

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);

      certificationsRef.current.forEach((cert) => {
        if (cert) observer.unobserve(cert);
      });
    };
  }, [visibleCertifications]);

  return (
    <section id="certifications" className="py-5">
      {/* Certifications Heading */}
      <h2
        ref={headingRef}
        className={`text-3xl font-semibold text-white mb-6 transition-transform duration-700 ease-out ${
          isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
      >
        Certifications
      </h2>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement | null) => {
              certificationsRef.current[index] = el;
            }}
            data-index={index}
            className={`p-6 bg-gray-800 rounded-lg text-white h-40 transition-all duration-500 transform ${
              visibleCertifications[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } hover:scale-105 hover:shadow-lg hover:bg-gray-700`}
          >
                  <div className="flex flex-col h-full justify-between">
        <h3 className="text-xl font-bold">{cert.title}</h3>
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">{cert.platform}</p>
              <Image
                src={cert.icon}
                height={30}
                width={30}
                alt="icon"
                className="object-contain"
              />
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
