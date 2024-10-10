import React from 'react';
import { SignUpForm, Container } from '../Components/index';
import { Link } from 'react-router-dom'; // Import Link to navigate to sign-in page
import { useSelector } from 'react-redux'; // Import useSelector to access the state

function SignUp() {
  const user = useSelector(state => state.userAuth.user); // Get the user from the state

  return !user ? (
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
  ):(
    <Container className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className='w-full max-w-md mx-auto bg-white p-8 shadow-lg rounded-md'>
        <h1 className='text-3xl font-bold text-center text-purple-600 mb-6'>
          You are already signed in
        </h1>
        <p className='text-gray-600 text-center'>
          You are already signed in. If you want to sign up with a different account, please sign out first.
        </p>
      </div>
    </Container>
  );
}

export default SignUp;
