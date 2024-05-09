import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = ({ onCategoryAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to create a new category
      const response = await axios.post('/api/categories', { name });

      // Notify the parent component that a new category has been added
      onCategoryAdded(response.data);
      console.log(response)
      console.log(response.data)

      // Clear the form
      setName('');
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor="categoryName" className="block text-gray-700 text-sm font-bold mb-2">
        Category Name
      </label>
      <div className="flex">
        <input
          type="text"
          id="categoryName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded py-2 px-3 mr-2"
          required
        />
        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded">
          Add Category
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
