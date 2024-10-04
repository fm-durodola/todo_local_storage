import Todo from "@/components/Todo";

const Todos = ({
  todos,
  deleteTodoHandler,
  editTaskHandler,
  toggleCompleteHandler,
}) => {
  return (
    <section>
      {todos?.map((todo) => {
        return (
          <Todo
            key={todo?.id}
            {...{
              todo,
              deleteTodoHandler,
              editTaskHandler,
              toggleCompleteHandler,
            }}
          />
        );
      })}
    </section>
  );
};

export default Todos;
