import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { ThirdPartyEmailPasswordAuth } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

import CheckoutSummary from "../../components/order/checkout/CheckoutSummary";
import ContactData from "../../components/order/contactdata/ContactData";

function Checkout(props) {
  const checkoutCancelHandler = () => {
    props.history.goBack();
  };

  const checkoutContinueHandler = () => {
    props.history.replace("/checkout/info");
  };

  let { userId } = useSessionContext();

  return (
    <div>
      <CheckoutSummary
        ingredients={props.ingredients}
        checkoutCancled={checkoutCancelHandler}
        checkoutContinue={checkoutContinueHandler}
      />
      <Route path="/checkout/info">
        <ThirdPartyEmailPasswordAuth>
          <ContactData userId={userId} />
        </ThirdPartyEmailPasswordAuth>
      </Route>
    </div>
  );
}
const MapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    total: state.total,
  };
};

export default connect(MapStateToProps)(Checkout);
