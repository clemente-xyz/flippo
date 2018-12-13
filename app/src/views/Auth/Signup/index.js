import React, { Component } from "react";
import { View, Image, ImageBackground, Text } from "react-native";
import styles from "./styles";
import { Button, Input } from "../../../components";
import logo from "../../../assets/logo.png";
import wallpaper from "../../../assets/wallpaper.jpg";
import Styles from "../../../components/Camera/styles";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    birth: ""
  };

  handleSignUpTouch = () => {
    alert("Sign up form");
  };

  handleTextChange = (text, type) => {
    this.setState({ [type]: text });
  };

  checkValidInputs = () => {
    const { username, password, firstname, lastname } = this.state;

    if (!username || !password || !firstname || !lastname) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.wallpaper}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Tell us about you!</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              changed={text => this.handleTextChange(text, "firstname")}
              placeholder="What is your first name?"
              textColor="black"
              backgroundColor="rgba(255, 255, 255, 0.7)"
              isPassword={false}
            />
            <Input
              changed={text => this.handleTextChange(text, "lastname")}
              placeholder="What is your first name?"
              textColor="black"
              backgroundColor="rgba(255, 255, 255, 0.7)"
              isPassword={false}
            />
            <Input
              changed={text => this.handleTextChange(text, "birth")}
              placeholder="When you were born?"
              textColor="black"
              backgroundColor="rgba(255, 255, 255, 0.7)"
              isPassword={false}
            />
            <Input
              changed={text => this.handleTextChange(text, "username")}
              placeholder="What will be your username?"
              textColor="black"
              backgroundColor="rgba(255, 255, 255, 0.7)"
              isPassword={false}
            />
            <Input
              changed={text => this.handleTextChange(text, "password")}
              placeholder="And your password?"
              textColor="black"
              backgroundColor="rgba(255, 255, 255, 0.7)"
              isPassword={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign up"
              textColor="white"
              backgroundColor="#70db70"
              touched={this.handleSignInTouch}
              disabled={this.checkValidInputs()}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SignUp;
