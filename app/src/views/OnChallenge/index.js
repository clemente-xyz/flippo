import React, { Component } from "react";
import Camera from "../../components/Camera";

export default class extends Component {
  static navigationOptions = {
    headerTitle: "Challenge"
  };
  render() {
    return <Camera />;
  }
}
