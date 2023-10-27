// components/Navbar.tsx

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-xl">My Website</div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
            Home
          </a>
          <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400 mr-4">
            About
          </a>
          <a href="#" className="bg-[rgb(18,8,8)] block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
