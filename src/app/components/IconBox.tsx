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
      <div className="flex flex-col justify-center">
        <div className="flex justify-center lg:pl-0 mt-5 ">
        <Image src={imageUrl} alt={heading} width={160} height={160} />
        </div>
        <h3 className=" flex justify-center text-2xl lg:text-3xl font-bold mb-2 mt-[3%]  lg:pl-0 lg:pr-0 lg:pt-2 ">{heading}</h3>
        <p className=" flex justify-center text-md lg:text-lg  lg:pl-0 lg:pr-0">{text}</p>
      </div>
    </div>
  );
};

export default IconBox;
