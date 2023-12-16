// src/app/testimonials/page.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import TestimonialCarousel from '../components/TestimonialCarousel';



function TestimonialsPage() {
  const [menuOpened, setMenuOpened] = useState(false);

  const updateMenuOpened = () => {
    setMenuOpened(!menuOpened);
  };


  return (
    <div className="w-full h-screen flex flex-col">
      {/* <button
        onClick={updateMenuOpened}
        className={`absolute z-1000 top-0 -left-1 mt-5 hover:scale-110 hover:duration-300 ease-in-out hover:-rotate-3`}
      >
        <Image
          className="md:w-[2rem] lg:w-[3rem] ml-8 mr-1"
          src="/images/chisquare.png"
          width={160}
          height={160}
          alt="Company Logo"
          priority
        />
      </button> */}

      <div className="flex flex-col flex-grow ">
       
        <div className="flex flex-col overflow-hidden">
          <div className="font-abc text-4xl justify-center flex text-[#ffffff] mb-[5%]">TESTIMONIALS</div>
          <TestimonialCarousel/>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsPage;
