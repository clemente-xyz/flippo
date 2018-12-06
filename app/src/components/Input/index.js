import React, { Component } from "react";
import { TextInput } from "react-native";

import Styles from "./styles";

export default class Input extends Component {
  render() {
    return (
      <TextInput
        onChangeText={this.props.changed}
        style={
          Styles(this.props.textColor, this.props.backgroundColor).container
        }
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.isPassword}
      />
    );
  }
}
