// components/Counters.tsx
import React from 'react';

export interface CounterProps {
    value: number;
    label: string;
  }

const Counter: React.FC<CounterProps> = ({ value, label }) => (
  <div className="col-lg-3 col-6 text-center">
    <span data-testid="counter-value" className=' text-4xl text-[#ffffff] mb-[3%]'>{value}</span>
    <p>{label}</p>
  </div>
);

interface CountersProps {
  counters: CounterProps[];
}

const Counters: React.FC<CountersProps> = ({ counters }) => (
  <div className="row counters">
    {counters.map((counter, index) => (
      <Counter key={index} {...counter} />
    ))}
  </div>
);


export default Counter;
