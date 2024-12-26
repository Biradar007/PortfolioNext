import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-8 text-center">
      <h1 className="text-4xl font-bold">Uday Biradar</h1>
      <p>Software Engineer</p>
      <p>ubiradar@csu.fullerton.edu | +1 (657) 253-8522 | Fullerton, CA</p>
      <div className="mt-4">
        <a href="https://github.com/Biradar007" className="text-blue-400 hover:underline mx-2">GitHub</a>
        <a href="https://linkedin.com/in/uday-biradar-007" className="text-blue-400 hover:underline mx-2">LinkedIn</a>
      </div>
    </header>
  );
};

export default Header;
