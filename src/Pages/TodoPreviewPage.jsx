import React, { useEffect } from 'react';
import { Container, NotLoggedIn, PreviewNotFound, TodoPreview } from '../Components/index';
import { useSelector } from 'react-redux';

export default function TodoPreviewPage() {
  const user = useSelector((state) => state.userAuth.user);
  const todos = useSelector((state) => state.todo);
  
  useEffect(()=>{
    console.log(todos);
  }, [todos])
  
  return user != null ? (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600">
      {todos?.length > 0 ? (
        <div className="space-y-4">
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoPreview
                id={todo.id}
                title={todo.title}
                createdAt={todo.createdAt}
                initialDone={todo.completed}
              />

            </div>
          ))}
        </div>
      ) : (
        <PreviewNotFound />
      )}
    </Container>
  ) : (
    <Container>
      <NotLoggedIn />
    </Container>
  );
}

