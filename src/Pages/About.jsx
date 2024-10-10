import React from 'react';
import { Container } from '../Components/index';

function About() {
  return (
    <Container className="bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white underline">About FancyTodo</h1>
      <p className="text-white mb-4 text-lg">
        FancyTodo is a sleek and efficient task management tool designed to help you stay organized and on top of your tasks. 
        Built using the MERN stack, FancyTodo offers a modern and intuitive interface that makes managing tasks simple and fun. 
      </p>
      <p className="text-white text-lg">
        This project was created by Kushagra Katiha, a passionate developer with a focus on building scalable and user-friendly web applications. 
        If you're looking for a well-designed app to manage your tasks, FancyTodo is the right choice!
      </p>
    </Container>
  );
}

export default About;
