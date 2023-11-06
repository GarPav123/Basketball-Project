"use client"
import React, { useState } from 'react';
import Image from 'next/image';

type IconBoxProps = {
  imageUrl: string;
  text: string;
};

const IconBox: React.FC<IconBoxProps> = ({ imageUrl, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` bg-[#541e1e69] rounded-xl ${isHovered ? 'border-white p-8 border-4' : 'border-red-600 p-20 border-4'} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="text-center font-abc text-lg">{text}</div>
      ) : (
        <Image src={imageUrl} alt="" width={250} height={250} />
      )}
    </div>
  );
};

export default IconBox;
