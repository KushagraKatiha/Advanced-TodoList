import React from 'react';
import { SignUpForm, Container } from '../Components/index';
import { Link } from 'react-router-dom'; // Import Link to navigate to sign-in page

function SignUp() {
  return (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className='w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-md'>
        {/* Heading */}
        <h1 className='text-3xl font-bold text-center text-purple-600 mb-6'>
          Sign Up
        </h1>

        {/* SignUpForm */}
        <SignUpForm />

        {/* Additional Sign-in Prompt */}
        <div className='flex justify-between items-center mt-4'>
          <p className='text-gray-600'>Already have an account?</p>
          <Link
            to='/signin'
            className='text-purple-600 hover:underline font-semibold'
          >
            Sign in here
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
