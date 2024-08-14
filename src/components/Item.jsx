import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todosSlice";
import DeleteBtn from "/images/delete.svg";

export default function Item({ id, todoText, completed }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-[40rem] flex justify-between pb-4 pt-4">
      <h1 className="flex">
        <input
          type="checkbox"
          className="w-5"
          checked={completed}
          onChange={handleToggle}
        />
        <p
          className="pl-10 text-2xl"
          style={{
            textDecorationLine: completed ? "line-through" : "none",
          }}
        >
          {todoText}
        </p>
      </h1>
      <button>
        <img
          src={DeleteBtn}
          alt="delete button"
          className="w-8"
          onClick={handleDelete}
        />
      </button>
    </div>
  );
}
