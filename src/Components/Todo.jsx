import React, { useState } from 'react';
import { Button } from './index';
import { useUpdateTodoMutation } from './todosApiSlice';

function Todo({ id, title, createdAt, initialDone }) {
  const [done, setDone] = useState(initialDone);
  const [updateTodo] = useUpdateTodoMutation(); // Use the updateTodo mutation

  const handleToggle = async () => {
    try {
      // Toggle the local state
      const newDoneStatus = !done;
      setDone(newDoneStatus);

      // Call the API to update the todo
      await updateTodo({ id, updatedFields: { done: newDoneStatus } });
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };

  return (
    <div className='w-full flex px-4 py-1 items-center justify-between'>
      {/* Display the todo title with strikethrough if done */}
      <p className={done ? 'line-through' : ''}>{title}</p>
      
      {/* Display the creation date */}
      <p>{createdAt}</p>

      {/* Button that toggles between 'done' and 'pending' */}
      <Button 
        name={done ? 'Mark as Pending' : 'Mark as Done'} 
        className='mb-2' 
        onClick={handleToggle} 
      />
    </div>
  );
}

export default Todo;
