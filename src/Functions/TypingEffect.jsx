import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust the typing speed by changing the delay (in ms)
      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText]);

  return (
    <div>
      {displayedText}
    </div>
  );
};

export default TypingEffect;
