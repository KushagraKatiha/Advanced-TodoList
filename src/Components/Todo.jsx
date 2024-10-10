import React, { useEffect, useState } from 'react';
import { Button } from './index';
import { deleteTodo, toggleComplete } from '../store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

function Todo({ id, title, createdAt, initialDone, key }) {
  const [done, setDone] = useState(initialDone);

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo)

  useEffect(()=>{
    console.log(todos);
  }, [todos])

  const handleToggle = async () => {
    try {
      const newDoneStatus = !done;
      setDone(newDoneStatus);
      dispatch(toggleComplete(id));

    } catch (err) {
      console.error('Failed to update todo:', err);
      setDone((prev) => !prev);
      dispatch(toggleComplete(id));
    }
  };

  const handleDelete = async () => {
    try {
      console.log('clicked');
      
      dispatch(deleteTodo(id));
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  }

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
        label={done ? 'Pending' : 'Done'}
        className={`ml-4 ${done ? 'bg-yellow-500' : 'bg-green-500'}`}
        onClick={handleToggle}
      />

      <Button
        label={'Delete'}
        variant='danger'
        onClick={handleDelete}
        className={`ml-4`}
      />
    </div>
  );
}

export default Todo;
