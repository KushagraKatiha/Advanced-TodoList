import React, { useEffect } from 'react';
import { Button, Container, NotLoggedIn, PreviewNotFound, TodoPreview } from '../Components/index';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function TodoPreviewPage() {
  const user = useSelector((state) => state.userAuth.user);
  const todos = useSelector((state) => state.todo);
  
  useEffect(()=>{
    console.log(todos);
  }, [todos])

  const handleSave = async () => {
    // TODO: Implement the save functionality
    axios.post('/api/todos', {
      todos
    })
    .then((response) => {
      if(response.status === 200){
        console.log('Todos saved successfully');
      }else{
        console.log('Failed to save todos');
      }
    })
    .catch((error) => {
      console.error('Failed to save todos:', error);
    })
  }
  
  return user != null ? (
    <Container className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
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
          <div className='flex justify-center'>
          <Button
            label={'Save'}
            className={`ml-4 bg-green-500`}
            onClick={handleSave}
            />
          </div>
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

