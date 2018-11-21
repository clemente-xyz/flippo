import express from "express";
import bodyParser from "body-parser";
import graphqlHTTP from "express-graphql";
import schema from "./imports/schema";
import "./imports/config/db";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`flippo server running on port ${PORT}...`);
  }
});
