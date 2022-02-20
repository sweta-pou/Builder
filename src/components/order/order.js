import React from "react";
import classes from "./order.module.css";
const order = (props) => {
  const Ingredients = Object.keys(props.ingredient).map((key) => (
    <li key={key}>
      {key}:{props.ingredient[key]}
    </li>
  ));
  return (
    <div className={classes.Order}>
      <p>Ingredients:</p>
      {Ingredients}
      <p>
        Total Price:<strong>{props.order.totalPrice}</strong>
      </p>
    </div>
  );
};

export default order;
