// src/app/components/Modal.tsx

import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  responsibilities: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, responsibilities }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isOpen ? "animate-fadeInModal" : "animate-fadeOutModal"}`}>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full text-white">
        <h3 className="text-2xl font-semibold mb-4">{title} - Responsibilities</h3>
        <ul className="list-disc list-inside space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
