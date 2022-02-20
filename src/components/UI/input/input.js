import React from "react";
import classes from "./input.module.css";
const input = (props) => {
  let InputElement = null;
  let Inputclass = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    Inputclass.push(classes.Invalid);
  }
  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = (
      <p className={classes.ValidationError}>Please enter a valid data</p>
    );
  }
  switch (props.elementtype) {
    case "input":
      InputElement = (
        <input
          className={Inputclass.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      InputElement = (
        <textarea
          className={Inputclass.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      InputElement = (
        <select
          className={Inputclass.join(" ")}
          {...props.elementconfig}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementconfig.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      InputElement = (
        <input
          className={Inputclass.join(" ")}
          {...props.elementconfig}
          value={props.value}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {InputElement}
      {validationError}
    </div>
  );
};
export default input;
