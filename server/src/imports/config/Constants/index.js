export default {
  PORT: process.env.PORT || 4000,
  DB_URL: "mongodb://localhost/flippo",
  GRAPHQL_PATH: "/graphql",
  JWT_SECRET: "the_flippo_token"
};
