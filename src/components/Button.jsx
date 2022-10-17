import React from "react";
import styles from "./styles.module.css";

const Button = ({ children, classes, onClick, dark,width }) => {
  return (
    <div
      className={`${styles.button} ${classes} ${!!dark && styles.dark}`}
      onClick={onClick}
      style={{width:!!width && width}}
    >
      {children}
    </div>
  );
};

export default Button;
