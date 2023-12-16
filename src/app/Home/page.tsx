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
import IconBox from "../components/IconBox";
import VideoPlayer from "@/components/VideoPlayer";
import CountsSection from "../components/CountsSection";
import ProjectCard, { Project } from "@/components/ProjectCard";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Home() {
  const [showBrain, setShowBrain] = useState<boolean>(false);

  const [menuOpened, setMenuOpened] = useState(false);

  // Define your project data
  const projects: Project[] = [
    {
      projectNumber: 1,
      heading: "Project 1",
      text: "Neural Machine Translation using stacked LSTM with attention.",
    },
    {
      projectNumber: 2,
      heading: "Project 2",
      text: "Sentiment Analysis using Roberta, BERT, DistillBERT, XLNET, GPT2 Computer vision.",
    },
    {
      projectNumber: 3,
      heading: "Project 3",
      text: "ArchiGANs for automated Floor Plan detection.",
    },
    {
      projectNumber: 4,
      heading: "Project 4",
      text: "CycleGANs for Image Denoising.",
    },
    {
      projectNumber: 9,
      heading: "Project 9",
      text: "Explainable AI-enabled Predictive maintenance.",
    },
    {
      projectNumber: 5,
      heading: "Project 5",
      text: "YOLOv8 Object Detection for Traffic signal with 28 Classes.",
    },
    {
      projectNumber: 6,
      heading: "Project 6",
      text: "Pose Detection using Mediapipe and Posenet.",
    },
    {
      projectNumber: 7,
      heading: "Project 7",
      text: "Face Detection and Recognition using Unet.",
    },
    {
      projectNumber: 8,
      heading: "Project 8",
      text: "Human Image Segmentation using SegNet.",
    },
    {
      projectNumber: 10,
      heading: "Project 10",
      text: "Electric Vehicle Route Optimization.",
    },
    {
      projectNumber: 11,
      heading: "Project 11",
      text: "Convolutional Neural Networks for Diabetic Retinopathy",
    },
    { projectNumber: 12, heading: "Project 12", text: "Deep Learning in IOT." },
  ];

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };
  const counters = [
    { value: 200, label: "Happy Clients" },
    { value: 300, label: "Projects" },
    { value: 5000, label: "Hours Of Support" },
    { value: 45, label: "Hard Workers" },
  ];

  const [selectedProject, setSelectedProject] = useState<number | "all" | null>(
    null
  );

  const handleProjectFilter = (projectNumber: number | "all" | null) => {
    if (projectNumber === "all") {
      // Handle the 'all' case (show all projects)
      setSelectedProject("all");
    } else if (typeof projectNumber === "number") {
      // Handle the numeric case
      setSelectedProject(projectNumber);
    } else if (projectNumber === null) {
      setSelectedProject("all");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBrain(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center relative">
      <div className="bg-image"></div>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <div className="absolute inset-y-0 left-0 w-16">
        <Sidebar
          menuOpened={menuOpened}
          updateMenuOpened={updateMenuOpened}
          delayDuration={2000}
        />
      </div>
      <div className="font-abc text-center text-6xl  text-outline">
        {menuOpened ? (
          <div className=" mt-[1%] text-5xl h-screen flex flex-col">
            <div className="font-abc2 mt-[5%]">CHI SQUAREX</div>
            <div className="font-abc2 mt-[5%] mb-[5%]">TECHNOLOGIES</div>

            <div className="h-[20%] text-4xl text-[#100404]">
              {" "}
              Bridging the Future - Uniting AI Research with
              Corporate Innovation
            </div>
            <div className="h-[12%] flex justify-center">
              <a
                href="/teamup"
                className="flex justify-center items-center  bg-[#ff0000] text-[#100404]  font-thin px-3 py-3 text-3xl text-outlinew"
              >
                Team Up
              </a>
            </div>
          </div>
        ) : (
          <div className=" mt-[1%] text-5xl h-screen flex flex-col">
            <div className="font-abc2 mt-[5%]">CHI SQUAREX</div>
            <div className="font-abc2 mt-[5%] mb-[5%]">TECHNOLOGIES</div>

            <div className="h-[20%] text-4xl text-[#100404]">
              {" "}
              Bridging the Future - Uniting AI Research with
              Corporate Innovation
            </div>
            <div className="h-[12%] flex justify-center">
              <a
                href="/teamup"
                className="flex justify-center items-center  bg-[#ff0000] text-[#100404]  font-thin px-3 py-3 text-3xl text-outlinew"
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
  
      <div id="aboutus" className="bg-black ">
        <div className="font-abc text-5xl flex justify-center mt-[2%] text-[#ff0000]">
          ABOUT US
        </div>

        <div className="flex flex-col flex-grow justify-start  text-6xl text-[#ff0000]">
          <div className="py-[2%] px-[1%] font-abc"></div>
          <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh] "></div>
          <div className="flex flex-around justify-evenly py-[2%] px-[2%] space-x-4 flex-grow  scrollbar-none">
            <div className="relative text-ellipsis bg-slate-300/10 p-[2%] flex-grow w-[50%] h-[50vh] text-xl text-justify text-[#ff0000] overflow-y-auto scrollbar-none font-medium font-sans font-family-arial">
              <p>
                Chi SquareX Technologies is a leading DeepTech startup in India,
                specializing in providing cutting-edge research assistance
                solutions in the domains of Machine Learning, AI, Deep Learning,
                Computer Vision, and Natural Language Processing. Our services
                cater to a wide range of clients, including individual
                researchers, small-scale startups, and established corporations
                seeking professional assistance with their research projects. We
                take pride in our ability to consistently deliver high-quality
                research assistance, with a proven track record of completing
                250+ research projects and satisfying over 100 happy clients.Our
                team of highly skilled developers comprises graduates from the
                top IITs, NITs, and other prestigious institutions, who bring to
                the table a wealth of knowledge and experience.{" "}
              </p>
              <br></br>
              <p>
                {" "}
                At Chi SquareX Technologies, we are passionate about pushing the
                boundaries of research in AI and related fields. Our commitment
                to innovation is reflected in the multiple publications we have
                authored and the independent research we have conducted. We
                believe that innovation is key to addressing critical challenges
                in various sectors, and our solutions are designed to have a
                meaningful impact on society. Our services are aimed at
                providing customized and cost-effective research assistance
                solutions to our clients. We work closely with our clients to
                understand their unique needs and requirements, and then tailor
                our solutions to match their specific research goals. Our
                services include data analysis, model development, algorithm
                design, and optimization, among others. We take pride in our
                ability to provide personalized research assistance solutions
                that are efficient, effective, and impactful. Our goal is to
                help our clients achieve their research objectives and drive
                meaningful innovation in their respective fields. To learn more
                about our services, please visit our official website. Chi
                SquareX Technologies.
              </p>
            </div>
            <div className="w-[50%]">
              <VideoPlayer />
            </div>
          </div>
          <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh]  overscroll-x-hidden"></div>
          <div className="flex flex-col mt-[5%]">
            <div className="flex justify-center font-abc text-4xl">
              SERVICES WE PROVIDE
            </div>
          </div>
          <div className="flex flex-col mt-[5%] h-[80%] w-[100%] mb-[3%]">
            <div className="grid grid-flow-col justify-evenly mb-[5%] ">
              <IconBox
                imageUrl="/images/desktop.png"
                text="Our ML/AI blog writing services help businesses establish thought leadership in the field of AI and machine learning. We offer high-quality, informative blog content covering topics such as emerging industry trends, best practices for implementing AI, and the latest technological advancements. Our team of experienced writers and data scientists perform in-depth research and work closely with clients to ensure that each piece of content aligns with their brand and message. Contact us to learn more about how our ML/AI blog writing services can help your business succeed."
                heading="ML/AI blog writing services"
              />
              <IconBox
                imageUrl="/images/aibrain.png"
                text="Our Natural Language Processing (NLP) services include sentiment analysis, explanation regeneration, sentence and word tagging, machine translation, and multi-lingual models. We specialize in static word embeddings and language models such as BERT, RoBERTa, and ELECTRA. Our services help businesses better understand and communicate with their customers, improve operational efficiency, and gain a competitive edge."
                heading="Natural Language Processing"
              />
              <IconBox
                imageUrl="/images/robot.png"
                text="We provide comprehensive machine learning model implementation services to help businesses leverage the power of AI. Our services cover the entire ML development cycle, including data preparation, model training, optimization, and deployment. We specialize in developing custom ML models tailored to our clients' specific needs, using popular frameworks like TensorFlow and PyTorch. Our team of experienced ML professionals ensures that the models we develop are accurate, efficient, and scalable."
                heading="Machine Learning Models"
              />
            </div>
            <div className="grid grid-flow-col justify-evenly">
              <IconBox
                imageUrl="/images/application.png"
                text="Our computer vision models can be deployed using three methods, depending on the client's requirements. The first option is on-premises deployment, which involves installing and operating the model directly on the client's hardware or servers. This approach provides greater control and security over the model and data, but may require additional resources and technical expertise. The second option is cloud deployment, using services such as AWS, Azure, or Google Cloud. This method provides greater scalability, flexibility, and accessibility for the model and data, and eliminates the need for on-premises infrastructure. However, it may require ongoing maintenance and subscription costs."
                heading="Deployement services"
              />
              <IconBox
                imageUrl="/images/machine-learning.png"
                text="We provide comprehensive computer vision services using PyTorch, TensorFlow, and OpenCV. Our services include image classification, image captioning, and video classification models. We ensure accuracy and efficiency by performing feature engineering and data preprocessing techniques like data augmentation, feature extraction, and normalization. Our computer vision services help businesses better understand and analyze visual data for informed decision-making."
                heading="Computer Vision Models"
              />
              <IconBox
                imageUrl="/images/classification.png"
                text="At Chi SquareX Technologies, we provide ML consultancy services to help businesses navigate the complex field of machine learning and artificial intelligence. Our team of experienced data scientists and machine learning experts works closely with clients to understand their unique challenges and goals and provide customized solutions to meet their needs. Our ML consultancy services cover a wide range of topics, including data analysis and management, algorithm selection and development, model training and optimization, and deployment and monitoring. We also offer guidance on best practices for implementing machine learning in various industries, such as finance, healthcare, and manufacturing."
                heading="ML Consultancy services"
              />
            </div>
          </div>
          <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh]  overscroll-x-hidden mt-[1%] mb-[5%]"></div>
          <CountsSection title={"OUR ACHIEVEMENTS"} counters={counters} />
          <div className="bg-gradient-to-r from-transparent from-0% via-zinc-500 via-50% to-transparent to-100% min-h-[0.2vh]  overscroll-x-hidden mt-[5%]"></div>

          <div className="w-full min-h-full  bg-[#ffffff] flex flex-col">
            <div className="flex flex-col flex-grow">
              <div className="font-open ml-[3%] flex flex-col items-center justify-center text-2xl text-[#100404] mt-[5%] bg-[#ffffff] mb-[5%] ">
                <div className="text-4xl mt-[-1%] mb-[2%] font-abc">
                  {" "}
                  PROJECTS
                </div>

                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => handleProjectFilter("all")}
                    className={`project-filter-button ${
                      selectedProject === "all" ? "active" : ""
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => handleProjectFilter(1)}
                    className={`project-filter-button ${
                      selectedProject === 1 ? "active" : ""
                    }`}
                  >
                    NATURAL LANGUAGE PROCESSING
                  </button>

                  <button
                    onClick={() => handleProjectFilter(3)}
                    className={`project-filter-button ${
                      selectedProject === 3 ? "active" : ""
                    }`}
                  >
                    GANs
                  </button>
                  <button
                    onClick={() => handleProjectFilter(5)}
                    className={`project-filter-button ${
                      selectedProject === 5 ? "active" : ""
                    }`}
                  >
                    COMPUTER VISION
                  </button>
                  <button
                    onClick={() => handleProjectFilter(9)}
                    className={`project-filter-button ${
                      selectedProject === 9 ? "active" : ""
                    }`}
                  >
                    MACHINE LEARNING
                  </button>
                  <button
                    onClick={() => handleProjectFilter(11)}
                    className={`project-filter-button ${
                      selectedProject === 11 ? "active" : ""
                    }`}
                  >
                    DEEP LEARNING
                  </button>
                </div>
                <div className="border-t-red-600 rounded-xl mt-4">
                  <div className="flex flex-wrap ">
                    {projects
                      .filter((project) => {
                        if (selectedProject === "all") {
                          return true; // Show all projects
                        } else {
                          switch (selectedProject) {
                            case null:
                              return true;
                            case 1:
                              return (
                                project.projectNumber === 1 ||
                                project.projectNumber === 2
                              ); // Show nlp projects when 'null'
                            case 3:
                              return (
                                project.projectNumber === 3 ||
                                project.projectNumber === 4
                              ); // Show GANs projects
                            case 5:
                              return (
                                project.projectNumber >= 5 &&
                                project.projectNumber <= 8
                              ); // Show COMPUTER VISION projects
                            case 9:
                              return (
                                project.projectNumber === 9 ||
                                project.projectNumber === 10
                              ); // Show MACHINE LEARNING projects
                            case 11:
                              return (
                                project.projectNumber === 11 ||
                                project.projectNumber === 12
                              ); // Show DEEP LEARNING projects
                            default:
                              return false; // For any other case, do not show
                          }
                        }
                      })
                      .map((project) => (
                        <div
                          key={project.projectNumber}
                          className="w-[30%] m-[1%] p-[2%] border-4 border-[#100404] rounded-lg hover:-translate-y-0.5 hover:scale-105"
                        >
                          <ProjectCard
                            projectNumber={project.projectNumber}
                            heading={project.heading}
                            text={project.text}
                          />
                        </div>
                      ))}
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
                       
        <div className="flex flex-col flex-grow ">
        <div className="bg-cto "></div>
          <div className="flex flex-col overflow-hidden">
            <div className="font-abc text-6xl justify-center flex text-[#000000] mb-[1%] mt-[4%]">
              TESTIMONIALS
            </div>
            <TestimonialCarousel />
          </div>
        </div>
      
    </main>
  );
}
