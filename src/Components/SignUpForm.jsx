import React, { useState } from 'react';
import { Button, Input, Container } from './index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState(''); // OTP state
  const [otpSent, setOtpSent] = useState(false); // Toggle OTP input
  const [errorMessage, setErrorMessage] = useState(''); // For error messages
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to sign up user
  const signUpUser = () => {
    const newUser = {
      fullName,
      email,
      password,
    };

    axios.post('api/signup', newUser)
    .then((response) => {
      if(response.status === 200){
        navigate('/login');
      }
    })
    .catch((error) => {
      setErrorMessage('Failed to sign up, try again later');
      console.log(error.message);
    })
  }

  // Function to handle sending OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    
    setLoading(true);
    axios.post('api/send-otp', { email })
    .then((response) => {
      if(response.status === 200){
        setOtpSent(true);
        setErrorMessage('');
      }})
    .catch((error) => {
      setErrorMessage('Failed to send OTP');
      console.log(error.message);
    })
    .finally(() => {
      setLoading(false);
    })
  };

  // Function to handle OTP verification and sign-up completion
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('api/verify-otp', { email, otp })
    .then((response) => {
      if(response.status === 200){
        signUpUser();
      }
    })
    .catch((error) => {
      setErrorMessage('Invalid OTP');
      console.log(error.message);
    })
    .finally(() => {
      setLoading(false);
    })
  };


  return (
    <Container>
      <form className='w-full max-w-md mx-auto bg-slate-800 p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-white text-center mb-6'>
          {otpSent ? 'Verify OTP' : 'Sign Up'}
        </h2>

        {!otpSent && (
          <>
            {/* Full Name Input */}
            <Input
              type='text'
              name='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Name'
              className='mb-4 w-full'
            />
            
            {/* Email Input */}
            <Input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='mb-4 w-full'
            />
            
            {/* Password Input */}
            <Input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='mb-4 w-full'
            />
            
            {/* Confirm Password Input */}
            <Input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
              className='mb-4 w-full'
            />

            {/* Show error if passwords don't match */}
            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

            {/* Button to Send OTP */}
            <Button
              type='button'
              label={loading ? 'Loading...' : 'Send OTP'}
              onClick={handleSendOtp}
              disabled={!fullName || !email || !password || !confirmPassword || loading} 
              className='w-full bg-green-500 hover:bg-green-600 disabled:opacity-50'
            />
          </>
        )}

        {otpSent && (
          <>
            {/* OTP Input */}
            <Input
              type='text'
              name='otp'
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder='Enter OTP'
              className='mb-4 w-full'
            />

            {/* Button to Verify OTP */}
            <Button
              type='button'
              label='Verify OTP'
              onClick={handleVerifyOtp}
              disabled={!otp || loading} // Disable if OTP is not entered
              className='w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50'
            />

            {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

            {/* Optional Resend OTP Button */}
            <Button
              type='button'
              label='Resend OTP'
              disabled = {loading}
              onClick={handleSendOtp}
              className='mt-2 w-full bg-yellow-500 hover:bg-yellow-600'
            />
          </>
        )}
      </form>
    </Container>
  );
}

export default SignUpForm;
