import React from 'react';
import { Container, Todo, TodosNotFound, NotLoggedIn } from '../Components/index';
import { useSelector } from 'react-redux';

function ShowTodo() {
  const user = useSelector((state) => state.userAuth.user);
  console.log(user);
  
  const todos = useSelector((state) => state.Todo);

  return user != null ? (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600">
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
        <TodosNotFound />
      )}
    </Container>
  ): (
    <Container>
      <NotLoggedIn />
    </Container>
  );
}

export default ShowTodo;
