import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./styles";

export default class Button extends Component {
  render() {
    const { textColor, backgroundColor, touched, title } = this.props;
    return (
      <TouchableOpacity
        style={Styles(textColor, backgroundColor).container}
        onPress={touched}
      >
        <Text style={Styles(textColor, backgroundColor).font}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
