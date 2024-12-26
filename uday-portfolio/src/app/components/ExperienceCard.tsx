// src/app/components/ExperienceCard.tsx

import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  dates: string;
  onShowResponsibilities: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, dates, onShowResponsibilities }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-gray-700 hover:shadow-xl opacity-0 animate-fadeIn">
      <h3 className="text-xl font-semibold text-accent-color">{title}</h3>
      <p className="text-gray-400">{company}</p>
      <p className="text-sm text-gray-500">{dates}</p>
      <button
        onClick={onShowResponsibilities}
        className="mt-4 text-blue-400 hover:underline focus:outline-none"
      >
        Show Responsibilities
      </button>
    </div>
  );
};

export default ExperienceCard;
