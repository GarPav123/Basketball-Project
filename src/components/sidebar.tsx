// Import necessary modules and styles
"use client";
import { Dela_Gothic_One } from "@next/font/google";
import "./style.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Import images
import i1 from "/public/images/fb.png";
import i2 from "/public/images/x.png";
import i3 from "/public/images/lkdn.png";
import GlitchText from "./GlitchText";

// Define interface for menu props
interface menu {
  menuOpened: boolean;
  updateMenuOpened: any;
}

// Define interface for Sidebar props
interface SidebarProps extends menu {
  delayDuration: number;
}

// Define Sidebar component
export default function Sidebar({ menuOpened, updateMenuOpened, delayDuration }: SidebarProps) {
  const [isTopHovered, setIsTopHovered] = useState(false);
  const [delayedTopChange, setDelayedTopChange] = useState<NodeJS.Timeout | null>(null);

  const handleTopMouseEnter = () => {
    setIsTopHovered(true);
    if (delayedTopChange) {
      clearTimeout(delayedTopChange);
      setDelayedTopChange(null);
    }
  };

  const handleTopMouseLeave = () => {
    setIsTopHovered(false);
    setDelayedTopChange(setTimeout(() => updateMenuOpened(), delayDuration));
  };

  const [isBottomHovered, setIsBottomHovered] = useState(false);
  const [delayedBottomChange, setBottomDelayedChange] = useState<NodeJS.Timeout | null>(null);

  const handleBottomMouseEnter = () => {
    setIsBottomHovered(true);
    if (delayedBottomChange) {
      clearTimeout(delayedBottomChange);
      setBottomDelayedChange(null);
    }
  };

  const handleBottomMouseLeave = () => {
    setIsBottomHovered(false);
    setBottomDelayedChange(setTimeout(() => updateMenuOpened(), delayDuration));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScreenClick = (e: MouseEvent) => {
    const isClickInsideSidebar = e.target instanceof Node && document.getElementById("sidebar")?.contains(e.target);
    if (menuOpened && !isClickInsideSidebar) {
      updateMenuOpened();
    }
  };

  const handleSidebarMouseEnter = () => {
    if (!menuOpened) {
      updateMenuOpened();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleScreenClick);

    return () => {
      document.removeEventListener("click", handleScreenClick);
    };
  }, [handleScreenClick, menuOpened]);

  return (
    <div
      id="sidebar"
      onMouseEnter={handleSidebarMouseEnter} // Add onMouseEnter to open the menu when the mouse enters the sidebar
      className={`${menuOpened ? "bg-[#171717] duration-0 lg:translate-x-0" : "bg-[#171717] lg:-translate-x-full"} fixed w-[100%] p-2 mt-0 md:h-16 md:flex md:items-center md:justify-center text-xl lg:min-h-full lg:min-w-[27%] lg:p-0 lg:w-[16%] duration-300 ease-linear z-50 lg:fixed`}
    >
      <div
        className={`items-center ${menuOpened ? "lg:block" : "lg:hidden"
          } flex-col gap-5 lg:flex lg:justify-around lg:w-[100%] lg:flex-col lg:text-xl lg:min-h-full lg:gap-0`}
      >
        <div className=" flex flex-col w-full mt-0">
          <div
            className="relative bg-transparent pt-3 pb-1 px-5 font-medium uppercase text-white-800 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ff0000]   before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100 mb-1"
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
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-4 align-items-center md:justify-center md:gap-2 lg:flex-col duration-300 relative hover:text-black text-[#ff0000] text-outline font-abc"
            >
             CHI SQUARE X
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
            className="relative bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0  before:bg-[#ff0000] text-[#ff0000] before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100 "
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

          <div className="relative  bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 text-[#ff0000]  before:bg-[#ff0000]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100">
            <Link
              href="/Aboutus"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
              <GlitchText displayText="About Us" uniqueKey="aboutus"/>
            </Link>
          </div>

          <div className="relative   bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 text-[#ff0000]  before:bg-[#ff0000]   before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100">
            <Link
              href="/testimonials"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
              <GlitchText displayText="Testimonials" uniqueKey="testimonials"/>
            </Link>
          </div>

          <div className="relative  bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 text-[#ff0000]  before:bg-[#ff0000] before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100">
            <Link
              href="/portfolio"
              className="w-full md:w-[14.28%] lg:w-full flex justify-center py-5 align-items-center md:justify-center md:gap-2 lg:flex-col  duration-300 relative"
            >
                <GlitchText displayText="Portfolio" uniqueKey="portfolio"/>
            </Link>
          </div>

          <div
            className="relative bg-transparent py-2.5 px-5 font-medium uppercase text-white-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 text-[#ff0000]   before:bg-[#ff0000]  before:transition-transform before:duration-500 before:content-[''] hover:text-black before:hover:scale-x-100"
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
