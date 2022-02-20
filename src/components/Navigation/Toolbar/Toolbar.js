import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Navigation from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.clicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <SessionAuth requireAuth={false}>
        <Navigation />
      </SessionAuth>
    </nav>
  </header>
);
export default toolbar;
