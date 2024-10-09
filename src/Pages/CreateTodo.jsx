import React from 'react';
import { Container, TodoForm, NotLoggedIn } from '../Components/index';
import { useSelector } from 'react-redux';

function CreateTodo() {
  const user = useSelector(state => state.userSlice)
  return user ? (
    <Container>
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
        Create New Todo
      </h1>

      {/* Render the TodoForm component */}
      <div className="flex justify-center">
        <TodoForm />
      </div>
    </Container>
  ):(
    <Container>
      <NotLoggedIn/>
    </Container>
  )
}

export default CreateTodo;
