import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "Salad" },
  {
    label: "Meat",
    type: "Meat",
  },
  { label: "Cheese", type: "Cheese" },
  { label: "Bacon", type: "Bacon" },
];

const buildcontrols = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price:<strong>Rs.{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.label)}
        removed={() => props.ingredientDelete(ctrl.label)}
        Disabled={props.Disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchasing}
    >
      Order
    </button>
  </div>
);

export default buildcontrols;
