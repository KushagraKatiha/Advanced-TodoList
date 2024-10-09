import React, { useState } from 'react';
import { Button, Input, Container } from './index';

function TodoForm({ addTodo, isLoading }) {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // State to show success message

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo.trim()) {
            setError('Todo cannot be empty');
            return;
        }
        setError('');
        setSuccess(''); // Reset success message

        const newTodo = {
            title: todo,
            completed: false,
            createdBy: 'user',
            createdAt: new Date().toISOString(),
        };

        try {
            // Call the addTodo mutation to add the new todo
            await addTodo(newTodo).unwrap();
            setTodo(''); // Clear the input after successful addition
            setSuccess('Todo added successfully!'); // Set success message
        } catch (err) {
            setError('Failed to add todo. Please try again.');
        }
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
                    disabled={isLoading}
                    label={isLoading ? 'Loading...' : 'Add Todo'}
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
