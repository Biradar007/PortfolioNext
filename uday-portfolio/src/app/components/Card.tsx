// src/app/components/Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  company: string;
  dates: string;
  description: string[];
}

const Card: React.FC<CardProps> = ({ title, company, dates, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-accent-color">{title}</h3>
      <p className="text-gray-400">{company}</p>
      <p className="text-sm text-gray-500">{dates}</p>
      <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
