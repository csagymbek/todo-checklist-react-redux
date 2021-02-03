import { useSelector } from "react-redux";
import "./App.css";
import { Input } from "./components/Input";
import { Todo } from "./components/Todo";
import { selectTodoList } from "./features/todoSlice";

export const App = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((todo) => (
            <Todo
              name={todo.item}
              key={todo.id}
              done={todo.done}
              id={todo.id}
            />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
};
