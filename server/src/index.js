import express from "express";
import bodyParser from "body-parser";
import constants from "./imports/config/Constants";
import "./imports/config/db";
import schema from "./imports/graphql";
import mocks from "./imports/mocks";

const app = express();

schema.applyMiddleware({ app });

mocks().then(() => {
  app.listen(constants.PORT, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`flippo server running on port ${constants.PORT}...`);
    }
  });
});
