import React from "react";
import classes from "./Button.module.css";
const Button = ({ text, className, type, styles }) => {
  return (
    <div className={classes["button-wrapper"]}>
      <span></span>
      <button
        className={`${classes[""]} ${className}`}
        type={type}
        styles={{ styles }}
      >
        {text}
      </button>
      <span></span>
    </div>
  );
};

export default Button;
