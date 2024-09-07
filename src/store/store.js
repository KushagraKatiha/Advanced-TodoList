import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // Import your local todo slice
import { todosApi } from './todoApiSlice'; // Import RTK Query API slice
import userAuthSlice from './userAuthSilce'; // Import user authentication slice

const store = configureStore({
  reducer: {
    todos: todoReducer, // Local slice reducer
    [todosApi.reducerPath]: todosApi.reducer, // RTK Query API reducer
    userAuth: userAuthSlice, // User authentication slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware), // RTK Query middleware
});

export default store;
