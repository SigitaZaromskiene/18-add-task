import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.btn} ${props.className}`}
      type={props.type}
    >
      {props.children}
    </div>
  );
};

export default Button;
