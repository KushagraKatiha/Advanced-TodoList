import React from 'react';
import {  Container } from '../Components/index';

function PreviewNotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
      <h1 className="text-4xl font-bold text-white mb-4">Nothing to show...</h1>
      <p className="text-lg text-white mb-8">Looks like you don't have any tasks yet!</p>
    </Container>
  );
}

export default PreviewNotFound;
