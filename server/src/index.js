const express = require("express");
const bodyParser = require("body-parser");

const graphqlHTTP = require("express-graphql");

const schema = require("./imports/schema");

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
