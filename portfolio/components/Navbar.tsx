// components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex space-x-4 p-3">
          <Link href="/" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">Home</Link>
          <Link href="/about" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">About</Link>
          <Link href="/services" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">Services</Link>
          <Link href="/contact" className="text-white hover:text-purple-600 px-3 py-2 rounded-md">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
