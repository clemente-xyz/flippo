import React, { Component } from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import styles from "./styles";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.touched}>
        <Text style={styles.font}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
