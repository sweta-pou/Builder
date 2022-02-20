import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  getSuperTokensRoutesForReactRouterDom,
  SuperTokens,
} from "supertokens-auth-react";
import {
  ThirdPartyEmailPasswordAuth,
  ThirdPartyEmailPassword,
  Google,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import { Session, SessionAuth } from "supertokens-auth-react/recipe/session";
import { withRouter } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Checkout from "./container/Checkout/Checkout";
import Orders from "./container/Orders/Orders";

SuperTokens.init({
  appInfo: {
    // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
    appName: "Builder",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init()],
      },
      getRedirectionURL: async (context) => {
        if (context.action === "SUCCESS") {
          if (context.redirectToPath !== undefined) {
            // we are navigating back to where the user was before they authenticated
            return context.redirectToPath;
          }
          return "/";
        }
        return undefined;
      },
    }),
    Session.init(),
  ],
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))}
            <Route path="/checkout">
              <SessionAuth requireAuth={false}>
                <ThirdPartyEmailPasswordAuth>
                  <Checkout history={this.props.history} />
                </ThirdPartyEmailPasswordAuth>
              </SessionAuth>
            </Route>
            <Route path="/orders">
              <SessionAuth requireAuth={false}>
                <ThirdPartyEmailPasswordAuth>
                  <Orders />
                </ThirdPartyEmailPasswordAuth>
              </SessionAuth>
            </Route>
            <Route path="/">
              <BurgerBuilder history={this.props.history} />
            </Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
