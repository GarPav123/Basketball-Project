import React, { useEffect } from 'react';
import "./Glitch.css";

interface GlitchTextProps {
  displayText: string;
  uniqueKey: string; // Add a unique key prop
}

function GlitchTextNoMargin({ displayText, uniqueKey }: GlitchTextProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval: NodeJS.Timeout | null = null;

  const handleMouseOver = (event: MouseEvent) => {
    let iteration = 0;

    clearInterval(interval as NodeJS.Timeout);

    interval = setInterval(() => {
      event.target.textContent = event.target.textContent
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval as NodeJS.Timeout);
      }

      iteration += 1 / 3; //control the number of times it cycles
    }, 30); //control the time it takes per letter
  };

  useEffect(() => {
    const divElement = document.querySelector(`#${uniqueKey}`); // Use the uniqueKey as an ID selector
    if (divElement) {
      divElement.addEventListener("mouseover", handleMouseOver);

      return () => {
        divElement.removeEventListener("mouseover", handleMouseOver);
        clearInterval(interval as NodeJS.Timeout);
      };
    }
  }, [uniqueKey]);

  return (
    <div>
      <h1 id={uniqueKey} data-value={displayText} className=' font-abc '>
        {displayText}
      </h1>
    </div>
  );
}

export default GlitchTextNoMargin;
