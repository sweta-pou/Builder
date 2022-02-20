import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxilairy";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import {
  redirectToAuth,
  signOut,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";

const Sidedrawer = (props) => {
  const { doesSessionExist } = useSessionContext();

  let attachedClasses = [classes.Sidedrawer, classes.Close];
  if (props.show) {
    attachedClasses = [classes.Sidedrawer, classes.Open];
  }
  async function onLogout() {
    await signOut();
    window.location.href = "/";
  }
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
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
        </nav>
      </div>
    </Aux>
  );
};

export default Sidedrawer;
