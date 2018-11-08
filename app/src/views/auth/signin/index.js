import React, { Component } from "react";
import { View, Image, Text, TextInput, Alert } from "react-native";
import styles from "./styles";

import Button from "../../../components/Button";
import logo from "../../../assets/logo.png";

class SignIn extends Component {
  handleButtonTouch = () => {
    Alert.alert("Button touched!");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Flippo</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign in" touched={this.handleButtonTouch} />
        </View>
      </View>
    );
  }
}

export default SignIn;
