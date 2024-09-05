import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './userAuthSlice'; // Import the setUser action
import { Button, Input, Container } from './index';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch(); // Set up useDispatch for dispatching actions

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulate an API call for sign-in (this could be a fetch/axios call to your back-end)
      const mockApiResponse = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'test@example.com' && password === 'password123') {
            resolve({ id: 1, email, name });
          } else {
            reject('Invalid credentials');
          }
        }, 1000);
      });

      // Dispatch the setUser action with the user data
      dispatch(setUser(mockApiResponse));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Failed to sign in. Invalid credentials.');
    }
  };

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
          name={loading ? 'Loading...' : 'Sign In'}
          className='mb-2'
        />
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </Container>
  );
}

export default SignInForm;
