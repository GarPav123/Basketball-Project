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
      <div className="faq-section w-full max-w-3xl flex justify-items-start mt-6 flex-col lg:ml-[2%]">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Question Box */}
            <div
              className="cursor-pointer bg-white p-4 rounded-md shadow-md transition duration-300 ease-in-out flex justify-between items-start text-black "
              onClick={() => toggleDropdown(index)}
            >
              <div className="text-lg font-semibold">{item.question}</div>
              <div className="ml-2">{openIndex === index ? '▲' : '▼'}</div>
            </div>
  
            {/* Answer Box */}
            {openIndex === index && (
              <div className={` bg-white p-4 rounded-md shadow-md ${index === 2 ? 'overflow-y-scroll max-h-40' : ''}`}>
                <div className="text-gray-700 lg:text-sm">{item.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default FaqSection;