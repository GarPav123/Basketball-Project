// components/TestimonialCarousel.tsx
import React, { useState, useEffect, useCallback } from 'react';


interface Testimonial {
  id: number;
  content: string;
  author: string;
  image: string;
}

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    { id: 1, content: 'Success is not an accident, success is actually a choice. ', author: 'Stephen Curry', image: 'image1.jpg' },
    { id: 2, content: 'I like criticism. It makes you stronger', author: 'Lebron James', image: 'image2.jpg' },
    { id: 3, content: 'After all, greatness is not for everybody.', author: 'Kobe Bryant', image: 'image3.jpg' },
    { id: 4, content: 'Some people want it to happen, some wish it would happen, others make it happen.', author: 'Micheal Jordon', image: 'image4.jpg' },
    { id: 5, content: 'When you are righteous, you do not have to tell people that you are righteous.', author: 'Shaq', image: 'image5.jpg' },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  });

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  // Define an array of colors
  const testimonialColors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100", "bg-purple-100"];

  return (
    <div className="carousel relative overflow-hidden mt-10 flex flex-col mx-auto max-w-screen-md bg-transparent">
      <div
        className="slides flex items-center mb-[5%]"
        style={{
          width: `${(testimonials.length + 1) * 200}%`, // Change the width to 200%
          transform: `translateX(-${currentIndex * (100 / (testimonials.length + 1))}%)`, // Adjust transform accordingly
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className={`slide w-[50%] ${testimonialColors[index]}`}>
            <div className="testimonial-card p-6 rounded-lg shadow-md bg-acrylic h-[400px] flex flex-row items-center">
              <div className="testimonial-image mr-10 text-[#000000] w-[30%]">
                hi {/* Replace with your image component and use testimonial.image */}
              </div>
              <div className="testimonial-content">
                <p className="text-gray-700">{testimonial.content}</p>
                <p className="text-gray-600">- {testimonial.author}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate the first testimonial to create a loop effect */}
        <div key={testimonials.length + 1} className={`slide w-[50%] ${testimonialColors[0]}`}>
          <div className="testimonial-card p-6 rounded-lg shadow-md mx-2 h-[470px] flex flex-row items-center">
            <div className="testimonial-image mr-4 text-[#000000] w-[30%]">
              
            </div>
            <div className="testimonial-content">
              <p className="text-gray-700">{testimonials[0].content}</p>
              <p className="text-gray-600">- {testimonials[0].author}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
        <div className="flex flex-row gap-10 ">
          <button className="prev bg-gray-300 px-5 py-1 text-[#000000]" onClick={prevSlide}>
            &#9664; Previous
          </button>
          <button className="next bg-gray-300 px-5 py-1 text-[#000000]" onClick={nextSlide}>
            Next &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
