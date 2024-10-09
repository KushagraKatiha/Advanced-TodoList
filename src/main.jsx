import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './store/store.js';
import App from './App.jsx';
import { HomePage, CreateTodo, ShowTodo, SignUp, SignIn, Contact, About, UserProfile } from './Pages/pages.js';
import {PageNotFound} from './Components/index.js';
import './index.css';

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
        path: 'create-todo', // Create Todo page route
        element: <CreateTodo />,
      },
      {
        path: 'todos', // Show Todos page route
        element: <ShowTodo />,
      },
      {
        path: 'signup', // SignUp page route
        element: <SignUp />,
      },
      {
        path: 'signin', // SignIn page route
        element: <SignIn />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <UserProfile />,
      },
      {
        path: '*', // Catch-all route for 404
        element: <PageNotFound />, // Handle 404 page
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
