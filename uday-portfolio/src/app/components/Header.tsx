import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-10 fade-in">
      <h1 className="text-4xl font-bold text-white">Uday Biradar</h1>
      <p className="text-xl mt-2 text-gray-400">Software Engineer</p>
      <p className="mt-2">ubiradar@csu.fullerton.edu | +1 (657) 253-8522</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="https://github.com/Biradar007" className="text-accent-color hover:underline" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/uday-biradar-007" className="text-accent-color hover:underline" target="_blank">LinkedIn</a>
      </div>
    </header>
  );
};

export default Header;
