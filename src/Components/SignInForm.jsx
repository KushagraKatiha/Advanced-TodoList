import React, {useState} from 'react'
import {Button, Input, Container} from './index'

function SignIn() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // add your code
    // setLoading
    // setError
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <Input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='mb-2'
        />
        <Input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='mb-2'
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='mb-2'
        />
        <Button
          type='submit'
          disabled={loading}
          name= {loading ? 'Loading...' : 'Sign In'}
          className='mb-2'
        />
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </Container>
  )
}

export default SignIn