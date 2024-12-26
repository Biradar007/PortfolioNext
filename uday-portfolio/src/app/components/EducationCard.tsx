import Image from 'next/image';
import React, { useState } from 'react';

interface EducationCardProps {
  degree: string;
  university: string;
  dates: string;
  location: string;
  logo: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ degree, university, dates, location, logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-4 bg-gray-800 rounded-lg text-white relative flex justify-between items-center h-40 transition-all duration-300 ${
        isHovered ? 'bg-gray-800 scale-105 shadow-lg bg-gray-600' : ''
      }`}
    >
      <div>
        <h3 className="text-xl font-bold mb-2">{degree}</h3>
        <p className={`text-sm ${isHovered ? "text-gray-300" : "text-gray-400"} `}>{university}</p>
        <p className={`text-sm ${isHovered ? "text-gray-300" : "text-gray-400"} `}>{dates}</p>
        <p className={`text-sm ${isHovered ? "text-gray-300" : "text-gray-400"} `}>{location}</p>
      </div>
      <div>
        <Image
          src={logo}
          alt={`${university} logo`}
          width={80}
          height={0}
          className="rounded-full object-contain"
        />
      </div>
    </div>
  );
};

export default EducationCard;
