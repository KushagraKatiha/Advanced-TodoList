import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi', // A unique key to store the API cache in the store
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }), // Set the base URL for API requests
  tagTypes: ['Todos'], // Tag type to manage cache invalidation
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos', // GET all todos from /api/todos
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todos', id })),
              { type: 'Todos', id: 'LIST' },
            ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'todos', // POST to /api/todos
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }], // Invalidate list cache on add
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`, // DELETE /api/todos/:id
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Todos', id }], // Invalidate specific todo cache
    }),
    updateTodo: builder.mutation({
      query: ({ id, updatedFields }) => ({
        url: `todos/${id}`, // PATCH /api/todos/:id
        method: 'PATCH',
        body: updatedFields,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todos', id }], // Invalidate the specific updated todo
    }),
  }),
});

// Export hooks for usage in function components
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
