"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import "./background.css";
import Image from "next/image";
import GlitchTextNoMargin from "@/components/GlitchTextNoMargin";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import IconBox from "./components/IconBox";
import VideoPlayer from "@/components/VideoPlayer";
import ProjectCard, { Project } from "@/components/ProjectCard";
import TestimonialCarousel from "./components/TestimonialCarousel";
import MapG from "@/components/MapG";
// import Navbar from "./components/Navbar";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Counters from "./components/Counters";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import FaqSection from "@/components/FaqSection";
import ContactForm from "./components/ContactForm";

// import ContactForm from "./components/ContactForm";

export default function Home() {
  const [showBrain, setShowBrain] = useState<boolean>(false);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [menuOpened, setMenuOpened] = useState(false);
  const faqItems = [
    {
      question: "What are our skills and qualifications?",
      answer:
        "All our members are from the Indian Institute of Technology, one of the most premier Engineering Institutes in India so you can expect quality work. We provide services in the domain of Machine Learning, AI, Deep Learning, Natural Language Processing.",
    },
    {
      question: "What kind of fees do we charge for our services?",
      answer:
        "The fees charged depend on the nature and deadlines of the respective project. We provide free appraisals and estimates of the fees charged on the website, in the pricing section.",
    },
    {
      question: "What kind of projects do we do?",
      answer:
        "We work on a variety of sub-domains in AI/ML, including but not limited to Natural Language Processing, Computer Vision, Reinforcement Learning, Generative Models, etc. We work on independent projects as well as research projects. Full details of the projects we have done can be found in the projects section of this website.",
    },
  ];

  const MapG = dynamic(() => import("../components/MapG"), { ssr: false });

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  const countersData = [
    { value: 4800, label: "NBA Players overall" },
    { value: 132126, label: "Total Games Played" },
    { value: 30, label: "Teams Actively Participating" },
    { value: 1, label: "GOAT" },
  ];

  const [selectedProject, setSelectedProject] = useState<number | "all" | null>(
    null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrain(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id="home"
      className="flex flex-col min-h-screen items-center justify-center relative overflow-x-hidden"
    >
      <div className="bg-image"></div>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Navbar />

      <div className="text-outline">
        {
          <div className="mt-[1%] h-screen flex flex-col font-abc">
            <div className=" flex justify-center mt-[30%] lg:mt-[7%] md:mt-[10%] lg:ml-[4%] lg:mr-[70%] text-[#ffffff] lg:flex flex-row text-2xl md:text-4xl lg:text-7xl ">
              <div className="px-[2%] mt-[1%] ">Basketball</div>
            </div>

            <div className="mt-[5%]  text-xl text-[#ffffff] ml-[3%] lg:text-3xl lg:mr-[70%]  lg:mt-[4%] flex justify-center">
              "Basketball isn’t just a sport. It is an art, one that must be
              mastered to succeed." - SC30
            </div>
          </div>
        }
      </div>

      <div id="aboutus" className="w-full">
        <div
          className="mt-[20%] lg:mt-[-1.5%]"
          style={{
            background:
              "linear-gradient(to bottom right, #c8102e 0%, white 25%, #17408b 75%)",
          }}
        >
          <div className="font-abc text-5xl flex justify-center mt-[5%] pt-[5%] text-[#000000] lg:mt-[4%] lg:mb-[3%] ">
            NBA - National Basketball Association
          </div>

          <div className="flex flex-col flex-grow justify-start text-6xl text-[#000000]">
            <div className="py-[2%] lg:px-[1%] px-0 font-abc"></div>
            <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh] "></div>
            <div className="flex flex-col lg:flex-row justify-evenly py-[5%] lg:py-[2%] px-[2%] space-x-4 flex-grow  scrollbar-none">
              <div className=" w-full h-[50%] relative text-ellipsis bg-slate-300/10 lg:mt-[1%] lg:p-[1%] p-[2%] flex-grow lg:w-[50%] lg:h-[50vh] lg:text-xl lg:ml-[2%] text-sm ml-[0] text-justify text-[#000000] overflow-y-auto scrollbar-none font-medium font-sans font-family-arial">
                <p>
                  The NBA, short for the National Basketball Association, stands
                  as one of the premier professional basketball leagues
                  globally, boasting a rich history and a global fan base.
                  Established in New York City on June 6, 1946, the NBA has
                  evolved into a powerhouse of basketball talent, showcasing the
                  world's best players and captivating audiences with its
                  high-flying dunks, intense rivalries, and thrilling games.{" "}
                </p>
                <br></br>
                <p>
                  {" "}
                  At the heart of the NBA are its teams, currently comprising 30
                  franchises spread across major cities in the United States and
                  Canada. Each season, teams compete fiercely for the coveted
                  Larry O'Brien Championship Trophy, awarded to the winner of
                  the NBA Finals, the league's pinnacle event. The NBA's
                  popularity extends far beyond North America, with a
                  significant international following drawn to the league's
                  fast-paced gameplay, iconic stars like LeBron James, Stephen
                  Curry, and Giannis Antetokounmpo, and the cultural impact of
                  basketball on a global scale.
                </p>
              </div>
              <div className="lg:w-[50%] lg:mt-[0] w-[90%] mt-[18%]">
                <VideoPlayer />
              </div>
            </div>
          </div>
          <div
            id="services"
            className=" text-black"
            style={{
              background:
                "linear-gradient(to bottom right, #c8102e 0%, white 25%, #17408b 75%)",
            }}
          >
            <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh]  overscroll-x-hidden"></div>
            <div className="flex flex-col mt-[6%] pb-[2%]">
              <div className="flex font-abc lg:text-5xl lg:mt-[1%] text-2xl mt-[20%] justify-center ">
                The Essentials of Basketball
              </div>
            </div>
            <div className="flex flex-col mt-[5%] h-[80%] w-[100%] ">
              <div className="flex flex-col lg:flex-row justify-evenly mb-[6%] ">
                <IconBox
                  imageUrl="/images/shooting.png"
                  text="Shooting is a foundational skill in basketball, indispensable for scoring points and influencing game outcomes. It encompasses a range of techniques and strategies, from mid-range jumpers to long-range three-pointers. Mastering shooting mechanics involves precise hand placement, consistent follow-through, and proper footwork, all essential for accuracy and efficiency on the court.Effective shooters not only contribute significantly to their team's offensive capabilities but also command attention from opposing defenses, opening up opportunities for teammates. The ability to consistently make shots under pressure is a hallmark of elite players, showcasing their dedication to honing this critical skill."
                  heading="Shooting"
                />
                <IconBox
                  imageUrl="/images/dribble.png"
                  text="Dribbling is a fundamental skill in basketball that involves controlling and maneuvering the ball with one hand while moving around the court. It's essential for players to navigate through defenders, create scoring opportunities, and maintain possession during offensive plays.Proper dribbling techniques include keeping the ball low to the ground, using fingertips for control, and maintaining a protective stance to shield the ball from defenders. Players often practice various dribbling drills to improve their ball-handling skills, including crossover dribbles, behind-the-back dribbles, and hesitation moves."
                  heading="Dribbling"
                />
                <IconBox
                  imageUrl="/images/layup.png"
                  text="Layups are fundamental scoring shots in basketball performed close to the basket. They involve a player dribbling the ball towards the hoop, usually using their dominant hand, and then laying the ball off the backboard or directly into the basket with a soft touch.Executing a successful layup requires good footwork, body control, and spatial awareness to evade defenders and position oneself for a high-percentage shot. Players often use various layup techniques, such as the finger roll or reverse layup, to adapt to different defensive scenarios."
                  heading="Layups"
                />
              </div>
              <div className="flex flex-col lg:flex-row justify-evenly">
                <IconBox
                  imageUrl="/images/dunk.png"
                  text="Dunks are one of the most exciting and visually impressive plays in basketball, where a player jumps near the basket and slams the ball through the hoop with one or both hands. They often occur in fast-break situations, after offensive rebounds, or during set plays near the basket. Executing a dunk requires exceptional athleticism, vertical leap, and timing. Players must generate enough upward momentum to clear the rim and finish the dunk with power and style. Dunks can energize teams and fans, swinging momentum and demoralizing opponents."
                  heading="Dunks"
                />
                <IconBox
                  imageUrl="/images/passing.png"
                  text="Passing in basketball is a fundamental skill that involves transferring the ball from one player to another with precision and accuracy. It plays a crucial role in team offense, facilitating ball movement, creating scoring opportunities, and exploiting defensive weaknesses.Good passing requires vision, decision-making, and communication among teammates. It's a skill that enhances team chemistry, promotes unselfish play, and contributes to offensive efficiency in basketball."
                  heading="Passing"
                />
                <IconBox
                  imageUrl="/images/defense.png"
                  text="Defense in basketball is the backbone of a team's success, encompassing a range of strategies and skills aimed at thwarting the opposing team's scoring efforts. It begins with individual defenders employing techniques like staying low, moving laterally, and using active hands to disrupt passes and shots. Man-to-man defense assigns each player to guard a specific opponent, focusing on containment and forcing difficult shots. Zone defense involves players guarding specific areas, working together to close gaps and contest shots effectively."
                  heading="Defense"
                />
              </div>
            </div>
          </div>

          <div id="achievements"></div>
          <div className="lg:mt-[1%] pt-[6%]  mt-[15%] flex justify-center lg:ml-0 mb-[3%] ml-[23%] text-3xl lg:text-5xl font-abc mt text-black ">
            Statistics of the NBA
          </div>
          <Counters counters={countersData} />
          <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh]  overscroll-x-hidden mt-[6%]"></div>
        </div>
      </div>

      <div id="goat" className="flex flex-col flex-grow w-full bg-[#fff000]">
        <div></div>
        <div className="flex flex-col overflow-hidden">
          <div className="font-abc text-6xl justify-center flex text-[#000000] mb-[0%] mt-[6%]">
            Who is the G.O.A.T?
          </div>
          <div className="h-[400px] bg-white w-[80%] flex ml-[10%] mt-[5%] mb-[5%] flex-row">
            <div className="w-[60%] text-black text-xl mt-[3%] ml-[1%]">In my opinion, Stephen Curry is the GOAT in basketball. His incredible shooting abilities have transformed the game, making him a legend in his own right. Watching Curry sink shots from seemingly impossible angles and distances is a spectacle that few players can match. His impact on the game goes beyond statistics; he has inspired a whole generation of players to emulate his style and work ethic. With multiple NBA championships, MVP awards, and records shattered, Curry's legacy is cemented as one of the greatest players to ever grace the court. His skill, leadership, and influence make him my ultimate choice for the GOAT title in basketball.His accolades include 4 championships, 2 season MVPs, 1 Finals MVP and 10 time ALL Star player and a member of the 75th annual team.</div>
            <div className="ml-[7%] pt-[0.5%] w-[30%] text-black ">
            <Image
              src="/images/curry.jpg"
              alt="4_rings"
              width={256}
              height={32}
              quality={100}
            />
            </div>
          </div>
        </div>
      </div>

      <div
        id="faq"
        className="h-[470px] w-full bg-white  flex flex-row overflow-y:scroll"
      >
        <div className="w-[60%] lg:mt-[7%]">
          <div className="flex justify-left items-center lg:ml-[1%] text-black border-1 border-black lg:text-3xl font-abc">
            Jersey Number 22
          </div>
          <div className="lg:mt-[0%]">
            <FaqSection faqItems={faqItems} />
          </div>
        </div>
        <div className="w-[40%] mt-[5%] ">
          <Image src={"/images/myj.jpg"} alt={"team"} width={620} height={20} />
        </div>
      </div>

      {/* <div id="map" className="w-full bg-[#E6EED6] lg:h-[650px] flex justify-center items-center"><MapG apiKey={googleMapsApiKey}/></div> */}
      <div
        id="footer"
        className="w-full bg-black lg:h-[300px] flex flex-col justify-evenly items-center"
      >
        <div className="lg:text-5xl font-abc">Basketball</div>
        <div className="lg:text-md italic">
          The best sport to ever be created.
        </div>
       
        <div className="lg:text-sm font-open">
          © Copyright Garimella Pavan Teja. All Rights Reserved
        </div>
      </div>
    </main>
  );
}
