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
const isClient = typeof window !== "undefined";

function Portfolio() {
  const [menuOpened, setMenuOpened] = useState(false);

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="w-full h-screen bg-[#ffffff] flex flex-col overflow-y-auto over">
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
      <div className="flex justify-center flex-col">
        <div className=" font-abc flex justify-center text-8xl mt-1 text-[#100404] ">
          PROJECTS
        </div>
        <div className=" border-4 border-[#100404] h-screen mt-[2%] ml-[2%] mr-[2%] w-[95%] rounded-lg text-[#100404] flex flex-row">
          <div className="w-[80%] flex flex-col">
            <div className="h-[70%] flex flex-row">
              <div className=" transition duration-1000 ease-in-out hover:-translate-y-0.5 hover:scale-105 w-[40%] border-4 border-[#100404] m-[1%]  rounded-xl bg-[#ebb2b2] flex flex-col place-items-center">
                <div className="h-[10%] font-abc text-3xl ">
                  GAN ART GENERATOR
                </div>
                <div className="ellipsis text-3xl text-center text-[#100404]">
                  Our research approach involved utilizing advanced generative
                  modeling techniques, namely WGANs, CGANs, and DCGANs, which
                  leverage the power of an improved Wasserstein metric within a
                  comprehensive AC-GAN framework, resulting in superior
                  performance.
                </div>
              </div>
              <div className=" w-[60%]  flex flex-col">
                <div className="h-[50%] flex flex-row">
                  <div className="transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 w-[70%] border-4 border-[#100404] m-[1%] rounded-xl flex flex-col place-items-center">
                    <div className="h-[10%] font-abc text-3xl text-center">
                      BERT Finetuning for Medical Dataset
                    </div>
                    <div className="h-[90%] ellipsis text-md text-center mt-[12%]">
                      Our approach utilized pre-training and fine-tuning
                      techniques on HuggingFaces BERT, RoBERTa, and GPT2 models
                      to achieve accurate classification of medical datasets.
                      The implementation yielded promising results in terms of
                      precise medical data categorization.
                    </div>
                  </div>

                  <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 w-[30%] border-4 border-[#100404] m-[1%]  rounded-xl bg-[#a62b2b] flex flex-col place-items-center ">
                    <div className="h-[10%] font-abc text-xl text-center">
                      Object Detection
                    </div>
                    <div className="h-[90%] ellipsis text-sm text-center mt-[17%]">
                      Utilizing YOLO v5, we detected car number plates and
                      monitored seatbelt usage. An SQL database tracked and
                      recorded key information, ensuring effective monitoring.
                    </div>
                  </div>
                </div>
                <div className="h-[50%] flex flex-row">
                  <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 w-[50%] border-4 border-[#100404] m-[1%]  rounded-xl bg-[#ff0000] flex flex-col place-items-center ">
                    <div className="h-[10%] font-abc text-3xl text-center">
                      Interactive Deep Colorization
                    </div>
                    <div className="h-[90%] ellipsis text-sm text-center mt-[17%]">
                      Our implementation involved using research papers to
                      enable real-time user-guided image colorization on a
                      custom dataset. This was accomplished using learned deep
                      priors, which were trained to produce accurate and
                      efficient colorization results.
                    </div>
                  </div>
                  <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 w-[50%] border-4 border-[#100404] m-[1%]  rounded-xl bg-[#ffffff] flex flex-col place-items-center ">
                    <div className="h-[10%] font-abc text-3xl text-center">
                      Recommender System
                    </div>
                    <div className="h-[90%] ellipsis text-sm text-center mt-[17%]">
                      State-of-the-art deep learning models, including RNN, CNN,
                      and LSTM, were employed to create various recommendation
                      systems. The performance of these models was evaluated to
                      ensure that the recommendations made were accurate and
                      effective.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[30%] flex flex-row">
              <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 w-[72%] border-4 border-[#100404] m-[1%]  rounded-xl bg-[#a62b2b] flex flex-col place-items-center ">
                <div className="h-[10%] font-abc text-3xl text-center">
                  Feature Extraction and Gem Incorporation
                </div>
                <div className="h-[90%] ellipsis text-xl text-center mt-[5%]">
                  In our research paper, we utilized features extracted from
                  CLIP to differentiate between in-distribution and
                  out-of-distribution classes of the CIFAR dataset. This was
                  achieved by analyzing the features and making a determination
                  based on the results.
                </div>
              </div>
              <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 w-[28%] border-4 border-[#100404] m-[0.8%]  rounded-xl bg-[#100404] flex flex-col place-items-center text-[#ffffff]">
                <div className="h-[10%] font-abc text-2xl text-center">
                  Bank Nifty Analysis
                </div>
                <div className="h-[90%] ellipsis text-xs text-center mt-[7%]">
                  Our approach involved the use of Multimodal techniques for
                  predicting Nifty Sentiments. We leveraged a Contextual
                  Bidirectional Long Short-Term Memory (BiLSTM) model and
                  Regressors such as XGBoost and RandomForest for price
                  prediction. We then combined these models using an ensemble
                  approach to optimize performance.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex flex-col">
            <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 h-[50%] border-4 border-[#100404] m-[1%]  rounded-xl ">
              <div className="h-[10%] font-abc text-2xl text-center flex flex-col place-items-center">
              Protein Sequence Prediction
              </div>
              <div className="h-[90%] ellipsis text-md text-center mt-[11%]">
              We adopted a rigorous approach to model validation, utilizing a statistical conformal prediction framework to assess the fitness of protein sequences for the generated hidden Markov models. This ensured high levels of accuracy, predictability and reliability, allowing us to achieve optimal results in our study.


              </div>
            </div>
            <div className=" transition duration-1000 ease-in-out hover:-translate-y-2 hover:scale-105 h-[50%] border-4 border-[#100404] m-[1%]  rounded-xl bg-[#ebb2b2] flex flex-col place-items-center">
              <div className="h-[10%] font-abc text-2xl text-center">
              Lung Image Segmentation
              </div>
              <div className="h-[90%] ellipsis text-md text-center mt-[10%]">
              Autoencoders were utilized to extract features from a Covid-19 dataset, which were then combined with a Graph Convolutional Network and a VGG19-inspired architecture for multiclass classification of a set of images. The combination of these techniques provides a promising approach for medical image analysis in the context of Covid-19.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
