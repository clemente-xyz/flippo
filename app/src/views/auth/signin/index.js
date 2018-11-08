import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import styles from "./styles";

import Button from "../../../components/Button";

class SignIn extends Component {
  handleButtonTouch = () => {
    Alert.alert("Button touched!");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Flippo</Text>
        <Button title="Sign in" touched={this.handleButtonTouch} />
      </View>
    );
  }
}

export default SignIn;
