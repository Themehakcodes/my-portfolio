'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Define the navigation items
const navigation = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Services', link: '/services' },
];

export const SquigglyUnderline = () => {
  const [selectedLink, setSelectedLink] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    });
  }, [selectedLink, controls]);

  return (
    <nav className="relative flex flex-col lg:flex-row items-center py-4 lg:py-8 px-4 lg:px-8">
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center justify-between w-full">
        <button
          className="text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
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
      </div>

      {/* Navigation Links */}
      <div className="lg:flex flex-col lg:flex-row lg:gap-8 text-gray-600 w-full lg:w-auto lg:bg-transparent">
        <motion.div
          className={`flex flex-col lg:flex-row lg:gap-8 text-gray-600 w-full lg:w-auto ${
            isOpen ? 'block' : 'hidden lg:block'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {navigation.map((item) => {
            const isSelected = item.name === selectedLink;
            return (
              <Link
                key={item.name}
                href={item.link}
                className={`relative flex items-center px-2 py-2 rounded-md transition-colors duration-300 ${
                  isSelected
                    ? 'text-gray-300 stroke-orange-100'
                    : 'hover:text-white'
                }`}
                onClick={() => {
                  setSelectedLink(item.name);
                  setIsOpen(false); // Close the menu on link click (for mobile)
                }}
              >
                {item.name}
                {isSelected && (
                  <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                    <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                      <motion.path
                        d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                        stroke="#7043EC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                          strokeDasharray: 84.20591735839844,
                          strokeDashoffset: 84.20591735839844,
                        }}
                        animate={{
                          strokeDashoffset: 0,
                        }}
                        transition={{
                          duration: 1,
                        }}
                      />
                    </svg>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
};
