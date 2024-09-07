import React from 'react';
import { useGetTodosQuery } from '../store/todoApiSlice'; // Import the query hook to fetch todos
import {Container, Spinner, Button, Todo} from '../Components/index'; // Import the Spinner, Button, and Todo components

function ShowTodo() {
  // Use the RTK Query hook to fetch todos
  const { data: todos = [], error, isLoading } = useGetTodosQuery();

  // Handle loading state
  if (isLoading) {
    return (
      <Container>
        <Spinner /> {/* Loading spinner */}
        <p>Loading todos...</p>
      </Container>
    );
  }

  // Handle error state
  if (error) {
    return (
      <Container>
        <p className="text-red-500">Error loading todos: {error.message}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Your Todos</h1>

      {/* Render the list of todos */}
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            createdAt={todo.createdAt}
            initialDone={todo.completed}
          />
        ))
      ) : (
        <p>No todos available. Add your first todo!</p>
      )}

      {/* Optional: Add a button to navigate to the CreateTodo page */}
      <Button label="Create New Todo" link="/create-todo" className="mt-4" />
    </Container>
  );
}

export default ShowTodo;
