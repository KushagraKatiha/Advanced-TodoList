import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);   
    },
    deleteTodo: (state, action) => (state.filter((todo) => todo.id !== action.payload)),
    toggleComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
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
