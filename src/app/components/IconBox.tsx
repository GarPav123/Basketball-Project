// IconBox component

import React from "react";
import Image from "next/image";

interface IconBoxProps {
  imageUrl: string;
  heading: string;
  text: string;
}

const IconBox: React.FC<IconBoxProps> = ({ imageUrl, heading, text }) => {
  return (
    <div className="icon-box transform transition-transform hover:scale-110 px-[3%] overflow-hidden">
      <div className="flex flex-col items-center">
        <Image src={imageUrl} alt={heading} width={160} height={160} />
        <h3 className="text-3xl font-bold mb-2 mt-[3%] px-2">{heading}</h3>
        <p className="text-lg px-4 py-4">{text}</p>
      </div>
    </div>
  );
};

export default IconBox;
