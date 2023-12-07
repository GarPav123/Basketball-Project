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
      className="relative border-red-600 p-20 border-4 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none bg-opacity-75 bg-black`}>
        <div className="font-medium font-sans font-family-arial text-xl mb-[3%] text-[#f1eeee]">
          {heading}
          <div className="font-medium font-sans font-family-arial text-sm mt-[3%] text-[#f1eeee]">{text}</div>
        </div>
      </div>
      <Image
        className={`transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        src={imageUrl}
        alt=""
        width={250}
        height={250}
      />
    </div>
  );
};

export default IconBox;
