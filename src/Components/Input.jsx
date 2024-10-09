import React from 'react'

function Input({ type = 'text', placeholder, value, onChange, className, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 text-white bg-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-800 transition duration-200 ease-in-out ${className}`}
      {...props}
    />
  )
}

export default Input
