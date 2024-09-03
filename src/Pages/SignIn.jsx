import React from 'react'
import { SignInForm, Container } from '../Components/index'

function SignIn() {
  return (
    <Container>
      <div className='rounded-md'>
        <h1 className='text-center'>Sign In</h1>
        <SignInForm />
        <div className='flex justify-between'>
          <p>Don't have an account ?</p>
          <p>Create One</p>
        </div>
      </div>
    </Container>
  )
}

export default SignIn