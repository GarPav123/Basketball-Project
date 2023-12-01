import React from "react";
import Image from "next/image";
import Link from "next/link";
type CardProps = {
  imagePath: any;
  buttonColour: string; // 0 = red, 1 = blue, 2 = green
  headerText: string;
  content: string;
  link: string;
};

const Card: React.FC<CardProps> = ({
  imagePath,
  buttonColour,
  headerText,
  content,
  link,
}) => {
  return (
    <div className="lg:w-[28%] h-[100%] mx-3 flex-shrink-0">
      <div className="bg-[#212426] rounded-xl p-2 m-1.5 h-full opacity-80 flex w-[100%]">
        <div className="w-1/3">
          <Image
            className="m-0.5 rounded-xl"
            src={`/images/${imagePath}`}
            width={220}
            height={220}
            alt="Picture of the author"
          />
        </div>
        <div className="w-2/3">
          <div
            className={`font-medium text-xl px-6 font-gilroyBlack ${
              buttonColour === "red"
                ? "text-[#EA7465]"
                : buttonColour === "blue"
                ? "text-[#416AB5]"
                : "text-[#81E1B1]"
            }`}
          >
            {headerText}
          </div>
          <div className="pl-6 font-gilroyBlack text-[#8C8E8F] font-regular">
            {content}
          </div>
          <Link href={link}>
            <div
              className={`font-[700] tracking-wide w-28 h-8 font-gilroyBlack rounded-full text-xs shadow-xl ${
                buttonColour === "red"
                  ? "bg-gradient-to-b from-[#EA7465] to-[#B04E41]"
                  : buttonColour === "blue"
                  ? "bg-gradient-to-b from-[#426BB6] to-[#26458C]"
                  : "bg-gradient-to-b from-[#8BF0BD] to-[#65B18B]"
              } flex items-center justify-center mt-2 mx-8 text-[#fff]`}
            >
              View Report
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
