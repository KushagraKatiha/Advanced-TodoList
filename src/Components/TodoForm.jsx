import React, { useState } from 'react';
import { Button, Input, Container } from './index';
import { useDispatch } from 'react-redux';
import {addTodo} from '../store/todoSlice'
import { nanoid } from '@reduxjs/toolkit';

function TodoForm() {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); 

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo.trim()) {
            setError('Todo cannot be empty');
            return;
        }
        setError('');
        setSuccess(''); // Reset success message

        const newTodo = {
            id: nanoid(),
            title: todo,
            completed: false,
            createdBy: 'user',
            createdAt: new Date().toISOString(),
        };

        dispatch(addTodo(newTodo));
    };

    return (
        <Container>
            <form onSubmit={handleSubmit} className='w-full max-w-lg bg-slate-800 p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-bold text-white text-center mb-4'>Add New Todo</h2>
                <Input
                    type='text'
                    name='todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder='Enter your todo'
                    className='mb-4 w-full'
                />
                <Button
                    type='submit'
                    label={'Add Todo'}
                    className='w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50'
                />
                {/* Display error or success messages */}
                {error && <p className='text-red-500 mt-2 text-center'>{error}</p>}
                {success && <p className='text-green-500 mt-2 text-center'>{success}</p>}
            </form>
        </Container>
    );
}

export default TodoForm;
