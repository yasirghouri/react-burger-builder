import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType={"Danger"}>
        Cancel
      </Button>
      <Button clicked={props.purchaseContinued} btnType={"Success"}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
