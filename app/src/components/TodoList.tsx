import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Todo {
  id: number;
  title: string;
  year: number;
}

const API_BASE_URL = 'http://localhost:5476'; // Replace with your API URL

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Fetch all todos when the component mounts
    axios.get<Todo[]>(`${API_BASE_URL}/movies`)
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
           movie- {todo.title}- Year: {todo.year}

            <Link to={`/edit/${todo.id}`}>edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Todo</Link>

    </div>
  );
}

export default TodoList;
