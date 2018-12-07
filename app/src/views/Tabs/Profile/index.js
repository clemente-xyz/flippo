import React, { Component } from "react";
import { View, Text } from "react-native";
import Styles from "./styles";
import { Avatar } from "../../../components";
import me from "../../../assets/me.jpeg";

export default class extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Clemente Serrano</Text>
          <View style={Styles.spacer} />
          <Avatar img={me} />
        </View>
      </View>
    );
  }
}
