import { useAppDispatch } from "../../hooks/reduxHooks";
import { resetTodos, removeCompletedTodo } from "../../store/slices/todoSlice";
import styles from "./TodoActions.module.scss";

const TodoActions = () => {
  const dispatch = useAppDispatch();
  const handleResetTodos = () => {
    dispatch(resetTodos());
  };
  const handleRemoveCompletedTodo = () => {
    dispatch(removeCompletedTodo());
  };
  return (
    <div className={styles.todoActions}>
      <button onClick={handleResetTodos} className={styles.actionButton}>
        Reset
      </button>
      <button
        onClick={handleRemoveCompletedTodo}
        className={styles.actionButton}
      >
        Clean
      </button>
    </div>
  );
};

export default TodoActions;
