import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, TodoLogo } from '../Components/index';

function HomePage() {
  return (
    <div className="home-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <Container className="text-center">
        {/* Optional Logo */}
        <TodoLogo className="w-32 h-32 mx-auto mb-8" />

        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">
          Welcome to FancyTodo!
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-white opacity-75 mb-8">
          Organize your tasks with ease and style
        </p>

        {/* Buttons to navigate to Todo and CreateTodo pages */}
        <div className="flex justify-center space-x-4">
          <Link to="/todos">
            <Button label="View Todos" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg px-6 py-3 rounded-full" />
          </Link>
          <Link to="/create-todo">
            <Button label="Create New Todo" className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg px-6 py-3 rounded-full" />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
