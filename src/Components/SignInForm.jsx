import React, { useState } from 'react';
import { Button, Input, Container } from './index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    try {
      setLoading(true);
      const response = axios.post('api/user/login', { email, password })
      if(response.status === 200) {
        navigate('/todos');
      }
    } catch (error) {
      setErr('An error occurred');
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      setErr('Please fill in all fields');
      return;
    }else{
      setErr('');
      login();
    }
  }

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

        {err && <p className='text-red-500 mt-2 text-center'>{err}</p>}

        <Button
          type='submit'
          disabled = {loading}
          onClick={handleSubmit}
          label={loading ? 'Loading...' : 'Sign In'}
          className='w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50'
        />
      </form>
    </Container>
  );
}

export default SignInForm;
