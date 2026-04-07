import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50): string => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeCharacter = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
        timeoutId = setTimeout(typeCharacter, speed);
      }
    };

    typeCharacter();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  return displayedText;
};
