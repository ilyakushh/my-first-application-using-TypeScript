import { FaTrashCan, FaCheck } from "react-icons/fa6";
import { TypeTodo } from "../../store/slices/todoSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { deleteTodo, completeTodo } from "../../store/slices/todoSlice";
import styles from "./Todo.module.scss";

type TypeTodoProps = {
  todo: TypeTodo;
};

const Todo = ({ todo }: TypeTodoProps) => {
  const dispatch = useAppDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };
  const handleCompleteTodo = () => {
    dispatch(completeTodo(todo.id));
  };
  return (
    <div className={styles.todo}>
      <div className={styles.todoNameContainer}>
        <span
          className={
            todo.isCompleted
              ? `${styles.circleBorder} ${styles.circleCompleted}`
              : styles.circleBorder
          }
        ></span>
        <p className={todo.isCompleted ? styles.crossed : ""}>{todo.text}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleDeleteTodo}
          className={`${styles.buttonDelete} ${styles.actionButton}`}
        >
          <FaTrashCan />
        </button>
        <button
          className={`${styles.buttonCheck} ${styles.actionButton}`}
          onClick={handleCompleteTodo}
        >
          <FaCheck />
        </button>
      </div>
    </div>
  );
};

export default Todo;
