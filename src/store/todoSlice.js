import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        toggleComplete: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }

                return todo;
            });
        }
    }
})

export const {addTodo, deleteTodo, toggleComplete} = todoSlice.actions;
export default todoSlice.reducer;