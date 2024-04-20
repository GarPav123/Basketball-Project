/* eslint-disable react/no-unescaped-entities */
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  const togglePortfolioDropdown = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#E6EED6] z-50 p-4 flex flex-row place-items-center text-[#0A090B] justify-evenly">
      <div className="ml-[-5%] w-[12%] ">
        <div className="mt-[0px]">
          <ScrollLink to="home" smooth={true} style={{ cursor: "pointer" }}>
            <Image
              src="/images/basketball.png"
              alt="Logo"
              width={48}
              height={48}
              quality={100}
            />
          </ScrollLink>
        </div>
      </div>

      <div className="font-sans font-medium text-xl hover:border-b-2 border-black">
        <ScrollLink to="home" smooth={true} style={{ cursor: "pointer" }}>
          Home
        </ScrollLink>
      </div>

      <div className="font-sans font-medium text-xl hover:border-b-2 border-black">
        <ScrollLink to="aboutus" smooth={true} style={{ cursor: "pointer" }}>
          About the N.B.A
        </ScrollLink>
      </div>

      <div
        className="font-sans font-medium text-xl relative group hover:border-b-2 border-black"
        onMouseEnter={togglePortfolioDropdown}
        onMouseLeave={togglePortfolioDropdown}
      >
        <button
          id="dropdownDefaultButton"
          className="font-sans font-medium text-xl "
          type="button"
        >
          Overview
        </button>

        {isPortfolioOpen && (
           <div
           id="dropdown"
           className="absolute top-full right-0 z-10 bg-white divide-y divide-gray-100  shadow w-44 dark:bg-[#E6EED6] border-2 border-black"
           style={{ left: "-100%" }} 
         >
            <ul
              className="py-2 text-sm text-black dark:text-black"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  
                  className="block px-4 py-2 hover:bg-[#c4d79e] dark:hover:bg-[#b6c795] dark:hover:text-black"
                >
                  Essentials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="achievements"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  className="block px-4 py-2 hover:bg-[#E6EED6] dark:hover:bg-[#b6c795] dark:hover:text-black"
                >
                  Statistics
                </ScrollLink>
              </li>
             
              
            </ul>
          </div>
        )}
      </div>

      <div className="font-sans font-medium text-xl hover:border-b-2 border-black">
        <ScrollLink
          to="goat"
          smooth={true}
          style={{ cursor: "pointer" }}
        >
          G.O.A.T
        </ScrollLink>
      </div>
      <div className="font-sans font-medium text-xl hover:border-b-2 border-black">
        <ScrollLink to="faq" smooth={true} style={{ cursor: "pointer" }}>
          My Journey
        </ScrollLink>
      </div>

      <div className="font-sans font-medium text-xl hover:border-b-2 border-black">
        <ScrollLink to="footer" smooth={true} style={{ cursor: "pointer" }}>
          Footer
        </ScrollLink>
      </div>
      

      
    </div>
  );
}

export default Navbar;
