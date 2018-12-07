import React, { Component } from "react";
import { Image } from "react-native";
import Styles from "./styles";

export default class extends Component {
  render() {
    const { img } = this.props;
    return <Image source={img} style={Styles.img} />;
  }
}
