import React, { useState } from 'react';
import { Button } from './index';
import { useUpdateTodoMutation } from '../store/todoApiSlice';

function Todo({ id, title, createdAt, initialDone }) {
  const [done, setDone] = useState(initialDone);
  const [error, setError] = useState('');
  const [updateTodo] = useUpdateTodoMutation(); // Use the updateTodo mutation

  const handleToggle = async () => {
    try {
      // Toggle the local state optimistically
      const newDoneStatus = !done;
      setDone(newDoneStatus);
      setError(''); // Clear any previous error message

      // Call the API to update the todo
      await updateTodo({ id, updatedFields: { done: newDoneStatus } }).unwrap();
    } catch (err) {
      console.error('Failed to update todo:', err);
      setError('Failed to update the status. Please try again.');

      // Roll back the optimistic update if the API call fails
      setDone((prev) => !prev);
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

      {/* Display error message if any */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Todo;
