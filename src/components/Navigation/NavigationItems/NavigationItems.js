import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./navitems.module.css";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import {
  redirectToAuth,
  signOut,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";

const Navitems = () => {
  const { doesSessionExist } = useSessionContext();

  async function onLogout() {
    await signOut();
    window.location.href = "/";
  }

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      {doesSessionExist ? (
        <li onClick={onLogout} className={classes.li}>
          Logout
        </li>
      ) : (
        <li
          onClick={() => redirectToAuth({ show: "signin" })}
          className={classes.li}
        >
          SignIn
        </li>
      )}
    </ul>
  );
};
export default Navitems;
