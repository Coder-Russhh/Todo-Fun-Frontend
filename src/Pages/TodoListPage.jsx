import React, { useState, useEffect } from "react";
import TodoForm from "../Components/TodoForm"; // Create this component
import TodoItem from "../Components/TodoItem"; // Create this component
import axios from "axios";

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch all todos when the component mounts
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos"); // Adjust the API endpoint
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const createTodo = async (title) => {
    try {
      const response = await axios.post("/api/todos", { title }); // Adjust the API endpoint
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  const updateTodo = async (id, updatedData) => {
    try {
      const response = await axios.put(`/api/todos/${id}`, updatedData); // Adjust the API endpoint
      const updatedTodos = todos.map((todo) =>
        todo._id === id ? response.data : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`); // Adjust the API endpoint
      console.log(id)
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <TodoForm createTodo={createTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoListPage;
