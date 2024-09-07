import React from 'react';
import { Container, TodoForm } from '../Components/index';

function CreateTodo() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Create New Todo</h1>
      
      {/* Render the TodoForm component */}
      <TodoForm />

      {/* You can add additional information or components here */}
    </Container>
  );
}

export default CreateTodo;
