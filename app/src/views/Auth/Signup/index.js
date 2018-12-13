import React, { Component } from "react";
import { View, ImageBackground, Text, AsyncStorage } from "react-native";
import { graphql } from "react-apollo";
import styles from "./styles";
import { Button, Input } from "../../../components";
import wallpaper from "../../../assets/wallpaper.jpg";

import signupMutation from "../../../apollo/Mutation/User/Signup";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    birth: ""
  };

  handleSignUpTouch = async () => {
    const { username, password, firstname, lastname, birth } = this.state;

    const { data } = await this.props.mutate({
      variables: {
        username,
        password,
        firstname,
        lastname,
        birth
      }
    });

    try {
      await AsyncStorage.setItem("@flippo", data.signup.token);
    } catch (error) {
      throw error;
    }
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
              placeholder="What is your last name?"
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
              touched={this.handleSignUpTouch}
              disabled={this.checkValidInputs()}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default graphql(signupMutation)(SignUp);
