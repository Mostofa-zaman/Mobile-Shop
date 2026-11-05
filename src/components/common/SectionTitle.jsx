import React from 'react';

const SectionTitle = ({ 
  title, 
  lineWidth = 'w-12', 
  lineColor = 'bg-white', 
  textColor = 'text-white', 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Horizontal Line */}
      <span className={`h-[1.5px] ${lineWidth} ${lineColor} inline-block`} />
      
      {/* Title Text */}
      <h3 className={`text-sm md:text-base font-medium tracking-[0.2em] uppercase ${textColor}`}>
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;