/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type navButtonProps = {
    displayText : string
};

const navButton:React.FC<navButtonProps> = (displayText) => {
    
    const [isTopHovered, setIsTopHovered] = useState(false);
  const [delayedTopChange, setDelayedTopChange] = useState(false);

  const handleTopMouseEnter = () => {
    setIsTopHovered(true);
    setTimeout(() => {
      setDelayedTopChange(true);
    }, 100); // Set the delay time in milliseconds
  };

  const handleTopMouseLeave = () => {
    setIsTopHovered(false);
    setDelayedTopChange(false);
  };

  const [isBottomHovered, setIsBottomHovered] = useState(false);
  const [delayedBottomChange, setBottomDelayedChange] = useState(false);

  const handleBottomMouseEnter = () => {
    setIsBottomHovered(true);
    setTimeout(() => {
      setBottomDelayedChange(true);
    }, 100); // Set the delay time in milliseconds
  };

  const handleBottomMouseLeave = () => {
    setIsBottomHovered(false);
    setBottomDelayedChange(false);
  };
  
    return (
        <div
            className="relative bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#f0f4f7] before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100"
            onMouseEnter={handleTopMouseEnter}
            onMouseLeave={handleTopMouseLeave}
        >
            <Link
              href="/home"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
              <span className="font-gilroy font-bold text-left text-4xl ml-[3.5%]">
                HELLO
              </span>
            </Link>
          </div>
    )
}
export default navButton;