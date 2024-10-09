import React from 'react';

function Spinner({ size = '8', color = 'border-blue-500' }) {
  return (
    <div
      className={`animate-spin inline-block w-${size} h-${size} border-4 border-t-transparent ${color} rounded-full`}
    ></div>
  );
}

export default Spinner;
