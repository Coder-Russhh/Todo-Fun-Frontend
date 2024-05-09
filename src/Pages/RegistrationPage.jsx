import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from '../Components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md w-full max-w-md border-black border-2 rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <RegistrationForm />
        <div className="mt-4 text-center">
          <p>
            Already registered?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-600 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
