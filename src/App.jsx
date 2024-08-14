import { useSelector, useDispatch } from "react-redux";
import {
  setInputValue,
  addTodo,
  toggleTodo,
  deleteTodo,
} from "./features/todosSlice";
import Item from "./components/Item";
import Add from "/images/add.svg";
import "./App.css";

function App() {
  const { todos, inputValue } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo());
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-9xl text-gray-300 font-extrabold pt-10 pb-8">
        todos
      </h1>
      <form onSubmit={handleAddTodo} className="flex justify-between pb-10">
        <input
          className="w-[40rem] px-3 py-5 border shadow-xl text-2xl rounded-2xl"
          type="text"
          placeholder="Add a todo item..."
          name="todo"
          onChange={handleChange}
          value={inputValue}
        />
        <img
          className="w-10"
          src={Add}
          alt="Add button"
          onClick={handleAddTodo}
        />
      </form>
      <div className="flex flex-col divide-y-2">
        {todos.map((todo) => (
          <Item
            key={todo.id}
            id={todo.id}
            todoText={todo.text}
            completed={todo.completed}
            delete={() => handleDeleteTodo(todo.id)}
            toggle={() => handleToggleTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
