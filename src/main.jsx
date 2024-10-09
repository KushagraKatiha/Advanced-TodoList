import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store.js';
import App from './App.jsx';
import {HomePage, CreateTodo, ShowTodo, SignUp, SignIn} from './Pages/pages.js';
import './index.css'

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
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      }
    ],
  },
]);

// Render the app to the root element
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
