import express from "express";
import constants from "./imports/config/Constants";
import "./imports/config/db";
import schema from "./imports/graphql";

const app = express();

schema.applyMiddleware({ app });

app.listen(constants.PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`flippo server running on port ${constants.PORT}...`);
  }
});
