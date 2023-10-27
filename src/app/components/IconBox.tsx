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
      className={`border-2px ${isHovered ? 'border-transparent' : 'border-black'} p-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="text-center font-abc font-sm">{text}</div>
      ) : (
        <Image src={imageUrl} alt="" width={250} height={250} />
      )}
    </div>
  );
};

export default IconBox;
