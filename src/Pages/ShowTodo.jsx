import React from 'react';
import { Container, Button, Todo } from '../Components/index';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ShowTodo() {
  const todos = useSelector((state) => state.Todo);
  const navigate = useNavigate();

  return (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">
        Your Todos
      </h1>

      {/* Conditionally render Spinner if loading */}
      {/* Assuming you may have a loading state for fetching todos */}
      {/* {isLoading && <Spinner />} */}

      {/* Render the list of todos */}
      {todos?.length > 0 ? (
        <div className="space-y-4">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              createdAt={todo.createdAt}
              initialDone={todo.completed}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          No todos available. Add your first todo!
        </p>
      )}

      {/* Button to Create a New Todo */}
      <div className="flex justify-center mt-6">
        <Button
          label="Create New Todo"
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
          onClick={() => navigate("/create-todo")}
        />
      </div>
    </Container>
  );
}

export default ShowTodo;
