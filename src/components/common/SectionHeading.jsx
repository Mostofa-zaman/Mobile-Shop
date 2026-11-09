import React from 'react';

const SectionHeading = ({ 
  title = "Your one-stop solution for all gadget repair needs", 
  align = "text-center", 
  className = "" 
}) => {
  return (
    <h2 className={`text-3xl md:text-5xl lg:text-3xl font-bold tracking-tight text-white leading-snug ${align} ${className}`}>
      {title}
    </h2>
  );
};

export default SectionHeading;