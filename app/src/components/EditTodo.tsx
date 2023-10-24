import { useState } from "react";
import { ITodo } from "../types";

interface IEditTodo {
  item: ITodo;
  handleSave: (id: Number, str: string) => void;
}
const EditTodo: React.FC<IEditTodo> = ({ item, handleSave }) => {
  const [editValue, setEditValue] = useState(item.text);

  return (
    <>
      <form
        className="input-group-text col-sm-6"
        onSubmit={() => handleSave(item.id, editValue)}
      >
        <input
          id={`text-${item.id}`}
          type="text"
          placeholder={item.text}
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
          required
        />
        <button className="btn btn-outline-secondary btn-sm">Update</button>
      </form>
    </>
  );
};

export default EditTodo;
