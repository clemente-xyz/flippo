import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import Styles from "./styles";

export default class extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <View style={Styles.container}>
        <ActivityIndicator color={color} size={size} />
      </View>
    );
  }
}
