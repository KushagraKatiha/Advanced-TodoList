import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../Components/index';

function TodosNotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">No Todos Found</h1>
      <p className="text-lg text-gray-600 mb-8">Looks like you don't have any tasks yet!</p>
      <Link to="/create-todo">
        <Button
          label="Create Your First Todo"
          className="bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-3 rounded-full transition duration-300 shadow-lg"
        />
      </Link>
    </Container>
  );
}

export default TodosNotFound;
