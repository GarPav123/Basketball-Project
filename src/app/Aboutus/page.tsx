"use client";
import { OrbitControls } from "@react-three/drei";
import React, { useState } from "react";
import GlitchTextNoMargin from "@/components/GlitchTextNoMargin";
import Sidebar from "@/components/sidebar";
import { Canvas } from "@react-three/fiber";
import Brain from "@/components/brain";
import Image from "next/image";


import * as THREE from "three";
import IconBox from "../components/IconBox";


function AboutUs() {
  
  const [menuOpened, setMenuOpened] = useState(false);
  
  const updateMenuOpened = () => 
  {
    setMenuOpened(!menuOpened);
  };


  return (
    <div className="w-full h-screen bg-[#120808] flex flex-col overflow-y-auto">
      <div className="flex justify-center items-center h-1/4">
        <div className="font-abc text-8xl">
          <div>
          <div className="absolute inset-y-0 left-0 w-16">
        <Sidebar 
        menuOpened = {menuOpened} 
        updateMenuOpened = {updateMenuOpened}
        />
      </div>
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
          <GlitchTextNoMargin displayText="ABOUT US" uniqueKey="aboutus" />
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-start  text-6xl text-[#ff0000]">
        <div className="py-[2%] px-[1%] font-abc">
          <GlitchTextNoMargin
            displayText="WHO ARE WE ?"
            uniqueKey="whorewetext"
          />
        </div>
        <div className="flex flex-around justify-evenly py-[2%] px-[2%] space-x-4 flex-grow overflow-y-auto scrollbar-none">
          <div className="relative text-ellipsis bg-slate-300/10 rounded-lg p-[2%] flex-grow w-[50%] h-[50vh] text-xl text-justify text-[#f0f0f0] overflow-y-auto scrollbar-none font-medium font-sans font-family-arial">
            <p>
              Chi SquareX Technologies is a leading DeepTech startup in India,
              specializing in providing cutting-edge research assistance
              solutions in the domains of Machine Learning, AI, Deep Learning,
              Computer Vision, and Natural Language Processing. Our services
              cater to a wide range of clients, including individual
              researchers, small-scale startups, and established corporations
              seeking professional assistance with their research projects. We
              take pride in our ability to consistently deliver high-quality
              research assistance, with a proven track record of completing 250+
              research projects and satisfying over 100 happy clients.Our team
              of highly skilled developers comprises graduates from the top
              IITs, NITs, and other prestigious institutions, who bring to the
              table a wealth of knowledge and experience.{" "}
            </p>
            <br></br>
            <p>
              {" "}
              At Chi SquareX Technologies, we are passionate about pushing the
              boundaries of research in AI and related fields. Our commitment to
              innovation is reflected in the multiple publications we have
              authored and the independent research we have conducted. We
              believe that innovation is key to addressing critical challenges
              in various sectors, and our solutions are designed to have a
              meaningful impact on society. Our services are aimed at providing
              customized and cost-effective research assistance solutions to our
              clients. We work closely with our clients to understand their
              unique needs and requirements, and then tailor our solutions to
              match their specific research goals. Our services include data
              analysis, model development, algorithm design, and optimization,
              among others. We take pride in our ability to provide personalized
              research assistance solutions that are efficient, effective, and
              impactful. Our goal is to help our clients achieve their research
              objectives and drive meaningful innovation in their respective
              fields. To learn more about our services, please visit our
              official website. Chi SquareX Technologies.
            </p>
            {/* <div className="absolute bg-gradient-to-t from-[#070202cb] from-20% via-[#070202a5] via-60% to-transparent to-100% w-full h-[15%] bottom-0 left-0">
          Shadow effect overlay BROKEN
          </div> */}
          </div>
          <div className="w-[50%]">
            <Canvas camera={{ position: [0.2, 0.02, 0.2], near: 0.0001 }}>
              <ambientLight />
              {/* <OrbitControls/>  */}
              <Brain
                x_Scale={1.3}
                y_Scale={1.3}
                z_Scale={1.3}
                position={new THREE.Vector3(0, 0, 0)}
              />
              
            </Canvas>
          </div>
        </div>
        <div className="flex flex-col mt-[5%]">
          <div className="flex justify-center font-abc">
            <GlitchTextNoMargin
              displayText="SERVICES WE PROVIDE"
              uniqueKey="services"
            />
          </div>
        </div>
         <div className="flex flex-col mt-[5%] h-[80%] w-[100%]">
         <div className="grid grid-flow-col justify-evenly mb-[5%] ">
          <IconBox imageUrl="/images/desktop.png" text="This is nlp box" />
          <IconBox imageUrl="/images/aibrain.png" text="This is ai box" />
          <IconBox imageUrl="/images/robot.png" text="This is robot box" />
        </div>
        <div className="grid grid-flow-col justify-evenly">
          <IconBox imageUrl="/images/application.png" text="This is mobile box" />
          <IconBox imageUrl="/images/machine-learning.png" text="This is ml box" />
          
        </div>
                  
          
        </div>
      </div>
      </div>
    
  );
}

export default AboutUs;
