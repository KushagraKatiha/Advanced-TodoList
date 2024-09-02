import React from 'react'

function Button({className, onClick, name, ...props}) {
  return (
    <button className={`${className} px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700`} onClick={onClick} {...props}>{name}</button>
  )
}

export default Button