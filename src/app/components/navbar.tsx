import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Head from 'next/head';
import React from 'react';
import GlitchTextNoMargin from '@/components/GlitchTextNoMargin';
import Link from 'next/link';

function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#E6EED6] z-50 p-4 flex flex-row justify-evenly text-[#0A090B]'>
      <div className='ml-[-5%] w-[12%]'>
        <Head>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
      </div>
      <div>
        <ScrollLink
          to="home"
          smooth={true}
          style={{ cursor: 'pointer' }}
        >
          <GlitchTextNoMargin displayText={'HOME'} uniqueKey={'H'}/>
        </ScrollLink>
      </div>
      <div>
        <ScrollLink
          to="aboutus"
          smooth={true}
          style={{ cursor: 'pointer' }}
        >
          <GlitchTextNoMargin displayText={'ABOUT US'} uniqueKey={'A'}/>
        </ScrollLink>
      </div>
      <div>
        <ScrollLink
          to="portfolio"
          smooth={true}
          style={{ cursor: 'pointer' }}
        >
          <GlitchTextNoMargin displayText={'PORTFOLIO'} uniqueKey={'P'}/>
        </ScrollLink>
      </div>
      <div>
        <ScrollLink
          to="testimonials"
          smooth={true}
          style={{ cursor: 'pointer' }}
        >
          <GlitchTextNoMargin displayText={'TESTIMONIALS'} uniqueKey={'T'}/>
        </ScrollLink>
      </div>
      <div>
        <ScrollLink
          to="team"
          smooth={true}
          style={{ cursor: 'pointer' }}
        >
          <GlitchTextNoMargin displayText={'TEAM UP'} uniqueKey={'TU'}/>
        </ScrollLink>
      </div>
      <div>
       
          <GlitchTextNoMargin displayText={'SOCIALS'} uniqueKey={'so'}/>
        
      </div>
    </div>
  );
}

export default Navbar;
