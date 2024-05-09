import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryForm from '../Components/CategoryForm';

const CategoryListPage = () => {
  const [categories, setCategories] = useState([]);

  // Function to handle category addition
  const handleCategoryAdded = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  // Function to handle category deletion
  const handleCategoryDeleted = async (categoryId) => {
    try {
      await axios.delete(`/api/categories/${categoryId}`);
      console.log(categoryId)
      // Update the categories state after successful deletion
      setCategories((prevCategories) =>
        prevCategories.filter((category) => category._id !== categoryId)
      );
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  useEffect(() => {
    // Fetch categories from the API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>

      {/* Pass the onCategoryAdded and onCategoryDeleted functions to the CategoryForm component */}
      <CategoryForm onCategoryAdded={handleCategoryAdded} />

      <ul>
        {categories.map((category) => (
          <li className="m-2 mt-4 inline-block" key={category._id}>
            <span>{category.name}</span>
            <button
              onClick={() => handleCategoryDeleted(category._id)}
              className="ml-2 bg-red-500 text-white px-2 rounded-lg"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListPage;
