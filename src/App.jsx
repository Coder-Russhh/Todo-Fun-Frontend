import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nabvar";
import CategoryListPage from "./Pages/CategoryListPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import TodoListPage from "./Pages/TodoListPage";
import UserProfilePage from "./Pages/UserProfilePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo-list" element={<TodoListPage />} />
        <Route path="/category-list" element={<CategoryListPage/>} />
        <Route path="/user-profile" element={<UserProfilePage/>} />
      </Routes>
    </>
  );
}

export default App;
