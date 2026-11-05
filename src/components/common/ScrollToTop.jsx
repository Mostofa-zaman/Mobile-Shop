'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      // Calculate scroll progress percentage (0 to 100)
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(progress);

      // Show button if scrolled down more than 200px
      if (currentScroll > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-6 bottom-12 z-50 flex flex-col items-center gap-4 cursor-pointer group" onClick={scrollToTop}>
      
      {/* Scroll to top text (Vertical text like the image) */}
      <span 
        className="text-xs uppercase tracking-[0.2em] text-gray-300 group-hover:text-white transition-colors font-medium"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Scroll to top
      </span>

      {/* Vertical Line Container (Image-er moto niche line-ti) */}
      <div className="w-[2px] h-24 bg-gray-700 relative overflow-hidden rounded-full">
        {/* Dynamic active indicator line */}
        <div 
          className="absolute top-0 left-0 w-full bg-[#C5FF13] transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

    </div>
  );
};

export default ScrollToTop;