import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/todo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 spinone hover:bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl flex gap-2">
          <img src={Logo} alt="Logo" className="h-8"/>
          Todo-List
        </Link>
        <div className="flex space-x-4">
          <Link to="/todo-list" className="hover:text-white font-medium">
            All Lists
          </Link>
          <Link
            to="/user-profile"
            className="hover:text-white font-medium"
          >
            User Profile
          </Link>
          <Link to="/category-list" className="hover:text-white font-medium">
            Category
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
