import React, { Component } from "react";
import { Text } from "react-native";
import Camera from "../../components/Camera";

export default class extends Component {
  state = {
    timer: 5,
    draw: null
  };
  static navigationOptions = {
    headerTitle: "Challenge"
  };

  render() {
    return <Camera timer={this.state.timer} />;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer - 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.timer === 1) {
      clearInterval(this.interval);
    }
  }
}
