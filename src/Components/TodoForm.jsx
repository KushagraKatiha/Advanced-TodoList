import React, {useState} from 'react'
import {Button, Input, Container} from './index'

function TodoForm() {
    const [todo, setTodo] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        // add todo model
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: todo,
            completed: false,
            createdBy: 'user',
            createdAt: new Date().toISOString()
        }
        // add your code
        // setLoading
        // setError
    }

  return (
    <Container>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <Input
          type='text'
          name='todo'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Todo'
          className='mb-2'
        />
        <Button
          type='submit'
          disabled={loading}
          name= {loading ? 'Loading...' : 'Add Todo'}
          className='mb-2'
        />
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </Container>
  )
}

export default TodoForm