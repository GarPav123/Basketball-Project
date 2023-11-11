"use client"
import React, { useState } from 'react';
import Image from 'next/image';

type IconBoxProps = {
  imageUrl: string;
  text: string;
  heading: string;
};

const IconBox: React.FC<IconBoxProps> = ({ imageUrl, text, heading }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-[#541e1e69] ${isHovered ? 'border-white p-8 border-4' : 'border-red-600 p-20 border-4'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="text-center font-medium font-sans font-family-arial text-3xl mb-[3%] text-[#f1eeee]">{heading}
        <div className="text-center font-medium font-sans font-family-arial text-lg mt-[3%]">{text}</div>
        </div>
      ) : (
        <>
          
          <Image src={imageUrl} alt="" width={250} height={250} />
        </>
      )}
    </div>
  );
  
};

export default IconBox;
