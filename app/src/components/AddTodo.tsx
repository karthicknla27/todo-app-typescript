import { useState } from "react";

interface IAddTodo {
  onTodoAdd: (str: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onTodoAdd(text);
    setText("");
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
      </label>
      <button type="submit" className="btn btn-secondary mx-4">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
