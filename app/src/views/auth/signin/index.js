import React, { Component } from "react";
import { View, Image, Text, TextInput, Alert } from "react-native";
import styles from "./styles";

import { Button, Input } from "../../../components";
import logo from "../../../assets/logo.png";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = text => {
    this.setState({ email: text });
  };

  handlePasswordChange = text => {
    this.setState({ password: text });
  };

  handleButtonTouch = () => {
    const { email, password } = this.state;

    if (email != "clementeserranosutil@gmail.com" && password != "clemente") {
      Alert.alert(
        "Ooops! Seems that your email or password are wrong :( Try again!"
      );
    } else {
      Alert.alert("Welcome Clemente!");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Flippo</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            changed={this.handleEmailChange}
            placeholder="Email"
            textColor="white"
            backgroundColor="rgba(255, 255, 255, 0.3)"
          />
          <Input
            changed={this.handlePasswordChange}
            placeholder="Password"
            textColor="white"
            backgroundColor="rgba(255, 255, 255, 0.3)"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign in"
            textColor="white"
            backgroundColor="#70db70"
            touched={this.handleButtonTouch}
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
