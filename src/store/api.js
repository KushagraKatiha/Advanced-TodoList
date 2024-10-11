// src/store/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', // unique key to identify this slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }), // replace with your backend URL
  endpoints: (builder) => ({
    getUserTodo: builder.query({
        // get query based on the logged in user
        query: (userId) => `/todos/${userId}`,
    }),
    addUserTodo: builder.mutation({
        // post query to add todo
        query: (todo) => ({
            url: `/todos`,
            method: 'POST',
            body: todo,
        })
    }),
    deleteUserTodo: builder.mutation({
        // delete query to delete todo
        query: (todoId) => ({
            url: `/todos/${todoId}`,
            method: 'DELETE',
        })
    }),
    updateUserTodoStatus: builder.mutation({
        // put query to update todo status
        query: ({ todoId, status }) => ({
            url: `/todos/${todoId}`,
            method: 'PUT',
            body: { status },
        })
    }),
  }),
});

// Export hooks for usage in functional components
export const {getUserTodo, addUserTodo, deleteUserTodo, updateUserTodoStatus} = apiSlice;