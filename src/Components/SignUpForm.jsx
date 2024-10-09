import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userAuthSilce'; // Import the setUser action
import { Button, Input, Container } from './index';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Container>
      <form className='w-full max-w-md mx-auto bg-slate-800 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-white text-center mb-6'>Sign Up</h2>

        <Input
          type='text'
          name='fullName'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder='Full Name'
          className='mb-4 w-full'
        />
        <Input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='mb-4 w-full'
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='mb-4 w-full'
        />
        <Input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirm Password'
          className='mb-4 w-full'
        />

        <Button
          type='submit'
          // disabled={loading}
          label={'Sign Up'}
          className='w-full bg-green-500 hover:bg-green-600 disabled:opacity-50'
        />
      </form>
    </Container>
  );
}

export default SignUpForm;
