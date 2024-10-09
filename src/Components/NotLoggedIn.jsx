import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function NotLoggedIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Main Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">You are not logged in!</h1>

      {/* Subtext */}
      <p className="text-gray-600 mb-8">Please log in to access this page.</p>

      {/* Call to Action */}
      <Link to="/signin">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
          Go to Sign In
        </button>
      </Link>
    </div>
  );
}

export default NotLoggedIn;
