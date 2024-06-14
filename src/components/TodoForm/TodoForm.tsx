import { useAppDispatch } from "../../hooks/reduxHooks";
import React, { useState } from "react";
import { addTodo } from "../../store/slices/todoSlice";
import styles from "./TodoFrom.module.scss";

const TodoForm = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleAddTodo = () => {
    dispatch(addTodo(inputData));
    setInputData("");
  };

  return (
    <form className={styles.todoForm} onSubmit={onSubmitForm}>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="write your task"
      />
      <button className={styles.submitButton} onClick={handleAddTodo}>
        +
      </button>
    </form>
  );
};

export default TodoForm;
