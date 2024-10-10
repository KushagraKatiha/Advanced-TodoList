import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Todo({ title, createdAt }) {

  const todos = useSelector(state => state.todo)

  useEffect(()=>{
    console.log(todos);
  }, [todos])

  return (
    <div className='flex w-full items-center justify-between bg-slate-800 px-4 py-2 rounded-lg shadow-lg mb-4'>
      {/* Todo title with dynamic styling */}
      <p className={`flex-1 text-white text-lg`}>
        {title}
      </p>
      
      {/* Display the creation date */}
      <p className='text-gray-400 text-sm'>
        {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}

export default Todo;
