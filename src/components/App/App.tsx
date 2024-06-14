import { useAppSelector } from "../../hooks/reduxHooks";
import TodoDone from "../TodoDone/TodoDone";
import TodoForm from "../TodoForm/TodoForm";
import TodoActions from "../TodoActions/TodoActions";
import TodoList from "../TodoList/TodoList";

const App = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <div>
      <TodoDone />
      <TodoForm />
      {todos.length ? <TodoActions /> : ""}
      <TodoList />
    </div>
  );
};

export default App;
