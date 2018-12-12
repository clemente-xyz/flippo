import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import thunk from "redux-thunk";
import reducers from "../reducers";

const networkInterface = createNetworkInterface({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  networkInterface
});

const middlewares = [client.middleware(), thunk];

const store = createStore(
  reducers(client),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { client, store };
