import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; 
      }
    }
  },
});

// Export actions
export const { addTodo, deleteTodo, toggleComplete, setTodos } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
