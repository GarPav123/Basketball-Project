"use client";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import GlitchTextNoMargin from "@/components/GlitchTextNoMargin";
import Sidebar from "@/components/sidebar";
import { Canvas } from "@react-three/fiber";
// import Brain from "@/components/brain";
import Image from "next/image";

import * as THREE from "three";
import IconBox from "../components/IconBox";
import VideoPlayer from "@/components/VideoPlayer";
import MapG from "@/components/MapG";

const isClient = typeof window !== "undefined";

function TeamUp() {
  const [menuOpened, setMenuOpened] = useState(false);

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="w-full h-screen bg-[#100404] flex flex-col overflow-y-auto over">
       
        <div className=" text-8xl">
          <div>
            <div className="absolute inset-y-0 left-0 w-16">
              <Sidebar
                menuOpened={menuOpened}
                updateMenuOpened={updateMenuOpened}
                delayDuration={2000}
              />
            </div>    
            <button
              onClick={updateMenuOpened}
              className={`absolute z-100 top-0 -left-1 mt-5 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3`}
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
          <div className="flex flex-col">
        <div className=" font-abc flex justify-center text-4xl mt-[2%] text-[#ffffff] ">
          TEAM UP
        </div>
        <div className=" flex flex-row">
          <div className="w-[50%] ml-[2%] mt-[2%]"><MapG/></div>
          <div className="w-[50%] ml-[2%] mt-[2%]  flex flex-col">
            <div className="font-open text-4xl justify-center flex mt-[2%]"></div>
          </div>
        </div>
        
        </div>
          
          
          
        
      </div>
      
      
      
      
      
      
      
      </div>
  );
}

export default TeamUp;
