import { ITodo } from "../types";
import EditTodo from "./EditTodo";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (n: Number) => void;
  handleEdit: (n: Number) => void;
  handleUpdate: (n: Number, t: string) => void;
  handleStrike: (n: Number, t: string) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleStrike,
}) => {
  function handleSave(id: Number, value: string) {
    if (value) {
      handleUpdate(id, value);
    }
  }

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>, id: Number) {
    if (e.target.checked) {
      handleStrike(id, "done");
    } else {
      handleStrike(id, "undone");
    }
  }

  return (
    <div>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <EditTodo item={t} handleSave={handleSave} />
            </>
          ) : (
            <div className="input-group-text justify-content-between mb-3 col-sm-6">
              <input
                type="checkbox"
                // name={t.text}
                id={`text-${t.id}`}
                checked={t.isDone}
                onChange={(e) => handleCheck(e, t.id)}
              />
              <span
                className="px-3"
                style={t.isDone ? { textDecoration: "line-through" } : {}}
              >
                {t.text}
              </span>
              <div>
                <button
                  className="btn btn-outline-secondary btn-sm mx-2"
                  onClick={() => handleDelete(t.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => handleEdit(t.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
