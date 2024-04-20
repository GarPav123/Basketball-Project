import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqItems: FAQItem[];
}

const FaqSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleDropdown = (index: number) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="faq-section w-full max-w-3xl flex justify-items-start mt-6 flex-col lg:ml-[2%] text-black">
       My journey as a basketball player started four years ago as an enthusiastic Stephen Curry fan. Day in and day out, I have worked on honing my skills as a shooter and playmaker, excelling in the art of shooting the ball. Right now, I am playing as the 6th man for the esteemed VIT University basketball team. Although I'm more suited to play as a shooting guard, my height and wingspan have propelled me to become a small forward and assist my team in winning matches.<br></br>
       One of the most rewarding aspects of being part of the VIT University basketball team is the camaraderie and support we share. Whether it's celebrating a victory together or lifting each other up during challenging moments, the bond among teammates is what drives us to push our limits and strive for greatness.

As I continue my basketball journey, I aim to further enhance my skills, contribute even more to the team's success, and inspire others to pursue their passion for the game.
      </div>
    );
  };
  
  export default FaqSection;