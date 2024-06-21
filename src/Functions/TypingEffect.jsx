import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(timer);
    }, typingSpeed);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [text, typingSpeed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
