import React from "react";
import Card from "../UI/Card";
import styles from "./AddNewTas.module.css";

const AddNewTas = (props) => {
  return (
    <Card className={styles["tasks"]}>
      <ul>
        {props.tasks.map((task) => (
          <li>{task.title}</li>
        ))}
      </ul>
    </Card>
  );
};

export default AddNewTas;
