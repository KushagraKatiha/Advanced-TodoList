import React from 'react'

function Container({children}) {
  return (
    <div className='p-2 w-full max-w-full'>
        {children}
    </div>
  )
}

export default Container