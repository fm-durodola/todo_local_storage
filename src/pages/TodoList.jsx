import { useState } from "react";
import Header from "../components/Header";
import AddTodo from "../components/AddTodo";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodo] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [showAddTodo, setShowAddTodo] = useState(false);

  function getTodoFromLocalStorage(newTodoList) {
    localStorage.setItem("todos", JSON.stringify(newTodoList));
    setTodo(JSON.parse(localStorage.getItem("todos")));
  }

  /* ==== ADD TODO ==== */
  function addTodoHandler(e, task) {
    e.preventDefault();

    if (!task || typeof task !== "string") return;

    const newTodoList = [
      {
        id: todos.length + 1,
        task,
        completed: false,
        dateCreated: new Date(),
        dateCompleted: null,
      },
      ...todos,
    ];

    getTodoFromLocalStorage(newTodoList);

    e.target.reset();
  }

  /* ==== DELETE TODO ==== */
  function deleteTodoHandler(todoId) {
    if (!todoId || typeof todoId !== "number") return;

    const newTodoList = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    getTodoFromLocalStorage(newTodoList);
  }

  /* ==== EDIT TODO TASK ==== */
  function editTaskHandler(todoId, newTask) {
    if (!todoId || typeof todoId !== "number") return;

    const updatedTodoList = todos.map((todo) => {
      if (todo.id === todoId) return { ...todo, task: newTask };

      return todo;
    });

    getTodoFromLocalStorage(updatedTodoList);
  }

  /* ==== TOGGLE TODO COMPLETED ==== */
  function toggleCompleteHandler(todoId) {
    if (!todoId || typeof todoId !== "number") return;

    const newTodoList = todos.map((todo) => {
      if (todo.id === todoId)
        return {
          ...todo,
          completed: !todo.completed,
          dateCompleted: new Date(),
        };

      return { ...todo };
    });

    getTodoFromLocalStorage(newTodoList);
  }

  return (
    <main className="main_container">
      <Header hideAddTodoFormHandler={() => setShowAddTodo(!showAddTodo)} />
      {showAddTodo && <AddTodo addTodoHandler={addTodoHandler} />}
      <Todos
        {...{
          todos,
          deleteTodoHandler,
          editTaskHandler,
          toggleCompleteHandler,
        }}
      />
    </main>
  );
};

export default TodoList;
