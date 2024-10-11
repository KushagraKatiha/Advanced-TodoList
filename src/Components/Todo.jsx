import React, { useEffect, useState } from 'react';
import { Button } from './index';
import { deleteTodo, toggleComplete } from '../store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function Todo({ id, title, createdAt, initialDone }) {
  const [done, setDone] = useState(initialDone);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleDeleteTodo = async () => {
    try {
      const response = await axios.delete(`/api/todos/${id}`);
      if (response.status === 200) {
        console.log('Todo deleted successfully');
        return true; // Success
      } else {
        console.log('Failed to delete todo');
        return false; // Failure
      }
    } catch (error) {
      console.error('Failed to delete todo:', error);
      return false; // Failure
    }
  };

  const handleDelete = async () => {
    try {
      const isDeleted = await handleDeleteTodo();
      if (isDeleted) {
        // Only dispatch if the API call was successful
        dispatch(deleteTodo(id));
      }
    } catch (err) {
      console.error('Failed to delete todo:', err);
    }
  };

  const handleTodoStatus = async () => {
    try {
      const response = await axios.put(`/api/todos/${id}`, {
        done: !done,
      });
      if (response.status === 200) {
        console.log('Todo status updated successfully');
        return true; // Success
      } else {
        console.log('Failed to update todo status');
        return false; // Failure
      }
    } catch (error) {
      console.error('Failed to update todo:', error);
      return false; // Failure
    }
  };

  const handleToggle = async () => {
    try {
      const isUpdated = await handleTodoStatus();
      if (isUpdated) {
        const newDoneStatus = !done;
        setDone(newDoneStatus);
        // Dispatch toggleComplete only if the status update was successful
        dispatch(toggleComplete(id));
      }
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  };

  return (
    <div className="flex w-full items-center justify-between bg-slate-800 px-4 py-2 rounded-lg shadow-lg mb-4">
      {/* Todo title with dynamic styling */}
      <p className={`flex-1 ${done ? 'line-through text-gray-400' : 'text-white'} text-lg`}>
        {title}
      </p>

      {/* Display the creation date */}
      <p className="text-gray-400 text-sm">
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
        variant="danger"
        onClick={handleDelete}
        className="ml-4"
      />
    </div>
  );
}

export default Todo;
