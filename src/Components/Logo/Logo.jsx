import React from 'react';

const TodoLogo = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke="#4F46E5" fill="#EEF2FF" />
    <path d="M9 11l2 2 4-4" stroke="#4F46E5" fill="none" />
  </svg>
);

export default TodoLogo;
