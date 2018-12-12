//https://dev.to/andrewsmith1996/how-to-build-an-image-recognition-app-in-react-native-m6g

import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "styled-components";
import { client, store } from "./src/store";
import { colors } from "./src/utils/constants";
import Views from "./src/views";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <ThemeProvider theme={colors}>
          <Views />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
