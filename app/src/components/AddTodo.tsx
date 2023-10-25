import React, { useState } from 'react';
import axios from 'axios';

interface Todo {
  title: string;
  year: number;
}

const API_BASE_URL = 'http://your-api-url.com'; // Replace with your API URL

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<Todo>({ title: '', year: 0 });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, year: Number(e.target.value) });
  };

  const handleSave = () => {
    // Send a POST request to create a new todo
    axios.post(`http://localhost:5476/movies`, todo)
      .then(response => {
        console.log('Todo created:', response.data);
        // Redirect to the todo list after creating a new todo
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Error creating todo:', error);
      });
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Title"
        value={todo.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Year"
        value={todo.year}
        onChange={handleYearChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default AddTodo;
