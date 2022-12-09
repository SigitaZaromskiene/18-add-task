import React, { useState } from "react";
import styles from "./AddMainTask.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddMainTask = (props) => {
  const [addInput, setAddInput] = useState("");

  const addTaskHandler = (e) => {
    e.preventDefault();
    console.log(addInput);

    if (addInput.trim().length === 0) {
      return;
    }

    props.onAddTask(addInput);
    setAddInput("");
  };

  const inputHandler = (e) => {
    setAddInput(e.target.value);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={addTaskHandler}>
        <input
          id="task"
          placeholder="Add Task"
          type="text"
          required
          onChange={inputHandler}
          value={addInput}
        ></input>
        <Button className={styles.button} type="submit">
          Add
        </Button>
      </form>
    </Card>
  );
};

export default AddMainTask;
