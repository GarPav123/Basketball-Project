"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Sidebar from "../components/sidebar";
import Image from "next/image";
import GlitchTextNoMargin from "@/components/GlitchTextNoMargin";

export default function Home() {
  const [showBrain, setShowBrain] = useState<boolean>(false);

  const [menuOpened, setMenuOpened] = useState(false);

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrain(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center relative">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="absolute inset-y-0 left-0 w-16">
        <Sidebar menuOpened={menuOpened} updateMenuOpened={updateMenuOpened} />
      </div>
      <div className="relative z-10 bg-cyan-500/0 min-w-full min-h-screen">
        <div className="font-abc text-center text-6xl text-[#ffffff]">
          {menuOpened ? (
            <div className="font-abc text-center text-6xl text-[#ffffff]">
              <div className="font-abc mt-[1%] text-6xl flex-col h-screen">
                CHI SQUAREX TECHNOLOGIES
                <div className="h-[33%] flex justify-center mt-[1.5%] text-3xl text-ellipsis text-[#ff0000]">
                  Your DeepTech Catalyst For Innovation
                </div>
                <div className="h-[33%] flex justify-left "></div>
                <div className="h-[33%] flex justify-center">
                  <a href="/teamup" className="button-link">
                    Team Up
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="font-abc mt-[1%] text-6xl flex-col h-screen">
              CHI SQUAREX TECHNOLOGIES
              <div className="h-[33%] flex justify-center mt-[1.5%] text-3xl text-ellipsis text-[#ff0000]">
                Your DeepTect Catalyst For Innovation
              </div>
              <div className="h-[33%] flex justify-left "></div>
              <div className="h-[15%] flex justify-center">
                <a
                  href="/teamup"
                  className="flex justify-center items-center border-4 border-cyan-500 border-opacity-100  px-3 py-2 ">
                  Team Up
                </a>
              </div>
            </div>
          )}

          <button
            onClick={updateMenuOpened}
            className={`absolute z-100 top-0 -left-1 mt-5 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3`}
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
        </div>
      </div>
      {/* <div className="absolute inset-y-0 ml-[23vw] mb-[5vh] w-full max-h-screen bg-[#131415] overflow-hidden">
        <Canvas camera={{ position: [.2, .02, 0.2], near: 0.0001 }}>
          <ambientLight />
          {showBrain && <Brain x_Scale={1.5} y_Scale={1.5} z_Scale={1.5} position={new THREE.Vector3(0, 0, 0)} />}
        </Canvas>
      </div> */}
    </main>
  );
}
