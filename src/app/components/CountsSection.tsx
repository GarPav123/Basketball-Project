// components/CountsSection.tsx
import React from 'react';
import Counters, { CounterProps } from './Counters'; // Import CounterProps

interface CountsSectionProps {
  title: string;
  counters: CounterProps[];
}

const CountsSection: React.FC<CountsSectionProps> = ({ title, counters }) => (
  <section id="counts" className="counts">
    <div className="container">
      <div className="text-center title font-abc text-6xl justify-center flex mt-[2%] mb-[4%] text-[#ffffff]">
        <h3>{title}</h3>
      </div>
    <div className='flex flex-row font-abc text-2xl m-[5%]  items-center justify-evenly font-semibold'>
      <Counters value={200} label={'Happy Clients'}/>
      <Counters value={300} label={'Projects'}/>
      <Counters value={5000} label={'Hours of Support'}/>
      <Counters value={45} label={'Hard Workers'}/>
      </div>
    </div>
  </section>
);

export default CountsSection;
