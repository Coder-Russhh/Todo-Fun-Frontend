import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {backendURL} from "../config/dev"


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // navigate--
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/register`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        const data = await response.json();
        console.log('Registration successful:', data);
        navigate('/todo-list')
      }else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
      }
    } catch (error) {
      console.error('Error during registration',error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4">
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="rounded w-full py-2 px-3 border-2 border-gray-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded w-full py-2 px-3 border-2 border-gray-300"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="rounded w-full py-2 px-3 border-2 border-gray-300"
          required
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-yellow-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
