import React, { Component } from "react";
import Aux from "../Auxiliary/Auxilairy";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";

class Layout extends Component {
  state = {
    show: false,
  };
  ClosedBackdrop = () => this.setState({ show: false });
  closedToggleHandler = () => {
    this.setState((prevstate) => {
      return { show: !prevstate.show };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar clicked={this.closedToggleHandler} />
        <Sidedrawer closed={this.ClosedBackdrop} show={this.state.show} />
        <main className={classes.contents}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
