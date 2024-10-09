import React, { useState } from 'react';
import { Button } from './index';

function Todo({ id, title, createdAt, initialDone }) {
  const [done, setDone] = useState(initialDone);
  const [error, setError] = useState('');

  const handleToggle = async () => {
    try {
      // Toggle the local state optimistically
      const newDoneStatus = !done;
      setDone(newDoneStatus);
      setError(''); // Clear any previous error message

      // Simulate an API call to update the todo status
      // await updateTodoStatus(id, newDoneStatus);

    } catch (err) {
      console.error('Failed to update todo:', err);
      setError('Failed to update the status. Please try again.');

      // Roll back the optimistic update if the API call fails
      setDone((prev) => !prev);
    }
  };

  return (
    <div className='flex w-full items-center justify-between bg-slate-800 px-4 py-2 rounded-lg shadow-lg mb-4'>
      {/* Todo title with dynamic styling */}
      <p className={`flex-1 ${done ? 'line-through text-gray-400' : 'text-white'} text-lg`}>
        {title}
      </p>
      
      {/* Display the creation date */}
      <p className='text-gray-400 text-sm'>
        {new Date(createdAt).toLocaleDateString()}
      </p>

      {/* Button to toggle status */}
      <Button
        label={done ? 'Mark as Pending' : 'Mark as Done'}
        className={`ml-4 ${done ? 'bg-yellow-500' : 'bg-green-500'}`}
        onClick={handleToggle}
      />

      {/* Error message display */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Todo;
