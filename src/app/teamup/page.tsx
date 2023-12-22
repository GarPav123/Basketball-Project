// pages/teamup.tsx
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import MapG from '@/components/MapG';

const TeamUp = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="w-full h-screen bg-[#100404] flex flex-col overflow-y-auto over ">
      <div className="text-8xl flex relative">
        <div className="absolute inset-y-0 left-0 w-16">
          {/* Adjust the Sidebar component accordingly */}
          <Sidebar
            menuOpened={menuOpened}
            updateMenuOpened={updateMenuOpened}
            delayDuration={2000}
          />
        </div>
        <button
          onClick={updateMenuOpened}
          className="absolute z-100 top-0 -left-1 mt-5 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3"
        >
          <Image
            className="md:w-[2rem] lg:w-[3rem] ml-8 mr-1"
            src="/images/chisquare.png"
            width={160}
            height={160}
            alt="Company Logo"
            priority
          />
        </button>
      </div>
      <div className="flex flex-col h-full z-1">
        <div className="font-abc flex justify-center text-4xl mt-[2%] text-[#ffffff]">
          TEAM UP
        </div>
        
        </div>
      </div>
   
  );
}

export default TeamUp;