import AddBoxIcon from "@mui/icons-material/AddBox";

import {
  add_todo_container,
  input_task,
  add_todo_button,
  add_todo_button_icon,
} from "@/components/AddTodo/AddTodo.module.css";
import { useState } from "react";

const AddTodo = ({ addTodoHandler }) => {
  const [task, setTask] = useState("");

  return (
    <form
      className={add_todo_container}
      onSubmit={(e) => {
        addTodoHandler(e, task);
        setTask("");
      }}
    >
      <input
        type="text"
        placeholder="enter task here..."
        className={input_task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className={add_todo_button} type="submit">
        <AddBoxIcon className={add_todo_button_icon} />
      </button>
    </form>
  );
};

export default AddTodo;
