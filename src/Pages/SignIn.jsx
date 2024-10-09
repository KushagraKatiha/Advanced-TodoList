import React from 'react';
import { SignInForm, Container } from '../Components/index';
import { Link } from 'react-router-dom'; // Import Link to navigate to sign-up page

function SignIn() {
  return (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className='w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-md'>
        {/* Heading */}
        <h1 className='text-3xl font-bold text-center text-indigo-600 mb-6'>
          Sign In
        </h1>

        {/* SignInForm */}
        <SignInForm />

        {/* Additional Sign-up Prompt */}
        <div className='flex justify-between items-center mt-4'>
          <p className='text-gray-600'>Don't have an account?</p>
          <Link
            to='/signup'
            className='text-indigo-600 hover:underline font-semibold'
          >
            Create One
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default SignIn;
