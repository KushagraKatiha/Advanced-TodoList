import React from 'react';
import { Container } from '../Components/index';

function Contact() {
  return (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white underline">Contact Us</h1>
      <p className="mb-4 text-lg text-white">
        For any inquiries, feedback, or collaboration opportunities, feel free to reach out to us.
      </p>
      <p className="text-lg mb-4 text-white">
        <strong>Email:</strong> kushagrakatiha123@gmail.com<br />
        <strong>LinkedIn:</strong> <a className='text-white underline' href="https://linkedin.com/in/kushagrakatiha" target="_blank" >Kushagra Katiha</a> <br />
        <strong>GitHub:</strong> <a className='text-white underline' href="https://github.com/KushagraKatiha" target="_blank" >Kushagra Katiha</a>
      </p>
      <p className="text-lg text-white">
        We look forward to hearing from you!
      </p>
    </Container>
  );
}

export default Contact;
