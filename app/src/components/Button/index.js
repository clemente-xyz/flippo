import React, { Component } from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./styles";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={
          Styles(this.props.textColor, this.props.backgroundColor).container
        }
        onPress={this.props.touched}
      >
        <Text
          style={Styles(this.props.textColor, this.props.backgroundColor).font}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
