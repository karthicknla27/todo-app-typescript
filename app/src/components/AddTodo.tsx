import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 


interface IAddTodo {
  onTodoAdd: (str: string , str1:number) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");
  const [year, setyear] = useState(0);

  const navigate = useNavigate(); 

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 

    e.preventDefault();
    onTodoAdd(text,year);
    setText("");
    setyear(0);
    navigate('/');  

  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label>
        Enter Task Todo:
        <input
          className="form-control"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
         <input
          className=""
          type="number"
          value={year}
          onChange={(e:any) => setyear(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="btn btn-secondary mx-4">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
