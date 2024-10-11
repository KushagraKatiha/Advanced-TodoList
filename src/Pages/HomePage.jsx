import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TodoLogo } from '../Components/index';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <Container className="text-center">
        {/* Logo */}
        <div className='flex justify-center'>
          <TodoLogo className="w-44 mb-6" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-bounce">
          Welcome to FancyTodo!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white opacity-75 mb-8">
          Organize your tasks with ease and style
        </p>

        {/* Buttons to navigate to Todo and CreateTodo pages */}
        <div className="flex justify-center space-x-4">

          <Button
            onClick={() => navigate('/todos')}
            label="View Todos"
            className="text-[#4f46ef] bg-white hover:bg-indigo-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg px-6 py-3 rounded-full"
          />

          <Button
            onClick={() => navigate('/create-todo')}
            label="Create New Todo"
            className="bg-white text-[#9333ef] hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg px-6 py-3 rounded-full"
          />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
