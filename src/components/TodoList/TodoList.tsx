import { useAppSelector } from "../../hooks/reduxHooks";
import { TypeTodo } from "../../store/slices/todoSlice";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <div className={styles.todoList}>
      {todos.map((todo: TypeTodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
