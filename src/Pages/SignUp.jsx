import React from 'react'
import { SignUpForm, Container } from '../Components/index'

function SignUp() {
  return (
    <Container>
      <div className='rounded-md'>
        <h1 className='text-center'>Sign Up</h1>
        <SignUpForm />
        <div className='flex justify-between'>
          <p>Already have an account ?</p>
          <p>Signin here</p>
        </div>
      </div>
    </Container>
  )
}

export default SignUp