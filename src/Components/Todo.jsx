import React, {useState} from 'react'
import {Button} from './index'

function Todo({title, createdAt, done, pending=!done}) {
    const [done, setDone] = useState(done)
    const [pending, setPending] = useState(pending)

    const handleDone = () => {
        setDone(!done)
        setPending(!pending)
    }

    const handlePending = () => {
        setPending(!pending)
        setDone(!done)
    }

  return (
    <div className='w-full flex px-4 py-1'>
        {done ? <p className='line-through'>{title}</p> : <p>{title}</p>}
        <p>{createdAt}</p>
        <Button name={done ? 'pending' : 'done'} className='mb-2' onClick={done ? handlePending : handleDone}/>
    </div>
  )
}

export default Todo