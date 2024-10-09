import React, { useState } from 'react';
import { Button, Input, Container } from './index';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <form className='w-full max-w-md mx-auto bg-slate-800 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-white text-center mb-6'>Sign In</h2>

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

        <Button
          type='submit'
          label={'Sign In'}
          className='w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50'
        />
      </form>
    </Container>
  );
}

export default SignInForm;
