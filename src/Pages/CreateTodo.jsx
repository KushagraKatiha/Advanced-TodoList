import React from 'react';
import { Container, TodoForm, Button } from '../Components/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateTodo() {
  const user = useSelector(state => state.userSlice)
  const navigate = useNavigate()
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
      <p>Not Logged in, log in to create todo</p>
      <Button onClick={() => navigate('/signin')} label="Login" className="bg-green-500 hover:bg-green-600" />
    </Container>
  )
}

export default CreateTodo;
