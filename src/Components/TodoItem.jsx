import React, { useState } from "react";
import {backendURL} from "../config/dev"


const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleUpdate = () => {
    updateTodo(todo._id, { title: updatedTitle });
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setUpdatedTitle(todo.title); 
  };

  return (
    <div className="mb-2 flex items-center justify-between" key={todo._id}>
      <div className="flex items-center border-yellow-600 border-2 px-4 py-2">
        {editing ? (
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="rounded py-2 px-3 mr-2"
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </div>
      <div className="flex items-center">
        {editing ? (
          <>
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white py-2 px-4 rounded ml-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-yellow-500 text-white py-2 px-4 rounded ml-2"
            >
              Don't Save
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded ml-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="bg-red-500 text-white py-2 px-4 rounded ml-2"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;



// import React, { useState } from 'react';
// import axios from 'axios';

// const TodoItem = ({ todo }) => {
//   const [completed, setCompleted] = useState(todo.completed);

//   const handleUpdate = async () => {
//     try {
//       await axios.put(`/api/todos/${todo._id}`, { completed: !completed });
//       setCompleted(!completed);
//     } catch (error) {
//       console.error('Error updating todo:', error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/api/todos/${todo._id}`);
//     } catch (error) {
//       console.error('Error deleting todo:', error);
//     }
//   };

//   return (
//     <div className="mb-2 flex items-center justify-between">
//       <div>
//         <span className={completed ? 'line-through' : ''}>{todo.title}</span>
//       </div>
//       <div>
//         <button onClick={handleUpdate}>Toggle</button>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default TodoItem;

