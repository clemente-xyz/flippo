import React, { Component } from "react";
import { TextInput } from "react-native";

import Styles from "./styles";

export default class Input extends Component {
  render() {
    const {
      changed,
      textColor,
      backgroundColor,
      placeholder,
      isPassword
    } = this.props;
    return (
      <TextInput
        onChangeText={changed}
        style={Styles(textColor, backgroundColor).container}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
    );
  }
}
