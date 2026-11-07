import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  bgColor = 'bg-[#FFD700]', 
  textColor = 'text-black', 
  hoverBgColor = 'hover:bg-[#e6c200]', 
  className = '',
  disabled = false 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2   rounded-full font-medium  transition-all duration-200 shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${bgColor} ${textColor} ${hoverBgColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;