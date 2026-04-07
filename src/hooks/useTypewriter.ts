import { useState, useEffect } from 'react';

export const useTypewriter = (texts: string[], speed: number = 50): string => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    const currentText = texts[currentIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === currentText) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else if (isDeleting) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [texts, currentIndex, displayedText, isDeleting, speed]);

  return displayedText;
};
