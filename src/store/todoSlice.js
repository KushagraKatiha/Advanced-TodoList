import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [], // List of todos
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload); // Add a new todo
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload); // Remove a todo by ID
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Toggle completion status
      }
    },
    setTodos: (state, action) => {
      state.todos = action.payload; // Set todos for a specific user
    },
  },
});

// Export actions
export const { addTodo, deleteTodo, toggleComplete, setTodos } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
