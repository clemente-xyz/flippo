// https://www.youtube.com/watch?v=2mXUcBHoJcA  22:47

import express from "express";
import constants from "./imports/config/Constants";
import "./imports/config/db";
import middlewares from "./imports/config/Middleware";

const app = express();

middlewares(app);

app.listen(constants.PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`flippo server running on port ${constants.PORT}...`);
  }
});
