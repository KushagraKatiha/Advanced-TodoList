import React from 'react';

function Button({ label, variant = 'primary', className, ...props }) {
  const baseStyle = 'px-6 py-2 font-bold text-white rounded-full focus:outline-none transition duration-200 ease-in-out transform';
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    danger: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}


export default Button;
