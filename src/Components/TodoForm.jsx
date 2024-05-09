import React, { useState } from 'react';

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title)
    if (title.trim()) {
        console.log(title)
      createTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo..."
        className="border rounded py-2 px-3 mr-2"
      />
      <button type="submit" className="bg-yellow-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
