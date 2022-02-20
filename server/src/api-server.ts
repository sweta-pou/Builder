import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
dotenv.config();
const app = express();

supertokens.init({
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION as string,
    apiKey: process.env.SUPERTOKENS_API_KEY as string,
  },
  appInfo: {
    appName: "Builder",
    apiDomain: process.env.REACT_APP_API_apiDomain as string,
    websiteDomain: process.env.REACT_APP_API_websiteDomain as string,
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      /*TODO: See next step*/
    }),
    Session.init(), // initializes session features
  ],
});

app.use(
  cors({
    origin: process.env.REACT_APP_API_websiteDomain,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);
app.use(supertokens.middleware());
app.use(supertokens.errorHandler());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("server running");
});
