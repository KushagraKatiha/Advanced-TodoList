import React, { useState } from 'react';
import { Button, Input, Container } from './index';
import { useAddTodoMutation } from './todosApiSlice'; // Import the mutation hook

function TodoForm() {
    const [todo, setTodo] = useState('');
    const [error, setError] = useState('');
    const [addTodo, { isLoading }] = useAddTodoMutation(); // RTK Query hook for adding a todo

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!todo.trim()) {
            setError('Todo cannot be empty');
            return;
        }
        setError('');

        const newTodo = {
            title: todo,
            completed: false,
            createdBy: 'user',
            createdAt: new Date().toISOString()
        };

        try {
            // Call the addTodo mutation to add the new todo
            await addTodo(newTodo).unwrap();
            setTodo(''); // Clear the input after successful addition
        } catch (err) {
            setError('Failed to add todo. Please try again.');
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <Input
                    type='text'
                    name='todo'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder='Todo'
                    className='mb-2'
                />
                <Button
                    type='submit'
                    disabled={isLoading}
                    name={isLoading ? 'Loading...' : 'Add Todo'}
                    className='mb-2'
                />
                {error && <p className='text-red-500'>{error}</p>}
            </form>
        </Container>
    );
}

export default TodoForm;
