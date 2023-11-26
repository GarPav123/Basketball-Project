"use client";
import { Dela_Gothic_One } from "@next/font/google";
import "./style.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import i1 from "/public/images/fb.png";
import i2 from "/public/images/x.png";
import i3 from "/public/images/lkdn.png";
import GlitchText from "./GlitchText";


interface menu 
{
  menuOpened : boolean;
  updateMenuOpened : any;
}

export default function Sidebar({menuOpened, updateMenuOpened} : menu) {
  // const [menuOpened, setMenuOpened] = useState(true);

  // const toggleMenu = () => {
  //   setMenuOpened((prevMenuOpened) => !prevMenuOpened);
  // };

  const [isTopHovered, setIsTopHovered] = useState(false);
  const [delayedTopChange, setDelayedTopChange] = useState(false);

  const handleTopMouseEnter = () => {
    setIsTopHovered(true);
    setTimeout(() => {
      setDelayedTopChange(true);
    }, 100);
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
    }, 100);
  };

  const handleBottomMouseLeave = () => {
    setIsBottomHovered(false);
    setBottomDelayedChange(false);
  };

  return (
    <div
      className={`${menuOpened ? "bg-[#171717] duration-0 lg:translate-x-0" : "bg-[#171717] lg:-translate-x-full"} fixed w-[100%] p-2 mt-0 md:h-16 md:flex md:items-center md:justify-center text-xl lg:min-h-full lg:min-w-[27%] lg:  lg:p-0 lg:w-[16%] duration-300 ease-linear z-50 lg:fixed`}
    >
      
      {/* <button 
          onClick={updateMenuOpened}
          className="fixed z-100 top-[2%] -left-1 mt-5 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3"
      >
            <Image
              className="md:w-[2rem] lg:w-[3rem] rounded-[10px] ml-8 mr-1"
              src="/images/chisquare.png"
              width={160}
              height={160}
              alt="Company Logo"
              priority
            />
      </button> */}

      <div
        className={`items-center ${menuOpened ? "lg:block" : "lg:hidden"
          } flex-col gap-5 lg:flex lg:justify-around lg:w-[100%] lg:flex-col lg:text-xl lg:min-h-full lg:gap-0`}
      >
        

        {/* <div className="flex items-center w-full lg:w-full min-h-[16%] mt-4 hover:bg-white">
        <button 
          onClick={updateMenuOpened}
          className="relative z-100 top-0 -left-1 mt-0 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3"
      >
            <Image
              className="md:w-[2rem] lg:w-[3rem] rounded-[10px] ml-8 mr-1"
              src="/images/chisquare.png"
              width={160}
              height={160}
              alt="Company Logo"
              priority
            />
      </button>
          <span
            className={`py-2 text-center flex-grow text-3xl text-right px-[8%] text-weight-800 font-abc`}
          >
            
          </span>
        </div> */}

        <div className=" flex flex-col w-full mt-0">
        <div
            className="relative bg-transparent pt-3 pb-1 px-5 font-medium uppercase text-white-800 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ffffff]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100 mb-1"
            onMouseEnter={handleTopMouseEnter}
            onMouseLeave={handleTopMouseLeave}
          >
            <button 
          onClick={updateMenuOpened}
          className="relative z-100 top-3 -left-[5.5%] mt-0 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3"
      >
            <Image
              className="md:w-[2rem] lg:w-[3rem]  ml-8 mr-1"
              src="/images/chisquare.png"
              width={160}
              height={160}
              alt="Company Logo"
              priority
            />
      </button>
            <Link
              href="#"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-4 align-items-center md:justify-center md:gap-2 lg:flex-col duration-300 relative hover:text-black"
            >
              <GlitchText displayText="CHISQUAREX" uniqueKey="chisquarex"/>
            </Link>
        </div>
        </div>

        <div
          className={`relative ${isTopHovered
              ? delayedTopChange
                ? "bg-gradient-to-r from-transparent from-5% via-zinc-500 via-50% to-transparent to-95% opacity-0"
                : "bg-gradient-to-r from-transparent from-5% via-zinc-500 via-50% to-transparent to-95%"
              : "bg-gradient-to-r from-transparent from-5% via-zinc-500 via-50% to-transparent to-95%"
            } w-full min-h-[0.2vh] transition-all duration-300`}
          onMouseEnter={handleTopMouseEnter}
          onMouseLeave={handleTopMouseLeave}
        >
          {/*Line*/}
        </div>

        <div className=" flex flex-col w-full mt-1 mb-1">
          <div
            className="relative bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ff0000]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100 "
            onMouseEnter={handleTopMouseEnter}
            onMouseLeave={handleTopMouseLeave}
          >
            <Link
              href="/Home"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col duration-300 relative hover:text-black"
            >
              <GlitchText displayText="Home" uniqueKey="home"/>
            </Link>
          </div>

          <div className="relative  bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ff0000]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100">
            <Link
              href="/Aboutus"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
              <GlitchText displayText="About Us" uniqueKey="aboutus"/>
            </Link>
          </div>

          <div className="relative   bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ff0000]   before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100">
            <Link
              href="/testimonials"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
              <GlitchText displayText="Testimonials" uniqueKey="testimonials"/>
            </Link>
          </div>

          <div className="relative  bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-[#ff0000] before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100">
            <Link
              href="/portfolio"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
                <GlitchText displayText="Portfolio" uniqueKey="portfolio"/>
            </Link>
          </div>

          <div
            className="relative bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ff0000]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100"
            onMouseEnter={handleBottomMouseEnter}
            onMouseLeave={handleBottomMouseLeave}
          >
            <Link
              href="/teamup"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
              <GlitchText displayText="Team Up" uniqueKey="teamup"/>
            </Link>
          </div>
        </div>

        <div
          className={`relative ${isBottomHovered
              ? delayedBottomChange
                ? "bg-gradient-to-r from-transparent from-5% via-zinc-500 via-50% to-transparent to-95% opacity-0"
                : "bg-gradient-to-r from-transparent from-5% via-zinc-500 via-50% to-transparent to-95%"
              : "bg-gradient-to-r from-transparent from-5% via-zinc-500 via-50% to-transparent to-95%"
            } w-full min-h-[0.2vh] transition-all duration-300`}
          onMouseEnter={handleBottomMouseEnter}
          onMouseLeave={handleBottomMouseLeave}
        >
          {/*Line*/}
        </div>

        {/* Socials */}


        <div className="relative  bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ffffff]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100 flex justify-around w-full h-full mt-1 mb-5 
        "
        onMouseEnter={handleBottomMouseEnter}
        onMouseLeave={handleBottomMouseLeave}
        >
       
          <div className={`relative ${isBottomHovered ? "bg-slate-700/30" : "bg-white/10"} p-3 px-8 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#ff0000] before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-y-100  `}>
            <a
              href="https://www.facebook.com/chisquarex"
              target="blank"
              className="text-white hover:text-black duration-300"
            >
              <Image
                className="w-8 h-8 justify-center items-center"
                src={i1}
                width={64}
                height={64}
                alt="Facebook"
                priority
              />
            </a>
          </div>
          <div className={`relative ${isBottomHovered ? "bg-slate-700/30" : "bg-white/10"} p-3 px-8 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#ff0000] before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-y-100  `}>
            <a
              href="https://github.com/Chi-SquareX"
              target="blank"
              className="text-white hover:text-black duration-300"
            >
              <Image
                className="w-8 h-8 justify-center items-center"
                src={i2}
                width={64}
                height={64}
                alt="Github"
                priority
              />
            </a>
          </div>
          <div className={`relative ${isBottomHovered ? "bg-slate-700/30" : "bg-white/10"} p-3 px-8 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#ff0000] before:transition-transform before:duration-500 before:content-[''] hover:text-white before:hover:scale-y-100  `}>
            <a
              href="https://www.linkedin.com/company/chi-squarex/"
              target="blank"
              className="text-white hover:text-black duration-300"
            >
              <Image
                className="w-8 h-8 justify-center items-center"
                src={i3}
                width={64}
                height={64}
                alt="LinkedIn"
                priority
              />
            </a>
          </div>
        </div>
        </div>
      </div>
  );
}
