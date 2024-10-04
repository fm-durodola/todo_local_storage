import { useRef, useState, useEffect } from "react";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

import {
  todo_container,
  todo_style,
  task_style,
  action_buttons,
  editTaskInputStyle,
} from "@/components/Todo/Todo.module.css";
import DateTime from "../DateTime";

const Todo = ({
  todo: { id, task, dateCreated, dateCompleted, completed },
  deleteTodoHandler,
  editTaskHandler,
  toggleCompleteHandler,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);
  const editTaskInputRef = useRef(null);

  // Focus the input field when `isEditing` becomes true
  useEffect(() => {
    if (isEditing && editTaskInputRef.current) {
      editTaskInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className={todo_container}>
      <div className={todo_style}>
        {completed ? (
          <CheckBoxOutlinedIcon
            style={{ cursor: "pointer", color: "var(--primary)" }}
            onClick={() => toggleCompleteHandler(id)}
          />
        ) : (
          <CheckBoxOutlineBlankIcon
            style={{ cursor: "pointer", color: "var(--primary)" }}
            onClick={() => toggleCompleteHandler(id)}
          />
        )}

        <p className={task_style}>
          {isEditing ? (
            <textarea
              className={editTaskInputStyle}
              value={newTask}
              ref={editTaskInputRef}
              onChange={(e) => setNewTask(e.target.value)}
            />
          ) : completed ? (
            <strike>{task}</strike>
          ) : (
            <span>{task}</span>
          )}
        </p>

        <div className={action_buttons}>
          {isEditing ? (
            <div
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "0.5rem 1rem",
              }}
              onClick={() => {
                editTaskHandler(id, newTask);
                setIsEditing(false);
              }}
            >
              save
            </div>
          ) : (
            <EditNoteOutlinedIcon
              style={{ color: "var(--primary)" }}
              onClick={() => setIsEditing(true)}
            />
          )}
          <DeleteForeverIcon
            style={{ color: "var(--highlight)" }}
            onClick={() => deleteTodoHandler(id)}
          />
        </div>
      </div>

      <DateTime {...{ dateCreated, dateCompleted, completed }} />
    </div>
  );
};

export default Todo;
