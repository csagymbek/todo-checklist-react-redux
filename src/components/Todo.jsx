import "../styles/Todo.css";
import { Checkbox } from "@material-ui/core";
import { setCheck } from "../features/todoSlice";
import { useDispatch } from "react-redux";

export const Todo = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todo">
      <Checkbox
        checked={done}
        onChange={handleChange}
        inputProps={{ "aria-label": "secondary checkbox" }}
        color="primary"
      />
      <p className={done && "todo--done"}>{name}</p>
    </div>
  );
};
