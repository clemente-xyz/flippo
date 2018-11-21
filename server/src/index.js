import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import constants from "./imports/config/Constants";
import "./imports/config/db";
import schema from "./imports/graphql";

const app = express();

const path = constants.GRAPHQL_PATH;

schema.applyMiddleware({ app, path });

app.use(bodyParser.json());

app.listen(constants.PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`flippo server running on port ${constants.PORT}...`);
  }
});
