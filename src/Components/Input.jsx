import React from 'react'

function Input({ type, placeholder, value, onChange, className, ...props}) {
  return (
    <input className={`${className} bg-slate-900 text-white rounded-md`} type={type} placeholder={placeholder} value={value} onChange={onChange} {...props}/>
  )
}

export default Input