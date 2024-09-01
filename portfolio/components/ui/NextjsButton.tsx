import React, { ReactNode } from 'react';

type NextjsButtonProps = {
  title?: string; // Text to be displayed on the button, optional
  handleClick?: () => void; // Click handler function, optional
  className?: string; // Additional classes for the button, optional
  icon?: ReactNode; // Icon to be displayed on the button, optional
  iconPosition?: 'left' | 'right'; // Position of the icon, optional, either 'left' or 'right'
};

function NextjsButton({
  title = 'Next.js Blue', // Default title if none is provided
  handleClick, // Function to handle button click, if any
  className = '', // Additional classes passed as props
  icon, // Optional icon to be displayed
  iconPosition = 'left', // Default icon position is 'left'
}: NextjsButtonProps) {
  return (
    <button
      className={`shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear ${className}`}
      onClick={handleClick}
    >
      {iconPosition === 'left' && icon}
      {title}
      {iconPosition === 'right' && icon}
    </button>
  );
}

export default NextjsButton;
