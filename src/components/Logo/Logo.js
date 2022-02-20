import React from "react";

import image from "../../assests/images/burger-logo.png";
import classes from "./logo.module.css";
const logo = () => (
  <div className={classes.Logo}>
    <img src={image} alt="my burger"></img>
  </div>
);

export default logo;
