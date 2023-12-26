// components/Counters.tsx
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export interface CounterProps {
  value: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ value, label }) => {
  const [countingStarted, setCountingStarted] = useState(false);

  // Function to check if an element is in the viewport
  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get the "Achievements" section element by its ID
      const achievementsSection = document.getElementById('achievements');

      if (achievementsSection && isInViewport(achievementsSection)) {
        // Start counting when the "Achievements" section is in view
        setCountingStarted(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="col-lg-3 col-6 text-center">
      <CountUp start={0} end={countingStarted ? value : 0} duration={2} delay={0.5} redraw={true}>
        {({ countUpRef }) => (
          <div className="flex flex-col items-center text-white">
            <span ref={countUpRef} className="text-5xl text-white font-sans font-medium mb-[3%]" />
            <p>{label}</p>
          </div>
        )}
      </CountUp>
    </div>
  );
};

interface CountersProps {
  counters: CounterProps[];
}

const Counters: React.FC<CountersProps> = ({ counters }) => {
  return (
    <div className="row counters flex flex-row justify-evenly">
      {counters.map((counter, index) => (
        <Counter key={index} {...counter} />
      ))}
    </div>
  );
};

export default Counters;
