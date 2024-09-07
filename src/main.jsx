import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store.js';
import App from './App.jsx';
import HomePage from './Pages/HomePage';
import CreateTodo from './Pages/CreateTodo.jsx';
import ShowTodo from './Pages/ShowTodo.jsx';

// Define the router with nested routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // This serves as the main layout component
    children: [
      {
        path: '/', // Home page route
        element: <HomePage />,
      },
      {
        path: '/create-todo', // Create Todo page route
        element: <CreateTodo />,
      },
      {
        path: '/todos', // Show Todos page route
        element: <ShowTodo />,
      },
    ],
  },
]);

// Render the app to the root element
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
