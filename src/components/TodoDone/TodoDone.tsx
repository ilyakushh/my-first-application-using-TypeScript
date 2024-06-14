import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./TodoDone.module.scss";

const TodoDone = () => {
  const todo = useAppSelector((state) => state.todos.todos);
  const completedTodoCount = todo.filter(
    (el) => el.isCompleted === true
  ).length;
  const totalTodoCount = todo.length;
  return (
    <div className={styles.todoDone}>
      <div className={styles.text}>
        <h3>Todo Done</h3>
        <p>keep it up</p>
      </div>
      <div className={styles.counterCircle}>
        <p>{`${completedTodoCount}/${totalTodoCount}`}</p>
      </div>
    </div>
  );
};

export default TodoDone;
