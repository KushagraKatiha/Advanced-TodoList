import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'; // Import your todo slice
import { todosApi } from './todosApiSlice'; // Import your RTK Query slice
import userAuthReducer from './userAuthSlice'; // Import the userAuth slice

const store = configureStore({
    reducer: {
        todos: todoReducer, // Add your todo reducer
        [todosApi.reducerPath]: todosApi.reducer, // Add the RTK Query API reducer
        userAuth: userAuthReducer, // Add the user authentication reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware), // Add RTK Query middleware
});

export default store;
