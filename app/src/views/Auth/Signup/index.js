import React, { Component } from "react";
import { View, Image, ImageBackground, Text } from "react-native";
import styles from "./styles";
import { Button, Input } from "../../../components";
import logo from "../../../assets/logo.png";
import wallpaper from "../../../assets/wallpaper.jpg";
import Styles from "../../../components/Camera/styles";

class SignUp extends Component {
  state = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    birth: ""
  };

  handleSignUpTouch = () => {
    alert("Sign up form");
  };

  handleTextChange = (text, type) => {
    this.setState({ [type]: text });
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
              changed={text => this.handleTextChange(text, "firstName")}
              placeholder="What is your first name?"
              textColor="black"
              backgroundColor="rgba(255, 255, 255, 0.7)"
              isPassword={false}
            />
            <Input
              changed={text => this.handleTextChange(text, "lastName")}
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
              changed={text => this.handleTextChange(text, "userName")}
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
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SignUp;
