// src/Pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-around items-center h-screen relative">
      <div className="animated-box bg-white border-black border-2 p-8 rounded-lg shadow-md w-full max-w-md transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to Todo App
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Manage your tasks efficiently with Todo App. Get started by creating
          your first todo list.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/register"
          className="bg-yellow-500 spin text-white py-2 px-4 rounded hover:bg-blue-500"
        >
          Get Started
        </Link>
      </div>
      <div className="animated-box bg-white p-8 rounded-lg border-black border-2 shadow-md w-full max-w-md transform hover:scale-105 transition duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to Todo App
        </h1>
        <p className="text-gray-700 text-center mb-6">
          Manage your tasks efficiently with Todo App. Get started by creating
          your first todo list.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
