"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import Image from "next/image";
import GlitchTextNoMargin from "@/components/GlitchTextNoMargin";
import Link from "next/link";
import Sidebar from "@/components/sidebar";

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
    <main className="flex min-h-screen items-center justify-center relative bg-image">
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <div className="absolute inset-y-0 left-0 w-16">
        <Sidebar menuOpened={menuOpened} updateMenuOpened={updateMenuOpened} />
      </div>
      <div className="font-abc text-center text-6xl text-[#100404] bg">
        {menuOpened ? (
          <div className=" mt-[1%] text-6xl h-screen flex flex-col">
            <div className="font-abc2">CHI SQUAREX TECHNOLOGIES</div>

            {/* <div className=" font-sans font-bold h-[10%] flex justify-center mt-[1.5%] text-3xl text-ellipsis text-[#ff0000]">
                Your DeepTech Catalyst For Innovation
              </div> */}
            {/* <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh] w-screen"></div> */}
            {/* <div className="h-[59%] flex flex-row">
                <div className="w-[50%] flex flex-col  border-solid border-2 border-[#a62b2b] bg-[#a62b2bbb] ml-[2%] mb-[1%]">
                  <div className="justify-left flex py-[3%] text-6xl pl-[1%] shadow-md">
                    Providing solutions
                  </div>
                  <div className="text-8xl py-[2%] pl-[1%] justify-left flex text-outline">
                    BEYOND
                  </div>
                  <div className="justify-left flex py-[2%] text-8xl pl-[1%]">
                    Intelligence
                  </div>
                </div> */}

            {/* <div className="w-[50%] flex justify-center items-center border-solid border-2 border-[#a62b2b] bg-[#a62b2bbb] mr-[2%] ml-[1%] mb-[1%] text-outline">
                  <Link
                    href="https://www.cioinsiderindia.com/magazine/deeptech-startups-august-2022/#page=20"
                    target="blank"
                  >
                    <Image
                      src="/images/cio.jpg"
                      alt=""
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
              </div> */}
            <div className="h-[70%]"></div>
            <div className="h-[12%] flex justify-center">
              <a
                href="/teamup"
                className="flex justify-center items-center border-1 text-[#100404]  bg-[#ff0000] border-opacity-100  px-3 py-2  text-4xl "
              >
                Team Up
              </a>
            </div>
          </div>
        ) : (
          <div className=" mt-[1%] text-6xl h-screen flex flex-col">
            <div className="font-abc2">CHI SQUAREX TECHNOLOGIES</div>
            {/* <div className=" font-sans font-bold h-[10%] flex justify-center mt-[1.5%] text-3xl text-ellipsis text-[#ff0000]">
                Your DeepTech Catalyst For Innovation
              </div>
              <div className="h-[59%] flex flex-row">
                <div className="w-[50%] flex flex-col  border-solid border-2 border-[#a62b2b] bg-[#a62b2bbb] ml-[2%] mb-[1%]  ">
                  <div className="justify-left flex py-[3%] text-6xl pl-[1%]">
                    Providing solutions
                  </div>
                  <div className="text-8xl py-[2%] pl-[1%] justify-left flex text-outline">
                    BEYOND
                  </div>
                  <div className="justify-left flex py-[2%] text-8xl pl-[1%]">
                    Intelligence
                  </div>
                </div>

                <div className="w-[50%] flex justify-center items-center border-solid border-2 border-[#a62b2b] bg-[#a62b2bbb] mr-[2%] ml-[1%] mb-[1%] text-outline">
                  <Link
                    href="https://www.cioinsiderindia.com/magazine/deeptech-startups-august-2022/#page=20"
                    target="blank"
                  >
                    <Image
                      src="/images/cio.jpg"
                      alt=""
                      width={600}
                      height={300}
                    />
                  </Link>
                </div>
              </div> */}
              <div className="h-[70%]"></div>
            <div className="h-[12%] flex justify-center">
              <a
                href="/teamup"
                className="flex justify-center items-center border-1 text-[#100404]  bg-[#ff0000] border-opacity-100  px-3 py-2 text-4xl "
              >
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
            className="md:w-[2rem] lg:w-[3rem] ml-8 mr-1"
            src="/images/chisquare.png"
            width={160}
            height={160}
            alt="Company Logo"
            priority
          />
        </button>
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
