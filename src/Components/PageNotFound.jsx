import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Error Message */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>

      {/* Go Home Button */}
      <Link to="/">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
