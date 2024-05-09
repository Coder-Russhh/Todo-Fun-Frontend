// src/Pages/LoginPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-black rounded-lg border-2 p-8 shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <LoginForm />
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
