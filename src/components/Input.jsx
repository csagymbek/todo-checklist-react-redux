import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import "../styles/Input.css";

export const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};
