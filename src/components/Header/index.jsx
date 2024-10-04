import AddIcon from "@mui/icons-material/Add";

import {
  header_container,
  new_task_button,
} from "@/components/Header/Header.module.css";

const Header = ({ hideAddTodoFormHandler }) => {
  return (
    <header className={header_container}>
      <h1>Local_Storage_Todo</h1>
      <button className={new_task_button} onClick={hideAddTodoFormHandler}>
        <AddIcon />
        <span>New Task</span>
      </button>
    </header>
  );
};

export default Header;
