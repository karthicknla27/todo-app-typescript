import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


interface Todo {
  id: number;
  title: string;
  year: number;
}


const EditTodo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [todo, setTodo] = useState<Todo>({ id: 0, title: '', year: 0 });
  const [apiSuccess, setApiSuccess] = useState(false);

  useEffect(() => {
    axios.get<Todo>(`http://localhost:5476/movies/${id}`)
      .then(response => {
        setTodo(response.data);
      })
      .catch(error => {
        console.error('Error fetching todo:', error);
      });
  }, [id]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, year: Number(e.target.value) });
  };

  const handleSave = () => {
    axios.put(`http://localhost:5476/movies/${id}`, todo)
      .then(response => {
        console.log('Todo updated:', response.data);
        // Redirect to the todo list after updating the todo
        window.location.href = '/';
        setApiSuccess(true);

      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };
  useEffect(() => {
    if (apiSuccess) {
    }
  }, [apiSuccess]);

  return (
    <div>
    
 
      <h2>Edit Todo</h2>
      <input
        type="text"
        value={todo.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        value={todo.year}
        onChange={handleYearChange}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditTodo;
