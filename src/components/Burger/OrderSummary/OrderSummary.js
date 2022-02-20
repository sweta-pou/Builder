import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxilairy";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
  render() {
    const ingredient = Object.keys(this.props.ingredients).map((igkey) => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
          {this.props.ingredients[igkey]}
        </li>
      );
    });

    return (
      <Aux>
        <h1>Your Order</h1>
        <p>Your Burger has following ingredients:</p>
        <ul>{ingredient}</ul>
        <p>
          <strong>Total Price:{this.props.total.toFixed(2)}</strong>
        </p>
        <p>Do you want to place your order?</p>
        <Button btnType="Danger" click={this.props.close}>
          CANCEL
        </Button>
        <Button btnType="Success" click={this.props.continue}>
          ORDER
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
