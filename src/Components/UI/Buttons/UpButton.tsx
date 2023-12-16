import React, { useState, useEffect } from 'react';
import { SquareButton } from './SquareButton';

export const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SquareButton
    id='up_button'
      class_name_dark={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      class_name_light={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    />
  );
};
