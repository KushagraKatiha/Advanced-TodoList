import React from 'react';
import { Container, TodoForm, NotLoggedIn, PreviewNotFound } from '../Components/index';
import { useSelector } from 'react-redux';
import TodoPreviewPage from './TodoPreviewPage';

function CreateTodo() {
  const user = useSelector(state => state.userAuth.user);
  
  return user ? (
    <Container>
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
        Create New Todo
      </h1>

      {/* Render the TodoForm component */}
      <div className="flex justify-center">
        <TodoForm />
        <TodoPreviewPage/>
      </div>
    </Container>
  ):(
    <Container>
      <NotLoggedIn/>
    </Container>
  )
}

export default CreateTodo;
