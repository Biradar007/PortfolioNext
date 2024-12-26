import React from 'react';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-16 fade-in">
      <h2 className="text-3xl font-semibold text-white mb-6">{title}</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-300">
        {children}
      </div>
    </section>
  );
};

export default Section;
