import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "../../../components";

export default class extends Component {
  handleClick = e => {
    e.preventDefault();
    this.props.navigation.navigate("OnChallenge");
  };
  render() {
    return (
      <View>
        <Button
          title="Take challenge!"
          textColor="white"
          backgroundColor="#4286f4"
          touched={this.handleClick}
        />
      </View>
    );
  }
}
