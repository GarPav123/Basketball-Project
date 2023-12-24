import React, { useEffect, useRef } from 'react';
import "./Glitch.css";

interface GlitchTextProps {
  displayText: string;
  uniqueKey: string; // Add a unique key prop
}

// ... existing imports ...

// ... existing imports ...

function GlitchTextNoMargin({ displayText, uniqueKey }: GlitchTextProps) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseOver = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const target = event.currentTarget;
    if (!target) return;

    let iteration = 0;

    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      const currentText = target.textContent;
      if (!currentText) return;

      target.textContent = currentText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target.dataset.value?.[index] || "";
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= (target.dataset.value?.length || 0)) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3; // control the number of times it cycles
    }, 30); // control the time it takes per letter
  };

  useEffect(() => {
    const divElement = document.getElementById(uniqueKey);
    if (divElement) {
      divElement.addEventListener("mouseover", handleMouseOver as unknown as EventListener);

      return () => {
        divElement.removeEventListener("mouseover", handleMouseOver as unknown as EventListener);
        clearInterval(intervalRef.current as NodeJS.Timeout);
      };
    }
  }, [uniqueKey]);

  return (
    <div>
      <h1 id={uniqueKey} data-value={displayText} className='font-eclipse'>
        {displayText}
      </h1>
    </div>
  );
}

export default GlitchTextNoMargin;
