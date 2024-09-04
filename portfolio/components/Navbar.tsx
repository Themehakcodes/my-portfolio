import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Title */}
        <div className="text-white text-lg font-bold">
          <Link href="/">MySite</Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="text-white w-6 h-6 lg:hidden flex items-center justify-center"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:space-x-4 p-3 lg:p-0 absolute top-16 right-0 bg-gray-800 lg:bg-transparent lg:static transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <Link href="/" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
